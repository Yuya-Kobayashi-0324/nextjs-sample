'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

// 入力値ベースの10桁英数字ハッシュ生成
const generateHash = (input: string): string => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 32bit整数に変換
  }
  
  // 10桁の英数字に変換
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const hashStr = Math.abs(hash).toString();
  
  for (let i = 0; i < 10; i++) {
    const index = parseInt(hashStr[i % hashStr.length] || '0') + i;
    result += chars[index % chars.length];
  }
  
  return result;
};

export default function LoginPage() {
  const [loginId, setLoginId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginId.trim()) {
      alert('ログインIDを入力してください。');
      return;
    }

    setIsLoading(true);
    
    try {
      // 入力値ベースのハッシュ生成
      const hash = generateHash(loginId);
      
      // Cookieに保存（400日有効）
      const expires = new Date();
      expires.setDate(expires.getDate() + 400);
      document.cookie = `Sample-login-id=${hash}; expires=${expires.toUTCString()}; path=/;`;
      
      // ホームページにリダイレクト
      router.push('/');
    } catch (error) {
      console.error('ログインに失敗しました:', error);
      alert('ログインに失敗しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                ログイン
              </h1>
              <p className="text-gray-600">
                ログインIDを入力してください
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="loginId" className="block text-sm font-medium text-gray-700 mb-2">
                  ログインID
                </label>
                <input
                  type="text"
                  id="loginId"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="ログインIDを入力"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'ログイン中...' : 'ログイン'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                同一のログインIDを入力すると、同じハッシュ値が生成されます。
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 