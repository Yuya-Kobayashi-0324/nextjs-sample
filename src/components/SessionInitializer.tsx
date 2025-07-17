'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// dataLayerの型定義
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// CookieからUUIDを取得する関数
function getCookieValue(name: string): string | null {
  if (typeof document === 'undefined') return null
  
  const cookies = document.cookie.split(';')
  const cookie = cookies.find(c => c.trim().startsWith(name + '='))
  return cookie ? cookie.split('=')[1] : null
}

// グルーピング情報を計算する関数
function calculateGrouping(uuid: string) {
  const firstDigit = parseInt(uuid.charAt(0))
  const lastDigit = parseInt(uuid.charAt(uuid.length - 1))
  const isFirstDigitEven = firstDigit % 2 === 0
  const isLastDigitEven = lastDigit % 2 === 0
  const firstDigitGroup = Math.ceil(firstDigit / 3) // 1-3, 4-6, 7-9の3グループ
  
  return {
    firstDigit,
    lastDigit,
    isFirstDigitEven,
    isLastDigitEven,
    firstDigitGroup
  }
}

// dataLayerにページビューイベントを送信する関数
function pushPageViewEvent() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'custom_page_view',
      'page_location': window.location.href,
      'page_pathname': window.location.pathname
    });
  }
}

export default function SessionInitializer() {
  const pathname = usePathname();

  // ページ遷移時にdataLayerにイベントをpush
  useEffect(() => {
    pushPageViewEvent();
  }, [pathname]);

  useEffect(() => {
    const initSession = async () => {
      try {
        // APIを呼び出してCookieをセット
        await fetch('/api/session', {
          credentials: 'same-origin'
        })
        
        // CookieからUUIDを取得
        const userUuid = getCookieValue('sample_uuid')
        
        if (userUuid) {
          const grouping = calculateGrouping(userUuid)
          
          // GTM dataLayerにプッシュ
          if (typeof window !== 'undefined' && typeof (window as unknown as { dataLayer: unknown[] }).dataLayer !== 'undefined') {
            (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
              event: 'user_identified',
              user_uuid: userUuid,
              user_group: grouping.firstDigitGroup,
              first_digit_even: grouping.isFirstDigitEven,
              last_digit_even: grouping.isLastDigitEven,
              first_digit: grouping.firstDigit,
              last_digit: grouping.lastDigit
            })
          }
          
          // Google Analytics 4
          const gtag = (window as unknown as { gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag;
          if (typeof window !== 'undefined' && gtag) {
            gtag('config', 'GA_MEASUREMENT_ID', {
              user_id: userUuid,
              custom_map: {
                'user_group': 'user_group',
                'first_digit_even': 'first_digit_even',
                'last_digit_even': 'last_digit_even'
              }
            })
            
            // カスタムイベントとしても送信
            gtag('event', 'user_group_assigned', {
              user_id: userUuid,
              user_group: grouping.firstDigitGroup,
              first_digit_even: grouping.isFirstDigitEven,
              last_digit_even: grouping.isLastDigitEven
            })
          }
        }
      } catch (error) {
        console.error('Session initialization failed:', error)
      }
    }
    
    initSession()
  }, [])
  
  // このコンポーネントは何もレンダリングしない
  return null
} 