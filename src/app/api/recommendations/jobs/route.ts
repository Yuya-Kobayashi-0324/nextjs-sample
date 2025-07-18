import { NextResponse } from 'next/server'
import { jobs } from '@/data/jobs'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '6')
    const category = searchParams.get('category')
    const excludeId = searchParams.get('excludeId')

    let filteredJobs = jobs

    // カテゴリフィルター
    if (category) {
      filteredJobs = filteredJobs.filter(job => job.category === category)
    }

    // 除外IDフィルター
    if (excludeId) {
      filteredJobs = filteredJobs.filter(job => job.id !== excludeId)
    }

    // 人気度に基づいてソート（特徴の数が多いほど人気と仮定）
    const sortedJobs = filteredJobs.sort((a, b) => b.features.length - a.features.length)

    // 指定された件数まで取得
    const recommendedJobs = sortedJobs.slice(0, limit)

    return NextResponse.json({
      success: true,
      jobs: recommendedJobs,
      total: recommendedJobs.length
    })
  } catch (error) {
    console.error('Error fetching recommended jobs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch recommended jobs' },
      { status: 500 }
    )
  }
} 