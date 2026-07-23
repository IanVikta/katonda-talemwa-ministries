import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

export default function ChurchPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main className="pt-20">
        {/* Modern Minimalist Sanctuary Hero */}
        <section className="bg-deep-black text-pure-white py-24 text-center rounded-none relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img className="w-full h-full object-cover" src={IMAGES.church} alt="Worship congregation silhouette" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow block">
              WELCOMING. FAITHFUL. ACTIVE.
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl font-black uppercase leading-none tracking-tight">
              Katonda Talemwa <br />
              <span className="text-action-yellow">Community Church</span>
            </h1>
            <p className="text-base font-light opacity-80 leading-relaxed max-w-xl mx-auto">
              The spiritual heart of our mission. A vibrant Bible-believing home for our village children, mothers, staff, and surrounding neighborhood families in Mbarara.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="#schedule-table"
                className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
              >
                Join a Service
              </a>
              <Link
                to="/contact"
                className="border border-pure-white text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-pure-white hover:text-deep-black active:scale-95 transition-all rounded-none"
              >
                Find Campus Location
              </Link>
            </div>
          </div>
        </section>

        {/* Liturgical Table Schedule */}
        <section id="schedule-table" className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="text-center space-y-4 max-w-xl mx-auto">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-wider block">Service Times</span>
              <h2 className="font-headline text-headline-lg text-deep-black leading-none uppercase font-black">
                Weekly Worship Schedule
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-none" />
              <p className="text-sm text-on-surface-variant font-light">
                Our church operates on East African Time (EAT) and provides comprehensive kids ministries during all Sunday services.
              </p>
            </div>

             {/* Liturgical Rows Table */}
            <div className="max-w-4xl mx-auto border border-outline-variant/60 rounded-none bg-surface divide-y divide-outline-variant/40 shadow-sm">
              {[
                { time: '09:00 AM', zone: 'EAT', name: 'Sunday Morning Worship', focus: 'Traditional hymns and deep Bible expository teaching.', tag: 'First Service' },
                { time: '11:30 AM', zone: 'EAT', name: 'Sunday Celebration Service', focus: 'High-energy praise, youth-led worship, and community sharing.', tag: 'Second Service' },
                { time: '05:30 PM', zone: 'EAT', name: 'Wednesday Mid-Week Study', focus: 'Interactive Bible study, prayer groups, and pastoral counseling.', tag: 'Mid-Week' }
              ].map((row, idx) => (
                <div key={idx} className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="text-vibrant-green font-headline text-2xl sm:text-3xl font-black min-w-[120px]">
                      {row.time} <span className="text-xs text-on-surface-variant font-normal font-body">({row.zone})</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-deep-black uppercase tracking-wide">{row.name}</h4>
                      <p className="text-sm text-on-surface-variant font-light leading-relaxed">{row.focus}</p>
                    </div>
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-secondary bg-secondary/10 border border-secondary/15 px-3 py-1.5 rounded-none whitespace-nowrap self-start md:self-center">
                    {row.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Asymmetrical Bento-like Ministries Grid */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div className="text-center space-y-4 max-w-xl mx-auto">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-wider block">Ministries</span>
              <h2 className="font-headline text-headline-lg text-deep-black leading-none uppercase font-black">
                How We Serve
              </h2>
              <div className="w-24 h-1 bg-vibrant-green mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Box 1: Worship & Praise (large block) */}
              <ScrollReveal animation="fade-right" className="md:col-span-8 bg-surface-container-low border border-outline-variant/60 p-8 flex flex-col justify-between rounded-none shadow-sm min-h-[280px]">
                <div className="space-y-4">
                  <MaterialIcon name="music_note" className="text-vibrant-green text-3xl" />
                  <h3 className="font-headline text-xl font-black uppercase text-deep-black">Worship Academy</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed max-w-xl">
                    Providing village children and neighborhood youth with instrument lessons (keyboard, guitar, drums, brass) and vocal training. Our Worship Academy nurtures the next generation of musical leaders in East Africa.
                  </p>
                </div>
                <Link to="/donate" className="text-vibrant-green font-bold text-xxs uppercase tracking-widest hover:text-secondary inline-flex items-center gap-2 mt-6">
                  Support the Academy <MaterialIcon name="arrow_forward" className="text-xs" />
                </Link>
              </ScrollReveal>

              {/* Box 2: Choir (vertical dark block) */}
              <ScrollReveal animation="fade-left" className="md:col-span-4 bg-deep-black text-pure-white p-8 flex flex-col justify-between rounded-none shadow-md min-h-[280px]">
                <div className="space-y-4">
                  <MaterialIcon name="groups" className="text-action-yellow text-3xl" />
                  <h3 className="font-headline text-xl font-black uppercase text-pure-white">Children&apos;s Choir</h3>
                  <p className="text-sm font-light opacity-80 leading-relaxed">
                    Our kids travel locally and internationally, sharing high-energy African worship, testimony, and the unconditional love of Jesus.
                  </p>
                </div>
                <div className="text-xs uppercase tracking-wider font-extrabold text-action-yellow border-t border-pure-white/10 pt-4 mt-6">
                  Ministry Since 1994
                </div>
              </ScrollReveal>

              {/* Box 3: Youth (small block) */}
              <ScrollReveal animation="fade-right" className="md:col-span-4 bg-surface border border-outline-variant/60 p-8 flex flex-col justify-between rounded-none shadow-sm min-h-[240px]">
                <div className="space-y-4">
                  <MaterialIcon name="diversity_1" className="text-vibrant-green text-3xl" />
                  <h3 className="font-headline text-lg font-black uppercase text-deep-black">Youth Discipleship</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Mentoring high school and university students to develop strong moral character, leadership skills, and active faith.
                  </p>
                </div>
              </ScrollReveal>

              {/* Box 4: Outreach (medium block) */}
              <ScrollReveal animation="fade-left" className="md:col-span-8 bg-surface-container-low border border-outline-variant/60 p-8 flex flex-col justify-between rounded-none shadow-sm min-h-[240px]">
                <div className="space-y-4">
                  <MaterialIcon name="volunteer_activism" className="text-vibrant-green text-3xl" />
                  <h3 className="font-headline text-lg font-black uppercase text-deep-black">Community Relief Outreach</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Conducting regular home visits to distribute nutrition support, soap, and medical supplies to needy, sick, or elderly community members in Kamukuzi.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Written Message from Pastor Emmy */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Framed Image */}
            <ScrollReveal animation="zoom-in" className="lg:col-span-5 border border-outline-variant/60 p-2 bg-surface flex flex-col justify-between h-full rounded-none shadow-sm">
              <img
                className="w-full aspect-[4/3] lg:aspect-square object-cover rounded-none"
                src={IMAGES.spiritualGrowth}
                alt="Pastor Emmy Nyanzi preaching"
              />
              <div className="p-4 bg-surface-container-low mt-2 border border-outline-variant/30 text-center">
                <span className="text-[10px] uppercase tracking-widest text-vibrant-green font-bold block mb-1">Our Leadership</span>
                <p className="text-[11px] font-semibold text-deep-black">Pastor Emmy Nyanzi | KTM Spiritual Lead</p>
              </div>
            </ScrollReveal>

            {/* Right Column: Letter Page Block */}
            <ScrollReveal animation="fade-left" className="lg:col-span-7 bg-surface border border-outline-variant/60 p-8 md:p-12 flex flex-col justify-between rounded-none shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-action-yellow/10 rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
              <div className="space-y-6">
                <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                  Spiritual Message
                </span>
                <h3 className="font-headline text-2xl font-black uppercase text-deep-black leading-tight">
                  &ldquo;We see lives restored <br />
                  and hope made real.&rdquo;
                </h3>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Our core mission is not just physical rescue, but spiritual renewal. When orphaned and vulnerable children first arrive at the Katonda Talemwa villages, they are often silent, fearful, and heartbroken.
                </p>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Watching them stand in the sanctuary a few months later—singing with joy, smiling, leading worship, and knowing they have a Father in heaven who will never fail them—is the greatest transformation of all.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MaterialIcon name="verified" className="text-vibrant-green text-lg" filled />
                  <span className="font-bold text-xs text-deep-black uppercase tracking-wider">God Never Fails</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-secondary text-pure-white px-8 py-3.5 rounded-none font-headline text-button-text uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all font-black text-center text-xs shadow-md"
                >
                  Contact Church
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </main>

      <FooterProgram highlightProgram="church" />
    </div>
  )
}
