'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '@/components/Header'

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理（実際の送信は行わない）
    setIsSubmitted(true)
    // フォームをクリア
    setFormData({ email: '', title: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
          <span className="text-blue-600">お問い合わせ</span>
        </nav>

        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600">
            求人に関するご質問やご相談がございましたら、お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              /* 送信完了メッセージ */
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    お問い合わせありがとうございます
                  </h2>
                  <p className="text-gray-600 mb-6">
                    ご入力いただいた内容を確認の上、担当者より回答させていただきます。<br />
                    通常2-3営業日以内にご連絡いたします。
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    新しいお問い合わせを作成
                  </button>
                </div>
              </div>
            ) : (
              /* お問い合わせフォーム */
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                    <span className="mr-3">📝</span>
                    お問い合わせフォーム
                  </h2>
                  <p className="text-gray-600">
                    下記のフォームに必要事項をご記入の上、送信してください。
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                  <div className="space-y-6">
                    {/* メールアドレス */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="mr-2">📧</span>
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* お問い合わせタイトル */}
                    <div>
                      <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="mr-2">📋</span>
                        お問い合わせタイトル <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="求人についてのご質問"
                      />
                    </div>

                    {/* お問い合わせ内容 */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="mr-2">💬</span>
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="お問い合わせの詳細をご記入ください..."
                      />
                    </div>

                    {/* 送信ボタン */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                      >
                        📤 お問い合わせを送信
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1">
            {/* お問い合わせ情報 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2">📞</span>
                お問い合わせ方法
              </h3>
              
              <div className="space-y-6">
                {/* 電話 */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <span className="mr-2">📞</span>
                    電話でのお問い合わせ
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">0120-XXX-XXX</p>
                  <p className="text-sm text-gray-600">受付時間: 平日 9:00〜18:00</p>
                  <p className="text-sm text-gray-600">土日祝日は休業</p>
                </div>

                {/* メール */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                    <span className="mr-2">📧</span>
                    メールでのお問い合わせ
                  </h4>
                  <p className="text-gray-600 mb-2">24時間受付中</p>
                  <p className="text-sm text-gray-600">通常2-3営業日以内に回答</p>
                </div>

                {/* 営業時間 */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <span className="mr-2">🕒</span>
                    営業時間
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>月〜金: 9:00〜18:00</p>
                    <p>土日祝日: 休業</p>
                    <p>年末年始: 12/29〜1/3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">❓</span>
                よくある質問
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-gray-800 mb-1">Q. 未経験でも応募できますか？</h4>
                  <p className="text-sm text-gray-600">A. はい、多くの求人で未経験OKとなっています。</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h4 className="font-semibold text-gray-800 mb-1">Q. 寮は利用できますか？</h4>
                  <p className="text-sm text-gray-600">A. 寮付きの求人も多数ございます。</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Q. 日払い制度はありますか？</h4>
                  <p className="text-sm text-gray-600">A. 一部の求人で日払い制度を利用できます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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