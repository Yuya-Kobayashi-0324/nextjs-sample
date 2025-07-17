import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { articles } from '@/data/articles';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = articles.find(a => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* パンくず */}
        <nav className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            ホーム
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/articles" className="text-gray-500 hover:text-gray-700 transition-colors">
            記事一覧
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">{article.title}</span>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-4">
              <span>📅 {article.publishedAt}</span>
              <span>⏱️ {article.readTime}分</span>
            </div>
            <Link 
              href="/articles"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </header>

        {/* 記事タグ */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 記事本文 */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* 関連記事 */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">関連記事</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {articles
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id}
                  href={`/articles/${relatedArticle.id}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedArticle.publishedAt}</span>
                    <span>{relatedArticle.readTime}分</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* 記事一覧に戻るボタン */}
        <div className="mt-12 flex justify-center">
          <Link 
            href="/articles"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl"
          >
            記事一覧に戻る
          </Link>
        </div>
      </main>
    </>
  );
} 