import Link from 'next/link';
import Header from '@/components/Header';
import { articles, categories, tags } from '@/data/articles';

// メタデータを静的に生成
export const metadata = {
  title: '記事一覧 - はたらくヨロコビ',
  description: '就職・転職に役立つ記事を豊富にご紹介。製造業、自動車業界、物流業界など、様々な業界の情報をお届けします。',
}

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* パンくず */}
        <nav className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            ホーム
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">記事一覧</span>
        </nav>

        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            記事一覧
          </h1>
          <p className="text-xl text-gray-600">
            就職・転職に役立つ情報をお届けします
          </p>
          <div className="mt-4 p-3 bg-green-50 rounded-lg inline-block">
            <span className="text-sm text-green-700 font-medium">
              🚀 このページはSSG（Static Site Generation）で生成されています
            </span>
          </div>
        </div>

        {/* 記事一覧 */}
        <section>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(article => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <Link href={`/articles/${article.id}`}>
                    <h3 className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors line-clamp-2 mb-3">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>📅 {article.publishedAt}</span>
                    <span>⏱️ {article.readTime}分</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/articles/${article.id}`}
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    記事を読む
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* カテゴリ別記事数 */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            カテゴリ別記事数
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(category => {
              const count = articles.filter(article => article.category === category).length;
              return (
                <div key={category} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
                  <h3 className="text-lg font-bold text-green-600 mb-2">{category}</h3>
                  <p className="text-3xl font-bold text-gray-800">{count}件</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* テスト用ナビゲーション */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            🧪 Optimize Next テスト用ナビゲーション
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              トップページ
            </Link>
            <Link 
              href="/hydration-test"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              ハイドレーションテスト
            </Link>
            <Link 
              href="/ssg-test"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              SSGテスト
            </Link>
            <Link 
              href="/jobs"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              求人一覧（SSR）
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 