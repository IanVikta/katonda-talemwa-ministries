import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterSponsor } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES, type ChildProfile } from '../data/content'

type GenderFilter = 'all' | 'boy' | 'girl' | 'woman'
type AgeFilter = 'all' | '0-5' | '6-12' | '13+'
type LocationFilter = 'all' | 'Gulu, Uganda' | 'Kampala, Uganda' | 'Juba, South Sudan'

function matchesAge(age: number, filter: AgeFilter) {
  if (filter === 'all') return true
  if (filter === '0-5') return age <= 5
  if (filter === '6-12') return age >= 6 && age <= 12
  return age >= 13
}

export default function SponsorPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = (searchParams.get('tab') as 'baby' | 'child' | 'mother' | 'neighbourhood-mother') || 'child'

  const [gender, setGender] = useState<GenderFilter>('all')
  const [ageRange, setAgeRange] = useState<AgeFilter>('all')
  const [location, setLocation] = useState<LocationFilter>('all')
  const [filtering, setFiltering] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)

  const [sponsoringChild, setSponsoringChild] = useState<ChildProfile | null>(null)
  const [sponsorSuccess, setSponsorSuccess] = useState(false)
  const [sponsorLoading, setSponsorLoading] = useState(false)
  const [sponsorForm, setSponsorForm] = useState({ name: '', email: '', method: 'card' })

  const offices = [
    { name: 'Uganda Office', code: 'UG', address: 'Kampala, Uganda' },
    { name: 'USA Office', code: 'US', address: 'Tampa, Florida' },
    { name: 'Canada Office', code: 'CA', address: 'Toronto, Ontario' },
    { name: 'United Kingdom', code: 'UK', address: 'London, UK' },
    { name: 'Australia Office', code: 'AU', address: 'Sydney, Australia' }
  ]
  const [selectedOffice, setSelectedOffice] = useState(offices[0])
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false)

  const tabs = [
    { id: 'baby', label: 'Baby Rescue', icon: 'child_care' },
    { id: 'child', label: 'School Children', icon: 'school' },
    { id: 'mother', label: 'Village Mothers', icon: 'diversity_1' },
    { id: 'neighbourhood-mother', label: 'Community Mothers', icon: 'groups' }
  ]

  const filtered = useMemo(() => {
    return children.filter((child) => {
      if (child.type !== activeTab) return false
      if (gender !== 'all' && child.gender !== gender) return false
      if (!matchesAge(child.age, ageRange)) return false
      if (location !== 'all' && child.location !== location) return false
      return true
    })
  }, [activeTab, gender, ageRange, location])

  const visible = filtered.slice(0, visibleCount)

  const handleFilterChange = (setter: () => void) => {
    setFiltering(true)
    setter()
    setTimeout(() => setFiltering(false), 200)
  }

  const handleTabChange = (tabId: string) => {
    setFiltering(true)
    setSearchParams({ tab: tabId })
    setVisibleCount(6)
    setGender('all')
    setAgeRange('all')
    setLocation('all')
    setTimeout(() => setFiltering(false), 200)
  }

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const impactItems = [
    { icon: 'family_restroom', title: 'A Loving Family', desc: 'Every baby and child lives in a real home with a Katonda Talemwa mother and siblings.' },
    { icon: 'school', title: 'Quality Education', desc: 'Access to primary, secondary, vocational training, or university education.' },
    { icon: 'health_and_safety', title: 'Healthcare & Nutrition', desc: 'Full medical care and highly nutritional meals provided every day.' },
  ]

  const trustItems = [
    { icon: 'verified', stat: '100%', desc: "Of sponsorship goes directly to the person's care and family support." },
    { icon: 'groups', stat: 'Holistic Care', desc: 'Housing, schooling, clothing, nutrition, and medical support all provided.' },
    { icon: 'mail', stat: 'Stay Connected', desc: 'Receive regular letters, updates, and photos from who you sponsor.' },
  ]

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
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
                Change a story forever
              </span>
              <h1 data-aos="fade-right" data-aos-delay="100" className="font-headline text-4xl sm:text-6xl font-black uppercase leading-none tracking-tight">
                Sponsor. <br />
                <span className="text-action-yellow">Change a life.</span>
              </h1>
              <p data-aos="fade-right" data-aos-delay="200" className="text-base font-light opacity-90 leading-relaxed max-w-lg">
                Your sponsorship provides food, shelter, healthcare, education, and most of all — the love of a family.
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

        {/* ── OFFICE SELECTOR STRIP ── */}
        <section className="bg-surface-container border-b border-outline-variant/40 py-3">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs font-bold text-on-surface-variant flex items-center gap-2 uppercase tracking-wider">
              <MaterialIcon name="place" className="text-vibrant-green text-sm" />
              Sponsoring from another region?
            </span>
            <div className="relative">
              <button
                onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                className="flex items-center gap-2 bg-surface border border-outline-variant/60 px-4 py-2 text-xs font-bold text-deep-black hover:border-vibrant-green transition-colors rounded-none"
              >
                <span>{selectedOffice.name} ({selectedOffice.code})</span>
                <MaterialIcon name={officeDropdownOpen ? 'expand_less' : 'expand_more'} className="text-sm" />
              </button>
              {officeDropdownOpen && (
                <div className="absolute right-0 mt-1 bg-surface border border-outline-variant shadow-xl py-1 w-56 z-50 rounded-none animate-[fadeIn_0.2s_ease-out]">
                  {offices.map((o) => (
                    <button
                      key={o.code}
                      onClick={() => { setSelectedOffice(o); setOfficeDropdownOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-surface-container-low text-xs font-bold transition-colors block ${selectedOffice.code === o.code ? 'text-vibrant-green' : 'text-on-surface'}`}
                    >
                      <span className="block font-black">{o.name}</span>
                      <span className="block text-[10px] opacity-60 font-semibold">{o.address}</span>
                    </button>
                  ))}
                </div>
              )}
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
                  <img className="w-full aspect-square object-cover rounded-none" src={IMAGES.sponsorImpact} alt="Smiling child with school book" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-vibrant-green text-pure-white p-6 hidden lg:block rounded-none shadow-xl max-w-[200px] border-t-4 border-action-yellow">
                  <p className="font-headline text-3xl text-pure-white leading-none font-black mb-1">3,000+</p>
                  <p className="text-xs font-bold text-action-yellow uppercase tracking-wider">Children Rescued</p>
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
            <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-3.5 border text-xs font-headline font-black uppercase tracking-wider transition-all cursor-pointer rounded-none ${
                      isActive
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
                    {activeTab.includes('mother') && <option value="woman">Mothers</option>}
                  </select>
                </div>
                {!activeTab.includes('mother') && (
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
                )}
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-[10px] uppercase text-on-surface-variant tracking-wider">Village / Location</label>
                  <select
                    value={location}
                    onChange={(e) => handleFilterChange(() => setLocation(e.target.value as LocationFilter))}
                    className="border border-outline-variant/60 px-3 py-2.5 bg-surface text-xs font-semibold focus:border-vibrant-green focus:ring-1 focus:ring-vibrant-green outline-none min-w-[160px] rounded-none"
                  >
                    <option value="all">All Locations</option>
                    <option value="Gulu, Uganda">Gulu, Uganda</option>
                    <option value="Kampala, Uganda">Kampala, Uganda</option>
                    <option value="Juba, South Sudan">Juba, South Sudan</option>
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
                        alt={child.name}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black/80 to-transparent p-4 pt-8">
                        <span className="text-action-yellow font-headline text-xs font-black uppercase tracking-widest block mb-0.5">
                          {child.location}
                        </span>
                        <h3 className="font-headline text-lg font-black text-pure-white uppercase leading-tight">
                          {child.name}{!activeTab.includes('mother') ? `, ${child.age}` : ''}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 grow flex flex-col justify-between gap-6">
                      <p className="text-sm text-on-surface-variant font-light leading-relaxed line-clamp-3">{child.description}</p>
                      <button
                        onClick={() => {
                          setSponsoringChild(child)
                          setSponsorSuccess(false)
                          setSponsorLoading(false)
                          setSponsorForm({ name: '', email: '', method: 'card' })
                        }}
                        className="w-full py-3.5 bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer rounded-none border border-vibrant-green"
                      >
                        Sponsor {child.name}
                      </button>
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

      {/* ── SPONSORSHIP MODAL ── */}
      {sponsoringChild && (
        <div className="fixed inset-0 bg-deep-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-surface shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row relative animate-[scaleIn_0.3s_ease-out] border border-outline-variant/40 text-left rounded-none">
            <button
              onClick={() => setSponsoringChild(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors cursor-pointer z-10 border border-outline-variant/40 rounded-none"
            >
              <MaterialIcon name="close" className="text-sm" />
            </button>

            {sponsorSuccess ? (
              <div className="p-10 w-full text-center space-y-6 flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-20 h-20 bg-vibrant-green/10 text-vibrant-green flex items-center justify-center animate-[bounce_1s_ease-out] border border-vibrant-green/20">
                  <MaterialIcon name="check_circle" className="text-5xl" filled />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl font-black uppercase text-deep-black">Sponsorship Confirmed!</h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Thank you! You are now sponsoring <span className="font-bold text-vibrant-green">{sponsoringChild.name}</span>. A confirmation email has been sent to <span className="font-semibold text-deep-black">{sponsorForm.email}</span>.
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
                {/* Child photo side */}
                <div className="md:w-5/12 relative min-h-[240px] md:min-h-full bg-surface-container">
                  <img className="w-full h-full object-cover absolute inset-0" src={sponsoringChild.image} alt={sponsoringChild.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-pure-white space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-action-yellow bg-vibrant-green/90 px-3 py-1 block w-fit">
                      $38 / Month
                    </span>
                    <h3 className="font-headline text-xl font-black uppercase tracking-wide pt-1">
                      {sponsoringChild.name}{!activeTab.includes('mother') ? `, ${sponsoringChild.age}` : ''}
                    </h3>
                    <p className="text-xs text-pure-white/80 flex items-center gap-1">
                      <MaterialIcon name="place" className="text-xs" />
                      {sponsoringChild.location}
                    </p>
                  </div>
                </div>

                {/* Checkout side */}
                <div className="md:w-7/12 p-8 md:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="font-headline text-lg font-black uppercase text-deep-black">Sponsorship Details</h4>
                    <p className="text-xs text-on-surface-variant">Complete this form to start your recurring sponsorship.</p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSponsorLoading(true)
                      setTimeout(() => { setSponsorLoading(false); setSponsorSuccess(true) }, 1500)
                    }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Full Name</label>
                      <input
                        type="text" required placeholder="John Doe"
                        value={sponsorForm.name}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, name: e.target.value })}
                        className="w-full border border-outline-variant/60 px-4 py-2.5 bg-surface text-sm focus:border-vibrant-green focus:ring-1 focus:ring-vibrant-green outline-none rounded-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Email Address</label>
                      <input
                        type="email" required placeholder="john@example.com"
                        value={sponsorForm.email}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, email: e.target.value })}
                        className="w-full border border-outline-variant/60 px-4 py-2.5 bg-surface text-sm focus:border-vibrant-green focus:ring-1 focus:ring-vibrant-green outline-none rounded-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Payment Method</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'card', label: 'Card', icon: 'credit_card' },
                          { id: 'momo', label: 'Mobile Money', icon: 'phone_android' },
                          { id: 'wire', label: 'Wire Transfer', icon: 'account_balance' },
                        ].map((pm) => (
                          <button
                            key={pm.id} type="button"
                            onClick={() => setSponsorForm({ ...sponsorForm, method: pm.id })}
                            className={`py-2 px-1 border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer rounded-none ${
                              sponsorForm.method === pm.id
                                ? 'bg-vibrant-green/10 border-vibrant-green text-vibrant-green'
                                : 'bg-surface border-outline-variant/40 hover:bg-surface-container-low text-on-surface-variant'
                            }`}
                          >
                            <MaterialIcon name={pm.icon} className="text-sm" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-center">{pm.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {sponsorForm.method === 'momo' && (
                      <div className="p-3 bg-surface-container-low border border-outline-variant/30 text-[11px] text-on-surface-variant leading-relaxed rounded-none">
                        <span className="font-bold text-deep-black uppercase block mb-0.5">Mobile Money Directives</span>
                        Dial *165*3# (MTN) or *185*9# (Airtel) and input merchant code KTM987. Enter amount = $38.
                      </div>
                    )}
                    {sponsorForm.method === 'wire' && (
                      <div className="p-3 bg-surface-container-low border border-outline-variant/30 text-[11px] text-on-surface-variant leading-relaxed rounded-none">
                        <span className="font-bold text-deep-black uppercase block mb-0.5">Stanbic Bank Wire Details</span>
                        Branch: Mbarara Main | A/C: 9030012345678 (USD) | Name: Katonda Talemwa Ministries.
                      </div>
                    )}

                    <button
                      type="submit" disabled={sponsorLoading}
                      className="w-full bg-vibrant-green hover:brightness-110 text-pure-white text-xs font-headline font-black uppercase tracking-widest py-4 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 rounded-none"
                    >
                      {sponsorLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>Sponsor $38/mo <MaterialIcon name="arrow_forward" className="text-xs" /></>
                      )}
                    </button>
                  </form>
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
