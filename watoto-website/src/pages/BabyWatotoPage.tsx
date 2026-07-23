import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES } from '../data/content'

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

export default function BabyWatotoPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main>

        {/* ── HERO: Full-bleed with left text + right image split ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-20">
          {/* Left: Content */}
          <div className="bg-deep-black text-pure-white flex flex-col justify-center px-8 md:px-16 py-20 space-y-8">
            <div data-aos="fade-right">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block mb-4">
                Baby Katonda Talemwa — Est. 2003
              </span>
              <h1 className="font-headline text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight">
                Rescued. <br />
                <span className="text-action-yellow">Loved.</span> <br />
                Restored.
              </h1>
            </div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-base font-light opacity-90 leading-relaxed max-w-md">
              When a newborn is abandoned in a hospital ward, left in a field, or surrendered by a desperate mother — our emergency rescue team answers the call within hours, 24 hours a day.
            </p>
            <div data-aos="fade-right" data-aos-delay="200" className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/sponsor?tab=baby"
                className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none flex items-center gap-2"
              >
                Sponsor a Baby <MaterialIcon name="favorite" className="text-action-yellow text-sm" />
              </Link>
              <a
                href="#rescue-process"
                className="border border-pure-white/50 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white hover:bg-pure-white/10 transition-all rounded-none"
              >
                How We Rescue
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative min-h-[60vh] lg:min-h-0">
            <img
              className="w-full h-full object-cover object-center absolute inset-0"
              src={IMAGES.babyHero}
              alt="Baby Katonda Talemwa rescue"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent" />
            {/* Floating stat */}
            <div className="absolute bottom-8 left-8 bg-vibrant-green text-pure-white p-6 border-t-4 border-action-yellow max-w-[180px] rounded-none">
              <div className="font-headline text-3xl font-black text-action-yellow">
                <CountUp end={3000} suffix="+" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mt-1 opacity-90">Babies Rescued</p>
            </div>
          </div>
        </section>

        {/* ── STAT STRIP ── */}
        <section className="bg-vibrant-green py-10">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-pure-white">
            {[
              { end: 24, suffix: '/7', label: 'Emergency Rescue' },
              { end: 3000, suffix: '+', label: 'Babies Rescued' },
              { end: 100, suffix: '%', label: 'Medical Support' },
              { end: 20, suffix: '+', label: 'Years of Care' },
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

        {/* ── RESCUE PROCESS: Horizontal Steps ── */}
        <section id="rescue-process" className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div data-aos="fade-up" className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">The Rescue Journey</span>
              <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-deep-black leading-none">
                From Crisis <br />
                <span className="text-vibrant-green">to Belonging</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow" />
            </div>

            {/* Step cards — horizontal editorial strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-outline-variant/60">
              {[
                { num: '01', icon: 'emergency', title: 'Discovery & Alert', desc: 'Neighbours, hospitals, and local police alert our 24/7 rescue hotline the moment a baby is found in distress.' },
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

        {/* ── BABY JAYSON RESCUE STORY: Full-width editorial ── */}
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
                    Rescue Story
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
                    Within four hours, our rescue team had him in the Baby Katonda Talemwa ward receiving IV nutrition and warmth therapy. Today, Jayson crawls with purpose, laughs with his nanny, and is a picture of health — a daily reminder of why this work matters.
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
                    'Transition into a forever village family',
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

        {/* ── CLOSING QUOTE ── */}
        <section className="bg-deep-black py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 translate-x-1/4 -translate-y-1/4">
            <MaterialIcon name="format_quote" className="text-[300px] text-pure-white" filled />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <div data-aos="fade-up">
              <p className="font-serif italic text-2xl md:text-3xl text-pure-white leading-relaxed mb-6">
                &ldquo;We cannot change the world for everyone, but for this one baby, their whole world is about to change.&rdquo;
              </p>
              <p className="font-headline text-xs font-black uppercase tracking-widest text-action-yellow">
                — Marilyn Skinner, Co-Founder, Watoto
              </p>
            </div>
          </div>
        </section>

      </main>

      <FooterProgram highlightProgram="baby-watoto" />
    </div>
  )
}
