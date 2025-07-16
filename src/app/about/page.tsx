import Link from 'next/link'
import Header from '@/components/Header'

export default function About() {
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
          <span className="text-blue-600">会社概要</span>
        </nav>

        {/* ヒーローセクション */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            会社概要
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            働く人と企業をつなぎ、誰もが活躍できる社会の実現を目指しています
          </p>
        </section>

        {/* 会社情報 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 基本情報 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">基本情報</h2>
            <div className="space-y-4">
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">社名</span>
                <span className="text-gray-800">はたらくヨロコビ株式会社</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">設立</span>
                <span className="text-gray-800">2020年4月</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">資本金</span>
                <span className="text-gray-800">1,000万円</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">代表者</span>
                <span className="text-gray-800">代表取締役 田中太郎</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">従業員数</span>
                <span className="text-gray-800">50名</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-24">事業内容</span>
                <span className="text-gray-800">人材派遣・紹介事業</span>
              </div>
            </div>
          </div>

          {/* アクセス情報 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">アクセス</h2>
            <div className="space-y-4">
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">住所</span>
                <span className="text-gray-800">東京都渋谷区○○○○ 1-2-3</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">TEL</span>
                <span className="text-gray-800">03-1234-5678</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">FAX</span>
                <span className="text-gray-800">03-1234-5679</span>
              </div>
              <div className="flex border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-24">Email</span>
                <span className="text-gray-800">info@hatarakuyorokobi.co.jp</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-24">最寄駅</span>
                <span className="text-gray-800">渋谷駅（徒歩5分）</span>
              </div>
            </div>
          </div>
        </div>

        {/* ミッション・ビジョン */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">ミッション</h2>
              <p className="text-blue-700 leading-relaxed">
                働く人一人ひとりが、やりがいと充実感を持って働ける環境を創造し、
                企業と人材の最適なマッチングを通じて、社会の発展に貢献します。
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">ビジョン</h2>
              <p className="text-orange-700 leading-relaxed">
                誰もが自分の能力を最大限に活かし、成長できる社会の実現を目指し、
                人材業界のリーディングカンパニーとして、業界の未来を切り拓きます。
              </p>
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">事業内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">人材派遣</h3>
              <p className="text-gray-600">
                製造業、自動車業界を中心に、企業のニーズに合わせた人材派遣サービスを提供
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">人材紹介</h3>
              <p className="text-gray-600">
                企業と求職者のマッチングを通じて、双方にとって最適な転職をサポート
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">キャリア支援</h3>
              <p className="text-gray-600">
                働く人のキャリア形成をサポートし、長期的な成長を支援
              </p>
            </div>
          </div>
        </section>

        {/* 実績 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">実績</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">提携企業</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">派遣スタッフ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">顧客満足度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">サポート体制</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            一緒に働きませんか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            豊富な求人情報から、あなたにぴったりのお仕事を見つけましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jobs" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              求人一覧を見る
            </Link>
            <Link 
              href="/contact" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
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