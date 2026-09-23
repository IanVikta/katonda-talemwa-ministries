import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterSponsor } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES, type ChildProfile } from '../data/content'
import api from '../services/api'
import { isValidEmail, isValidName, sanitizeName, handleNameKeyDown } from '../utils/validation'
import SEO from '../components/SEO'

type GenderFilter = 'all' | 'boy' | 'girl'
type AgeFilter = 'all' | '0-5' | '6-12' | '13+'

function matchesAge(age: number, filter: AgeFilter) {
  if (filter === 'all') return true
  if (filter === '0-5') return age <= 5
  if (filter === '6-12') return age >= 6 && age <= 12
  return age >= 13
}

export default function SponsorPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = (searchParams.get('tab') as 'baby' | 'child') || 'child'

  const [gender, setGender] = useState<GenderFilter>('all')
  const [ageRange, setAgeRange] = useState<AgeFilter>('all')
  const [filtering, setFiltering] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)

  const [sponsoringChild, setSponsoringChild] = useState<ChildProfile | null>(null)
  const [modalTab, setModalTab] = useState<'form' | 'story'>('form')
  const [sponsorSuccess, setSponsorSuccess] = useState(false)
  const [sponsorLoading, setSponsorLoading] = useState(false)
  const [sponsorForm, setSponsorForm] = useState({ name: '', email: '', method: 'paypal' })
  const [sponsorErrors, setSponsorErrors] = useState<Record<string, string>>({})

  const openModal = (child: ChildProfile, tab: 'form' | 'story' = 'form') => {
    setSponsoringChild(child)
    setModalTab(tab)
    setSponsorSuccess(false)
    setSponsorLoading(false)
    setSponsorForm({ name: '', email: '', method: 'paypal' })
    setSponsorErrors({})
  }

  const updateSponsorField = (field: 'name' | 'email', val: string) => {
    const cleanVal = field === 'name' ? sanitizeName(val) : val
    setSponsorForm(prev => ({ ...prev, [field]: cleanVal }))
    if (sponsorErrors[field]) {
      setSponsorErrors(prev => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validateSponsor = () => {
    const errs: Record<string, string> = {}
    if (!sponsorForm.name || !sponsorForm.name.trim()) {
      errs.name = 'Please enter your full name.'
    } else if (!isValidName(sponsorForm.name)) {
      errs.name = 'Name can only contain letters (no numbers).'
    }
    if (!sponsorForm.email || !sponsorForm.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!isValidEmail(sponsorForm.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    setSponsorErrors(errs)
    return Object.keys(errs).length === 0
  }



  const tabs = [
    { id: 'baby', label: 'Babies home', icon: 'child_care' },
    { id: 'child', label: 'School Children', icon: 'school' },
  ]

  const filtered = useMemo(() => {
    return children.filter((child) => {
      if (child.type !== activeTab) return false
      if (gender !== 'all' && child.gender !== gender) return false
      if (!matchesAge(child.age, ageRange)) return false
      return true
    })
  }, [activeTab, gender, ageRange])

  const visible = filtered.slice(0, visibleCount)

  const handleFilterChange = (setter: () => void) => {
    setFiltering(true)
    setter()
    setTimeout(() => setFiltering(false), 200)
  }

  const handleTabChange = (tabId: string) => {
    setFiltering(true)
    setSearchParams({ tab: tabId })
    setVisibleCount(9)
    setGender('all')
    setAgeRange('all')
    setTimeout(() => setFiltering(false), 200)
  }

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const impactItems = [
    { icon: 'family_restroom', title: 'A Loving Family', desc: 'Every baby and child lives in a real home and experiences parental love and care, with a safe and loving environment.' },
    { icon: 'school', title: 'Quality Education', desc: 'Access to primary, secondary, vocational training, or university education.' },
    { icon: 'health_and_safety', title: 'Healthcare & Nutrition', desc: 'Full medical care and highly nutritional meals provided every day.' },
  ]

  const trustItems = [
    { icon: 'verified', stat: '100%', desc: "Of sponsorship goes directly to child's care and welfare or family support." },
    { icon: 'groups', stat: 'Holistic Care', desc: 'Housing, schooling, clothing, nutrition, and medical support all provided.' },
    { icon: 'mail', stat: 'Stay Connected', desc: 'Receive regular letters, updates, and photos from who you sponsor.' },
  ]

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Sponsor a Child in Uganda | Katonda Talemwa Ministries"
        description="Sponsor an orphaned or vulnerable child in Uganda through Katonda Talemwa Ministries. Your monthly partnership provides schooling, healthcare, nutrition, and a loving home."
        canonicalPath="/sponsor"
        keywords="sponsor a child Uganda, child sponsorship Katonda Talemwa, sponsor Ugandan child, orphan sponsorship Africa, support a child Uganda"
      />
      <Navbar />

      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="relative bg-deep-black text-pure-white py-28 overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${IMAGES.sponsorHero}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-deep-black/50 to-transparent" />
          </div>
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="max-w-2xl space-y-6">
              <span data-aos="fade-right" className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">
                The Father&apos;s Love in Action
              </span>
              <h1 data-aos="fade-right" data-aos-delay="100" className="font-headline text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight">
                Sponsor. <br />
                <span className="text-action-yellow">Change a life.</span>
              </h1>
              <p data-aos="fade-right" data-aos-delay="200" className="text-base font-light opacity-90 leading-relaxed max-w-lg">
                Your sponsorship puts the Father&apos;s love in action, providing nutritious food, shelter, healthcare, education, and most of all — the unconditional love of a true family.
              </p>
              <div data-aos="fade-right" data-aos-delay="300" className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#sponsor-section"
                  className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none inline-flex items-center gap-2"
                >
                  Find a Child to Sponsor <MaterialIcon name="arrow_downward" className="text-xs" />
                </a>
                <Link
                  to="/contact"
                  className="border border-pure-white text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-pure-white hover:text-deep-black active:scale-95 transition-all rounded-none"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>



        {/* ── WHAT YOUR SPONSORSHIP PROVIDES ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Text */}
              <div data-aos="fade-right" className="space-y-10">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">The Impact</span>
                  <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-deep-black leading-none">
                    What your <br />
                    <span className="text-vibrant-green">sponsorship provides</span>
                  </h2>
                  <div className="w-16 h-1 bg-action-yellow" />
                </div>
                <ul className="space-y-8 divide-y divide-outline-variant/30">
                  {impactItems.map(({ icon, title, desc }, i) => (
                    <li key={title} data-aos="fade-up" data-aos-delay={i * 100} className="flex gap-5 pt-6 first:pt-0">
                      <div className="w-10 h-10 bg-vibrant-green/10 border border-vibrant-green/20 flex items-center justify-center shrink-0 rounded-none">
                        <MaterialIcon name={icon} className="text-vibrant-green text-lg" filled={icon === 'family_restroom'} />
                      </div>
                      <div>
                        <h4 className="font-headline text-sm font-black text-deep-black uppercase tracking-wide mb-1">{title}</h4>
                        <p className="text-sm text-on-surface-variant font-light leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Photo */}
              <div data-aos="fade-left" data-aos-delay="150" className="relative">
                <div className="border border-outline-variant/60 p-3 bg-surface shadow-lg rounded-none">
                  <img className="w-full aspect-square object-cover rounded-none" src={IMAGES.sponsorImpact} alt="Katonda Talemwa sponsored students in school uniform" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-vibrant-green text-pure-white p-6 hidden lg:block rounded-none shadow-xl max-w-[200px] border-t-4 border-action-yellow">
                  <p className="font-headline text-3xl text-pure-white leading-none font-black mb-1">2,000+</p>
                  <p className="text-xs font-bold text-action-yellow uppercase tracking-wider">Children Impacted</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FIND A PROFILE ── */}
        <section
          id="sponsor-section"
          className={`py-24 bg-surface-container-low border-b border-outline-variant/30 transition-opacity duration-300 ${filtering ? 'opacity-50' : 'opacity-100'}`}
        >
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">

            {/* Section header */}
            <div data-aos="fade-up" className="text-center space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Find a Profile</span>
              <h2 className="font-headline text-4xl sm:text-5xl font-black text-deep-black uppercase leading-none">
                Meet Those Waiting
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            {/* Category Tabs */}
            <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-3.5 border text-xs font-headline font-black uppercase tracking-wider transition-all cursor-pointer rounded-none ${isActive
                      ? 'bg-vibrant-green text-pure-white border-vibrant-green shadow-sm'
                      : 'bg-surface border-outline-variant/60 text-on-surface hover:border-vibrant-green hover:text-vibrant-green'
                      }`}
                  >
                    <MaterialIcon name={tab.icon || 'school'} className={`text-sm ${isActive ? 'text-action-yellow' : 'text-vibrant-green'}`} />
                    <span className="truncate">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Filters */}
            <div data-aos="fade-up" data-aos-delay="150" className="bg-surface border border-outline-variant/50 rounded-none p-6 flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-1">
                <h3 className="font-headline text-sm font-black text-deep-black uppercase tracking-wide">Filter Results</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">Narrow down by location, age, or gender.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[10px] uppercase text-on-surface-variant tracking-wider">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => handleFilterChange(() => setGender(e.target.value as GenderFilter))}
                    className="border border-outline-variant/60 px-3 py-2.5 bg-surface text-xs font-semibold focus:border-vibrant-green focus:ring-1 focus:ring-vibrant-green outline-none min-w-[130px] rounded-none"
                  >
                    <option value="all">All Genders</option>
                    <option value="boy">Boys</option>
                    <option value="girl">Girls</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[10px] uppercase text-on-surface-variant tracking-wider">Age Range</label>
                  <select
                    value={ageRange}
                    onChange={(e) => handleFilterChange(() => setAgeRange(e.target.value as AgeFilter))}
                    className="border border-outline-variant/60 px-3 py-2.5 bg-surface text-xs font-semibold focus:border-vibrant-green focus:ring-1 focus:ring-vibrant-green outline-none min-w-[130px] rounded-none"
                  >
                    <option value="all">All Ages</option>
                    <option value="0-5">0 – 5 years</option>
                    <option value="6-12">6 – 12 years</option>
                    <option value="13+">13+ years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            {visible.length === 0 ? (
              <div className="text-center py-24 bg-surface border border-outline-variant/60">
                <MaterialIcon name="search_off" className="text-5xl mb-4 text-vibrant-green" />
                <p className="font-headline text-lg font-black text-deep-black uppercase">No Profiles Found</p>
                <p className="text-sm text-on-surface-variant mt-2">Try adjusting your filter settings above.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((child, i) => (
                  <div
                    key={child.id}
                    data-aos="fade-up"
                    data-aos-delay={Math.min(i % 3, 2) * 100}
                    className="group bg-surface border border-outline-variant/60 rounded-none flex flex-col overflow-hidden shadow-sm hover:shadow-md hover:border-vibrant-green/50 transition-all duration-300"
                  >
                    <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-high">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={child.image}
                        alt={`${child.name} - Sponsor a child with Katonda Talemwa Ministries`}
                      />
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none z-10">
                        {child.classGrade ? (
                          <span className="bg-deep-black/85 text-pure-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border-l-2 border-vibrant-green shadow-xs backdrop-blur-xs">
                            {child.classGrade}
                          </span>
                        ) : <span />}
                        {child.dreamCareer && (
                          <span className="bg-deep-black/90 text-action-yellow text-[10px] font-black uppercase tracking-wider px-2.5 py-1 border-r-2 border-action-yellow shadow-xs backdrop-blur-xs flex items-center gap-1">
                            <MaterialIcon name="stars" className="text-xs text-action-yellow" />
                            Dream: {child.dreamCareer}
                          </span>
                        )}
                      </div>

                      {/* Bottom Gradient Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black/95 via-deep-black/60 to-transparent p-4 pt-10">
                        <span className="text-action-yellow font-headline text-xs font-black uppercase tracking-widest block mb-0.5">
                          {child.location}
                        </span>
                        <h3 className="font-headline text-lg font-black text-pure-white uppercase leading-tight">
                          {child.name}, {child.age}
                        </h3>
                        {child.dob && (
                          <span className="text-[11px] text-pure-white/75 block mt-0.5 font-light">
                            Born {child.dob}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 grow flex flex-col justify-between gap-4">
                      <div className="space-y-3">
                        {/* Story snippet */}
                        <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                          {child.description}
                        </p>

                        {/* Favorite Verse callout if available */}
                        {child.favoriteVerse && (
                          <div className="bg-surface-container-low border-l-2 border-vibrant-green p-2 text-[11px] text-on-surface leading-snug">
                            <span className="text-[9px] font-extrabold uppercase tracking-wider text-vibrant-green block mb-0.5">
                              Favorite Verse
                            </span>
                            <span className="italic">{child.favoriteVerse}</span>
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/30">
                        <button
                          onClick={() => openModal(child, 'story')}
                          className="py-3 px-2 bg-surface hover:bg-surface-container-high text-deep-black font-headline text-[11px] font-black uppercase tracking-wider border border-outline-variant/60 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <MaterialIcon name="menu_book" className="text-sm text-vibrant-green" />
                          Story
                        </button>
                        <button
                          onClick={() => openModal(child, 'form')}
                          className="py-3 px-2 bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-[11px] font-black uppercase tracking-wider active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-vibrant-green shadow-xs"
                        >
                          Sponsor
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {visibleCount < filtered.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount((c) => c + 3)}
                  className="px-10 py-4 border-2 border-vibrant-green text-vibrant-green font-headline text-xs font-black uppercase tracking-widest hover:bg-vibrant-green hover:text-pure-white active:scale-95 transition-all rounded-none shadow-sm"
                >
                  Load More Profiles
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ── TRANSPARENT & TRUSTED ── */}
        <section className="py-24 bg-deep-black text-pure-white">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div data-aos="fade-up" className="text-center space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">Our Promise</span>
              <h3 className="font-headline text-4xl sm:text-5xl font-black uppercase leading-none">
                Transparent &amp; Trusted
              </h3>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-pure-white/10">
              {trustItems.map(({ icon, stat, desc }, i) => (
                <div key={stat} data-aos="fade-up" data-aos-delay={i * 100} className="p-10 bg-deep-black space-y-4 border border-pure-white/10 hover:bg-vibrant-green/10 transition-colors">
                  <MaterialIcon name={icon} className="text-action-yellow text-4xl" filled />
                  <h4 className="font-headline text-2xl font-black uppercase text-pure-white">{stat}</h4>
                  <p className="text-sm font-light opacity-80 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAN'T SPONSOR MONTHLY CTA ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-t border-outline-variant/30">
          <div data-aos="fade-right" className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-center space-y-5 border-r border-outline-variant/30">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Alternative Giving</span>
            <h3 className="font-headline text-2xl font-black uppercase text-deep-black leading-tight">
              Can't Sponsor <br />Monthly?
            </h3>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Give a one-time gift to our Sustainability Fund. Your donation helps build more houses, classrooms, and support infrastructure for families in the villages.
            </p>
            <Link
              to="/donate"
              className="w-full sm:w-auto text-center bg-deep-black text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-vibrant-green active:scale-95 transition-all rounded-none border border-deep-black"
            >
              Make a One-Time Donation
            </Link>
          </div>
          <div data-aos="fade-left" className="bg-vibrant-green text-pure-white p-12 md:p-16 flex flex-col justify-center space-y-5">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">Monthly Sponsorship</span>
            <h3 className="font-headline text-2xl font-black uppercase leading-tight">
              Commit to <br />Changing a Life
            </h3>
            <p className="text-sm font-light opacity-90 leading-relaxed">
              For just $38/month you commit to a child's total care — food, school fees, clothes, medical support, and a loving home. Cancel at any time.
            </p>
            <a
              href="#sponsor-section"
              className="w-full sm:w-auto text-center bg-action-yellow text-deep-black font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
            >
              Start Sponsoring — $38/mo
            </a>
          </div>
        </section>

      </main>

      {/* ── SPONSORSHIP & STORY MODAL ── */}
      {sponsoringChild && (
        <div className="fixed inset-0 bg-deep-black/75 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-surface shadow-2xl max-w-3xl lg:max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative animate-[scaleIn_0.3s_ease-out] border border-outline-variant/40 text-left rounded-none">
            <button
              onClick={() => setSponsoringChild(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors cursor-pointer z-20 border border-outline-variant/40 rounded-none shadow-sm"
              aria-label="Close modal"
            >
              <MaterialIcon name="close" className="text-sm" />
            </button>

            {sponsorSuccess ? (
              <div className="p-10 w-full text-center space-y-6 flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-20 h-20 bg-vibrant-green/10 text-vibrant-green flex items-center justify-center animate-[bounce_1s_ease-out] border border-vibrant-green/20">
                  <MaterialIcon name="check_circle" className="text-5xl" filled />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl font-black uppercase text-deep-black">
                    Sponsorship Confirmed!
                  </h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Thank you! You are now sponsoring{' '}
                    <span className="font-bold text-vibrant-green">{sponsoringChild.name}</span>. A confirmation email has been sent to{' '}
                    <span className="font-semibold text-deep-black">{sponsorForm.email}</span>.
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant/30 text-left max-w-md w-full rounded-none">
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <span className="font-bold text-vibrant-green uppercase tracking-wider block mb-1">What happens next?</span>
                    We will send you a welcome package via email with a welcome letter, details about {sponsoringChild.name}&apos;s background, and instructions on writing regular letters.
                  </p>
                </div>
                <button
                  onClick={() => setSponsoringChild(null)}
                  className="px-8 py-3 bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest cursor-pointer active:scale-95 transition-all rounded-none"
                >
                  Return to Profiles
                </button>
              </div>
            ) : (
              <>
                {/* Child photo & profile highlights side */}
                <div className="md:w-5/12 relative min-h-[220px] md:min-h-full bg-surface-container flex flex-col justify-end">
                  <img className="w-full h-full object-cover absolute inset-0" src={sponsoringChild.image} alt={`${sponsoringChild.name} - Katonda Talemwa Ministries child sponsorship`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/95 via-deep-black/40 to-transparent" />
                  <div className="relative z-10 p-6 text-pure-white space-y-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-action-yellow bg-vibrant-green/90 px-3 py-1 inline-block border-l-2 border-action-yellow">
                      $38 / Month
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl font-black uppercase tracking-wide leading-tight">
                        {sponsoringChild.name}, {sponsoringChild.age}
                      </h3>
                      <p className="text-xs text-pure-white/80 flex items-center gap-1 mt-0.5">
                        <MaterialIcon name="place" className="text-xs text-action-yellow" />
                        {sponsoringChild.location}
                      </p>
                    </div>

                    {/* Quick specs */}
                    <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] font-semibold text-pure-white/90">
                      {sponsoringChild.classGrade && (
                        <span className="bg-pure-white/15 px-2 py-0.5 border border-pure-white/20 backdrop-blur-xs">
                          {sponsoringChild.classGrade}
                        </span>
                      )}
                      {sponsoringChild.dob && (
                        <span className="bg-pure-white/15 px-2 py-0.5 border border-pure-white/20 backdrop-blur-xs">
                          Born {sponsoringChild.dob}
                        </span>
                      )}
                      {sponsoringChild.dreamCareer && (
                        <span className="bg-action-yellow/20 text-action-yellow px-2 py-0.5 border border-action-yellow/30 font-bold backdrop-blur-xs flex items-center gap-1">
                          <MaterialIcon name="stars" className="text-xs" />
                          Dream: {sponsoringChild.dreamCareer}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Content Side (Tabs for Story vs Form) */}
                <div className="md:w-7/12 flex flex-col justify-between overflow-y-auto max-h-[70vh] md:max-h-[90vh]">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-outline-variant/40 bg-surface-container-low shrink-0">
                    <button
                      type="button"
                      onClick={() => setModalTab('form')}
                      className={`flex-1 py-3.5 px-4 text-center font-headline text-xs font-black uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 border-b-2 ${modalTab === 'form' ? 'border-vibrant-green text-vibrant-green bg-surface' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
                    >
                      <MaterialIcon name="volunteer_activism" className="text-sm" />
                      Sponsor Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab('story')}
                      className={`flex-1 py-3.5 px-4 text-center font-headline text-xs font-black uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 border-b-2 ${modalTab === 'story' ? 'border-vibrant-green text-vibrant-green bg-surface' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
                    >
                      <MaterialIcon name="menu_book" className="text-sm" />
                      Life Story &amp; Verse
                    </button>
                  </div>

                  {modalTab === 'story' ? (
                    <div className="p-6 md:p-8 space-y-6">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-vibrant-green block">
                          Testimony &amp; Journey
                        </span>
                        <h4 className="font-headline text-xl font-black uppercase text-deep-black">
                          {sponsoringChild.name}&apos;s Story
                        </h4>
                      </div>

                      {/* Verse callout if present */}
                      {sponsoringChild.favoriteVerse && (
                        <div className="p-4 bg-vibrant-green/10 border-l-4 border-vibrant-green rounded-none space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-vibrant-green flex items-center gap-1">
                            <MaterialIcon name="format_quote" className="text-xs" />
                            Favorite Bible Verse
                          </span>
                          <p className="text-xs md:text-sm italic font-semibold text-deep-black leading-relaxed">
                            {sponsoringChild.favoriteVerse}
                          </p>
                        </div>
                      )}

                      {/* Full Story text */}
                      <div className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed space-y-3">
                        <p className="whitespace-pre-line">
                          {sponsoringChild.story || sponsoringChild.description}
                        </p>
                      </div>

                      {/* Career / School details box */}
                      {(sponsoringChild.dreamCareer || sponsoringChild.classGrade || sponsoringChild.dob) && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-surface-container-low border border-outline-variant/40">
                          {sponsoringChild.dreamCareer && (
                            <div>
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-on-surface-variant block">Dream Career</span>
                              <span className="text-xs font-bold text-deep-black">{sponsoringChild.dreamCareer}</span>
                            </div>
                          )}
                          {sponsoringChild.classGrade && (
                            <div>
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-on-surface-variant block">Education Level</span>
                              <span className="text-xs font-bold text-deep-black">{sponsoringChild.classGrade}</span>
                            </div>
                          )}
                          {sponsoringChild.dob && (
                            <div>
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-on-surface-variant block">Date of Birth</span>
                              <span className="text-xs font-bold text-deep-black">{sponsoringChild.dob}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setModalTab('form')}
                          className="w-full bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 cursor-pointer active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-none border border-vibrant-green shadow-sm"
                        >
                          Proceed to Sponsor {sponsoringChild.name} ($38/mo)
                          <MaterialIcon name="arrow_forward" className="text-xs" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 md:p-8 space-y-5">
                      <div className="space-y-1">
                        <h4 className="font-headline text-lg font-black uppercase text-deep-black">
                          Sponsorship Details
                        </h4>
                        <p className="text-xs text-on-surface-variant">
                          Complete this form to start your recurring sponsorship of{' '}
                          <span className="font-bold text-deep-black">{sponsoringChild.name}</span>.
                        </p>
                      </div>

                      {/* Story peek link */}
                      <button
                        type="button"
                        onClick={() => setModalTab('story')}
                        className="w-full text-left p-3 bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <MaterialIcon name="menu_book" className="text-vibrant-green text-sm" />
                          <span className="text-xs font-bold text-deep-black">
                            {sponsoringChild.dreamCareer ? `Aspiring ${sponsoringChild.dreamCareer} — Read ${sponsoringChild.name}'s Story` : `Read ${sponsoringChild.name}'s Full Story`}
                          </span>
                        </div>
                        <MaterialIcon name="chevron_right" className="text-xs text-on-surface-variant group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <form
                        onSubmit={async (e) => {
                          e.preventDefault()
                          if (!validateSponsor()) return

                          setSponsorLoading(true)
                          
                          // Record sponsorship in MySQL database
                          await api.submitSponsorship({
                            childId: String(sponsoringChild.id),
                            childName: sponsoringChild.name,
                            sponsorName: sponsorForm.name,
                            sponsorEmail: sponsorForm.email,
                            amount: 38
                          })

                          const paypalUrl = `https://www.paypal.com/donate/?business=katondatalemwaministries%40gmail.com&currency_code=USD&amount=38&item_name=${encodeURIComponent(`Monthly Child Sponsorship for ${sponsoringChild.name}`)}`
                          setSponsorLoading(false)
                          setSponsorSuccess(true)
                          window.open(paypalUrl, '_blank', 'noopener,noreferrer')
                        }}
                        noValidate
                        className="space-y-4"
                      >
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Full Name *</label>
                          <input
                            type="text" placeholder="John Doe"
                            value={sponsorForm.name}
                            onChange={(e) => updateSponsorField('name', e.target.value)}
                            onKeyDown={handleNameKeyDown}
                            className={`w-full border px-4 py-2.5 bg-surface text-sm focus:ring-1 outline-none rounded-none ${
                              sponsorErrors.name
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-outline-variant/60 focus:border-vibrant-green focus:ring-vibrant-green'
                            }`}
                          />
                          {sponsorErrors.name && (
                            <p className="text-red-500 text-xs mt-1 font-medium">{sponsorErrors.name}</p>
                          )}
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Email Address *</label>
                          <input
                            type="email" placeholder="john@example.com"
                            value={sponsorForm.email}
                            onChange={(e) => updateSponsorField('email', e.target.value)}
                            className={`w-full border px-4 py-2.5 bg-surface text-sm focus:ring-1 outline-none rounded-none ${
                              sponsorErrors.email
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-outline-variant/60 focus:border-vibrant-green focus:ring-vibrant-green'
                            }`}
                          />
                          {sponsorErrors.email && (
                            <p className="text-red-500 text-xs mt-1 font-medium">{sponsorErrors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Payment Method</label>
                          <div className="p-3 bg-[#0070BA]/5 border border-[#0070BA]/30 flex items-center justify-between rounded-none">
                            <div className="flex items-center gap-2">
                              <span className="font-headline font-black italic text-[#003087] text-sm">Pay<span className="text-[#0070BA]">Pal</span></span>
                              <span className="text-xs font-bold text-deep-black">PayPal Checkout</span>
                            </div>
                            <span className="text-[10px] font-bold text-vibrant-green uppercase bg-vibrant-green/10 px-2 py-0.5">Active</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant leading-relaxed">
                            Your monthly commitment of <strong>$38/mo</strong> will be securely completed through PayPal using balance or any debit/credit card.
                          </p>
                        </div>

                        <button
                          type="submit" disabled={sponsorLoading}
                          className="w-full bg-[#FFC439] hover:bg-[#F2BA36] text-[#003087] text-xs font-headline font-black uppercase tracking-widest py-4 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 rounded-none shadow-sm"
                        >
                          {sponsorLoading ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-[#003087]" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Connecting to PayPal...
                            </>
                          ) : (
                            <>Sponsor $38/mo with PayPal <MaterialIcon name="arrow_forward" className="text-xs" /></>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <FooterSponsor />
    </div>
  )
}
