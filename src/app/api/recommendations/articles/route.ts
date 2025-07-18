import { NextResponse } from 'next/server'
import { articles } from '@/data/articles'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '3')
    const category = searchParams.get('category')
    const excludeId = searchParams.get('excludeId')

    let filteredArticles = articles

    // カテゴリフィルター
    if (category) {
      filteredArticles = filteredArticles.filter(article => article.category === category)
    }

    // 除外IDフィルター
    if (excludeId) {
      filteredArticles = filteredArticles.filter(article => article.id !== excludeId)
    }

    // 公開日順でソート（新しい順）
    const sortedArticles = filteredArticles.sort((a, b) => {
      const dateA = new Date(a.publishedAt)
      const dateB = new Date(b.publishedAt)
      return dateB.getTime() - dateA.getTime()
    })

    // 指定された件数まで取得
    const recommendedArticles = sortedArticles.slice(0, limit)

    return NextResponse.json({
      success: true,
      articles: recommendedArticles,
      total: recommendedArticles.length
    })
  } catch (error) {
    console.error('Error fetching recommended articles:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch recommended articles' },
      { status: 500 }
    )
  }
} 