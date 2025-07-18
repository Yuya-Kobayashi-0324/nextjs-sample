import Link from 'next/link'
import { jobs, categories, features } from '@/data/jobs'
import { articles } from '@/data/articles'
import Header from '@/components/Header'
import FavoriteButton from '@/components/FavoriteButton'
import DynamicJobCarousel from '@/components/DynamicJobCarousel'
import DynamicArticleCarousel from '@/components/DynamicArticleCarousel'

export default function Home() {
  const featuredJobs = jobs.slice(0, 3)
  const latestArticles = articles.slice(0, 3)

  return (
    <>
      <Header />

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jobs" 
              className="inline-block bg-white/95 backdrop-blur-sm text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              求人一覧を見る
            </Link>
            <Link 
              href="/articles" 
              className="inline-block bg-green-600 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              記事を読む
            </Link>
          </div>
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
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      href={`/jobs/${job.id}`} 
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      詳細を見る
                    </Link>
                    <FavoriteButton job={job} className="text-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 最新記事 */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              最新記事
            </h2>
            <Link 
              href="/articles" 
              className="text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              記事一覧を見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map(article => (
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
                  <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>📅 {article.publishedAt}</span>
                    <span>⏱️ {article.readTime}分</span>
                  </div>
                  <div className="mt-4">
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
                </div>
              </Link>
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

        {/* 動的コンテンツ - おすすめ求人 */}
        <DynamicJobCarousel 
          title="おすすめ求人"
          apiUrl="/api/recommendations/jobs?limit=6"
          className="mb-16"
        />

        {/* 動的コンテンツ - おすすめ記事 */}
        <DynamicArticleCarousel 
          title="おすすめ記事"
          apiUrl="/api/recommendations/articles?limit=3"
          className="mb-16"
        />

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 text-center border border-blue-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            まずは求人一覧をチェック！
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            豊富な求人情報から、あなたにぴったりのお仕事を見つけましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jobs" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              求人一覧を見る
            </Link>
            <Link 
              href="/articles" 
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              記事を読む
            </Link>
          </div>
          
          {/* Optimize Next テスト用リンク */}
          <div className="mt-8 pt-8 border-t border-blue-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              🧪 Optimize Next テスト用ページ
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/hydration-test" 
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                ハイドレーションテスト
              </Link>
              <Link 
                href="/ssg-test" 
                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                SSGテスト
              </Link>
            </div>
          </div>
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
              href="/articles" 
              className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              記事一覧
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
