import { NextRequest, NextResponse } from 'next/server';
import { jobs } from '@/data/jobs';

// ユーザーIDに基づいて求人を選択する関数
const getPersonalizedJobs = (userId: string, limit: number = 5): typeof jobs => {
  // ユーザーIDを数値に変換してシードとして使用
  let seed = 0;
  for (let i = 0; i < userId.length; i++) {
    seed += userId.charCodeAt(i);
  }
  
  // シードに基づいて求人を選択
  const shuffledJobs = [...jobs].sort(() => {
    seed = (seed * 9301 + 49297) % 233280;
    return (seed / 233280) - 0.5;
  });
  
  return shuffledJobs.slice(0, limit);
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '5');
    
    // CookieからユーザーIDを取得
    const cookies = request.headers.get('cookie');
    let userId = '';
    
    if (cookies) {
      const cookieMatch = cookies.match(/Sample-login-id=([^;]+)/);
      if (cookieMatch) {
        userId = cookieMatch[1];
      }
    }
    
    // ユーザーIDが取得できない場合は空のレスポンスを返す
    if (!userId) {
      return NextResponse.json({
        success: true,
        jobs: [],
        total: 0,
        message: 'ユーザーIDが取得できませんでした'
      });
    }
    
    // パーソナライズされた求人を取得
    const personalizedJobs = getPersonalizedJobs(userId, limit);
    
    return NextResponse.json({
      success: true,
      jobs: personalizedJobs,
      total: personalizedJobs.length,
      userId: userId,
      message: 'パーソナライズされた求人を取得しました'
    });
    
  } catch (error) {
    console.error('Error fetching personalized recommendations:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch personalized recommendations',
        jobs: [],
        total: 0
      },
      { status: 500 }
    );
  }
} 