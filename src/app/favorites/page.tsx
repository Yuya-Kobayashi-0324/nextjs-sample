'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import FavoriteButton from '@/components/FavoriteButton';
import { getFavorites, FavoriteJob } from '@/utils/favorites';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteJob[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const jobsPerPage = 10;

  const loadFavorites = () => {
    const favs = getFavorites();
    setFavorites(favs);
    setIsLoading(false);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  // お気に入りが削除された際の処理
  const handleFavoriteRemoved = () => {
    loadFavorites();
    // 現在のページが空になった場合、前のページに移動
    const totalPages = Math.ceil((favorites.length - 1) / jobsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  };

  // ページネーション
  const totalPages = Math.ceil(favorites.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentFavorites = favorites.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <span className="text-blue-600">お気に入り</span>
        </nav>

        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            お気に入り一覧
          </h1>
          <p className="text-xl text-gray-600">
            {favorites.length}件のお気に入り求人
          </p>
        </div>

        {/* お気に入り一覧 */}
        <section>
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">読み込み中...</p>
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">♡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">お気に入りがありません</h3>
              <p className="text-gray-600 mb-6">求人一覧からお気に入りを追加してください</p>
              <Link 
                href="/jobs" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                求人一覧を見る
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {currentFavorites.map(job => (
                <article key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                            {job.category}
                          </span>
                          <span className="text-sm text-gray-500">#{job.id}</span>
                          <span className="ml-auto text-sm text-gray-500">
                            {new Date(job.addedAt).toLocaleDateString('ja-JP')}
                          </span>
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
                      <FavoriteButton 
                        job={job} 
                        showDeleteConfirm={true}
                        onFavoriteRemoved={handleFavoriteRemoved}
                      />
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
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 前のページ
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
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
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次のページ →
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              {startIndex + 1} - {Math.min(endIndex, favorites.length)} / {favorites.length}件
            </p>
          </section>
        )}
      </main>
    </>
  );
} 