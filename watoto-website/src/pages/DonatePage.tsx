import { useState } from 'react'
import Navbar from '../components/Navbar'
import { FooterHome } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

export default function DonatePage() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState('50')
  const [customAmount, setCustomAmount] = useState('')
  const [designation, setDesignation] = useState('Where Most Needed (General Fund)')
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const finalAmount = amount === 'custom' ? (customAmount || '0') : amount

  const handlePayPalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const paypalUrl = `https://www.paypal.com/donate/?business=katondatalemwaministries%40gmail.com&currency_code=USD&amount=${finalAmount}&item_name=${encodeURIComponent(`KTM Donation - ${designation} (${frequency === 'monthly' ? 'Monthly' : 'One-Time'})`)}`

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      window.open(paypalUrl, '_blank', 'noopener,noreferrer')
    }, 600)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('katondatalemwaministries@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden page-enter">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-deep-black text-pure-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-40 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${IMAGES.heroHome}')` }}
            />
          </div>
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-6 md:px-margin-desktop text-center space-y-6">
            <span className="text-action-yellow font-bold text-label-bold uppercase tracking-widest block animate-pulse">
              Support Our Mission
            </span>
            <h1 className="font-headline text-headline-xl mb-4 font-black uppercase leading-tight tracking-wide">
              Donate <span className="text-action-yellow">Today</span>
            </h1>
            <p className="max-w-2xl mx-auto text-body-lg opacity-90 font-light leading-relaxed">
              Every donation helps us provide shelter, education, healthcare, and a loving home to vulnerable children and mothers. 
            </p>
          </div>
        </section>

        {/* Intro Message Section */}
        <section className="py-16 bg-surface-container-low text-center border-b border-outline-variant/30">
          <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-6">
            <div className="inline-flex p-3 bg-primary/10 text-primary rounded-full">
              <MaterialIcon name="volunteer_activism" className="text-4xl" />
            </div>
            <h2 className="font-headline text-headline-md text-deep-black uppercase font-black">
              Your Gift <span className="text-primary font-black">Changes Stories</span>
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              Katonda Talemwa Ministries relies on the generosity of supporters around the globe to carry out its operations across Uganda. Whether you support our child villages, baby home, education & healthcare, or spiritual missions, your seed makes a measurable difference. 100% of your donations go directly to funding our local programs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-4 bg-surface border border-outline-variant/40 rounded-xl space-y-2 hover:shadow-md transition-shadow">
                <MaterialIcon name="school" className="text-vibrant-green text-2xl" />
                <h4 className="font-bold text-xs text-deep-black uppercase tracking-wider">Education</h4>
                <p className="text-xxs text-on-surface-variant leading-relaxed">Schools & vocational tools</p>
              </div>
              <div className="p-4 bg-surface border border-outline-variant/40 rounded-xl space-y-2 hover:shadow-md transition-shadow">
                <MaterialIcon name="medical_services" className="text-primary text-2xl" />
                <h4 className="font-bold text-xs text-deep-black uppercase tracking-wider">Healthcare</h4>
                <p className="text-xxs text-on-surface-variant leading-relaxed">Clinics & specialized care</p>
              </div>
              <div className="p-4 bg-surface border border-outline-variant/40 rounded-xl space-y-2 hover:shadow-md transition-shadow">
                <MaterialIcon name="restaurant" className="text-action-yellow text-2xl font-bold" />
                <h4 className="font-bold text-xs text-deep-black uppercase tracking-wider">Nutrition</h4>
                <p className="text-xxs text-on-surface-variant leading-relaxed">Healthy, balanced meals</p>
              </div>
            </div>
          </div>
        </section>

        {/* PayPal Giving Section */}
        <section className="py-10 lg:py-16 bg-surface-container-low">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-8">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest bg-vibrant-green/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <MaterialIcon name="lock" className="text-sm" />
                Verified PayPal Non-Profit Portal
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-deep-black tracking-tight">
                Donate Online with PayPal
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Empower children, provide healthcare, and restore hope. 100% of your tax-deductible gift is received securely via PayPal.
              </p>
            </div>

            {/* Main Donation Card */}
            <div className="bg-surface border border-outline-variant/40 rounded-3xl shadow-xl shadow-deep-black/5 overflow-hidden">
              {/* Card Accent Top Bar */}
              <div className="h-1.5 bg-gradient-to-r from-vibrant-green via-action-yellow to-vibrant-green" />

              {success ? (
                <div className="p-8 lg:p-12 text-center space-y-6 max-w-xl mx-auto">
                  <div className="w-16 h-16 bg-vibrant-green text-pure-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-vibrant-green/20">
                    <MaterialIcon name="check" className="text-4xl font-bold" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-deep-black">Thank You For Your Heart!</h3>
                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      You are making an eternal difference. We are initiating your <strong className="text-deep-black">{frequency === 'monthly' ? 'Monthly' : 'One-Time'}</strong> gift of <strong className="text-vibrant-green font-bold text-base sm:text-lg">${finalAmount} USD</strong> for <strong className="text-deep-black">{designation}</strong>.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-xs sm:text-sm text-on-surface-variant space-y-2.5 text-left">
                    <div className="flex items-center gap-2 text-deep-black font-bold">
                      <MaterialIcon name="mark_email_read" className="text-vibrant-green text-base" />
                      <span>Official PayPal Recipient Account:</span>
                    </div>
                    <div className="flex items-center justify-between bg-surface px-4 py-2.5 rounded-xl border border-outline-variant/30 font-mono text-xs sm:text-sm">
                      <span className="truncate pr-2 text-deep-black font-semibold">katondatalemwaministries@gmail.com</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="text-xs font-bold text-vibrant-green hover:underline cursor-pointer flex items-center gap-1 shrink-0 bg-vibrant-green/10 px-3 py-1.5 rounded-lg transition-all active:scale-95"
                      >
                        <MaterialIcon name={copied ? 'done' : 'content_copy'} className="text-xs" />
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-xs text-on-surface-variant/80 italic leading-relaxed">
                      If PayPal did not open automatically in a new window, tap the gold button below to complete your transfer.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={`https://www.paypal.com/donate/?business=katondatalemwaministries%40gmail.com&currency_code=USD&amount=${finalAmount}&item_name=${encodeURIComponent(`KTM Donation - ${designation}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFC439] hover:bg-[#F2BA36] text-[#003087] font-headline text-sm font-black uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                      Open PayPal Checkout
                      <MaterialIcon name="open_in_new" className="text-base" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="border border-outline-variant/60 bg-surface text-deep-black text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-surface-container transition-all cursor-pointer"
                    >
                      Give Another Amount
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePayPalSubmit} className="p-6 sm:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    
                    {/* Left Column: Donation Configuration (lg:col-span-7) */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Frequency Switcher */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs sm:text-sm font-bold text-deep-black uppercase tracking-wider">
                            1. Giving Frequency
                          </label>
                          {frequency === 'monthly' && (
                            <span className="text-xs text-vibrant-green font-bold bg-vibrant-green/10 px-2.5 py-0.5 rounded-full animate-fadeIn flex items-center gap-1">
                              <MaterialIcon name="favorite" className="text-xs" /> Sustained Impact
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-2 bg-surface-container-high p-1.5 rounded-2xl border border-outline-variant/30">
                          <button
                            type="button"
                            onClick={() => setFrequency('one-time')}
                            className={`py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                              frequency === 'one-time'
                                ? 'bg-vibrant-green text-pure-white shadow-sm'
                                : 'text-on-surface-variant hover:text-deep-black'
                            }`}
                          >
                            One-Time Gift
                          </button>
                          <button
                            type="button"
                            onClick={() => setFrequency('monthly')}
                            className={`py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                              frequency === 'monthly'
                                ? 'bg-vibrant-green text-pure-white shadow-sm'
                                : 'text-on-surface-variant hover:text-deep-black'
                            }`}
                          >
                            <MaterialIcon name="autorenew" className="text-sm text-action-yellow" />
                            Monthly Partner
                          </button>
                        </div>
                      </div>

                      {/* Amount Selector */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs sm:text-sm font-bold text-deep-black uppercase tracking-wider">
                            2. Choose Amount (USD)
                          </label>
                          <span className="text-xs text-on-surface-variant font-medium">
                            Tax-deductible
                          </span>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-3">
                          {[
                            { val: '25', label: 'Medical' },
                            { val: '50', label: 'Nutrition' },
                            { val: '100', label: 'Education' },
                            { val: '250', label: 'Clinic' },
                            { val: 'custom', label: 'Custom' },
                          ].map(({ val, label }) => {
                            const isSelected = amount === val
                            return (
                              <button
                                type="button"
                                key={val}
                                onClick={() => setAmount(val)}
                                className={`py-3 sm:py-3.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-200 ${
                                  isSelected
                                    ? 'border-2 border-vibrant-green bg-vibrant-green/10 text-deep-black shadow-md ring-1 ring-vibrant-green/20 scale-[1.03]'
                                    : 'border border-outline-variant/60 bg-surface text-on-surface-variant hover:border-vibrant-green/50 hover:bg-surface-container-low'
                                }`}
                              >
                                <span className={`font-headline text-lg sm:text-xl font-black tracking-tight ${isSelected ? 'text-vibrant-green' : 'text-deep-black'}`}>
                                  {val === 'custom' ? 'Custom' : `$${val}`}
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-85 truncate max-w-full">
                                  {label}
                                </span>
                              </button>
                            )
                          })}
                        </div>

                        {amount === 'custom' && (
                          <div className="pt-1.5 animate-fadeIn">
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-black text-deep-black">$</span>
                              <input
                                type="number"
                                required
                                min="5"
                                placeholder="Enter custom amount in USD"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                className="w-full bg-surface border-2 border-vibrant-green focus:ring-2 focus:ring-vibrant-green/20 rounded-xl pl-9 pr-4 py-3 text-base text-deep-black font-bold outline-none transition-all"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Designation Selector */}
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-deep-black uppercase tracking-wider block">
                          3. Direct My Gift To:
                        </label>
                        <div className="relative">
                          <select
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            className="w-full appearance-none bg-surface border border-outline-variant/60 focus:border-vibrant-green focus:ring-2 focus:ring-vibrant-green/20 rounded-xl pl-4 pr-10 py-3 text-xs sm:text-sm text-deep-black font-medium outline-none transition-all cursor-pointer"
                          >
                            <option value="Where Most Needed (General Fund)">Where Most Needed (General Fund)</option>
                            <option value="Emmanuel Babies Home Care">Emmanuel Babies Home Care</option>
                            <option value="Kate Clinic & Medical Services">Kate Clinic & Medical Services</option>
                            <option value="Child Education & School Supplies">Child Education & School Supplies</option>
                            <option value="Katonda Talemwa Children's Choir">Katonda Talemwa Children's Choir</option>
                          </select>
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant flex items-center">
                            <MaterialIcon name="expand_more" className="text-xl" />
                          </div>
                        </div>
                      </div>

                      {/* Donor Info (Side-by-side Row) */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs sm:text-sm font-bold text-deep-black uppercase tracking-wider">
                            4. Donor Details
                          </label>
                          <span className="text-xs text-on-surface-variant font-medium">
                            Optional (for tax receipt)
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            className="w-full bg-surface border border-outline-variant/60 focus:border-vibrant-green focus:ring-2 focus:ring-vibrant-green/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-deep-black outline-none transition-all"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                            className="w-full bg-surface border border-outline-variant/60 focus:border-vibrant-green focus:ring-2 focus:ring-vibrant-green/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-deep-black outline-none transition-all"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Right Column: Checkout Summary & PayPal Action (lg:col-span-5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-5 bg-surface-container-low/80 border border-outline-variant/30 rounded-2xl p-6 lg:p-7">
                      
                      {/* Summary Header */}
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between pb-2.5 border-b border-outline-variant/30">
                          <span className="font-headline text-xs sm:text-sm font-black uppercase tracking-wider text-deep-black flex items-center gap-1.5">
                            <MaterialIcon name="receipt" className="text-vibrant-green text-base" />
                            Giving Summary
                          </span>
                          <span className="text-xs font-bold text-vibrant-green uppercase bg-vibrant-green/10 px-2.5 py-1 rounded-full">
                            {frequency === 'monthly' ? 'Monthly Partner' : 'One-Time'}
                          </span>
                        </div>

                        <div className="bg-surface rounded-xl p-4 border border-outline-variant/30 space-y-1.5 shadow-sm">
                          <div className="flex items-baseline justify-between">
                            <span className="text-xs sm:text-sm text-on-surface-variant">Donation Total:</span>
                            <span className="font-headline text-3xl sm:text-4xl font-black text-deep-black">
                              ${finalAmount} <span className="text-xs sm:text-sm font-bold text-on-surface-variant">USD</span>
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm text-on-surface-variant truncate">
                            Target: <span className="font-semibold text-deep-black">{designation}</span>
                          </div>
                        </div>

                        {/* PayPal Checkout Button */}
                        <button
                          type="submit"
                          disabled={loading || (amount === 'custom' && (!customAmount || Number(customAmount) <= 0))}
                          className="w-full bg-[#FFC439] hover:bg-[#F2BA36] text-[#003087] font-headline text-sm sm:text-base font-black uppercase tracking-wider py-4 px-6 rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-[#003087]" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Connecting to PayPal...
                            </>
                          ) : (
                            <>
                              <span>Donate ${finalAmount} with</span>
                              <span className="font-headline font-black italic text-lg sm:text-xl tracking-tight">Pay<span className="text-[#0070BA]">Pal</span></span>
                              <MaterialIcon name="arrow_forward" className="text-base" />
                            </>
                          )}
                        </button>

                        <p className="text-xs text-on-surface-variant text-center leading-normal">
                          🔒 Pay via PayPal balance, Visa, Mastercard, or Amex. No account required.
                        </p>
                      </div>

                      {/* Direct PayPal Info Box */}
                      <div className="p-3.5 bg-surface rounded-xl border border-outline-variant/30 space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-on-surface-variant font-medium">Direct PayPal App Account:</span>
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="text-vibrant-green font-bold hover:underline cursor-pointer flex items-center gap-1 text-xs bg-vibrant-green/10 px-2.5 py-1 rounded transition-all active:scale-95"
                          >
                            <MaterialIcon name={copied ? 'done' : 'content_copy'} className="text-xs" />
                            {copied ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <div className="font-mono text-xs sm:text-sm font-bold text-deep-black truncate">
                          katondatalemwaministries@gmail.com
                        </div>
                      </div>

                      {/* Trust Row */}
                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-2 sm:p-2.5 bg-surface rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center">
                          <MaterialIcon name="verified_user" className="text-vibrant-green text-base sm:text-lg" />
                          <span className="text-[10px] sm:text-xs font-bold text-deep-black uppercase mt-1">256-Bit SSL</span>
                        </div>
                        <div className="p-2 sm:p-2.5 bg-surface rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center">
                          <MaterialIcon name="credit_card" className="text-secondary text-base sm:text-lg" />
                          <span className="text-[10px] sm:text-xs font-bold text-deep-black uppercase mt-1">All Cards</span>
                        </div>
                        <div className="p-2 sm:p-2.5 bg-surface rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center">
                          <MaterialIcon name="receipt_long" className="text-primary text-base sm:text-lg" />
                          <span className="text-[10px] sm:text-xs font-bold text-deep-black uppercase mt-1">Tax Deductible</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <FooterHome />
    </div>
  )
}
