import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

function generateNumericId(): string {
  // 20桁の数値IDを生成（先頭は0以外）
  const firstDigit = Math.floor(Math.random() * 9) + 1 // 1-9
  const remainingDigits = Array.from({ length: 19 }, () => 
    Math.floor(Math.random() * 10)
  ).join('')
  
  return firstDigit + remainingDigits
}

export async function GET() {
  const cookieStore = await cookies()
  const existingUuid = cookieStore.get('sample_uuid')
  
  let userUuid: string
  
  if (!existingUuid) {
    // 初回：新しいUUIDを生成
    userUuid = generateNumericId()
  } else {
    // 2回目以降：既存のUUIDを使用
    userUuid = existingUuid.value
  }
  
  // レスポンスを作成
  const response = new NextResponse(
    JSON.stringify({ 
      status: "ok"
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    }
  )
  
  // 毎回レスポンスヘッダにSet-Cookieをセット
  response.cookies.set('sample_uuid', userUuid, {
    httpOnly: false, // クライアントサイドから参照可能
    secure: true, // Secure属性を常に有効
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 400 // 400日（リクエスト時点から）
  })
  
  return response
} 