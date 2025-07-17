'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import FavoriteButton from '@/components/FavoriteButton';
import { categories, features } from '@/data/jobs';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  category: string;
  features: string[];
  image?: string;
}

interface JobsListClientProps {
  initialJobs: Job[];
  totalJobs: number;
  currentPage: number;
  searchQuery: string;
}

export default function JobsListClient({ 
  initialJobs, 
  totalJobs, 
  currentPage, 
  searchQuery 
}: JobsListClientProps) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const jobsPerPage = 10;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  // URLパラメータからフィルター情報を取得（現在は使用していない）

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (selectedCategory) params.append('category', selectedCategory);
      if (selectedFeatures.length > 0) selectedFeatures.forEach(f => params.append('feature', f));
      params.append('page', '1');
      
      const response = await fetch(`/api/jobs?${params.toString()}`);
      const data = await response.json();
      
      setJobs(data.jobs);
      // URLを更新
      const newUrl = `/jobs?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    } catch (error) {
      console.error('検索エラー:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append('search', searchTerm);
      if (selectedCategory) params.append('category', selectedCategory);
      if (selectedFeatures.length > 0) selectedFeatures.forEach(f => params.append('feature', f));
      params.append('page', page.toString());
      
      const response = await fetch(`/api/jobs?${params.toString()}`);
      const data = await response.json();
      
      setJobs(data.jobs);
      // URLを更新
      const newUrl = `/jobs?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    } catch (error) {
      console.error('ページ変更エラー:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedFeatures([]);
  };

  return (
    <>
      <Header />

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* パンくず */}
        <nav className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            ホーム
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">求人一覧</span>
          {(selectedCategory || selectedFeatures.length > 0) && (
            <>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-blue-600">
                {selectedCategory && `業界: ${selectedCategory}`}
                {selectedFeatures.length > 0 && `特徴: ${selectedFeatures.join(', ')}`}
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
            {totalJobs}件の求人情報から、あなたにぴったりのお仕事を見つけましょう
          </p>
          {(selectedCategory || selectedFeatures.length > 0 || searchTerm) && (
            <div className="mt-4">
              <button 
                onClick={clearFilters}
                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                ✕ フィルターをクリア
              </button>
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
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="職種、会社名、勤務地で検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="absolute inset-y-0 right-0 px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? '検索中...' : '検索'}
              </button>
            </form>
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
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 特徴フィルター */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">特徴</h3>
            <div className="flex flex-wrap gap-2">
              {features.map(feat => (
                <button
                  key={feat}
                  onClick={() => handleFeatureToggle(feat)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedFeatures.includes(feat)
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {feat}
                </button>
              ))}
            </div>
          </div>

          {/* 選択されたフィルター表示 */}
          {(selectedCategory || selectedFeatures.length > 0) && (
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">選択中のフィルター:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    業界: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {selectedFeatures.map(feat => (
                  <span key={feat} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                    {feat}
                    <button
                      onClick={() => handleFeatureToggle(feat)}
                      className="ml-2 text-orange-600 hover:text-orange-800"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 求人一覧 */}
        <section>
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">読み込み中...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">該当する求人が見つかりません</h3>
              <p className="text-gray-600 mb-6">条件を変更して再度お試しください</p>
              <button 
                onClick={clearFilters}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                全ての求人を見る
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map(job => (
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
                      <FavoriteButton job={job} />
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
              {(currentPage - 1) * jobsPerPage + 1} - {Math.min(currentPage * jobsPerPage, totalJobs)} / {totalJobs}件
            </p>
          </section>
        )}
      </main>
    </>
  );
} 