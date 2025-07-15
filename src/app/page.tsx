import Link from 'next/link'
import { jobs, categories, features } from '@/data/jobs'

export default function Home() {
  const featuredJobs = jobs.slice(0, 3)

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
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
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

      {/* ヒーローセクション */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: "url('/images/main-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* グラデーションオーバーレイ - テキストの可読性向上 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
            あなたにぴったりのお仕事が見つかります
          </h1>
          <p className="text-xl mb-8 text-white/95 drop-shadow-lg">
            未経験OK、寮付き、日払い対応の派遣求人情報
          </p>
          <Link 
            href="/jobs" 
            className="inline-block bg-white/95 backdrop-blur-sm text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            求人一覧を見る
          </Link>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* オススメ求人特集 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            オススメ求人特集
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{job.title}</h3>
                  <p className="text-gray-700 font-medium mb-2">{job.company}</p>
                  <p className="text-gray-600 mb-2">📍 {job.location}</p>
                  <p className="text-orange-600 font-bold mb-3">💰 {job.salary}</p>
                  <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/jobs/${job.id}`} 
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* カテゴリ別求人 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            業界別求人
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map(category => (
              <Link
                key={category}
                href={`/jobs?category=${encodeURIComponent(category)}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-100 hover:border-blue-200"
              >
                <h3 className="text-lg font-bold text-blue-600 mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">
                  {jobs.filter(job => job.category === category).length}件の求人
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* 特徴 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            こんな方におすすめ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.slice(0, 6).map(feature => (
              <Link
                key={feature}
                href={`/jobs?feature=${encodeURIComponent(feature)}`}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-100 hover:border-orange-200"
              >
                <span className="text-orange-600 font-bold text-sm">{feature}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            まずは求人一覧をチェック！
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            豊富な求人情報から、あなたにぴったりのお仕事を見つけましょう
          </p>
          <Link 
            href="/jobs" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            求人一覧を見る
          </Link>
        </section>
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
