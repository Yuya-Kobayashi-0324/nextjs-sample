import Link from 'next/link'

// ビルド時に実行される関数
export async function generateStaticParams() {
  // 静的パラメータを生成（実際には使用しないが、SSGであることを示す）
  return []
}

// メタデータを静的に生成
export const metadata = {
  title: 'SSGテストページ - はたらくヨロコビ',
  description: 'Next.jsのStatic Site Generation（SSG）のテストページです。',
}

// 静的データ
const staticData = {
  buildTime: new Date().toISOString(),
  features: [
    'ビルド時に静的生成',
    'サーバーサイドレンダリングなし',
    '高速なページ読み込み',
    'SEOに最適化',
    'CDNでの配信が可能'
  ],
  testItems: [
    { id: 1, name: '静的コンテンツ1', description: 'ビルド時に生成されるコンテンツ' },
    { id: 2, name: '静的コンテンツ2', description: '変更されない固定コンテンツ' },
    { id: 3, name: '静的コンテンツ3', description: '事前にレンダリング済み' },
    { id: 4, name: '静的コンテンツ4', description: 'サーバー負荷なし' },
    { id: 5, name: '静的コンテンツ5', description: 'キャッシュ可能' }
  ]
}

export default function SSGTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            SSGテストページ
          </h1>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                静的生成情報
              </h2>
              <div className="space-y-2">
                <p className="text-lg">
                  生成タイプ: <span className="font-bold text-green-600">Static Site Generation (SSG)</span>
                </p>
                <p className="text-lg">
                  ビルド時刻: <span className="font-mono text-green-600">{staticData.buildTime}</span>
                </p>
                <p className="text-lg">
                  レンダリング: <span className="font-bold text-green-600">ビルド時</span>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                SSGの特徴
              </h2>
              <ul className="space-y-2">
                {staticData.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">
                静的コンテンツ一覧
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {staticData.testItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-orange-800 mb-4">
                パフォーマンス情報
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">0ms</div>
                  <div className="text-sm text-gray-600">サーバー処理時間</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">キャッシュヒット率</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">高速</div>
                  <div className="text-sm text-gray-600">読み込み速度</div>
                </div>
              </div>
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
                href="/hydration-test"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                ハイドレーションテスト
              </Link>
              <Link 
                href="/jobs"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                求人一覧（SSR）
              </Link>
              <Link 
                href="/articles"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                記事一覧（SSG）
              </Link>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">このページの特徴:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• ビルド時に静的生成される</li>
              <li>• サーバーサイドレンダリングなし</li>
              <li>• クライアントサイドのJavaScriptなし</li>
              <li>• 完全に静的なHTML</li>
              <li>• 高速な読み込みとSEO最適化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 