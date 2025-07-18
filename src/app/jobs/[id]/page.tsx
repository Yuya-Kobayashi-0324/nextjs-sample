'use client'

import { jobs } from '@/data/jobs'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import DynamicJobCarousel from '@/components/DynamicJobCarousel'
import DynamicArticleCarousel from '@/components/DynamicArticleCarousel'

type Props = { 
  params: Promise<{ id: string }> 
}

export default function JobDetail({ params }: Props) {
  const [jobId, setJobId] = useState<string>('')
  const [showPhoneModal, setShowPhoneModal] = useState(false)
  
  useEffect(() => {
    params.then(resolvedParams => {
      setJobId(resolvedParams.id)
    })
  }, [params])

  const job = jobs.find(j => j.id === jobId)
  
  if (!jobId || !job) return <div>求人が見つかりません</div>

  // 関連求人を取得
  const relatedJobs = jobs
    .filter(j => j.category === job.category && j.id !== job.id)
    .slice(0, 3)

  return (
    <>
      {/* 電話応募モーダル */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                電話で応募
              </h3>
              <p className="text-gray-600 mb-6">
                下記の電話番号にお電話ください。<br />
                担当者が丁寧にご案内いたします。
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-3xl font-bold text-blue-600">0120-XXX-XXX</p>
                <p className="text-sm text-gray-600 mt-2">受付時間: 平日 9:00〜18:00</p>
              </div>
              <button
                onClick={() => setShowPhoneModal(false)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}

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
          <Link href="/jobs" className="text-gray-500 hover:text-gray-700 transition-colors">
            求人一覧
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">{job.title}</span>
        </nav>

        {/* 求人詳細 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メイン情報 */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* ヘッダー部分 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {job.category}
                  </span>
                  <span className="text-sm text-gray-500">#{job.id}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {job.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">🏢</span>
                  <span className="text-lg font-medium">{job.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-2">📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">💰</span>
                  <span className="text-2xl font-bold text-orange-600">{job.salary}</span>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-8">
                {/* 仕事内容 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3">📋</span>
                    仕事内容
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {job.description}
                    </p>
                  </div>
                </section>

                {/* 求人の特徴 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3">✨</span>
                    この求人の特徴
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {job.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-50 to-yellow-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium border border-orange-200 shadow-sm"
                      >
                        ✨ {feature}
                      </span>
                    ))}
                  </div>
                </section>

                {/* 勤務条件 */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3">⚙️</span>
                    勤務条件
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">勤務時間:</span>
                        <span className="text-gray-600">8:00〜17:00（休憩60分）</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">勤務日:</span>
                        <span className="text-gray-600">月〜金（土日祝休み）</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">雇用形態:</span>
                        <span className="text-gray-600">派遣社員</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">交通費:</span>
                        <span className="text-gray-600">全額支給</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">社会保険:</span>
                        <span className="text-gray-600">完備</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">寮・社宅:</span>
                        <span className="text-gray-600">利用可能</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 応募方法 */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-3">📝</span>
                    応募方法
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <p className="text-gray-700 mb-4">
                      この求人にご興味をお持ちいただけましたら、下記の方法でお気軽にお問い合わせください。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h3 className="font-semibold text-blue-700 mb-2">📞 電話でのお問い合わせ</h3>
                        <p className="text-2xl font-bold text-blue-600">0120-XXX-XXX</p>
                        <p className="text-sm text-gray-600">受付時間: 平日 9:00〜18:00</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h3 className="font-semibold text-blue-700 mb-2">📧 メールでのお問い合わせ</h3>
                        <p className="text-gray-600">お問い合わせフォームから</p>
                        <p className="text-sm text-gray-600">24時間受付中</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1">
            {/* 応募ボックス */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                🚀 この求人に応募する
              </h3>
              
              <div className="space-y-4 mb-6">
                <button 
                  onClick={() => setShowPhoneModal(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  📞 電話で応募
                </button>
                <Link 
                  href={`/jobs/${job.id}/apply`}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  🌐 WEBで応募
                </Link>
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-200">
                  ❤️ お気に入りに追加
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-800 mb-3">📞 お問い合わせ</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>フリーダイヤル: 0120-XXX-XXX</p>
                  <p>受付時間: 平日 9:00〜18:00</p>
                  <p>土日祝日は休業</p>
                </div>
              </div>
            </div>

            {/* 関連求人 */}
            {relatedJobs.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">🔗</span>
                  関連求人
                </h3>
                <div className="space-y-4">
                  {relatedJobs.map(relatedJob => (
                    <div key={relatedJob.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <Link 
                        href={`/jobs/${relatedJob.id}`}
                        className="block hover:bg-gray-50 rounded-lg p-3 transition-colors"
                      >
                        <div className="font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors">
                          {relatedJob.title}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          {relatedJob.company}・{relatedJob.location}
                        </div>
                        <div className="text-sm font-medium text-orange-600">
                          {relatedJob.salary}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 動的コンテンツ - 関連求人 */}
        <DynamicJobCarousel 
          title="関連求人"
          apiUrl={`/api/related/jobs?jobId=${jobId}&limit=3`}
          className="mt-16"
        />

        {/* 動的コンテンツ - おすすめ記事 */}
        <DynamicArticleCarousel 
          title="おすすめ記事"
          apiUrl={`/api/recommendations/articles?limit=3&category=${job.category}`}
          className="mt-16"
        />

        {/* 戻るボタン */}
        <div className="text-center mt-12">
          <Link 
            href="/jobs" 
            className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-200"
          >
            ← 求人一覧に戻る
          </Link>
        </div>
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