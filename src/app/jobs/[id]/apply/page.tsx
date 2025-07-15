'use client'

import { jobs } from '@/data/jobs'
import Link from 'next/link'
import { useState, useEffect } from 'react'

type Props = { 
  params: Promise<{ id: string }> 
}

type FormData = {
  name: string
  birthDate: string
  phone: string
  email: string
  address: string
  dormitory: string
  startDate: string
  comment: string
}

type Step = 'input' | 'confirm' | 'complete'

export default function JobApply({ params }: Props) {
  const [jobId, setJobId] = useState<string>('')
  const [step, setStep] = useState<Step>('input')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    phone: '',
    email: '',
    address: '',
    dormitory: '',
    startDate: '',
    comment: ''
  })

  useEffect(() => {
    params.then(resolvedParams => {
      setJobId(resolvedParams.id)
    })
  }, [params])

  const job = jobs.find(j => j.id === jobId)
  
  if (!jobId || !job) return <div>求人が見つかりません</div>

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirm')
  }

  const handleConfirm = () => {
    // 実際の送信処理はここで行う
    setStep('complete')
  }

  const handleBack = () => {
    setStep('input')
  }

  const steps = [
    { id: 'input', name: '入力', icon: '📝' },
    { id: 'confirm', name: '確認', icon: '👀' },
    { id: 'complete', name: '完了', icon: '✅' }
  ]

  return (
    <>
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">はたらくヨロコビ</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                ホーム
              </Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                求人一覧
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                会社概要
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* パンくず */}
        <nav className="mb-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            ホーム
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/jobs" className="text-gray-500 hover:text-gray-700 transition-colors">
            求人一覧
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/jobs/${job.id}`} className="text-gray-500 hover:text-gray-700 transition-colors">
            {job.title}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600">応募フォーム</span>
        </nav>

        {/* ページタイトル */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {job.title} - 応募フォーム
          </h1>
          <p className="text-lg text-gray-600">
            {job.company}・{job.location}
          </p>
        </div>

        {/* ステップインジケーター */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 font-semibold ${
                  step === stepItem.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : step === 'confirm' && stepItem.id === 'input'
                    ? 'bg-green-600 text-white border-green-600'
                    : step === 'complete' && ['input', 'confirm'].includes(stepItem.id)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-gray-100 text-gray-400 border-gray-300'
                }`}>
                  {stepItem.icon}
                </div>
                <span className={`ml-2 font-medium ${
                  step === stepItem.id
                    ? 'text-blue-600'
                    : step === 'confirm' && stepItem.id === 'input'
                    ? 'text-green-600'
                    : step === 'complete' && ['input', 'confirm'].includes(stepItem.id)
                    ? 'text-green-600'
                    : 'text-gray-400'
                }`}>
                  {stepItem.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step === 'confirm' && index === 0
                      ? 'bg-green-600'
                      : step === 'complete' && index < 2
                      ? 'bg-green-600'
                      : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* フォームコンテンツ */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {step === 'input' && (
            <>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-3">📝</span>
                  応募情報入力
                </h2>
                <p className="text-gray-600">
                  下記の項目にご記入の上、確認画面に進んでください。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  {/* 氏名 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">👤</span>
                      氏名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>

                  {/* 生年月日 */}
                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">🎂</span>
                      生年月日 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">📞</span>
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="090-1234-5678"
                    />
                  </div>

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

                  {/* 住所 */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">🏠</span>
                      住所 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="東京都渋谷区..."
                    />
                  </div>

                  {/* 入寮希望 */}
                  <div>
                    <label htmlFor="dormitory" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">🏢</span>
                      入寮希望 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="dormitory"
                      name="dormitory"
                      value={formData.dormitory}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="希望する">希望する</option>
                      <option value="希望しない">希望しない</option>
                      <option value="検討中">検討中</option>
                    </select>
                  </div>

                  {/* 希望就業時期 */}
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">📅</span>
                      希望就業時期 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* フリーコメント */}
                  <div>
                    <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">💬</span>
                      フリーコメント
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="その他ご質問やご要望がございましたらご記入ください..."
                    />
                  </div>

                  {/* 送信ボタン */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                    >
                      👀 内容を確認する
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}

          {step === 'confirm' && (
            <>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-3">👀</span>
                  応募内容確認
                </h2>
                <p className="text-gray-600">
                  入力内容をご確認の上、送信ボタンを押してください。
                </p>
              </div>

              <div className="p-8">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">応募求人</h3>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-blue-600 mb-2">{job.title}</h4>
                    <p className="text-gray-600">{job.company}・{job.location}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">氏名</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">生年月日</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.birthDate}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">電話番号</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">メールアドレス</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.email}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">住所</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.address}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">入寮希望</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.dormitory}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">希望就業時期</label>
                      <p className="bg-white border border-gray-200 rounded-lg px-4 py-3">{formData.startDate}</p>
                    </div>
                    {formData.comment && (
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">フリーコメント</label>
                        <p className="bg-white border border-gray-200 rounded-lg px-4 py-3 whitespace-pre-wrap">{formData.comment}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      onClick={handleBack}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-200"
                    >
                      ← 修正する
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      📤 応募を送信する
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 'complete' && (
            <>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="mr-3">✅</span>
                  応募完了
                </h2>
                <p className="text-gray-600">
                  ご応募ありがとうございます。
                </p>
              </div>

              <div className="p-8 text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ご応募ありがとうございます
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  ご入力いただいた内容を確認の上、担当者より2-3営業日以内にご連絡いたします。<br />
                  お電話でのご連絡となりますので、お電話に出られる時間帯をお教えください。
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">📞 お問い合わせ先</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">0120-XXX-XXX</p>
                  <p className="text-sm text-gray-600">受付時間: 平日 9:00〜18:00</p>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/jobs"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    🏠 求人一覧に戻る
                  </Link>
                  <div>
                    <Link
                      href={`/jobs/${job.id}`}
                      className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-200"
                    >
                      📋 求人詳細に戻る
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
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