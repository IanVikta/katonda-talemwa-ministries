import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
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

  // Checkout modal states
  const [sponsoringChild, setSponsoringChild] = useState<ChildProfile | null>(null)
  const [sponsorSuccess, setSponsorSuccess] = useState(false)
  const [sponsorLoading, setSponsorLoading] = useState(false)
  const [sponsorForm, setSponsorForm] = useState({ name: '', email: '', method: 'card' })

  const offices = [
    { name: 'Uganda Office', code: 'UG', address: 'Kampala, Uganda' },
    { name: 'USA Office', code: 'US', address: 'Tampa, Florida' },
    { name: 'Canada Office', code: 'CA', address: 'Toronto, Ontario' },
    { name: 'United Kingdom Office', code: 'UK', address: 'London, UK' },
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

  const impactItems = [
    { icon: 'family_restroom', title: 'A Loving Family', desc: 'Every baby and child lives in a real home with a Katonda Talemwa mother and siblings.', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
    { icon: 'school', title: 'Quality Education', desc: 'Access to primary, secondary, vocational training, or university.', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
    { icon: 'health_and_safety', title: 'Healthcare & Nutrition', desc: 'Full medical care and highly nutritional meals provided daily.', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
  ]

  return (
    <div className="bg-background text-on-background selection:bg-action-yellow selection:text-deep-black page-enter">
      <Navbar />

      <main className="pt-20">
        <section className="relative bg-deep-black text-pure-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-45">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${IMAGES.sponsorHero}')` }}
            />
          </div>
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center space-y-6">
            <h1 className="font-headline text-headline-xl mb-4 font-black uppercase leading-tight">
              SPONSOR. <span className="text-action-yellow">Change a life.</span> <br />
              Change a story.
            </h1>
            <p className="max-w-2xl mx-auto text-body-lg opacity-90">
              Your sponsorship provides food, shelter, healthcare, education, and most of all, the love of a family.
            </p>
            <a
              href="#sponsor-section"
              className="inline-flex px-8 py-4 bg-vibrant-green hover:bg-vibrant-green/95 text-pure-white font-body font-bold text-sm rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all items-center justify-center gap-2 shadow-lg"
            >
              Start Sponsorship <MaterialIcon name="arrow_downward" className="text-sm" />
            </a>
          </div>
        </section>

        <section className="bg-surface-container border-b border-outline-variant/30 py-4 z-40 relative">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-2">
              <MaterialIcon name="place" className="text-primary" />
              Sponsoring from another region?
            </span>

            <div className="relative">
              <button
                onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                className="flex items-center gap-2 bg-surface border border-outline-variant/60 rounded px-4 py-2 text-sm font-bold text-deep-black hover:border-primary transition-colors shadow-sm"
              >
                <span>{selectedOffice.name} ({selectedOffice.code})</span>
                <MaterialIcon name={officeDropdownOpen ? 'expand_less' : 'expand_more'} />
              </button>

              {officeDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-surface border border-outline-variant rounded shadow-xl py-1 w-64 z-50 animate-[fadeIn_0.2s_ease-out]">
                  {offices.map((o) => (
                    <button
                      key={o.code}
                      onClick={() => {
                        setSelectedOffice(o)
                        setOfficeDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-surface-container text-xs font-bold transition-colors block ${
                        selectedOffice.code === o.code ? 'text-primary' : 'text-on-surface'
                      }`}
                    >
                      <span className="block font-black">{o.name}</span>
                      <span className="block text-xxs opacity-70 font-semibold">{o.address}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold text-label-bold uppercase tracking-widest mb-4 block">The Impact</span>
                <h2 className="font-headline text-headline-lg font-black mb-6 uppercase">
                  WHAT YOUR SPONSORSHIP <br />
                  <span className="text-primary">PROVIDES</span>
                </h2>
                <ul className="space-y-8">
                  {impactItems.map(({ icon, title, desc, iconBg, iconColor }) => (
                    <li key={title} className="flex gap-4">
                      <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center shrink-0 shadow-sm border border-outline-variant/20`}>
                        <MaterialIcon name={icon} className={iconColor} filled={icon === 'family_restroom'} />
                      </div>
                      <div>
                        <h4 className="font-bold text-label-bold text-deep-black uppercase tracking-wide mb-1">{title}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white p-4 rotate-3 shadow-xl border border-outline-variant">
                  <div className="w-full h-full bg-surface-container-highest overflow-hidden">
                    <img className="w-full h-full object-cover" src={IMAGES.sponsorImpact} alt="Smiling child with school book" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary p-6 hidden lg:block rounded-2xl shadow-xl max-w-[220px] border border-pure-white/10">
                  <p className="font-headline text-headline-lg text-pure-white leading-none font-black mb-1">3,000+</p>
                  <p className="text-xs font-semibold text-action-yellow uppercase tracking-wider">Children Rescued</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`py-20 bg-surface-container-low border-t border-outline-variant/30 transition-opacity duration-300 ${
            filtering ? 'opacity-50' : 'opacity-100'
          }`}
          id="sponsor-section"
        >
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-label-bold uppercase tracking-widest block mb-2">Find a Profile</span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black uppercase">MEET THOSE WAITING</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-lg border text-sm font-body font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-vibrant-green text-pure-white border-vibrant-green shadow-sm'
                        : 'bg-surface border-outline-variant/60 text-on-surface hover:bg-surface-container-low hover:border-outline'
                    }`}
                  >
                    <MaterialIcon
                      name={tab.icon || 'school'}
                      className={isActive ? 'text-pure-white' : 'text-primary'}
                    />
                    <span className="truncate">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-outline-variant/35 pb-8">
              <div>
                <h3 className="font-bold text-lg text-deep-black uppercase">Filter Results</h3>
                <p className="text-xs text-on-surface-variant">Narrow down by location, age, or gender.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <label className="font-bold text-xs uppercase text-on-surface-variant mb-2">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => handleFilterChange(() => setGender(e.target.value as GenderFilter))}
                    className="border-outline-variant border rounded px-4 py-2.5 bg-surface text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none min-w-[140px]"
                  >
                    <option value="all">All Genders</option>
                    <option value="boy">Boys</option>
                    <option value="girl">Girls</option>
                    {activeTab.includes('mother') && <option value="woman">Mothers</option>}
                  </select>
                </div>
                {!activeTab.includes('mother') && (
                  <div className="flex flex-col">
                    <label className="font-bold text-xs uppercase text-on-surface-variant mb-2">Age Range</label>
                    <select
                      value={ageRange}
                      onChange={(e) => handleFilterChange(() => setAgeRange(e.target.value as AgeFilter))}
                      className="border-outline-variant border rounded px-4 py-2.5 bg-surface text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none min-w-[140px]"
                    >
                      <option value="all">All Ages</option>
                      <option value="0-5">0 - 5 years</option>
                      <option value="6-12">6 - 12 years</option>
                      <option value="13+">13+ years</option>
                    </select>
                  </div>
                )}
                <div className="flex flex-col">
                  <label className="font-bold text-xs uppercase text-on-surface-variant mb-2">Village / Location</label>
                  <select
                    value={location}
                    onChange={(e) => handleFilterChange(() => setLocation(e.target.value as LocationFilter))}
                    className="border-outline-variant border rounded px-4 py-2.5 bg-surface text-sm font-semibold focus:border-primary focus:ring-1 focus:ring-primary outline-none min-w-[180px]"
                  >
                    <option value="all">All Locations</option>
                    <option value="Gulu, Uganda">Gulu, Uganda</option>
                    <option value="Kampala, Uganda">Kampala, Uganda</option>
                    <option value="Juba, South Sudan">Juba, South Sudan</option>
                  </select>
                </div>
              </div>
            </div>

            {visible.length === 0 ? (
              <div className="text-center py-20 bg-surface border border-outline-variant rounded-xl shadow-inner">
                <MaterialIcon name="search_off" className="text-5xl mb-4 text-primary" />
                <p className="text-body-lg font-bold text-deep-black uppercase">No Profiles Found</p>
                <p className="text-sm text-on-surface-variant mt-2">Try adjusting your filter settings above.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visible.map((child) => (
                  <div key={child.id} className="group bg-surface border border-outline-variant/60 rounded-2xl flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-high">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={child.image}
                        alt={`${child.name}`}
                      />
                      <div className="absolute bottom-4 left-4 bg-primary/95 text-pure-white px-4 py-1.5 text-xs font-body font-semibold rounded-full shadow-md select-none border border-action-yellow/20">
                        {child.name}{activeTab.includes('mother') ? '' : `, ${child.age}`}
                      </div>
                    </div>
                    <div className="p-8 grow flex flex-col justify-between">
                      <div>
                        <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{child.location}</span>
                        <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-8">{child.description}</p>
                      </div>
                      <button 
                        onClick={() => {
                          setSponsoringChild(child)
                          setSponsorSuccess(false)
                          setSponsorLoading(false)
                          setSponsorForm({ name: '', email: '', method: 'card' })
                        }}
                        className="w-full py-3 bg-vibrant-green hover:bg-vibrant-green/95 text-pure-white font-body font-semibold rounded-lg shadow-sm hover:shadow-md active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 cursor-pointer border border-vibrant-green"
                      >
                        Sponsor {child.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {visibleCount < filtered.length && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setVisibleCount((c) => c + 3)}
                  className="px-10 py-4 border-2 border-primary text-primary font-headline text-button-text uppercase tracking-widest hover:bg-primary hover:text-pure-white active:scale-95 transition-all rounded font-bold shadow-sm"
                >
                  Load More Profiles
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-primary text-pure-white">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center">
            <h3 className="font-headline text-headline-lg mb-12 font-black uppercase tracking-wider">TRANSPARENT & TRUSTED</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: 'verified', title: '100%', desc: "Of sponsorship goes directly to the person's care and family support." },
                { icon: 'groups', title: 'Holistic Care', desc: 'Housing, schooling, clothing, nutrition, and medical support are all provided.' },
                { icon: 'mail', title: 'Stay Connected', desc: 'Receive regular letters, updates, and photos from who you sponsor.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="p-8 border border-pure-white/20 rounded-xl bg-pure-white/5 space-y-4">
                  <MaterialIcon name={icon} className="text-action-yellow text-5xl" filled />
                  <h4 className="font-headline text-headline-md font-bold uppercase">{title}</h4>
                  <p className="opacity-90 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface-container">
          <div className="max-w-3xl mx-auto px-4 md:px-margin-desktop text-center space-y-6">
            <h3 className="font-headline text-headline-md mb-2 font-black text-deep-black uppercase">CAN&apos;T SPONSOR MONTHLY?</h3>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Give a one-time gift to our Sustainability Fund to help build more houses, schools, and classrooms.
            </p>
            <button className="px-10 py-4 bg-primary text-pure-white font-headline text-button-text rounded uppercase hover:brightness-110 active:scale-95 transition-all font-bold shadow-md">
              Make a One-Time Donation
            </button>
          </div>
        </section>
      </main>

      {/* Sponsorship Modal Overlay */}
      {sponsoringChild && (
        <div className="fixed inset-0 bg-deep-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-surface rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row relative animate-[scaleIn_0.3s_ease-out] border border-outline-variant/35 text-left">
            {/* Close Button */}
            <button
              onClick={() => setSponsoringChild(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface transition-colors cursor-pointer z-10 border border-outline-variant/30"
            >
              <MaterialIcon name="close" className="text-sm" />
            </button>

            {sponsorSuccess ? (
              <div className="p-8 md:p-12 w-full text-center space-y-6 flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-20 h-20 bg-vibrant-green/10 text-vibrant-green rounded-full flex items-center justify-center animate-[bounce_1s_ease-out]">
                  <MaterialIcon name="check_circle" className="text-5xl" filled />
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline text-2xl font-black uppercase text-deep-black">Sponsorship Confirmed!</h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                    Thank you so much! You are now a sponsor for <span className="font-bold text-primary">{sponsoringChild.name}</span>. 
                    We have sent a confirmation email to <span className="font-semibold text-deep-black">{sponsorForm.email}</span>.
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 text-left max-w-md w-full">
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    <span className="font-bold text-primary uppercase tracking-wider block mb-1">What happens next?</span>
                    We will send you a welcome package via email and mail including a welcome letter, more details about {sponsoringChild.name}&apos;s background, and instructions on how you can write regular letters.
                  </p>
                </div>
                <button
                  onClick={() => setSponsoringChild(null)}
                  className="px-8 py-3 bg-primary hover:bg-primary/95 text-pure-white rounded-lg font-body font-semibold text-sm cursor-pointer shadow-md active:scale-95 transition-all"
                >
                  Return to Profiles
                </button>
              </div>
            ) : (
              <>
                {/* Child Summary Side */}
                <div className="md:w-5/12 bg-surface-container relative min-h-[240px] md:min-h-full">
                  <img
                    className="w-full h-full object-cover absolute inset-0"
                    src={sponsoringChild.image}
                    alt={sponsoringChild.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-pure-white space-y-1">
                    <span className="text-xxs font-extrabold uppercase tracking-widest text-action-yellow bg-primary/80 px-2.5 py-1 rounded-full">
                      $38 / Month
                    </span>
                    <h3 className="font-headline text-2xl font-black uppercase tracking-wide pt-1">
                      {sponsoringChild.name}{activeTab.includes('mother') ? '' : `, ${sponsoringChild.age}`}
                    </h3>
                    <p className="text-xs text-pure-white/80 flex items-center gap-1">
                      <MaterialIcon name="place" className="text-xs" />
                      {sponsoringChild.location}
                    </p>
                  </div>
                </div>

                {/* Checkout Fields Side */}
                <div className="md:w-7/12 p-8 md:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="font-headline text-lg font-black uppercase text-deep-black">Sponsorship Details</h4>
                    <p className="text-xs text-on-surface-variant">Complete this form to start your recurring sponsorship.</p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSponsorLoading(true)
                      setTimeout(() => {
                        setSponsorLoading(false)
                        setSponsorSuccess(true)
                      }, 1500)
                    }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={sponsorForm.name}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, name: e.target.value })}
                        className="w-full border border-outline-variant/60 rounded-lg px-4 py-2.5 bg-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={sponsorForm.email}
                        onChange={(e) => setSponsorForm({ ...sponsorForm, email: e.target.value })}
                        className="w-full border border-outline-variant/60 rounded-lg px-4 py-2.5 bg-surface text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">Payment Method</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'card', label: 'Card', icon: 'credit_card' },
                          { id: 'momo', label: 'Mobile Money', icon: 'phone_android' },
                          { id: 'wire', label: 'Wire Transfer', icon: 'account_balance' },
                        ].map((pm) => (
                          <button
                            key={pm.id}
                            type="button"
                            onClick={() => setSponsorForm({ ...sponsorForm, method: pm.id })}
                            className={`py-2 px-1 rounded-lg border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              sponsorForm.method === pm.id
                                ? 'bg-primary/10 border-primary text-primary'
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
                      <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/35 text-[11px] text-on-surface-variant leading-relaxed">
                        <span className="font-bold text-deep-black uppercase block mb-0.5">Mobile Money Directives</span>
                        Dial *165*3# (MTN) or *185*9# (Airtel) and input merchant/business code KTM987. Enter amount equivalent to $38.
                      </div>
                    )}

                    {sponsorForm.method === 'wire' && (
                      <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/35 text-[11px] text-on-surface-variant leading-relaxed">
                        <span className="font-bold text-deep-black uppercase block mb-0.5">Stanbic Bank Wire details</span>
                        Branch: Mbarara Main | A/C No: 9030012345678 (USD) | Name: Katonda Talemwa Ministries.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sponsorLoading}
                      className="w-full bg-vibrant-green hover:bg-vibrant-green/95 text-pure-white text-sm font-body font-bold py-3.5 rounded-lg shadow-md active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {sponsorLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-pure-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Sponsor $38/mo
                          <MaterialIcon name="arrow_forward" className="text-xs" />
                        </>
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
