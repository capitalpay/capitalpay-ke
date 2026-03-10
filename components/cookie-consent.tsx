'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/packages/shared-ui/src/components/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/packages/shared-ui/src/components/Card'
import { getCookieConsent, setCookieConsent } from '@/packages/shared-lib/src/cookie-consent'
import { initializeAnalytics } from '@/packages/shared-lib/src/analytics'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = getCookieConsent()
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    setCookieConsent({
      accepted: true,
      analytics: true,
      marketing: true
    })
    
    // Initialize analytics
    const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
    const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    
    if (ga4Id || metaPixelId) {
      initializeAnalytics({
        ga4Id,
        metaPixelId,
      })
    }
    
    setShowBanner(false)
  }

  const handleAcceptNecessary = () => {
    setCookieConsent({
      accepted: true,
      analytics: false,
      marketing: false
    })
    setShowBanner(false)
  }

  const handleCustomize = () => {
    setShowDetails(true)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto">
        {!showDetails ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                We use cookies to improve your experience
              </h3>
              <p className="text-gray-600">
                We use cookies to analyze site usage, personalize content, and improve our services. 
                You can choose which cookies to accept.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleAcceptNecessary}>
                Necessary Only
              </Button>
              <Button variant="outline" onClick={handleCustomize}>
                Customize
              </Button>
              <Button variant="brand" onClick={handleAcceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Cookie Preferences</CardTitle>
              <CardDescription>
                Choose which cookies you want to accept. You can change these settings at any time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Necessary Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500">Always Active</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">
                      Used to track visitors across websites for advertising purposes.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-600"></div>
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" onClick={() => setShowDetails(false)}>
                  Back
                </Button>
                <Button variant="brand" onClick={handleAcceptAll}>
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
