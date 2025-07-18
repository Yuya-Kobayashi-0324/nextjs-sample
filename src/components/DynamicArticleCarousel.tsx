'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: number
  tags: string[]
}

interface DynamicArticleCarouselProps {
  title: string
  apiUrl: string
  className?: string
}

export default function DynamicArticleCarousel({ title, apiUrl, className = '' }: DynamicArticleCarouselProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        if (data.success) {
          setArticles(data.articles)
        } else {
          setError('データの取得に失敗しました')
        }
      } catch (err) {
        console.error('Error fetching articles:', err)
        setError('データの取得に失敗しました')
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [apiUrl])

  if (isLoading) {
    return (
      <section className={`bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={`bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="text-center py-8">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    )
  }

  if (articles.length === 0) {
    return null
  }

  return (
    <section className={`bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">📚</span>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
          >
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors line-clamp-2 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>📅 {article.publishedAt}</span>
                <span>⏱️ {article.readTime}分</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 2).map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
} 