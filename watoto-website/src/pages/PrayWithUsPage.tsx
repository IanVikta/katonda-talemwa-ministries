import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'

const prayerTopics = [
  { day: 'Monday', topic: 'Protection & Safety', verse: 'Psalm 91:11', text: 'Pray for every child in our villages to be protected from harm, illness, and fear.', color: 'border-vibrant-green' },
  { day: 'Tuesday', topic: 'Education & Wisdom', verse: 'Proverbs 2:6', text: 'Pray for teachers, students, and learning — that every child may excel in school.', color: 'border-action-yellow' },
  { day: 'Wednesday', topic: 'The Village Mothers', verse: 'Isaiah 40:31', text: 'Pray for strength, joy, and wisdom for each mother who dedicates her life to these children.', color: 'border-vibrant-green' },
  { day: 'Thursday', topic: 'Sponsors & Partners', verse: '2 Corinthians 9:7', text: 'Pray for generosity to flow and for sponsors to feel the deep connection with those they support.', color: 'border-action-yellow' },
  { day: 'Friday', topic: 'Healing & Health', verse: 'Jeremiah 30:17', text: 'Pray for the clinics, nurses, and every sick child to receive healing and restored health.', color: 'border-vibrant-green' },
  { day: 'Saturday', topic: 'Spiritual Growth', verse: 'Ephesians 3:17', text: 'Pray that faith takes deep root in every heart, and that the church community grows strong.', color: 'border-action-yellow' },
  { day: 'Sunday', topic: 'The Nations', verse: 'Matthew 28:19', text: 'Pray for Katonda Talemwa\'s mission to reach every vulnerable child across East Africa and beyond.', color: 'border-vibrant-green' },
]

const testimonials = [
  { name: 'Rachel M.', country: 'United Kingdom', text: 'Praying for these children for three years has changed my own heart more than I could have expected. I feel deeply connected to this family.', avatar: 'R' },
  { name: 'James K.', country: 'Canada', text: 'Every morning I open the prayer guide and intercede for my sponsored child Grace. The updates I receive confirm that prayer truly works.', avatar: 'J' },
  { name: 'Sister Agnes', country: 'Uganda', text: 'When people across the world pray with us, we feel it. The children know they are not forgotten — by man or by God.', avatar: 'A' },
]

import api from '../services/api'
import { isValidEmail, isValidName, isNonEmpty, sanitizeName, handleNameKeyDown } from '../utils/validation'
import SEO from '../components/SEO'

export default function PrayWithUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', request: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [activeDay, setActiveDay] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const updateField = (field: string, val: string) => {
    const cleanVal = field === 'name' ? sanitizeName(val) : val
    setFormData(prev => ({ ...prev, [field]: cleanVal }))
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!isNonEmpty(formData.name)) {
      errs.name = 'Please enter your name.'
    } else if (!isValidName(formData.name)) {
      errs.name = 'Name can only contain letters (no numbers).'
    }
    if (!isNonEmpty(formData.email)) {
      errs.email = 'Please enter your email address.'
    } else if (!isValidEmail(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!isNonEmpty(formData.request)) {
      errs.request = 'Please enter your prayer request.'
    } else if (formData.request.trim().length < 5) {
      errs.request = 'Prayer request should be at least 5 characters.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setErrorMessage(null)

    const res = await api.submitPrayer(formData)
    setLoading(false)

    if (res.success) {
      setSubmitted(true)
      setErrors({})
    } else {
      setErrorMessage(res.error || 'Failed to submit prayer request. Please try again.')
    }
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Pray With Us | Prayer Requests & Global Intercession"
        description="Join our global prayer team interceding for orphaned children, widows, community leaders, and ministry staff in Uganda. Submit your personal prayer requests."
        canonicalPath="/pray-with-us"
        keywords="prayer requests, pray for Uganda orphans, Christian intercession, Katonda Talemwa prayer team"
      />
      <Navbar />

      <main className="pt-20">

        {/* ── HERO: Centered devotional, dark ── */}
        <section className="bg-deep-black text-pure-white py-28 relative overflow-hidden">
          {/* subtle texture */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)' }} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-8">
            <div data-aos="fade-down">
              <MaterialIcon name="church" className="text-action-yellow text-5xl mx-auto block mb-6" />
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block mb-4">Get Involved — Prayer</span>
              <h1 className="font-headline text-5xl sm:text-7xl font-black uppercase leading-none tracking-tight">
                Pray <span className="text-vibrant-green">With</span> Us
              </h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="100" className="text-base font-light opacity-90 leading-relaxed max-w-xl mx-auto">
              Prayer is the foundation of everything we do at Katonda Talemwa Ministries. Join thousands of intercessors around the world lifting these children before the throne of God daily.
            </p>
            {/* Scripture */}
            <div data-aos="fade-up" data-aos-delay="200" className="border border-pure-white/10 bg-pure-white/5 p-8 max-w-xl mx-auto">
              <p className="font-serif italic text-xl text-pure-white/90 leading-relaxed">
                &ldquo;The prayer of a righteous person is powerful and effective.&rdquo;
              </p>
              <p className="text-action-yellow text-xs font-black uppercase tracking-widest mt-4">— James 5:16</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <a href="#prayer-calendar" className="inline-flex items-center gap-2 bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 transition-all rounded-none">
                View Prayer Calendar <MaterialIcon name="keyboard_arrow_down" className="text-sm" />
              </a>
            </div>
          </div>
        </section>

        {/* ── PRAYER STATS STRIP ── */}
        <section className="bg-vibrant-green border-b-4 border-action-yellow">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 divide-x divide-pure-white/20">
            {[
              { stat: '10,000+', label: 'Global Prayer Partners' },
              { stat: '30 yrs', label: 'Of Faithful Prayer' },
              { stat: '7 Days', label: 'Weekly Prayer Guide' },
              { stat: '∞', label: 'Lives Touched by Prayer' },
            ].map(({ stat, label }, i) => (
              <div key={label} data-aos="fade-up" data-aos-delay={i * 80} className="py-8 px-6 text-pure-white text-center">
                <div className="font-headline text-2xl sm:text-3xl font-black text-action-yellow">{stat}</div>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRAYER CALENDAR: Interactive tabs ── */}
        <section id="prayer-calendar" className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-lg mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Weekly Prayer Guide</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">7-Day Prayer Calendar</h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            {/* Day tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {prayerTopics.map((p, i) => (
                <button
                  key={p.day}
                  onClick={() => setActiveDay(i)}
                  className={`font-headline text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-none transition-all border ${activeDay === i ? 'bg-vibrant-green text-pure-white border-vibrant-green' : 'bg-surface border-outline-variant/60 text-on-surface hover:border-vibrant-green'}`}
                >
                  {p.day}
                </button>
              ))}
            </div>

            {/* Active prayer card */}
            <div className={`border-l-8 ${prayerTopics[activeDay].color} bg-surface border border-outline-variant/50 p-10 md:p-14 rounded-none max-w-3xl mx-auto transition-all duration-300`}>
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green">{prayerTopics[activeDay].day}&apos;s Focus</span>
                <h3 className="font-headline text-3xl font-black uppercase text-deep-black">{prayerTopics[activeDay].topic}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed text-lg">{prayerTopics[activeDay].text}</p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-3">
                  <MaterialIcon name="menu_book" className="text-action-yellow text-xl" />
                  <span className="font-headline text-sm font-black text-vibrant-green uppercase tracking-wider">Scripture: {prayerTopics[activeDay].verse}</span>
                </div>
              </div>
            </div>

            {/* All days compact list */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-px bg-outline-variant/40 border border-outline-variant/40 max-w-5xl mx-auto">
              {prayerTopics.map((p, i) => (
                <button
                  key={p.day}
                  onClick={() => setActiveDay(i)}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  className={`p-4 text-left transition-all ${activeDay === i ? 'bg-vibrant-green text-pure-white' : 'bg-surface hover:bg-surface-container-low'}`}
                >
                  <span className={`text-[9px] font-black uppercase tracking-widest block ${activeDay === i ? 'text-action-yellow' : 'text-vibrant-green'}`}>{p.day}</span>
                  <h4 className={`font-headline text-xs font-black uppercase mt-1 leading-tight ${activeDay === i ? 'text-pure-white' : 'text-deep-black'}`}>{p.topic}</h4>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRAYER TESTIMONIALS: Horizontal card strip ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Prayer Community</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Voices From the <span className="text-vibrant-green">Prayer Family</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/50">
              {testimonials.map((t, i) => (
                <div key={t.name} data-aos="fade-up" data-aos-delay={i * 100} className={`p-8 border-r border-outline-variant/50 last:border-r-0 flex flex-col gap-6 ${i === 1 ? 'bg-surface-container-low' : 'bg-surface'}`}>
                  <MaterialIcon name="format_quote" className="text-action-yellow text-3xl" filled />
                  <p className="font-serif italic text-base text-on-surface leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
                    <div className="w-9 h-9 bg-vibrant-green text-pure-white font-headline font-black text-sm flex items-center justify-center rounded-none">{t.avatar}</div>
                    <div>
                      <p className="font-bold text-xs text-deep-black uppercase tracking-wide">{t.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{t.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRAYER REQUEST FORM + HOW WE PRAY: Side by side ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-t border-outline-variant/30">
          {/* Left: How we use prayer requests */}
          <div data-aos="fade-right" className="bg-surface-container py-16 px-10 md:px-14 space-y-8 border-r border-outline-variant/30">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">How It Works</span>
              <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-none">
                How We Pray <br />
                <span className="text-vibrant-green">Your Requests</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow" />
            </div>
            <div className="space-y-0 divide-y divide-outline-variant/40 border border-outline-variant/40">
              {[
                { icon: 'inbox', step: '01', title: 'Submit Your Request', desc: 'Fill the form and our prayer team receives it immediately.' },
                { icon: 'groups', step: '02', title: 'Staff Devotion', desc: 'Staff pray corporately for all requests each Monday morning.' },
                { icon: 'person', step: '03', title: 'Individual Intercession', desc: 'Specific needs are assigned to dedicated prayer partners.' },
                { icon: 'mail', step: '04', title: 'Follow-Up', desc: 'We check back with you after 30 days for testimony and updates.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-5 bg-surface hover:bg-surface-container-low transition-colors">
                  <div className="w-9 h-9 bg-vibrant-green/10 border border-vibrant-green/20 flex items-center justify-center shrink-0">
                    <MaterialIcon name={s.icon} className="text-vibrant-green text-sm" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-action-yellow block">{s.step}</span>
                    <h4 className="font-headline text-xs font-black uppercase text-deep-black">{s.title}</h4>
                    <p className="text-xs text-on-surface-variant font-light mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-vibrant-green/10 border border-vibrant-green/20 p-6 space-y-2">
              <MaterialIcon name="lock" className="text-vibrant-green text-xl" />
              <h4 className="font-headline text-xs font-black uppercase text-deep-black">Confidential</h4>
              <p className="text-xs text-on-surface-variant font-light leading-relaxed">Your prayer requests are handled with complete confidentiality and pastoral care. They are never shared publicly.</p>
            </div>
          </div>

          {/* Right: form */}
          <div data-aos="fade-left" className="bg-deep-black py-16 px-10 md:px-14 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">Submit a Request</span>
              <h2 className="font-headline text-3xl font-black uppercase text-pure-white leading-none">
                Share Your <br />
                <span className="text-vibrant-green">Prayer Need</span>
              </h2>
            </div>

            {submitted ? (
              <div className="border border-vibrant-green/30 bg-vibrant-green/10 p-10 text-center space-y-4">
                <MaterialIcon name="favorite" className="text-vibrant-green text-4xl mx-auto block" filled />
                <h3 className="font-headline text-xl font-black uppercase text-pure-white">We Are Praying!</h3>
                <p className="text-sm text-pure-white/80 leading-relaxed">
                  Thank you, <span className="font-bold text-action-yellow">{formData.name}</span>. Your request has been received and our team will begin praying immediately.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 bg-red-500/20 border border-red-500/50 text-red-200 text-xs">
                    {errorMessage}
                  </div>
                )}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Your Name *</label>
                  <input type="text" placeholder="Your name" value={formData.name}
                    onChange={e => updateField('name', e.target.value)}
                    onKeyDown={handleNameKeyDown}
                    className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30 ${
                      errors.name ? 'border-red-500' : 'border-pure-white/15'
                    }`} />
                  {errors.name && (
                    <p className="text-red-400 text-xs font-medium mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Email Address *</label>
                  <input type="email" placeholder="for follow-up" value={formData.email}
                    onChange={e => updateField('email', e.target.value)}
                    className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30 ${
                      errors.email ? 'border-red-500' : 'border-pure-white/15'
                    }`} />
                  {errors.email && (
                    <p className="text-red-400 text-xs font-medium mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Your Prayer Request *</label>
                  <textarea rows={6} placeholder="Share what is on your heart…" value={formData.request}
                    onChange={e => updateField('request', e.target.value)}
                    className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none resize-none placeholder:text-pure-white/30 ${
                      errors.request ? 'border-red-500' : 'border-pure-white/15'
                    }`} />
                  {errors.request && (
                    <p className="text-red-400 text-xs font-medium mt-1">{errors.request}</p>
                  )}
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-action-yellow hover:brightness-110 text-deep-black font-headline text-xs font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 disabled:opacity-70 transition-all active:scale-[0.99] rounded-none">
                  {loading ? (<><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>) : (<>Submit Prayer Request <MaterialIcon name="favorite" className="text-sm" /></>)}
                </button>
              </form>
            )}

            <div className="border-t border-pure-white/10 pt-6 space-y-3">
              <p className="text-xs text-pure-white/60 font-light">Also join us live for prayer:</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-xs text-pure-white/80"><MaterialIcon name="radio" className="text-action-yellow text-sm" /><span>Monday Morning Prayer — 6:00 AM EAT (Online)</span></div>
                <div className="flex items-center gap-3 text-xs text-pure-white/80"><MaterialIcon name="church" className="text-vibrant-green text-sm" /><span>Wednesday Intercession — Mbarara Village Campus</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING: Join prayer community ── */}
        <section className="py-20 bg-surface-container text-center">
          <div data-aos="fade-up" className="max-w-2xl mx-auto px-4 space-y-6">
            <MaterialIcon name="groups" className="text-vibrant-green text-4xl mx-auto block" />
            <h3 className="font-headline text-3xl font-black uppercase text-deep-black">Join the Global Prayer Community</h3>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Sign up to receive our weekly prayer email every Sunday evening with specific prayer points, scripture, and updates from the villages.
            </p>
            <Link to="/contact" className="inline-block bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-10 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none">
              Subscribe to Weekly Prayer
            </Link>
          </div>
        </section>

      </main>
      <FooterProgram highlightProgram="church" />
    </div>
  )
}
