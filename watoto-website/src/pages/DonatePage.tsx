import { useState } from 'react'
import Navbar from '../components/Navbar'
import { FooterHome } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

type PaymentMethod = 'mobile-money' | 'bank-transfer' | 'card' | 'cash'

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState<PaymentMethod>('mobile-money')
  
  // Card mock state
  const [cardAmount, setCardAmount] = useState('50')
  const [customAmount, setCustomAmount] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      // reset form
      setCardName('')
      setCardNumber('')
      setCardExpiry('')
      setCardCvv('')
    }, 2000)
  }

  const finalAmount = cardAmount === 'custom' ? customAmount : cardAmount

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
            <div className="w-full max-w-xs mx-auto gradient-line mb-6" />
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
              Katonda Talemwa Ministries relies on the generosity of supporters around the globe to carry out its operations in Uganda and South Sudan. Whether you support our child villages, baby rescue home, neighbourhood programs, or spiritual missions, your seed makes a measurable difference. 100% of your donations go directly to funding our local programs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              <div className="p-4 bg-surface border border-outline-variant/40 rounded-xl space-y-2 hover:shadow-md transition-shadow">
                <MaterialIcon name="home" className="text-secondary text-2xl" />
                <h4 className="font-bold text-xs text-deep-black uppercase tracking-wider">Housing</h4>
                <p className="text-xxs text-on-surface-variant leading-relaxed">Safe homes & loving families</p>
              </div>
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

        {/* Donation Method Selector Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <h2 className="font-headline text-2xl font-black uppercase text-center text-deep-black tracking-wide mb-10">
              Select Your Payment Method
            </h2>

            {/* Methods Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
              {[
                { id: 'mobile-money', label: 'Mobile Money', icon: 'smartphone', activeBg: 'bg-action-yellow text-deep-black border-action-yellow', activeIcon: 'text-deep-black', iconColor: 'text-on-secondary-fixed-variant' },
                { id: 'bank-transfer', label: 'Bank Transfer', icon: 'account_balance', activeBg: 'bg-primary text-pure-white border-primary', activeIcon: 'text-pure-white', iconColor: 'text-primary' },
                { id: 'card', label: 'Pay by Card', icon: 'credit_card', activeBg: 'bg-secondary text-pure-white border-secondary', activeIcon: 'text-pure-white', iconColor: 'text-secondary' },
                { id: 'cash', label: 'Cash / Check', icon: 'payments', activeBg: 'bg-vibrant-green text-pure-white border-vibrant-green', activeIcon: 'text-pure-white', iconColor: 'text-vibrant-green' },
              ].map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    id={`method-tab-${tab.id}`}
                    onClick={() => {
                      setActiveTab(tab.id as PaymentMethod)
                      setSuccess(false)
                    }}
                    className={`flex items-center justify-center gap-2.5 px-3 py-3 rounded-lg border text-xs font-body font-medium transition-all duration-200 cursor-pointer shadow-sm ${
                      isActive 
                        ? `${tab.activeBg}` 
                        : 'border-outline-variant/40 bg-surface text-on-surface-variant hover:border-outline hover:bg-surface-container-low'
                    }`}
                  >
                    <MaterialIcon name={tab.icon} className={`text-base shrink-0 ${isActive ? tab.activeIcon : tab.iconColor}`} />
                    <span className="truncate">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab Instruction Content Area */}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-3xl p-8 md:p-12 shadow-md">
              
              {/* MOBILE MONEY TAB */}
              {activeTab === 'mobile-money' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
                    <div className="p-3 bg-action-yellow/20 text-on-secondary-fixed-variant rounded-xl">
                      <MaterialIcon name="smartphone" className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-black uppercase text-deep-black">MTN & Airtel Mobile Money</h3>
                      <p className="text-xxs text-on-surface-variant font-medium">For supporters located in Uganda and surrounding East African regions.</p>
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    You can quickly and securely send your donation to Katonda Talemwa Ministries using our official mobile money merchants. Please follow the instructions below.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* MTN */}
                    <div className="border border-outline-variant/50 rounded-2xl p-6 bg-surface space-y-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-[#FFCC00]/20 text-[#333333] font-bold text-xxs uppercase rounded-full">MTN MoMo</span>
                        <MaterialIcon name="check_circle" className="text-[#FFCC00] text-lg" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider">Merchant Code</div>
                        <div className="text-2xl font-black text-deep-black tracking-wider">123456</div>
                        <div className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider">Merchant Name</div>
                        <div className="text-xs font-bold text-deep-black">Katonda Talemwa Ministries</div>
                      </div>
                      <div className="h-px bg-outline-variant/30 w-full" />
                      <div className="space-y-2 text-xxs leading-relaxed text-on-surface-variant">
                        <p className="font-bold text-deep-black">Step-by-step instructions:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Dial <span className="font-bold text-deep-black">*165*3#</span></li>
                          <li>Enter Merchant Code: <span className="font-bold text-deep-black">123456</span></li>
                          <li>Enter Amount in UGX</li>
                          <li>Enter Reference (e.g. <span className="italic">"Donation"</span> or <span className="italic">"Girls school"</span>)</li>
                          <li>Enter your PIN to authorize payment</li>
                        </ol>
                      </div>
                    </div>

                    {/* Airtel */}
                    <div className="border border-outline-variant/50 rounded-2xl p-6 bg-surface space-y-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-[#FF0000]/10 text-[#FF0000] font-bold text-xxs uppercase rounded-full">Airtel Money</span>
                        <MaterialIcon name="check_circle" className="text-[#FF0000] text-lg" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider">Merchant ID</div>
                        <div className="text-2xl font-black text-deep-black tracking-wider">KTM987</div>
                        <div className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider">Merchant Name</div>
                        <div className="text-xs font-bold text-deep-black">Katonda Talemwa Ministries</div>
                      </div>
                      <div className="h-px bg-outline-variant/30 w-full" />
                      <div className="space-y-2 text-xxs leading-relaxed text-on-surface-variant">
                        <p className="font-bold text-deep-black">Step-by-step instructions:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>Dial <span className="font-bold text-deep-black">*185*9#</span></li>
                          <li>Enter Merchant ID: <span className="font-bold text-deep-black">KTM987</span></li>
                          <li>Enter Amount in UGX</li>
                          <li>Enter Reference (e.g. <span className="italic">"Sponsor child"</span>)</li>
                          <li>Enter Airtel PIN to complete transfer</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* BANK TRANSFER TAB */}
              {activeTab === 'bank-transfer' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      <MaterialIcon name="account_balance" className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-black uppercase text-deep-black">Direct Bank Wire Transfers</h3>
                      <p className="text-xxs text-on-surface-variant font-medium">Ideal for larger donations, wire transfers, and recurring banking orders.</p>
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    You can instruct your local bank to make a direct transfer to our verified organizational account in Uganda. Both local (UGX) and international (USD, EUR) wire transfers are supported.
                  </p>

                  <div className="border border-outline-variant/50 rounded-2xl p-6 bg-surface space-y-6 hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      <div className="space-y-1">
                        <span className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider block">Account Name</span>
                        <span className="text-sm font-bold text-deep-black">Katonda Talemwa Ministries Limited</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider block">Bank Name</span>
                        <span className="text-sm font-bold text-deep-black">Stanbic Bank (Uganda) Limited</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider block">Branch</span>
                        <span className="text-sm font-bold text-deep-black">Mbarara Main Branch</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider block">Swift / BIC Code</span>
                        <span className="text-sm font-bold text-deep-black">SBICUGKAMP</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider block">UGX Account Number</span>
                        <span className="text-sm font-bold text-secondary tracking-widest">9030018892345</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-xxs uppercase text-on-surface-variant font-bold tracking-wider block">USD Account Number (International Wire)</span>
                        <span className="text-sm font-bold text-secondary tracking-widest">9030018899876</span>
                      </div>
                    </div>
                    
                    <div className="h-px bg-outline-variant/30 w-full" />
                    
                    <div className="flex gap-3 items-start p-4 bg-surface-container-high/50 rounded-xl">
                      <MaterialIcon name="info" className="text-primary text-lg mt-0.5 shrink-0" />
                      <p className="text-xxs text-on-surface-variant leading-relaxed">
                        <strong className="text-deep-black">Important Wire Reference Note:</strong> Please request your bank clerk to include the word <span className="font-bold text-deep-black">"DONATION"</span> and your email or full name in the transaction description memo. This helps our accounting team track and send tax receipts.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CARD PAYMENT TAB */}
              {activeTab === 'card' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
                    <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
                      <MaterialIcon name="credit_card" className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-black uppercase text-deep-black">Secure Card Donation</h3>
                      <p className="text-xxs text-on-surface-variant font-medium">Donate instantly using Visa, MasterCard, or American Express credit/debit cards.</p>
                    </div>
                  </div>

                  {success ? (
                    <div className="p-8 bg-vibrant-green/10 border border-vibrant-green/30 rounded-2xl text-center space-y-4 max-w-md mx-auto">
                      <div className="w-14 h-14 bg-vibrant-green text-pure-white rounded-full flex items-center justify-center mx-auto">
                        <MaterialIcon name="check" className="text-3xl font-bold" />
                      </div>
                      <h4 className="font-headline text-lg font-black uppercase text-vibrant-green">Payment Successful</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Thank you! Your donation of <strong className="text-deep-black">${finalAmount} USD</strong> has been securely processed. A tax-deductible donation receipt has been sent to your email.
                      </p>
                      <button 
                        onClick={() => setSuccess(false)}
                        className="bg-secondary text-pure-white text-xxs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg active:scale-95 transition-all"
                      >
                        Make another donation
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Card form */}
                      <form onSubmit={handleCardSubmit} className="lg:col-span-7 space-y-5">
                        
                        {/* Amount selector */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-deep-black uppercase tracking-wider block">Select Amount (USD)</label>
                          <div className="grid grid-cols-4 gap-2">
                            {['15', '50', '100', 'custom'].map((val) => {
                              const isSel = cardAmount === val
                              return (
                                <button
                                  type="button"
                                  key={val}
                                  onClick={() => setCardAmount(val)}
                                  className={`py-3 rounded-lg font-bold text-xs uppercase cursor-pointer border transition-all ${
                                    isSel 
                                      ? 'bg-secondary text-pure-white border-secondary shadow-md' 
                                      : 'bg-surface border-outline-variant/60 text-on-surface hover:border-outline'
                                  }`}
                                >
                                  {val === 'custom' ? 'Custom' : `$${val}`}
                                </button>
                              )
                            })}
                          </div>
                          
                          {cardAmount === 'custom' && (
                            <div className="relative mt-2">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant">$</span>
                              <input
                                type="number"
                                required
                                min="5"
                                placeholder="Enter custom amount"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                className="w-full bg-surface border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10 rounded-lg pl-8 pr-4 py-3 text-xs text-deep-black outline-none transition-all placeholder-on-surface-variant/40"
                              />
                            </div>
                          )}
                        </div>

                        {/* Card Name */}
                        <div className="space-y-1.5">
                          <label htmlFor="card-name" className="text-xs font-bold text-deep-black uppercase tracking-wider block">Cardholder Name *</label>
                          <input
                            type="text"
                            required
                            id="card-name"
                            placeholder="John Doe"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="w-full bg-surface border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10 rounded-lg px-4 py-3 text-xs text-deep-black outline-none transition-all placeholder-on-surface-variant/40"
                          />
                        </div>

                        {/* Card Number */}
                        <div className="space-y-1.5">
                          <label htmlFor="card-number" className="text-xs font-bold text-deep-black uppercase tracking-wider block">Card Number *</label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              id="card-number"
                              maxLength={16}
                              placeholder="4111 2222 3333 4444"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                              className="w-full bg-surface border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10 rounded-lg pl-4 pr-12 py-3 text-xs text-deep-black tracking-widest outline-none transition-all placeholder-on-surface-variant/40 font-mono"
                            />
                            <MaterialIcon name="credit_card" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg" />
                          </div>
                        </div>

                        {/* Expiry and CVV */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="card-expiry" className="text-xs font-bold text-deep-black uppercase tracking-wider block">Expiry Date *</label>
                            <input
                              type="text"
                              required
                              id="card-expiry"
                              maxLength={5}
                              placeholder="MM/YY"
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              className="w-full bg-surface border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10 rounded-lg px-4 py-3 text-xs text-deep-black outline-none transition-all placeholder-on-surface-variant/40 font-mono"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="card-cvv" className="text-xs font-bold text-deep-black uppercase tracking-wider block">CVV *</label>
                            <input
                              type="password"
                              required
                              id="card-cvv"
                              maxLength={3}
                              placeholder="123"
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                              className="w-full bg-surface border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/10 rounded-lg px-4 py-3 text-xs text-deep-black outline-none transition-all placeholder-on-surface-variant/40 font-mono"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          id="card-submit-btn"
                          className="w-full bg-secondary hover:bg-secondary/95 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 rounded-lg shadow-md active:scale-[0.98] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-pure-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Processing Secure Transaction...
                            </>
                          ) : (
                            <>
                              Pay Securely ${finalAmount} USD
                              <MaterialIcon name="lock" className="text-sm" />
                            </>
                          )}
                        </button>

                      </form>

                      {/* Right: Security info */}
                      <div className="lg:col-span-5 border border-outline-variant/50 rounded-2xl p-6 bg-surface space-y-4">
                        <h4 className="font-headline text-xs font-black uppercase tracking-wider text-deep-black">Secure Checkout Info</h4>
                        <div className="space-y-3.5 text-xxs font-light text-on-surface-variant leading-relaxed">
                          <div className="flex gap-3">
                            <MaterialIcon name="shield" className="text-secondary text-base shrink-0 mt-0.5" />
                            <p><strong>128-bit SSL Encrypted Connection:</strong> Your personal and card information is safe. Transaction data is transmitted via secure payment gateways.</p>
                          </div>
                          <div className="flex gap-3">
                            <MaterialIcon name="receipt_long" className="text-secondary text-base shrink-0 mt-0.5" />
                            <p><strong>Tax Deductible:</strong> Katonda Talemwa Ministries is a certified NGO. A formal receipt will be emailed immediately for local tax purposes.</p>
                          </div>
                          <div className="flex gap-3">
                            <MaterialIcon name="history" className="text-secondary text-base shrink-0 mt-0.5" />
                            <p><strong>Support & Disputes:</strong> Have questions about your transaction? Email us at <span className="font-bold text-deep-black">pcm.uganda@gmail.com</span> for instant support.</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              )}

              {/* CASH AND CHECK TAB */}
              {activeTab === 'cash' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-4">
                    <div className="p-3 bg-vibrant-green/10 text-vibrant-green rounded-xl">
                      <MaterialIcon name="payments" className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-black uppercase text-deep-black">Cash & Check Donation Instructions</h3>
                      <p className="text-xxs text-on-surface-variant font-medium">For supporters wishing to donate cash directly or mail paper checks/money orders.</p>
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    We accept hand-delivered cash and mailed checks at our head offices. Paper checks should be made out to the official organization name below.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Hand Cash */}
                    <div className="border border-outline-variant/50 rounded-2xl p-6 bg-surface space-y-4 hover:shadow-md transition-shadow">
                      <h4 className="font-headline text-sm font-black uppercase text-deep-black flex items-center gap-2">
                        <MaterialIcon name="store" className="text-vibrant-green text-lg" />
                        Hand Deliver Cash
                      </h4>
                      <p className="text-xxs leading-relaxed text-on-surface-variant">
                        You can hand-deliver USD, UGX, EUR, or GBP currency donations directly to our administrative office cashiers during standard office hours.
                      </p>
                      <div className="bg-surface-container rounded-xl p-4 text-xxs space-y-1">
                        <span className="font-bold text-deep-black block">Administration Office Address:</span>
                        <p>Nkokojeru, Kamukuzi Kakiika</p>
                        <p>Mbarara, Uganda (East Africa)</p>
                        <p>Open Monday – Friday, 8:00 AM – 5:00 PM</p>
                      </div>
                    </div>

                    {/* Mail Checks */}
                    <div className="border border-outline-variant/50 rounded-2xl p-6 bg-surface space-y-4 hover:shadow-md transition-shadow">
                      <h4 className="font-headline text-sm font-black uppercase text-deep-black flex items-center gap-2">
                        <MaterialIcon name="mail" className="text-vibrant-green text-lg" />
                        Mail Paper Checks
                      </h4>
                      <p className="text-xxs leading-relaxed text-on-surface-variant">
                        Paper checks and bank money orders should be sent securely via post office or delivery services.
                      </p>
                      <div className="bg-surface-container rounded-xl p-4 text-xxs space-y-1">
                        <span className="font-bold text-deep-black block">Make checks payable to:</span>
                        <p className="font-bold text-secondary text-xs">Katonda Talemwa Ministries Limited</p>
                        <span className="font-bold text-deep-black block pt-1">Postal Address:</span>
                        <p>P. O. Box 1690 Mbarara, Uganda</p>
                        <p className="italic text-on-surface-variant">Please send us a short email informing us of the dispatch.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>

      <FooterHome />
    </div>
  )
}
