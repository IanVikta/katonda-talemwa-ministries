import { useState, useEffect } from 'react'
import MaterialIcon from './ui/MaterialIcon'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  })
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('ktm_cookie_consent')
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    triggerDismiss(consentData)
  }

  const handleRejectAll = () => {
    const consentData = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    triggerDismiss(consentData)
  }

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    triggerDismiss(consentData)
  }

  const triggerDismiss = (data: typeof preferences & { timestamp: string }) => {
    // Save to localStorage
    localStorage.setItem('ktm_cookie_consent', JSON.stringify(data))
    
    // Animate out
    setAnimateOut(true)
    setTimeout(() => {
      setVisible(false)
    }, 400) // matches duration-300 transition + buffer
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 transition-all duration-400 ease-out transform ${
        animateOut 
          ? 'opacity-0 translate-y-12 scale-95 pointer-events-none' 
          : 'opacity-100 translate-y-0 scale-100'
      }`}
    >
      <div className="bg-surface/90 backdrop-blur-lg border border-outline-variant/40 rounded-2xl shadow-2xl p-6 flex flex-col gap-4 text-on-surface">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
            <MaterialIcon name="cookie" className="text-2xl animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-headline text-lg font-bold uppercase tracking-wide leading-none mb-2">
              We Value Your Privacy
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
            </p>
          </div>
        </div>

        {/* Preferences Toggle Area */}
        {showPreferences && (
          <div className="border-t border-outline-variant/30 pt-4 flex flex-col gap-3 animate-fadeIn">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Cookie Preferences</h4>
            
            {/* Essential */}
            <div className="flex items-center justify-between bg-surface-container/30 p-2.5 rounded-lg border border-outline-variant/15">
              <div>
                <p className="text-xs font-bold">Essential Cookies</p>
                <p className="text-[10px] text-on-surface-variant">Required for basic site functionality. Cannot be disabled.</p>
              </div>
              <span className="text-xs font-bold text-vibrant-green px-2 py-0.5 bg-vibrant-green/10 rounded">Always Active</span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between bg-surface-container/30 p-2.5 rounded-lg border border-outline-variant/15">
              <div>
                <p className="text-xs font-bold">Analytics & Performance</p>
                <p className="text-[10px] text-on-surface-variant">Help us understand how visitors interact with the site.</p>
              </div>
              <button
                onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  preferences.analytics ? 'bg-vibrant-green' : 'bg-outline-variant'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-pure-white shadow ring-0 transition duration-200 ease-in-out ${
                    preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between bg-surface-container/30 p-2.5 rounded-lg border border-outline-variant/15">
              <div>
                <p className="text-xs font-bold">Marketing & Advertising</p>
                <p className="text-[10px] text-on-surface-variant">Used to deliver relevant ads and measure campaigns.</p>
              </div>
              <button
                onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  preferences.marketing ? 'bg-vibrant-green' : 'bg-outline-variant'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-pure-white shadow ring-0 transition duration-200 ease-in-out ${
                    preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-outline-variant/30 pt-4">
          {showPreferences ? (
            <>
              <button
                onClick={() => setShowPreferences(false)}
                className="w-full md:w-auto order-2 md:order-1 px-4 py-2 text-xs font-semibold hover:bg-surface-container-high hover:text-primary transition-all rounded text-center cursor-pointer"
              >
                Hide Preferences
              </button>
              <button
                onClick={handleSavePreferences}
                className="w-full md:w-auto order-1 md:order-2 px-5 py-3 md:py-2.5 bg-primary text-pure-white text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md text-center cursor-pointer"
              >
                Save Preferences
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full md:w-auto order-3 md:order-1 px-4 py-2 text-xs font-semibold hover:bg-surface-container-high hover:text-primary transition-all rounded text-center cursor-pointer"
              >
                Preferences
              </button>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2 order-1 md:order-2">
                <button
                  onClick={handleRejectAll}
                  className="w-full sm:flex-1 md:flex-initial px-4 py-3 md:py-2.5 border border-outline-variant/50 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-surface-container hover:border-outline transition-all text-center cursor-pointer"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:flex-1 md:flex-initial px-5 py-3 md:py-2.5 bg-vibrant-green text-pure-white text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md text-center cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
