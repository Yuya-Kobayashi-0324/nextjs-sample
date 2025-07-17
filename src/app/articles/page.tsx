'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import { articles, categories, tags } from '@/data/articles';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // フィルタリング
  let filteredArticles = articles;

  if (selectedCategory) {
    filteredArticles = filteredArticles.filter(article => article.category === selectedCategory);
  }

  if (selectedTags.length > 0) {
    filteredArticles = filteredArticles.filter(article => 
      selectedTags.every(tag => article.tags.includes(tag))
    );
  }

  if (searchTerm) {
    filteredArticles = filteredArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedTags([]);
    setSearchTerm('');
  };

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
          <span className="text-blue-600">事一覧</span>
        </nav>

        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            記事一覧
          </h1>
          <p className="text-xl text-gray-600">
            就職・転職に役立つ情報をお届けします
          </p>
        </div>

        {/* 検索・フィルター */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border border-green-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="mr-3">📚</span>
            記事を探す
          </h2>
          
          {/* 検索バー */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="記事タイトルや内容で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* カテゴリフィルター */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">カテゴリ</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* タグフィルター */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">タグ</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* 選択されたフィルター表示 */}
          {(selectedCategory || selectedTags.length > 0 || searchTerm) && (
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">選択中のフィルター:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    カテゴリ: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {selectedTags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    {tag}
                    <button
                      onClick={() => handleTagToggle(tag)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                    検索: {searchTerm}
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 text-gray-600 hover:text-gray-800"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="mt-3 text-sm text-gray-600 hover:text-gray-800 underline"
              >
                全てのフィルターをクリア
              </button>
            </div>
          )}
        </section>

        {/* 記事一覧 */}
        <section>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">該当する記事が見つかりません</h3>
              <p className="text-gray-600 mb-6">条件を変更して再度お試しください</p>
              <button 
                onClick={clearFilters}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                全ての記事を見る
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
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
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        📅 {article.publishedAt}
                      </span>
                      <span className="text-sm text-gray-500">
                        ⏱️ {article.readTime}分
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      href={`/articles/${article.id}`}
                      className="inline-block w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 to-green-800 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
                    >
                      記事を読む
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
} 