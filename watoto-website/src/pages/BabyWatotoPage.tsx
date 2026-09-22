import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES } from '../data/content'
import SEO from '../components/SEO'

// ── Animated counter ─────────────────────────────────────────
function CountUp({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let frame: number
    let start: number | null = null
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(p * (2 - p) * end))
      if (p < 1) frame = requestAnimationFrame(tick)
      else setCount(end)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

interface GalleryItem {
  id: string
  title: string
  category: 'all' | 'nursery' | 'medical' | 'play' | 'graduation'
  image: string
  caption: string
  location: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Morning Sensory Play',
    category: 'play',
    image: '/images/DSC_0578.jpg',
    caption: 'Tummy-time and sensory stimulation exercises in the bright nursery ward.',
    location: 'Emmanuel Baby\'s Home',
  },
  {
    id: 'g2',
    title: 'Nanny 1:4 Tender Care',
    category: 'nursery',
    image: '/images/baby 2.jpg',
    caption: 'Dedicated nannies providing warm feeding, comfort, and emotional bonding around the clock.',
    location: 'Infant Wing',
  },
  {
    id: 'g3',
    title: 'Clinical Health & Recovery',
    category: 'medical',
    image: '/images/DSC_8650.jpg',
    caption: 'Pediatric nurse monitoring vital signs and weekly weight milestones with medical precision.',
    location: 'Medical Clinic',
  },
  {
    id: 'g4',
    title: 'First Steps & Laughter',
    category: 'play',
    image: '/images/DSC_7399.jpg',
    caption: 'Joyful exploration on soft indoor play mats under attentive nanny supervision.',
    location: 'Toddler Activity Room',
  },
  {
    id: 'g5',
    title: 'Graduation to Forever Family',
    category: 'graduation',
    image: '/images/villages-family.jpg',
    caption: 'Thriving babies graduating to their forever home in a Katonda Talemwa home.',
    location: 'KTM Home',
  },
  {
    id: 'g6',
    title: 'Custom Formula Nutrition',
    category: 'nursery',
    image: '/images/babies.jpg',
    caption: 'Sterilized feeding bottles and custom fortified nutrition tailored for infant recovery.',
    location: 'Nutrition Center',
  },
  {
    id: 'g7',
    title: 'Safe Rest & Peaceful Cribs',
    category: 'nursery',
    image: '/images/baby.jpg',
    caption: 'Clean, warm, protected cribs giving traumatized infants quiet security.',
    location: 'Emmanuel Nursery',
  },
  {
    id: 'g8',
    title: 'Immunizations & Checkups',
    category: 'medical',
    image: '/images/DSC_8368.jpg',
    caption: 'Full immunization schedule and pediatric checkups given to every baby in our care.',
    location: 'Clinical Triage',
  },
]

const testimonials = [
  {
    id: 't1',
    quote: 'Sponsoring baby Jayson and receiving his milestone updates has been one of the most spiritually rewarding journeys of our lives. You see the tangible fruit of love.',
    author: 'Sarah & David Jenkins',
    role: 'Monthly Baby Sponsors',
    location: 'Dallas, Texas',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDokPv7xL4QxzKaXFGE9JHtcX8mDUpqXr0wRYOec9evJdlzrT_dCiPQuJgTZqlL8pmUpk3NogeqfXtDKpgUNVRyWxfuJMk3Xj7uBb61Y7yp373WHqyvIGC68iqpT06r7nYFafNlMQxOafiS3RAJAxLv9cSmeOpfMd8XLGmutOsP6sJrYDaYu4BKGhqr0zchZ-IrwSP61z__ZJiaLHLfwq7cOmHg3yWxWSvOjI_VPUdb-qBWzNM6qoXpxMkmPMd0ZeuS1lDnEpziIjs',
    rating: 5,
    highlight: 'Sponsor Story',
  },
  {
    id: 't2',
    quote: 'When a fragile baby arrives in the middle of the night weighing under 2 kg, our whole team rallies. Seeing that same child laughing 6 months later is nothing short of a miracle.',
    author: 'Nurse Grace Atuhaire',
    role: 'Lead Pediatric Nurse',
    location: 'Emmanuel Baby\'s Home',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6y56oBsMWN9DQPev8ZmKzLaWamFuXAwYYwLoKyfk07pdytAjs0fVZmgddCllkNH2KAPh7QOU9_oCjLHpXItxzryFuwiyQIRx1CwGCvNeoYq16DMXOFDgEEogrnxUV18fg7z1aULbkGVw1CiuinfA8TVZmoNbYKPX1ovWExMuivq9rpFVcB2uuLsg70plzLz-8gEMm2YM9Lno-rJNlWPPB0aOdc8KNVoiiZ6mv7CiIHwe_onrToEaqx0cPmP7_03aPcXCJTNwL5LI',
    rating: 5,
    highlight: 'Staff Reflection',
  },
  {
    id: 't3',
    quote: 'Receiving these precious babies into our village home when they reach two years old is a gift. They come already healthy, loved, and ready to call me Mama.',
    author: 'Mama Phiona',
    role: 'KTM Village Mother',
    location: 'Kyasenya Village',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIhxRIEgCK4R58S2_Yi2_g3H70zVyfYoVCJkvMonBkpymscyRKLR76ztqzxY-IYZfgN7GDuJEe-9x21_1JyjONBj7mobd2h8nJ-f07MCofzmkBLOAz8hL3DoK6wmee6L3r6HEgNpR26GivhE86k55lODdglHr_natLaSWjEZApuTOGZDqVYUmgbmPIITEySdw8GHdk3B66v3cPSLTIPQfc_0WGi1xAWY3vdd0N8a9JrN6S12dA9WNe0M7DJfmHdLh0IJhTandGHuI',
    rating: 5,
    highlight: 'Family Journey',
  },
  {
    id: 't4',
    quote: 'The level of hygiene, clinical precision, and individual nurturing at Emmanuel Baby\'s Home is world-class. Every single dollar given directly restores a child’s future.',
    author: 'Dr. Michael Chen',
    role: 'Pediatric Health Partner',
    location: 'Kampala Medical Center',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAY37c-fstO13vILJbLMwYIR9LpymZ26ih1qt3v-kba_5B2PpugKIIsq0820ra9MqoIPV8FAUjqq4x1b00ntQw_6Nangq_Wjkq5JwlY4TU5y2Dg-UBjRV26_MasUTTnUsz9s27d2rm8XMPJGqMMlFHBt80r4YJt22BmcZfySd-kpHa4jDpRyVtUqq2aGRQ1fZIsuJj6UuAQieZt8mpmUqOapXyCR0sTpQ88Sopj_9Lpu5gVTfB17oy3Eufx0m_4ht_mmlus5bmk9M',
    rating: 5,
    highlight: 'Medical Partner',
  },
]

export default function BabyWatotoPage() {
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('all')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const filteredGallery = galleryItems.filter(
    (item) => activeGalleryCategory === 'all' || item.category === activeGalleryCategory
  )

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Emmanuel Baby Home | Putting The Father's Love In Action"
        description="Putting the Father's Love in Action: Rescuing abandoned, orphaned, and malnourished infants in Uganda with 24/7 medical treatment, nutrition, and compassionate maternal care."
        canonicalPath="/emmanuel-baby-home"
        keywords="the father's love in action, baby home Uganda, rescue abandoned babies, crisis nursery Africa, sponsor a baby Uganda, Emmanuel Baby Home"
      />
      <Navbar />

      <main>

        {/* ── HERO: Full-bleed with left text + right image split ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-20">
          {/* Left: Content */}
          <div className="bg-deep-black text-pure-white flex flex-col justify-center px-8 md:px-16 py-20 space-y-8">
            <div data-aos="fade-right">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block mb-4">
                The Father&apos;s Love in Action — Emmanuel Baby&apos;s Home
              </span>
              <h1 className="font-headline text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight">
                Welcomed. <br />
                <span className="text-action-yellow">Loved.</span> <br />
                Restored.
              </h1>
            </div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-base font-light opacity-90 leading-relaxed max-w-md">
              Putting the Father&apos;s love in action every hour. Since 2014, Emmanuel Baby&apos;s Home has answered the 24/7 call to rescue and nurture vulnerable infants, raising them in a loving, God-fearing home community.
            </p>
            <div data-aos="fade-right" data-aos-delay="200" className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/sponsor?tab=baby"
                className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none flex items-center gap-2"
              >
                Sponsor a Baby <MaterialIcon name="favorite" className="text-action-yellow text-sm" />
              </Link>
              <a
                href="#care-process"
                className="border border-pure-white/50 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white hover:bg-pure-white/10 transition-all rounded-none"
              >
                How We Care
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative min-h-[60vh] lg:min-h-0">
            <img
              className="w-full h-full object-cover object-center absolute inset-0"
              src={IMAGES.babyHero}
              alt="Emmanuel Baby's Home care"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent" />
            {/* Floating stat */}
            <div className="absolute bottom-8 left-8 bg-vibrant-green text-pure-white p-6 border-t-4 border-action-yellow max-w-[180px] rounded-none">
              <div className="font-headline text-3xl font-black text-action-yellow">
                <CountUp end={300} suffix="+" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mt-1 opacity-90">Babies Welcomed</p>
            </div>
          </div>
        </section>

        {/* ── STAT STRIP ── */}
        <section className="bg-vibrant-green py-10">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-pure-white">
            {[
              { end: 24, suffix: '/7', label: 'Emergency Care' },
              { end: 300, suffix: '+', label: 'Babies Welcomed' },
              { end: 100, suffix: '%', label: 'Medical Support' },
              { end: 12, suffix: ' Yrs', label: 'Established 2014 (12 Yrs)' },
            ].map(({ end, suffix, label }) => (
              <div key={label} data-aos="fade-up">
                <div className="font-headline text-4xl font-black text-action-yellow">
                  <CountUp end={end} suffix={suffix} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CARE PROCESS: Horizontal Steps ── */}
        <section id="care-process" className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div data-aos="fade-up" className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">The Care Journey</span>
              <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-deep-black leading-none">
                From Crisis <br />
                <span className="text-vibrant-green">to Belonging</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow" />
            </div>

            {/* Step cards — horizontal editorial strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-outline-variant/60">
              {[
                { num: '01', icon: 'emergency', title: 'Discovery & Alert', desc: 'Neighbours, hospitals, and local police alert our 24/7 emergency hotline the moment a baby is found in distress.' },
                { num: '02', icon: 'local_hospital', title: 'Stabilisation', desc: 'Our clinical nurses assess and stabilise the baby immediately. Malnourished infants receive emergency IV nutrition and warmth.' },
                { num: '03', icon: 'child_care', title: '1:4 Nanny Care', desc: 'Each baby is assigned a dedicated nanny who tracks feeding schedules, milestones, and emotional development around the clock.' },
                { num: '04', icon: 'home', title: 'Forever Family', desc: 'Once healthy and stable, babies graduate into a permanent Katonda Talemwa village home with a mother and siblings.' },
              ].map((step, i) => (
                <div
                  key={step.num}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className={`p-8 flex flex-col gap-6 border-r border-outline-variant/60 last:border-r-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'}`}
                >
                  <div className="flex items-start justify-between">
                    <MaterialIcon name={step.icon} className="text-vibrant-green text-3xl" />
                    <span className="font-headline text-5xl font-black text-outline-variant/30 leading-none">{step.num}</span>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-headline text-base font-black uppercase text-deep-black tracking-wide">{step.title}</h3>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CARE MODEL: Asymmetric bento grid ── */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-lg mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Our Care Model</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                A Holistic Approach to Life
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large feature card */}
              <div data-aos="fade-right" className="md:col-span-7 bg-deep-black text-pure-white p-10 flex flex-col justify-between min-h-[380px] rounded-none overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url('${IMAGES.babyWatoto}')` }}
                />
                <div className="relative z-10 space-y-4">
                  <MaterialIcon name="favorite" className="text-action-yellow text-4xl" filled />
                  <h3 className="font-headline text-2xl font-black uppercase leading-tight">Emotional & Developmental Nurturing</h3>
                  <p className="text-sm font-light opacity-90 leading-relaxed max-w-md">
                    Infants need more than nutrition — they need touch, eye contact, voice, and routine. Our nannies rotate in 8-hour shifts to ensure each baby receives undivided, emotionally present care through every stage of early development.
                  </p>
                </div>
                <div className="relative z-10 mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-vibrant-green flex items-center justify-center rounded-none">
                    <MaterialIcon name="check" className="text-pure-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-action-yellow">1:4 Nanny-to-Baby Ratio</span>
                </div>
              </div>

              {/* Two stacked small cards */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div data-aos="fade-left" data-aos-delay="100" className="bg-vibrant-green text-pure-white p-8 flex-1 rounded-none">
                  <MaterialIcon name="vaccines" className="text-action-yellow text-3xl mb-4" />
                  <h3 className="font-headline text-lg font-black uppercase mb-3">Specialised Medical Clinic</h3>
                  <p className="text-sm font-light opacity-90 leading-relaxed">
                    On-site pediatric nurses monitor every infant's weight gain, immunisations, and developmental milestones with hospital-grade equipment. No cough or fever goes unattended.
                  </p>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="bg-surface border border-outline-variant/60 p-8 flex-1 rounded-none">
                  <MaterialIcon name="nutrition" className="text-vibrant-green text-3xl mb-4" />
                  <h3 className="font-headline text-lg font-black uppercase text-deep-black mb-3">Custom Nutrition Plans</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    Each baby receives a clinically-designed feeding schedule — from therapeutic formula for malnourished infants to age-appropriate solid foods introduced at exactly the right milestone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BABY JAYSON TRANSFORMATION STORY: Full-width editorial ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/60 overflow-hidden">

              {/* Image column */}
              <div data-aos="zoom-in" className="lg:col-span-5 relative min-h-[400px]">
                <img
                  className="w-full h-full object-cover absolute inset-0"
                  src={children.find(c => c.id === 'jayson')?.image || IMAGES.rescue}
                  alt="Baby Jayson"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-pure-white space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-action-yellow bg-vibrant-green/90 px-3 py-1 block w-fit">
                    Transformation Story
                  </span>
                  <h3 className="font-headline text-xl font-black uppercase">Baby Jayson</h3>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <MaterialIcon name="place" className="text-xs" /> Gulu, Uganda
                  </p>
                </div>
              </div>

              {/* Content column */}
              <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-7 p-10 md:p-14 bg-[#fcfbf9] flex flex-col justify-between gap-10">
                <div className="space-y-6">
                  <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                    A Life Reclaimed
                  </span>
                  <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                    &ldquo;He weighed just <br />
                    1.4 kg when we found him.&rdquo;
                  </h2>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    Baby Jayson was discovered abandoned at the entrance of the Gulu Regional Referral Hospital at barely two weeks old. His body temperature was dangerously low and he showed signs of severe malnourishment.
                  </p>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    Within four hours, our care team had him in the Emmanuel Baby's Home ward receiving IV nutrition and warmth therapy. Today, Jayson crawls with purpose, laughs with his nanny, and is a picture of health — a daily reminder of why this work matters.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-outline-variant/40">
                  <blockquote className="font-serif italic text-sm text-on-surface-variant">
                    &ldquo;Every baby deserves to know they are wanted.&rdquo;
                  </blockquote>
                  <Link
                    to="/sponsor?tab=baby"
                    className="w-full sm:w-auto bg-vibrant-green text-pure-white px-8 py-4 rounded-none font-headline text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all text-center"
                  >
                    Sponsor Jayson
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR CARE TEAM: Emmanuel Baby's Home Dedicated Staff ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">
                12 Years of Dedicated Service
              </span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Meet Our <span className="text-vibrant-green">Care Team</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                Behind every infant in our care is a team of devoted clinical nurses, nannies, social workers, and administrators who provide round-the-clock love and medical restoration at Emmanuel Baby’s Home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Mama Agnes Nabuuma',
                  role: 'Home Administrator & Care Director',
                  experience: '12 Years at Emmanuel Baby\'s Home',
                  bio: 'Leading Emmanuel Baby\'s Home since its founding in 2014. Agnes oversees all admissions, nanny staffing, and child protection.',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDokPv7xL4QxzKaXFGE9JHtcX8mDUpqXr0wRYOec9evJdlzrT_dCiPQuJgTZqlL8pmUpk3NogeqfXtDKpgUNVRyWxfuJMk3Xj7uBb61Y7yp373WHqyvIGC68iqpT06r7nYFafNlMQxOafiS3RAJAxLv9cSmeOpfMd8XLGmutOsP6sJrYDaYu4BKGhqr0zchZ-IrwSP61z__ZJiaLHLfwq7cOmHg3yWxWSvOjI_VPUdb-qBWzNM6qoXpxMkmPMd0ZeuS1lDnEpziIjs',
                  badge: 'Est. 2014 Staff',
                },
                {
                  name: 'Nurse Grace Atuhaire',
                  role: 'Lead Pediatric & Clinical Nurse',
                  experience: '8 Years of Emergency Care',
                  bio: 'Manages 24/7 clinical triage, medical stabilization, vaccines, emergency IV nutrition, and health monitoring for newborns.',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6y56oBsMWN9DQPev8ZmKzLaWamFuXAwYYwLoKyfk07pdytAjs0fVZmgddCllkNH2KAPh7QOU9_oCjLHpXItxzryFuwiyQIRx1CwGCvNeoYq16DMXOFDgEEogrnxUV18fg7z1aULbkGVw1CiuinfA8TVZmoNbYKPX1ovWExMuivq9rpFVcB2uuLsg70plzLz-8gEMm2YM9Lno-rJNlWPPB0aOdc8KNVoiiZ6mv7CiIHwe_onrToEaqx0cPmP7_03aPcXCJTNwL5LI',
                  badge: '24/7 Clinical Care',
                },
                {
                  name: 'Mama Harriet Kembabazi',
                  role: 'Senior Nanny & Infant Specialist',
                  experience: '10 Years of Nanny Care',
                  bio: 'Coordinates 8-hour shift rotations and 1:4 nanny-to-baby ratios, ensuring every infant receives touch, voice, and round-the-clock comfort.',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIhxRIEgCK4R58S2_Yi2_g3H70zVyfYoVCJkvMonBkpymscyRKLR76ztqzxY-IYZfgN7GDuJEe-9x21_1JyjONBj7mobd2h8nJ-f07MCofzmkBLOAz8hL3DoK6wmee6L3r6HEgNpR26GivhE86k55lODdglHr_natLaSWjEZApuTOGZDqVYUmgbmPIITEySdw8GHdk3B66v3cPSLTIPQfc_0WGi1xAWY3vdd0N8a9JrN6S12dA9WNe0M7DJfmHdLh0IJhTandGHuI',
                  badge: '1:4 Care Ratio',
                },
                {
                  name: 'David Okello',
                  role: 'Child Welfare & Social Worker',
                  experience: '7 Years in Protection',
                  bio: 'Partners with police, hospitals, and child welfare officers to manage emergency care alerts, legal documentation, and family tracing.',
                  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAY37c-fstO13vILJbLMwYIR9LpymZ26ih1qt3v-kba_5B2PpugKIIsq0820ra9MqoIPV8FAUjqq4x1b00ntQw_6Nangq_Wjkq5JwlY4TU5y2Dg-UBjRV26_MasUTTnUsz9s27d2rm8XMPJGqMMlFHBt80r4YJt22BmcZfySd-kpHa4jDpRyVtUqq2aGRQ1fZIsuJj6UuAQieZt8mpmUqOapXyCR0sTpQ88Sopj_9Lpu5gVTfB17oy3Eufx0m_4ht_mmlus5bmk9M',
                  badge: 'Child Protection',
                },
              ].map((member, i) => (
                <div
                  key={member.name}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="bg-surface-container-low border border-outline-variant/50 flex flex-col overflow-hidden group hover:border-vibrant-green/50 transition-all duration-300"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-deep-black">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 right-3 bg-action-yellow text-deep-black text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1">
                      {member.badge}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <h3 className="font-headline text-base font-black uppercase text-deep-black">{member.name}</h3>
                      <p className="text-xs font-bold text-vibrant-green mt-0.5">{member.role}</p>
                      <span className="text-[10px] text-on-surface-variant/80 block mt-1 font-medium">{member.experience}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ASHA'S IMPACT: Sponsorship CTA with image ── */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

              {/* Left: Framed Photo */}
              <div data-aos="zoom-in" className="lg:col-span-5 border border-outline-variant/60 p-2 bg-surface shadow-sm rounded-none flex flex-col">
                <img
                  className="w-full aspect-square object-cover rounded-none"
                  src={IMAGES.sponsorshipBaby}
                  alt="Asha growing strong"
                />
                <div className="p-4 bg-surface-container-low mt-2 border border-outline-variant/30 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-vibrant-green font-bold block mb-1">Impact Story</span>
                  <p className="text-[11px] font-semibold text-deep-black">&ldquo;Asha was found at 3 days old. Today, she is top of her class.&rdquo;</p>
                </div>
              </div>

              {/* Right: Sponsorship detail */}
              <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-7 flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block border-l-4 border-vibrant-green pl-3">
                    Become a Life-Sustainer
                  </span>
                  <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                    Your $38 <br />
                    <span className="text-vibrant-green">Saves a Life</span>
                  </h2>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed max-w-md">
                    Your monthly sponsorship covers a baby's life-saving formula, specialized medical care, nanny staffing, and emotional development programmes. Every dollar stays in the programme.
                  </p>
                </div>

                {/* What's included list */}
                <div className="border border-outline-variant/50 rounded-none divide-y divide-outline-variant/40">
                  {[
                    '1:4 nanny-to-baby dedicated care ratio',
                    'Full clinical monitoring and immunisations',
                    'Custom nutrition formula and solid foods',
                    'Transition into a forever home family',
                    'Personal progress letters sent to your inbox',
                  ].map((item) => (
                    <div key={item} className="py-3.5 px-5 flex items-center gap-3 text-sm text-deep-black font-semibold">
                      <MaterialIcon name="check_circle" className="text-vibrant-green text-base" filled />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-surface-container-low border border-outline-variant/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block">Monthly Gift</span>
                    <div className="font-headline text-3xl font-black text-vibrant-green">
                      $38 <span className="text-on-surface-variant text-sm font-normal">/ month</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-action-yellow bg-vibrant-green px-3 py-1.5 rounded-none whitespace-nowrap">
                      Tax Deductible
                    </span>
                    <Link
                      to="/sponsor?tab=baby"
                      className="bg-vibrant-green text-pure-white px-8 py-4 rounded-none font-headline text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
                    >
                      Start Sponsorship
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE PHOTO GALLERY ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block border-l-4 border-vibrant-green pl-3">
                  Life at Emmanuel Baby's Home
                </span>
                <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                  Moments of <span className="text-vibrant-green">Hope &amp; Joy</span>
                </h2>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed max-w-lg">
                  A visual window into the daily rhythm of care, medical healing, milestones, and forever families.
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Photos' },
                  { id: 'nursery', label: 'Nursery Care' },
                  { id: 'medical', label: 'Medical Clinic' },
                  { id: 'play', label: 'Play & Milestones' },
                  { id: 'graduation', label: 'Village Families' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGalleryCategory(tab.id)}
                    className={`px-4 py-2 text-xs font-headline font-bold uppercase tracking-wider transition-all rounded-none cursor-pointer border ${activeGalleryCategory === tab.id
                      ? 'bg-deep-black text-action-yellow border-deep-black shadow-sm'
                      : 'bg-surface-container-low text-on-surface-variant border-outline-variant/60 hover:border-deep-black'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 4) * 80}
                  onClick={() => setLightboxItem(item)}
                  className="group relative bg-deep-black aspect-4/3 sm:aspect-square overflow-hidden cursor-pointer border border-outline-variant/60 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-85 transition-all duration-700 filter brightness-95"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-deep-black/80 backdrop-blur-sm text-action-yellow text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 z-10 border-l-2 border-action-yellow">
                    {item.location}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-pure-white space-y-2">
                    <div className="flex items-center gap-1 text-action-yellow">
                      <MaterialIcon name="zoom_in" className="text-xl" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">View Photo</span>
                    </div>
                    <h3 className="font-headline text-sm font-black uppercase leading-snug">{item.title}</h3>
                    <p className="text-xs text-pure-white/80 font-light line-clamp-2 leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS SECTION ── */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">
                Voices of Transformation
              </span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Stories From <span className="text-vibrant-green">Our Family</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                Reflections from sponsors, clinical nurses, home mothers, and partners witnessing miracles every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={t.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-surface border border-outline-variant/60 p-7 flex flex-col justify-between rounded-none shadow-sm hover:border-vibrant-green/60 hover:shadow-md transition-all duration-300 space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 text-action-yellow">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <MaterialIcon key={i} name="star" className="text-base" filled />
                        ))}
                      </div>
                      <span className="text-[9px] uppercase font-bold tracking-widest bg-vibrant-green/10 text-vibrant-green px-2 py-0.5 border border-vibrant-green/20">
                        {t.highlight}
                      </span>
                    </div>

                    <blockquote className="font-body text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/40 flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-11 h-11 object-cover rounded-none border border-outline-variant/60 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-headline text-xs font-black uppercase text-deep-black truncate">{t.author}</h4>
                      <p className="text-[10px] text-vibrant-green font-bold uppercase tracking-wider">{t.role}</p>
                      <span className="text-[10px] text-on-surface-variant/70 block truncate">{t.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING QUOTE ── */}
        <section className="bg-deep-black py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 translate-x-1/4 -translate-y-1/4">
            <MaterialIcon name="format_quote" className="text-[300px] text-pure-white" filled />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <div data-aos="fade-up">
              <p className="font-serif italic text-2xl md:text-3xl text-pure-white leading-relaxed mb-6">
                &ldquo;Every child abandoned by this world is deeply treasured by God. When we embrace one vulnerable baby with Christ's unconditional love, we rewrite generations to come.&rdquo;
              </p>
              <p className="font-headline text-xs font-black uppercase tracking-widest text-action-yellow">
                — Pastor Emmy Nyanzi, Founder &amp; Lead Pastor, Katonda Talemwa Ministries
              </p>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-deep-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-deep-black border border-pure-white/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-deep-black/80 text-pure-white hover:text-action-yellow flex items-center justify-center border border-pure-white/20 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <MaterialIcon name="close" className="text-xl" />
              </button>

              <div className="relative aspect-16/10 bg-black">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-deep-black text-pure-white space-y-3 border-t border-pure-white/15">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow border-l-2 border-action-yellow pl-2.5">
                    {lightboxItem.location}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-vibrant-green bg-vibrant-green/10 px-2.5 py-1 border border-vibrant-green/20">
                    Emmanuel Baby's Home
                  </span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-black uppercase text-pure-white">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm font-light text-pure-white/80 leading-relaxed">
                  {lightboxItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      <FooterProgram highlightProgram="baby-watoto" />
    </div>
  )
}
