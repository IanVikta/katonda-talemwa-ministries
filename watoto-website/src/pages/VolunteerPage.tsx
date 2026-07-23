import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

const roles = [
  {
    icon: 'medical_services',
    category: 'Healthcare',
    title: 'Medical Volunteer',
    duration: '2–4 weeks',
    location: 'Gulu / Kampala',
    desc: 'Join our clinic team to conduct health screenings, assist nurses, provide dental care, and support mother & child wellness programmes.',
    spots: 4,
    color: 'bg-vibrant-green',
  },
  {
    icon: 'school',
    category: 'Education',
    title: 'Teacher / Tutor',
    duration: '1–3 months',
    location: 'All Villages',
    desc: 'Support primary and secondary teachers in literacy, maths, and English. Help after-school programmes and remedial clubs.',
    spots: 8,
    color: 'bg-deep-black',
  },
  {
    icon: 'camera_alt',
    category: 'Media',
    title: 'Photographer / Videographer',
    duration: '1–2 weeks',
    location: 'Kampala / Gulu',
    desc: 'Capture stories of transformation. Your images and films directly support fundraising and donor communications worldwide.',
    spots: 2,
    color: 'bg-action-yellow',
  },
  {
    icon: 'architecture',
    category: 'Construction',
    title: 'Build Team Member',
    duration: '2 weeks',
    location: 'Mbarara / Gulu',
    desc: 'Help construct new family homes, classrooms, and sanitation facilities alongside our local build teams.',
    spots: 12,
    color: 'bg-vibrant-green',
  },
  {
    icon: 'music_note',
    category: 'Arts',
    title: 'Music / Arts Mentor',
    duration: '2–6 weeks',
    location: 'All Villages',
    desc: 'Train children in instruments, choir, drama, and visual arts through our Worship Academy and arts enrichment programmes.',
    spots: 3,
    color: 'bg-deep-black',
  },
  {
    icon: 'code',
    category: 'Technology',
    title: 'ICT Skills Trainer',
    duration: '1–2 months',
    location: 'Kampala',
    desc: 'Teach computer literacy, web basics, and digital skills to vocational students and staff. Help modernise our operations.',
    spots: 2,
    color: 'bg-vibrant-green',
  },
]

export default function VolunteerPage() {
  const [formData, setFormData] = useState({ name: '', email: '', country: '', role: '', duration: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main className="pt-20">

        {/* ── HERO: Editorial magazine split ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left: dark text panel */}
          <div className="bg-deep-black text-pure-white flex flex-col justify-center px-10 md:px-16 py-20 space-y-7">
            <div data-aos="fade-right">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block mb-4">Get Involved — Volunteer</span>
              <h1 className="font-headline text-5xl sm:text-6xl font-black uppercase leading-none tracking-tight">
                Come. <br />
                Serve. <br />
                <span className="text-vibrant-green">Change lives.</span>
              </h1>
            </div>
            <p data-aos="fade-right" data-aos-delay="100" className="text-base font-light opacity-90 leading-relaxed max-w-md">
              Whether you have two weeks or three months, your skills — medical, educational, creative, or practical — can make a lasting impact in the lives of children and families across Uganda and South Sudan.
            </p>
            <div data-aos="fade-right" data-aos-delay="200" className="flex flex-wrap gap-4">
              <a href="#roles" className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 transition-all rounded-none">
                See Open Roles
              </a>
              <a href="#apply" className="border border-pure-white/40 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white/80 transition-all rounded-none">
                Apply Now
              </a>
            </div>
          </div>

          {/* Right: hero image with floating stat */}
          <div className="relative min-h-[50vh] lg:min-h-0">
            <img className="absolute inset-0 w-full h-full object-cover" src={IMAGES.villagesHero} alt="Volunteer in village" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-black/50" />
            <div className="absolute bottom-8 right-8 bg-action-yellow text-deep-black p-6 max-w-[200px] border-l-4 border-deep-black">
              <div className="font-headline text-3xl font-black">500+</div>
              <p className="text-xs font-bold uppercase tracking-wider mt-1">Volunteers Hosted</p>
            </div>
          </div>
        </section>

        {/* ── WHY VOLUNTEER: 3-panel strip ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-y border-outline-variant/30">
          {[
            { icon: 'handshake', title: 'Real Community Impact', desc: 'Every hour you give directly supports a child\'s education, nutrition, or emotional wellbeing.' },
            { icon: 'travel_explore', title: 'Cultural Immersion', desc: 'Live, work, and worship alongside East African families in a profoundly transformative experience.' },
            { icon: 'groups', title: 'Team & Training', desc: 'Join a structured programme with orientation, a local buddy, accommodation, and full field support.' },
          ].map((item, i) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={i * 100} className={`p-10 border-r border-outline-variant/30 last:border-r-0 flex flex-col gap-4 ${i === 1 ? 'bg-surface-container-low' : 'bg-surface'}`}>
              <div className="w-10 h-10 bg-vibrant-green/10 border border-vibrant-green/20 flex items-center justify-center">
                <MaterialIcon name={item.icon} className="text-vibrant-green text-lg" />
              </div>
              <h3 className="font-headline text-sm font-black uppercase text-deep-black">{item.title}</h3>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* ── OPEN ROLES GRID ── */}
        <section id="roles" className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Current Openings</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Find Your <span className="text-vibrant-green">Role</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role, i) => (
                <div
                  key={role.title}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(i % 3, 2) * 100}
                  className="bg-surface border border-outline-variant/50 rounded-none flex flex-col overflow-hidden group hover:border-vibrant-green/50 hover:shadow-md transition-all duration-300"
                >
                  {/* Color bar header */}
                  <div className={`${role.color} p-5 flex items-center justify-between`}>
                    <MaterialIcon name={role.icon} className={`text-2xl ${role.color === 'bg-action-yellow' ? 'text-deep-black' : 'text-pure-white'}`} />
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 border ${role.color === 'bg-action-yellow' ? 'border-deep-black/30 text-deep-black' : 'border-pure-white/30 text-pure-white'}`}>
                      {role.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    <div>
                      <h3 className="font-headline text-base font-black uppercase text-deep-black">{role.title}</h3>
                      <div className="flex gap-4 mt-1">
                        <span className="text-[10px] text-on-surface-variant flex items-center gap-1"><MaterialIcon name="schedule" className="text-xs" />{role.duration}</span>
                        <span className="text-[10px] text-on-surface-variant flex items-center gap-1"><MaterialIcon name="place" className="text-xs" />{role.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed flex-1">{role.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-vibrant-green">{role.spots} spots open</span>
                      <a href="#apply" className="text-[10px] font-headline font-black uppercase tracking-widest text-deep-black flex items-center gap-1 hover:text-vibrant-green transition-colors">
                        Apply <MaterialIcon name="arrow_forward" className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT TO EXPECT: Horizontal timeline ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-14">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-lg mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">The Journey</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">What to Expect</h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-outline-variant/50">
              {[
                { step: '01', title: 'Apply Online', desc: 'Complete our 5-minute application below. Our team reviews all submissions within 48 hours.' },
                { step: '02', title: 'Interview Call', desc: 'A short 20-minute video call to discuss your skills, goals, and the best-fit role.' },
                { step: '03', title: 'Pre-Travel Pack', desc: 'Receive your welcome pack — schedule, accommodation details, health guidelines, and reading.' },
                { step: '04', title: 'Arrive & Orient', desc: 'Full orientation day on arrival. Meet your team, visit the village, and settle in.' },
                { step: '05', title: 'Serve & Transform', desc: 'Begin your placement. Weekly check-ins and a debrief session at the end of your trip.' },
              ].map((s, i) => (
                <div key={s.step} data-aos="fade-up" data-aos-delay={i * 80} className={`p-7 border-r border-outline-variant/50 last:border-r-0 space-y-3 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'}`}>
                  <span className="font-headline text-4xl font-black text-vibrant-green/20 block leading-none">{s.step}</span>
                  <h4 className="font-headline text-xs font-black uppercase text-deep-black tracking-wide">{s.title}</h4>
                  <p className="text-xs text-on-surface-variant font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPLICATION FORM ── */}
        <section id="apply" className="py-24 bg-deep-black">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left: heading + image */}
              <div data-aos="fade-right" className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">Apply to Volunteer</span>
                  <h2 className="font-headline text-4xl font-black uppercase text-pure-white leading-none">
                    Ready to <br />
                    <span className="text-vibrant-green">Answer the Call?</span>
                  </h2>
                  <div className="w-16 h-1 bg-action-yellow" />
                  <p className="text-sm text-pure-white/80 font-light leading-relaxed">
                    Fill in the form and our volunteer coordinator will be in touch within 48 hours. We welcome people of all backgrounds and skill levels — what matters is a willing heart.
                  </p>
                </div>
                <div className="border border-pure-white/10 overflow-hidden">
                  <img className="w-full aspect-video object-cover opacity-80" src={IMAGES.spiritualGrowth} alt="Volunteers in action" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-pure-white/10 p-5 text-center">
                    <div className="font-headline text-2xl font-black text-action-yellow">50+</div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-pure-white/60 mt-1">Countries Represented</p>
                  </div>
                  <div className="border border-pure-white/10 p-5 text-center">
                    <div className="font-headline text-2xl font-black text-vibrant-green">95%</div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-pure-white/60 mt-1">Would Return</p>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-7">
                {submitted ? (
                  <div className="border border-vibrant-green/30 bg-vibrant-green/10 p-12 text-center space-y-4">
                    <MaterialIcon name="check_circle" className="text-vibrant-green text-5xl mx-auto block" filled />
                    <h3 className="font-headline text-2xl font-black uppercase text-pure-white">Application Received!</h3>
                    <p className="text-sm text-pure-white/80 leading-relaxed">
                      Thank you, <span className="font-bold text-action-yellow">{formData.name}</span>! Our volunteer coordinator will reach out to <span className="font-bold">{formData.email}</span> within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Full Name *</label>
                        <input required type="text" placeholder="John Doe" value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Email Address *</label>
                        <input required type="email" placeholder="john@email.com" value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Country of Residence *</label>
                      <input required type="text" placeholder="United States" value={formData.country}
                        onChange={e => setFormData({ ...formData, country: e.target.value })}
                        className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none placeholder:text-pure-white/30" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Preferred Role *</label>
                        <select required value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })}
                          className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none">
                          <option value="" className="text-deep-black">Select a role…</option>
                          {roles.map(r => <option key={r.title} value={r.title} className="text-deep-black">{r.title}</option>)}
                          <option value="open" className="text-deep-black">Open to any role</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Available Duration *</label>
                        <select required value={formData.duration} onChange={e => setFormData({ ...formData, duration: e.target.value })}
                          className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none">
                          <option value="" className="text-deep-black">Select…</option>
                          <option value="1-2 weeks" className="text-deep-black">1–2 Weeks</option>
                          <option value="1 month" className="text-deep-black">1 Month</option>
                          <option value="2-3 months" className="text-deep-black">2–3 Months</option>
                          <option value="3+ months" className="text-deep-black">3+ Months</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-pure-white/60 block">Why do you want to volunteer?</label>
                      <textarea rows={4} placeholder="Tell us about yourself and what motivates you to serve…" value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-pure-white/5 border border-pure-white/15 text-pure-white px-4 py-3 text-sm focus:border-vibrant-green outline-none rounded-none resize-none placeholder:text-pure-white/30" />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 disabled:opacity-70 transition-all active:scale-[0.99] rounded-none">
                      {loading ? (<><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting…</>) : (<>Submit Application <MaterialIcon name="send" className="text-xs" /></>)}
                    </button>
                    <p className="text-[10px] text-pure-white/40 text-center leading-relaxed">
                      By submitting this form you agree to be contacted by the KTM volunteer team. We do not share your data with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA STRIP ── */}
        <section className="bg-vibrant-green py-14">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-6">
            <div data-aos="fade-right">
              <h3 className="font-headline text-2xl font-black uppercase text-pure-white">Can't travel? Still make an impact.</h3>
              <p className="text-sm text-pure-white/80 mt-1">Sponsor a child, donate, or pray alongside us from wherever you are.</p>
            </div>
            <div data-aos="fade-left" className="flex flex-wrap gap-3">
              <Link to="/sponsor" className="bg-action-yellow text-deep-black font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none">Sponsor a Child</Link>
              <Link to="/donate" className="border border-pure-white text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-pure-white/10 active:scale-95 transition-all rounded-none">Give a Donation</Link>
            </div>
          </div>
        </section>

      </main>
      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
