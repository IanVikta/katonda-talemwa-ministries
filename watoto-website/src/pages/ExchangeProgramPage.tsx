import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

const exchangeTracks = [
  {
    id: 'mission-trips',
    icon: 'church',
    title: 'Short-Term Mission Trips',
    subtitle: 'Churches, Youth & Faith Groups',
    duration: '10–14 Days',
    location: 'Kampala & Gulu Villages',
    color: 'bg-vibrant-green',
    desc: 'Engage in hands-on ministry, community outreach, Vacation Bible School (VBS), village devotions, and practical building projects alongside local leaders.',
    features: [
      'Children & Youth Discipleship',
      'Village Community Outreach',
      'Construction & Repairs Assistance',
      'Church & Worship Fellowship',
    ],
  },
  {
    id: 'academic-exchange',
    icon: 'school',
    title: 'Academic & Student Exchange',
    subtitle: 'High Schools, Colleges & Universities',
    duration: '2–4 Weeks',
    location: 'All KTM Centers',
    color: 'bg-action-yellow',
    desc: 'Empower students through cross-cultural immersion, service-learning, educational exchange, peer tutoring, and field research in East Africa.',
    features: [
      'Classroom & Literacy Support',
      'Cross-Cultural Dialogues',
      'Service-Learning Credits',
      'Youth Mentorship Clubs',
    ],
  },
  {
    id: 'professional-exchange',
    icon: 'medical_services',
    title: 'Professional & Medical Exchange',
    subtitle: 'Doctors, Nurses, Educators & Engineers',
    duration: '1–8 Weeks',
    location: 'Gulu Clinics & Schools',
    color: 'bg-deep-black',
    desc: 'Share specialized expertise with our Ugandan staff. Conduct mobile health clinics, train local teachers, or improve village infrastructure.',
    features: [
      'Mobile Clinic Screenings',
      'Staff Training & Workshops',
      'Specialized Medical Care',
      'Capacity Building & Mentorship',
    ],
  },
  {
    id: 'cultural-arts',
    icon: 'music_note',
    title: 'Cultural & Arts Exchange',
    subtitle: 'Musicians, Artists & Choir Partners',
    duration: '1–2 Weeks',
    location: 'Kampala & Choir Academy',
    color: 'bg-vibrant-green',
    desc: 'Experience dynamic African worship, dance, and music. Partner with the Katonda Talemwa Children’s Choir for creative arts workshops.',
    features: [
      'Worship & Music Academy',
      'African Dance & Drumming',
      'Creative Arts Workshops',
      'Cultural Storytelling Excursion',
    ],
  },
]

const tripSchedule = [
  {
    date: 'July 12 – July 26, 2026',
    title: 'Summer Faith & Service Expedition',
    type: 'Church & Youth Groups',
    location: 'Gulu & Kampala',
    status: 'Open for Registration',
    badgeColor: 'bg-vibrant-green/20 text-vibrant-green border-vibrant-green/30',
  },
  {
    date: 'September 5 – September 19, 2026',
    title: 'Healthcare & Clinical Exchange',
    type: 'Medical & Dental Professionals',
    location: 'Gulu Regional Clinics',
    status: 'Filling Fast',
    badgeColor: 'bg-action-yellow/20 text-deep-black border-action-yellow/40',
  },
  {
    date: 'November 10 – November 24, 2026',
    title: 'Academic & Student Service Trip',
    type: 'University & High School Teams',
    location: 'Katonda Villages',
    status: 'Open for Registration',
    badgeColor: 'bg-vibrant-green/20 text-vibrant-green border-vibrant-green/30',
  },
  {
    date: 'March 2 – March 16, 2027',
    title: 'Spring Global Leadership Expedition',
    type: 'Custom Group / Open Team',
    location: 'Kampala & Mbarara',
    status: 'Booking Ahead',
    badgeColor: 'bg-pure-white/10 text-pure-white border-pure-white/20',
  },
]

const itineraryHighlights = [
  { step: '01', day: 'Days 1–2', title: 'Arrival & Pearl of Africa Welcome', desc: 'Touch down at Entebbe International Airport, transfer to Kampala base, orientation, and traditional Ugandan feast.' },
  { step: '02', day: 'Days 3–6', title: 'Village Immersion & Community Ministry', desc: 'Serve at Katonda Talemwa Ministries & Emmanuel Baby’s Home — holding babies, playing sports, and sharing family devotions.' },
  { step: '03', day: 'Days 7–10', title: 'Outreach, Teaching & Medical Clinics', desc: 'Conduct school workshops, door-to-door community visits, mobile health checks, and youth leadership camps.' },
  { step: '04', day: 'Days 11–12', title: 'Cultural Safari & Wildlife Excursion', desc: 'Experience the natural beauty of Uganda — Murchison Falls wildlife safari, boat cruise, and local crafts market.' },
  { step: '05', day: 'Days 13–14', title: 'Commissioning & Journey Home', desc: 'Reflective debriefing, commissioning service at Katonda Talemwa Church, and farewell dinner before departure.' },
]

import api from '../services/api'
import { isValidEmail, isValidName, isValidPhone, isNonEmpty, sanitizeName, handleNameKeyDown } from '../utils/validation'
import SEO from '../components/SEO'

export default function ExchangeProgramPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupType: 'church',
    teamSize: '5-10',
    preferredDate: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
      errs.name = 'Please enter your name or group leader name.'
    } else if (!isValidName(formData.name)) {
      errs.name = 'Name can only contain letters (no numbers).'
    }
    if (!isNonEmpty(formData.email)) {
      errs.email = 'Please enter your email address.'
    } else if (!isValidEmail(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!isNonEmpty(formData.phone)) {
      errs.phone = 'Please enter your phone or WhatsApp number.'
    } else if (!isValidPhone(formData.phone)) {
      errs.phone = 'Please enter a valid phone number (at least 7 digits).'
    }
    if (!isNonEmpty(formData.groupType)) {
      errs.groupType = 'Please select a group or organization type.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setErrorMessage(null)

    const res = await api.submitExchange(formData)
    setLoading(false)

    if (res.success) {
      setSubmitted(true)
      setErrors({})
    } else {
      setErrorMessage(res.error || 'Failed to submit inquiry. Please try again.')
    }
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Exchange Program & Mission Trips | Katonda Talemwa Ministries"
        description="Join a life-changing mission trip or cultural exchange program in Uganda with Katonda Talemwa Ministries. Connect with local communities and serve alongside our team."
        canonicalPath="/exchange-program"
        keywords="Katonda Talemwa exchange program, mission trips Uganda, cultural exchange Uganda, short term missions Africa, church mission teams Uganda"
      />
      <Navbar />

      <main className="pt-20">
        {/* ── HERO SECTION: Full-bleed splitscreen ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Left Dark Text Panel */}
          <div className="bg-deep-black text-pure-white flex flex-col justify-center px-8 md:px-16 py-20 space-y-8">
            <div data-aos="fade-right">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block mb-4">
                The Father&apos;s Love in Action — Mission Trips &amp; Exchange
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
                Exchange <br />
                <span className="text-vibrant-green">Program &</span> <br />
                Mission Trips
              </h1>
            </div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-base font-light opacity-90 leading-relaxed max-w-lg">
              Put the Father&apos;s love in action through cross-cultural immersion. Whether bringing a church team, school group, or medical delegation, our exchange program offers safe, organized, and deeply impactful mission expeditions in Uganda.
            </p>
            <div data-aos="fade-right" data-aos-delay="200" className="flex flex-wrap gap-4 pt-2">
              <a
                href="#expeditions"
                className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none flex items-center gap-2"
              >
                Explore Mission Trips <MaterialIcon name="explore" className="text-action-yellow text-sm" />
              </a>
              <a
                href="#inquire"
                className="border border-pure-white/50 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white hover:bg-pure-white/10 transition-all rounded-none"
              >
                Book a Team Trip
              </a>
            </div>
          </div>

          {/* Right Image Panel */}
          <div className="relative min-h-[50vh] lg:min-h-0">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={IMAGES.spiritualGrowth}
              alt="Mission trip volunteers in Uganda with Katonda Talemwa Ministries"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-md p-6 border-l-4 border-action-yellow flex items-center justify-between shadow-xl">
              <div>
                <div className="font-headline text-3xl font-black text-deep-black">500+</div>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Missionaries & Volunteers Hosted</p>
              </div>
              <MaterialIcon name="flight_takeoff" className="text-vibrant-green text-4xl" />
            </div>
          </div>
        </section>

        {/* ── 4 PROGRAM TRACKS GRID ── */}
        <section id="expeditions" className="py-24 bg-surface">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">
                Tailored Expeditions
              </span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Ways to <span className="text-vibrant-green">Serve & Exchange</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                We organize complete logistics, accommodation, ground transportation, security, and ministry scheduling so your team can focus entirely on serving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {exchangeTracks.map((track, i) => (
                <div
                  key={track.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="bg-surface-container-low border border-outline-variant/50 p-8 flex flex-col justify-between space-y-6 hover:border-vibrant-green/50 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-vibrant-green/10 border border-vibrant-green/30 flex items-center justify-center text-vibrant-green">
                        <MaterialIcon name={track.icon} className="text-2xl" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-surface border border-outline-variant/40 text-on-surface-variant">
                        {track.duration}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-vibrant-green block">{track.subtitle}</span>
                      <h3 className="font-headline text-xl font-black uppercase text-deep-black mt-1">{track.title}</h3>
                    </div>

                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{track.desc}</p>

                    <div className="pt-4 border-t border-outline-variant/40 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-deep-black block mb-2">Key Activities:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface-variant font-light">
                        {track.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2">
                            <MaterialIcon name="check_circle" className="text-vibrant-green text-xs" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#inquire"
                    className="inline-flex items-center gap-2 text-xs font-headline font-black uppercase tracking-widest text-deep-black group-hover:text-vibrant-green transition-colors pt-2"
                  >
                    Inquire About This Track <MaterialIcon name="arrow_forward" className="text-xs" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ITINERARY & EXPERIENCE TIMELINE ── */}
        <section className="py-24 bg-deep-black text-pure-white border-y border-pure-white/10">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-14">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-lg mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">
                Sample Expedition Itinerary
              </span>
              <h2 className="font-headline text-4xl font-black uppercase text-pure-white leading-none">
                A Typical <span className="text-vibrant-green">14-Day Trip</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-pure-white/15">
              {itineraryHighlights.map((item, i) => (
                <div
                  key={item.step}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className={`p-7 border-r border-pure-white/15 last:border-r-0 space-y-3 ${
                    i % 2 === 0 ? 'bg-deep-black' : 'bg-pure-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline text-3xl font-black text-action-yellow/30 leading-none">{item.step}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-action-yellow bg-action-yellow/10 px-2 py-0.5 border border-action-yellow/20">
                      {item.day}
                    </span>
                  </div>
                  <h4 className="font-headline text-xs font-black uppercase text-pure-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-pure-white/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UPCOMING TRIP DATES ── */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">
                  Scheduled Expeditions
                </span>
                <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                  Upcoming <span className="text-vibrant-green">Trip Dates</span>
                </h2>
                <div className="w-16 h-1 bg-action-yellow" />
              </div>
              <p className="text-xs text-on-surface-variant font-light max-w-md">
                Don't see your target dates? We also customize private mission trips and exchange dates for groups of 6 or more.
              </p>
            </div>

            <div className="space-y-4">
              {tripSchedule.map((trip, i) => (
                <div
                  key={trip.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="bg-surface border border-outline-variant/50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-vibrant-green/50 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-headline font-black uppercase text-vibrant-green tracking-wider">{trip.date}</span>
                      <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 border ${trip.badgeColor}`}>
                        {trip.status}
                      </span>
                    </div>
                    <h3 className="font-headline text-lg font-black uppercase text-deep-black">{trip.title}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant font-light">
                      <span className="flex items-center gap-1"><MaterialIcon name="groups" className="text-xs" />{trip.type}</span>
                      <span className="flex items-center gap-1"><MaterialIcon name="place" className="text-xs" />{trip.location}</span>
                    </div>
                  </div>

                  <a
                    href="#inquire"
                    className="bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-6 py-3 shrink-0 transition-all rounded-none flex items-center gap-2"
                  >
                    Reserve Seats <MaterialIcon name="arrow_forward" className="text-xs" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INQUIRY & BOOKING FORM ── */}
        <section id="inquire" className="py-24 bg-deep-black">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column info */}
              <div data-aos="fade-right" className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">
                    Get Started
                  </span>
                  <h2 className="font-headline text-4xl font-black uppercase text-pure-white leading-none">
                    Plan Your <br />
                    <span className="text-vibrant-green">Exchange Trip</span>
                  </h2>
                  <div className="w-16 h-1 bg-action-yellow" />
                  <p className="text-sm text-pure-white/80 font-light leading-relaxed">
                    Submit your team details below. Our Global Exchange Coordinator will reach out within 24 hours to schedule a 1-on-1 planning call and share detailed trip packages.
                  </p>
                </div>

                <div className="border border-pure-white/10 p-6 space-y-4 bg-pure-white/[0.02]">
                  <h4 className="font-headline text-sm font-black uppercase text-action-yellow">What's Included In All Trips:</h4>
                  <ul className="space-y-2 text-xs text-pure-white/80 font-light">
                    <li className="flex items-start gap-2">
                      <MaterialIcon name="check" className="text-vibrant-green text-sm shrink-0 mt-0.5" />
                      <span>In-country ground transport & dedicated drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MaterialIcon name="check" className="text-vibrant-green text-sm shrink-0 mt-0.5" />
                      <span>Secure, comfortable guesthouse accommodation & 3 daily meals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MaterialIcon name="check" className="text-vibrant-green text-sm shrink-0 mt-0.5" />
                      <span>24/7 experienced local host coordinators & security team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MaterialIcon name="check" className="text-vibrant-green text-sm shrink-0 mt-0.5" />
                      <span>Cultural excursion (Wildlife Safari & Nile River experience)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column Form */}
              <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-7">
                {submitted ? (
                  <div className="border border-vibrant-green/40 bg-vibrant-green/10 p-12 text-center space-y-4">
                    <MaterialIcon name="check_circle" className="text-vibrant-green text-5xl mx-auto block" filled />
                    <h3 className="font-headline text-2xl font-black uppercase text-pure-white">Trip Inquiry Received!</h3>
                    <p className="text-sm text-pure-white/80 leading-relaxed">
                      Thank you, <span className="font-bold text-action-yellow">{formData.name}</span>! Our Exchange Program team will contact you at <span className="font-bold">{formData.email}</span> within 24 hours to begin crafting your itinerary.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {errorMessage && (
                      <div className="p-3.5 bg-red-500/20 border border-red-500/50 text-red-200 text-xs">
                        {errorMessage}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Full Name / Group Leader *</label>
                        <input
                          type="text"
                          placeholder="Pastor Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          onKeyDown={handleNameKeyDown}
                          className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30 ${
                            errors.name ? 'border-red-500' : 'border-pure-white/15'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs font-medium mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Email Address *</label>
                        <input
                          type="email"
                          placeholder="sarah@church.org"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30 ${
                            errors.email ? 'border-red-500' : 'border-pure-white/15'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs font-medium mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30 ${
                            errors.phone ? 'border-red-500' : 'border-pure-white/15'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs font-medium mt-1">{errors.phone}</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Group / Organization Type *</label>
                        <select
                          value={formData.groupType}
                          onChange={(e) => updateField('groupType', e.target.value)}
                          className={`w-full bg-pure-white/5 border text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none ${
                            errors.groupType ? 'border-red-500' : 'border-pure-white/15'
                          }`}
                        >
                          <option value="church" className="text-deep-black">Church / Faith Group</option>
                          <option value="school" className="text-deep-black">University / High School</option>
                          <option value="medical" className="text-deep-black">Medical / Health Professionals</option>
                          <option value="arts" className="text-deep-black">Choir & Arts Group</option>
                          <option value="individual" className="text-deep-black">Individual Missionary</option>
                        </select>
                        {errors.groupType && (
                          <p className="text-red-400 text-xs font-medium mt-1">{errors.groupType}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Expected Team Size</label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none"
                        >
                          <option value="1-4" className="text-deep-black">1–4 People</option>
                          <option value="5-10" className="text-deep-black">5–10 People</option>
                          <option value="11-20" className="text-deep-black">11–20 People</option>
                          <option value="20+" className="text-deep-black">20+ People</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Target Trip Month / Year</label>
                        <input
                          type="text"
                          placeholder="e.g. July 2026"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Tell Us About Your Team & Goals</label>
                      <textarea
                        rows={4}
                        placeholder="Share your goals, specific ministry interests, or any questions about our mission trips..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none resize-none placeholder:text-pure-white/30"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 disabled:opacity-70 transition-all active:scale-[0.99] rounded-none"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit Trip Inquiry <MaterialIcon name="send" className="text-xs" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
