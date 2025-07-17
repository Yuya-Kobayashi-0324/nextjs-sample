'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // ログイン状態の確認
  useEffect(() => {
    const checkLoginStatus = () => {
      const cookies = document.cookie.split(';');
      const loginCookie = cookies.find(cookie => cookie.trim().startsWith('Sample-login-id='));
      if (loginCookie) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  // ログアウト処理
  const handleLogout = () => {
    document.cookie = 'Sample-login-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    setIsMobileMenuOpen(false);
  };

  // モバイルメニューの開閉
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // リンククリック時にモバイルメニューを閉じる
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // 応募フォームページかどうかの判定
  const isApplyPage = pathname.includes('/apply');

  // 応募フォームページではヘッダーを表示しない
  if (isApplyPage) {
    return null;
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="text-2xl font-bold text-blue-600">はたらくヨロコビ</div>
            
            {/* デスクトップメニュー */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`font-medium transition-colors ${
                  pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                ホーム
              </Link>
              <Link 
                href="/jobs" 
                className={`font-medium transition-colors ${
                  pathname === '/jobs' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                求人一覧
              </Link>
              <Link 
                href="/articles" 
                className={`font-medium transition-colors ${
                  pathname === '/articles' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                記事一覧
              </Link>
              <Link 
                href="/favorites" 
                className={`font-medium transition-colors ${
                  pathname === '/favorites' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                お気に入り
              </Link>
              <Link 
                href="/about" 
                className={`font-medium transition-colors ${
                  pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                会社概要
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-colors ${
                  pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                お問い合わせ
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  ログアウト
                </button>
              ) : (
                <Link 
                  href="/login" 
                  className={`font-medium transition-colors ${
                    pathname === '/login' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  ログイン
                </Link>
              )}
            </nav>

            {/* ハンバーガーメニューボタン */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="メニューを開く"
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* モバイルメニューサイドバー */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* ヘッダー部分 */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">メニュー</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="メニューを閉じる"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* メニュー項目 */}
          <nav className="flex-1 px-6 py-4 space-y-2">
            <Link 
              href="/" 
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              ホーム
            </Link>
            <Link 
              href="/jobs" 
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === '/jobs' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              求人一覧
            </Link>
            <Link 
              href="/articles" 
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === '/articles' ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              記事一覧
            </Link>
            <Link 
              href="/favorites" 
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === '/favorites' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              お気に入り
            </Link>
            <Link 
              href="/about" 
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === '/about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              会社概要
            </Link>
            <Link 
              href="/contact" 
              onClick={handleLinkClick}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === '/contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              お問い合わせ
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                ログアウト
              </button>
            ) : (
              <Link 
                href="/login" 
                onClick={handleLinkClick}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === '/login' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                ログイン
              </Link>
            )}
          </nav>

          {/* フッター部分 */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
              <p>はたらくヨロコビ</p>
              <p className="mt-1">求人情報サイト</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 