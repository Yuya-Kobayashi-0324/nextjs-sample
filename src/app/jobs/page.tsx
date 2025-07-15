'use client'

import Link from 'next/link'
import { useState } from 'react'
import { jobs, categories, features } from '@/data/jobs'

type Props = {
  searchParams: { category?: string; feature?: string }
}

export default function JobsList({ searchParams }: Props) {
  const { category, feature } = searchParams
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 10
  
  // フィルタリング
  let filteredJobs = jobs
  if (category) {
    filteredJobs = filteredJobs.filter(job => job.category === category)
  }
  if (feature) {
    filteredJobs = filteredJobs.filter(job => job.features.includes(feature))
  }
  
  // 検索フィルタリング（見た目のみ）
  if (searchQuery) {
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // ページネーション
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const startIndex = (currentPage - 1) * jobsPerPage
  const endIndex = startIndex + jobsPerPage
  const currentJobs = filteredJobs.slice(startIndex, endIndex)

  return (
    <>
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">はたらくヨロコビ</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                ホーム
              </Link>
              <Link href="/jobs" className="text-blue-600 font-medium">
                求人一覧
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                会社概要
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* パンくず */}
        <nav className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            ホーム
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">求人一覧</span>
          {(category || feature) && (
            <>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-blue-600">
                {category && `業界: ${category}`}
                {feature && `特徴: ${feature}`}
              </span>
            </>
          )}
        </nav>

        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            求人一覧
          </h1>
          <p className="text-xl text-gray-600">
            {filteredJobs.length}件の求人情報から、あなたにぴったりのお仕事を見つけましょう
          </p>
          {(category || feature) && (
            <div className="mt-4">
              <Link 
                href="/jobs" 
                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                ✕ フィルターをクリア
              </Link>
            </div>
          )}
        </div>

        {/* 検索・フィルター */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="mr-3">🔍</span>
            検索・絞り込み
          </h2>
          
          {/* 検索バー */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="職種、会社名、勤務地で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* カテゴリフィルター */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
              <span className="mr-2">🏭</span>
              業界
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <Link
                  key={cat}
                  href={`/jobs?category=${encodeURIComponent(cat)}`}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    category === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* 特徴フィルター */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
              <span className="mr-2">✨</span>
              特徴
            </h3>
            <div className="flex flex-wrap gap-3">
              {features.slice(0, 8).map(feat => (
                <Link
                  key={feat}
                  href={`/jobs?feature=${encodeURIComponent(feat)}`}
                  className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                    feature === feat
                      ? 'bg-orange-600 text-white border-orange-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-orange-300 hover:shadow-md'
                  }`}
                >
                  {feat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 求人一覧 */}
        <section>
          {currentJobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">該当する求人が見つかりません</h3>
              <p className="text-gray-600 mb-6">条件を変更して再度お試しください</p>
              <Link 
                href="/jobs" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                全ての求人を見る
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {currentJobs.map(job => (
                <article key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                            {job.category}
                          </span>
                          <span className="text-sm text-gray-500">#{job.id}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🏢</span>
                          {job.company}
                        </p>
                        <p className="text-gray-600 mb-2 flex items-center">
                          <span className="mr-2">📍</span>
                          {job.location}
                        </p>
                        <p className="text-orange-600 font-bold text-lg mb-3 flex items-center">
                          <span className="mr-2">💰</span>
                          {job.salary}
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                    
                    {/* 特徴タグ */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {job.features.map((feat, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-orange-50 to-yellow-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium border border-orange-200"
                          >
                            ✨ {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* アクションボタン */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        href={`/jobs/${job.id}`} 
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                      >
                        📖 詳細を見る
                      </Link>
                      <button className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-200 hover:shadow-md">
                        ❤️ お気に入りに追加
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ページネーション */}
        {totalPages > 1 && (
          <section className="text-center mt-12">
            <div className="flex justify-center gap-2">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 前のページ
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次のページ →
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              {startIndex + 1} - {Math.min(endIndex, filteredJobs.length)} / {filteredJobs.length}件
            </p>
          </section>
        )}
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-bold mb-4">
            はたらくヨロコビ - 派遣・求人情報サイト
          </p>
          <p className="text-gray-300 mb-8">
            未経験OK、寮付き、日払い対応の派遣求人情報を豊富にご紹介
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/jobs" 
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              求人一覧
            </Link>
            <Link 
              href="/about" 
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              会社概要
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
} 