'use client'

import { useEffect } from 'react'
import { initializeAnalytics } from '@/packages/shared-lib/src/analytics'
import { hasAnalyticsConsent } from '@/packages/shared-lib/src/cookie-consent'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
    const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    
    if (hasAnalyticsConsent() && (ga4Id || metaPixelId)) {
      initializeAnalytics({
        ga4Id,
        metaPixelId
      })
    }
  }, [])

  return <>{children}</>
}
