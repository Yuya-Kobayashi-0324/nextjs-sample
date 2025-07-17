'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HydrationTestPage() {
  const [isClient, setIsClient] = useState(false)
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    setIsClient(true)
    setCurrentTime(new Date().toLocaleString('ja-JP'))
    
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString('ja-JP'))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ハイドレーションテストページ
          </h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                ハイドレーション状態
              </h2>
              <p className="text-lg">
                クライアントサイド: <span className="font-bold text-green-600">
                  {isClient ? '✅ アクティブ' : '⏳ ローディング中...'}
                </span>
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                リアルタイムカウンター
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-green-600">{count}</span>
                <button
                  onClick={() => setCount(prev => prev + 1)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  カウントアップ
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  リセット
                </button>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">
                現在時刻（リアルタイム更新）
              </h2>
              <p className="text-2xl font-mono text-purple-600">
                {currentTime}
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-orange-800 mb-4">
                ランダムな色の背景
              </h2>
              <div 
                className="h-32 rounded-lg transition-colors duration-500"
                style={{
                  backgroundColor: isClient 
                    ? `hsl(${Math.random() * 360}, 70%, 80%)`
                    : '#f3f4f6'
                }}
              />
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              テスト用ナビゲーション
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                トップページ
              </Link>
              <Link 
                href="/ssg-test"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                SSGテストページ
              </Link>
              <Link 
                href="/jobs"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                求人一覧
              </Link>
              <Link 
                href="/articles"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                記事一覧
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">このページの特徴:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• クライアントサイドでの動的コンテンツ更新</li>
              <li>• useState/useEffectによるハイドレーション</li>
              <li>• リアルタイムでのDOM更新</li>
              <li>• インタラクティブな要素（ボタン、カウンター）</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 