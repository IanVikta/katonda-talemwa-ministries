import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'

const jobs = [
  {
    id: 'nurse',
    title: 'Pediatric Clinic Nurse',
    department: 'Medical & Healthcare Services',
    location: 'Gulu Village, Uganda',
    type: 'Full-Time',
    experience: '3+ Years',
    desc: 'Provide comprehensive nursing care to babies and children under our care. Monitor developmental milestones, coordinate vaccinations, and support wellness outreach.',
    requirements: [
      'Registered Nurse license in Uganda.',
      'Specialised experience in pediatrics or child healthcare.',
      'Strong compassionate skills and community healthcare training.'
    ]
  },
  {
    id: 'nursery-teacher',
    title: 'Early Childhood Educator',
    department: 'Education & Literacy',
    location: 'Mbarara Campus, Uganda',
    type: 'Full-Time',
    experience: '2+ Years',
    desc: 'Lead our early development class for infants & toddlers. Design sensory activities, monitor speech and motor skills, and foster a joyful learning environment.',
    requirements: [
      'Diploma/Degree in Early Childhood Development or Education.',
      'Patient, energetic character with high emotional intelligence.',
      'Experience working in low-resource or vulnerable communities.'
    ]
  },
  {
    id: 'coordinator',
    title: 'Community Outreach Coordinator',
    department: 'Community Development',
    location: 'Kampala Office, Uganda',
    type: 'Full-Time',
    experience: '4+ Years',
    desc: 'Coordinate our weekly home visits, nutrition distributions, and medical checkups for vulnerable families and elderly community members.',
    requirements: [
      'Degree in Social Work, Social Administration, or Development Studies.',
      'Fluency in local Luganda and excellent team coordination experience.',
      'Proven record managing logistical distribution campaigns.'
    ]
  },
  {
    id: 'it-technician',
    title: 'IT Support & Systems Administrator',
    department: 'Operations & IT Support',
    location: 'Kampala Office, Uganda',
    type: 'Full-Time',
    experience: '3+ Years',
    desc: 'Manage and maintain network infrastructure, hardware, and server systems across our offices. Train vocational school IT students.',
    requirements: [
      'BSc in Computer Science, Information Technology, or related field.',
      'Experience with network setup, firewalls, and cloud server maintenance.',
      'A heart to teach and mentor youth in digital skills.'
    ]
  }
]

import api from '../services/api'
import { isValidEmail, isValidName, isValidUrl, isNonEmpty, sanitizeName, handleNameKeyDown } from '../utils/validation'
import SEO from '../components/SEO'

export default function CareersPage() {
  const [openJobId, setOpenJobId] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({ name: '', email: '', job: '', cvUrl: '', coverLetter: '' })

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
      errs.name = 'Please enter your full name.'
    } else if (!isValidName(formData.name)) {
      errs.name = 'Name can only contain letters (no numbers).'
    }
    if (!isNonEmpty(formData.email)) {
      errs.email = 'Please enter your email address.'
    } else if (!isValidEmail(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!isNonEmpty(formData.job)) {
      errs.job = 'Please select a position.'
    }
    if (!isNonEmpty(formData.cvUrl)) {
      errs.cvUrl = 'Please provide a link to your CV or Resume.'
    } else if (!isValidUrl(formData.cvUrl)) {
      errs.cvUrl = 'Please provide a valid URL starting with http:// or https://'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setErrorMessage(null)

    const res = await api.submitCareer({
      name: formData.name,
      email: formData.email,
      jobTitle: formData.job,
      cvUrl: formData.cvUrl,
      coverLetter: formData.coverLetter
    })

    setLoading(false)
    if (res.success) {
      setSubmitted(true)
      setErrors({})
    } else {
      setErrorMessage(res.error || 'Failed to submit application. Please try again.')
    }
  }

  const toggleJob = (id: string) => {
    if (openJobId === id) {
      setOpenJobId(null)
    } else {
      setOpenJobId(id)
    }
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Careers & Opportunities | Katonda Talemwa Ministries"
        description="Explore career and ministry opportunities at Katonda Talemwa Ministries in Uganda. Join our team in healthcare, teaching, social work, and child development."
        canonicalPath="/careers"
        keywords="Katonda Talemwa careers, NGO jobs Uganda, charity jobs Uganda, nursing jobs Lwengo, teaching jobs Uganda, ministry jobs Africa"
      />
      <Navbar />

      <main className="pt-20">
        
        {/* ── HERO: Modern Minimalist Layout ── */}
        <section className="bg-deep-black text-pure-white py-24 relative overflow-hidden">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div data-aos="fade-right" className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">
                The Father&apos;s Love in Action — Careers
              </span>
              <h1 className="font-headline text-5xl sm:text-7xl font-black uppercase leading-none tracking-tight">
                Join our <br />
                <span className="text-vibrant-green">Mission</span>
              </h1>
              <p className="text-base font-light opacity-90 leading-relaxed max-w-lg">
                Put the Father&apos;s love in action through your career. At Katonda Talemwa Ministries, we are looking for passionate, skilled professionals who want to dedicate their talents to raising the next generation of African leaders.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#openings"
                  className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
                >
                  View Job Openings
                </a>
                <a
                  href="#values"
                  className="border border-pure-white/40 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-pure-white hover:text-deep-black transition-all rounded-none"
                >
                  Our Work Culture
                </a>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-5 relative">
              <div className="border-4 border-vibrant-green p-4 bg-pure-white/5 backdrop-blur-md">
                <div className="p-6 bg-deep-black border border-pure-white/10 space-y-4">
                  <h3 className="font-headline text-lg font-black uppercase text-action-yellow">Why KTM?</h3>
                  <div className="space-y-3">
                    {[
                      { icon: 'verified', text: 'Holistic child-centered focus' },
                      { icon: 'groups', text: 'Vibrant, values-driven team environment' },
                      { icon: 'shield_heart', text: 'Meaningful, life-changing work' },
                      { icon: 'trending_up', text: 'Professional & personal growth support' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-light">
                        <MaterialIcon name={item.icon} className="text-vibrant-green text-lg" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CULTURE & VALUES: Editorial Grid ── */}
        <section id="values" className="py-24 bg-surface-container border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Core Culture</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                How We Serve &amp; Work
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'volunteer_activism',
                  title: 'Love in Action',
                  desc: 'Every role — whether clinical, operational, or educational — exists to deliver the unconditional, holistic love of a family to children.'
                },
                {
                  icon: 'star',
                  title: 'Professional Excellence',
                  desc: 'We owe our children the absolute best. We operate with strict transparency, high quality standards, and deep professional integrity.'
                },
                {
                  icon: 'favorite',
                  title: 'Faith & Commitment',
                  desc: 'Our faith is the fuel that keeps our team moving forward. We support one another daily through prayer, mentoring, and shared fellowship.'
                }
              ].map((value, idx) => (
                <div
                  key={value.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-surface border border-outline-variant/50 p-8 flex flex-col justify-between min-h-[220px] shadow-sm rounded-none hover:border-vibrant-green/50 transition-colors"
                >
                  <MaterialIcon name={value.icon} className="text-vibrant-green text-4xl" />
                  <div className="space-y-2 mt-6">
                    <h3 className="font-headline text-sm font-black uppercase text-deep-black tracking-wide">{value.title}</h3>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOB OPENINGS: Accordion Layout ── */}
        <section id="openings" className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-4xl mx-auto px-4 space-y-12">
            <div data-aos="fade-up" className="text-center space-y-3">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Work Opportunities</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Open Positions
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="border border-outline-variant/60 rounded-none bg-surface-container-low divide-y divide-outline-variant/40 shadow-sm">
              {jobs.map((job) => {
                const isOpen = openJobId === job.id
                return (
                  <div key={job.id} className="p-6 transition-all duration-300">
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full flex items-center justify-between text-left focus:outline-none"
                    >
                      <div className="space-y-1">
                        <h3 className="font-headline text-base font-black uppercase text-deep-black hover:text-vibrant-green transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <MaterialIcon name="work" className="text-vibrant-green text-xs" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MaterialIcon name="place" className="text-vibrant-green text-xs" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <MaterialIcon
                        name={isOpen ? 'remove' : 'add'}
                        className={`text-xl transition-transform duration-300 ${isOpen ? 'text-vibrant-green rotate-180' : 'text-on-surface-variant'}`}
                      />
                    </button>

                    {/* Job Details Drawer */}
                    {isOpen && (
                      <div className="mt-6 pt-6 border-t border-outline-variant/30 space-y-6 animate-[fadeIn_0.3s_ease-out]">
                        <div className="grid grid-cols-2 gap-4 bg-surface p-4 border border-outline-variant/30 text-xs font-bold uppercase tracking-wider">
                          <div>
                            <span className="text-on-surface-variant block mb-1">Job Type:</span>
                            <span className="text-deep-black">{job.type}</span>
                          </div>
                          <div>
                            <span className="text-on-surface-variant block mb-1">Required Experience:</span>
                            <span className="text-deep-black">{job.experience}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-headline text-xs font-black uppercase text-vibrant-green tracking-wider">Description</h4>
                          <p className="text-sm text-on-surface-variant font-light leading-relaxed">{job.desc}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-headline text-xs font-black uppercase text-vibrant-green tracking-wider">Requirements</h4>
                          <ul className="list-disc pl-5 text-sm text-on-surface-variant font-light space-y-1.5">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 flex">
                          <a
                            href="#apply-form"
                            onClick={() => setFormData({ ...formData, job: job.title })}
                            className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-3.5 hover:brightness-110 active:scale-95 transition-all rounded-none"
                          >
                            Apply for this position
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── APPLICATION FORM SECTION ── */}
        <section id="apply-form" className="py-24 bg-surface-container">
          <div className="max-w-2xl mx-auto px-4 border border-outline-variant/60 bg-surface p-8 md:p-12 shadow-md">
            <div className="text-center mb-8 space-y-2">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green">Apply Now</span>
              <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-none">
                Submit Application
              </h2>
              <div className="w-12 h-0.5 bg-action-yellow mx-auto" />
            </div>

            {submitted ? (
              <div className="border border-vibrant-green/30 bg-vibrant-green/10 p-8 text-center space-y-4">
                <MaterialIcon name="check_circle" className="text-vibrant-green text-4xl mx-auto block" filled />
                <h3 className="font-headline text-xl font-black uppercase text-deep-black">Application Received</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Thank you, <span className="font-bold text-vibrant-green">{formData.name}</span>! We have received your application for the <span className="font-semibold text-deep-black">{formData.job}</span> position and our HR team will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/30 text-red-600 text-xs">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">Full Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => updateField('name', e.target.value)}
                      onKeyDown={handleNameKeyDown}
                      className={`w-full border px-4 py-2.5 bg-surface text-sm outline-none rounded-none ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-outline-variant/60 focus:border-vibrant-green'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={e => updateField('email', e.target.value)}
                      className={`w-full border px-4 py-2.5 bg-surface text-sm outline-none rounded-none ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-outline-variant/60 focus:border-vibrant-green'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">Position Applied For *</label>
                  <select
                    value={formData.job}
                    onChange={e => updateField('job', e.target.value)}
                    className={`w-full border px-4 py-2.5 bg-surface text-sm outline-none rounded-none ${
                      errors.job
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-outline-variant/60 focus:border-vibrant-green'
                    }`}
                  >
                    <option value="">Select a position…</option>
                    {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                    <option value="General Application">General Application / Talent Pool</option>
                  </select>
                  {errors.job && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.job}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">CV/Resume Link (Google Drive / Dropbox) *</label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/…"
                    value={formData.cvUrl}
                    onChange={e => updateField('cvUrl', e.target.value)}
                    className={`w-full border px-4 py-2.5 bg-surface text-sm outline-none rounded-none ${
                      errors.cvUrl
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-outline-variant/60 focus:border-vibrant-green'
                    }`}
                  />
                  {errors.cvUrl && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.cvUrl}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant block">Cover Letter / Brief Intro</label>
                  <textarea
                    rows={5}
                    placeholder="Introduce yourself and tell us why you are a good fit for this role…"
                    value={formData.coverLetter}
                    onChange={e => updateField('coverLetter', e.target.value)}
                    className="w-full border border-outline-variant/60 px-4 py-2.5 bg-surface text-sm focus:border-vibrant-green outline-none rounded-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-vibrant-green hover:brightness-110 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-75 rounded-none"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting Application…
                    </>
                  ) : (
                    <>Submit Application <MaterialIcon name="send" className="text-xs" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
