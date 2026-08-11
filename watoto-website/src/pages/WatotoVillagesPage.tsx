import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES } from '../data/content'

export default function WatotoVillagesPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main>

        {/* ── CINEMATIC HERO: Sharp Geometric Layout ── */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-deep-black text-pure-white pt-24 pb-10">
          {/* Background image with high contrast vignette */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-top filter brightness-[0.72] contrast-[1.08]"
              src={IMAGES.villagesHero}
              alt="Katonda Talemwa Ministries children"
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-deep-black/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/50 to-transparent hidden lg:block" />
          </div>

          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop my-auto w-full py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column: Bold Headline & Badges */}
              <div data-aos="fade-right" className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 border-l-4 border-action-yellow bg-deep-black/80 backdrop-blur-sm px-4 py-2 text-pure-white">
                  <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-action-yellow">
                    Katonda Talemwa Ministries — Est. 1994
                  </span>
                </div>

                <h1 className="font-headline text-5xl sm:text-6xl xl:text-7xl font-black uppercase leading-[0.95] tracking-tight text-pure-white">
                  A Home. <br />
                  A Family. <br />
                  <span className="text-action-yellow">A Future.</span>
                </h1>

                <p className="text-sm sm:text-base text-pure-white/90 font-light leading-relaxed max-w-lg">
                  Restoring the rhythm of family for orphaned and vulnerable children across Uganda and South Sudan through loving, Christ-centered village homes.
                </p>

                {/* Key feature cards (sharp rectangular chips) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="border border-pure-white/20 bg-deep-black/70 backdrop-blur-sm p-4 flex flex-col justify-between gap-3 rounded-none">
                    <MaterialIcon name="cottage" className="text-action-yellow text-2xl" />
                    <span className="text-[11px] font-headline font-black uppercase tracking-wider text-pure-white">
                      A Christ centered home
                    </span>
                  </div>
                  <div className="border border-pure-white/20 bg-deep-black/70 backdrop-blur-sm p-4 flex flex-col justify-between gap-3 rounded-none">
                    <MaterialIcon name="favorite" className="text-vibrant-green text-2xl" />
                    <span className="text-[11px] font-headline font-black uppercase tracking-wider text-pure-white">
                      Dedicated Mother Care
                    </span>
                  </div>
                  <div className="border border-pure-white/20 bg-deep-black/70 backdrop-blur-sm p-4 flex flex-col justify-between gap-3 rounded-none">
                    <MaterialIcon name="school" className="text-action-yellow text-2xl" />
                    <span className="text-[11px] font-headline font-black uppercase tracking-wider text-pure-white">
                      Complete Education
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sharp Mission Box */}
              <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-5">
                <div className="bg-deep-black/85 backdrop-blur-md border border-pure-white/20 border-t-4 border-t-action-yellow p-8 sm:p-10 space-y-6 shadow-2xl rounded-none relative">

                  <div className="space-y-2">
                    <span className="text-[10px] font-headline font-extrabold uppercase tracking-widest text-vibrant-green block border-l-3 border-vibrant-green pl-2.5">
                      The Heart of Our Villages
                    </span>
                    <h2 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-pure-white">
                      Where Belonging <span className="text-action-yellow">Begins</span>
                    </h2>
                  </div>

                  <p className="text-sm font-light text-pure-white/85 leading-relaxed">
                    Where orphaned and vulnerable children across Uganda  find not just shelter, but a real mother, real brothers &amp; sisters, and the unconditional love of a true family.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/sponsor?tab=mother"
                      className="flex-1 bg-vibrant-green hover:brightness-110 active:scale-95 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 px-5 text-center flex items-center justify-center gap-2 transition-all rounded-none shadow-md"
                    >
                      <span>Support Today</span>
                      <MaterialIcon name="favorite" className="text-action-yellow text-sm" />
                    </Link>
                    <Link
                      to="/sponsor?tab=child"
                      className="flex-1 border border-pure-white/50 hover:border-pure-white hover:bg-pure-white/10 active:scale-95 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 px-5 text-center flex items-center justify-center gap-2 transition-all rounded-none"
                    >
                      <span>Sponsor a Child</span>
                      <MaterialIcon name="child_care" className="text-pure-white text-sm" />
                    </Link>
                  </div>

                  {/* Clean Stat Strip */}
                  <div className="pt-4 border-t border-pure-white/15 grid grid-cols-2 gap-4 text-left">
                    <div className="border-l-2 border-action-yellow pl-3">
                      <div className="font-headline text-xl font-black text-action-yellow">100%</div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-pure-white/70">Direct Impact</div>
                    </div>
                    <div className="border-l-2 border-vibrant-green pl-3">
                      <div className="font-headline text-xl font-black text-vibrant-green">2,000+</div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-pure-white/70">Children Raised</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="relative z-10 flex justify-center pb-2">
            <a
              href="#the-model"
              className="inline-flex flex-col items-center gap-1 text-pure-white/60 hover:text-action-yellow transition-colors group cursor-pointer"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold group-hover:tracking-wider transition-all">Discover The Model</span>
              <MaterialIcon name="keyboard_arrow_down" className="text-xl animate-bounce text-action-yellow" />
            </a>
          </div>
        </section>

        {/* ── KEY NUMBERS STRIP ── */}
        <section className="bg-vibrant-green border-b-4 border-action-yellow">
          <div className="max-w-3xl mx-auto px-4 md:px-margin-desktop grid grid-cols-2 divide-x divide-pure-white/20">
            {[
              { stat: '2,000', suffix: '+', label: 'Children in Care' },
              { stat: '25', suffix: '+', label: 'Years of Ministry' },
            ].map(({ stat, suffix, label }, i) => (
              <div key={label} data-aos="fade-up" data-aos-delay={i * 80} className="py-10 px-6 text-pure-white text-center">
                <div className="font-headline text-3xl sm:text-4xl font-black text-action-yellow">{stat}{suffix}</div>
                <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT ALL STARTED: Two-column narrative ── */}
        <section id="our-story" className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div data-aos="fade-right" className="space-y-7">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">
                  How It All Started
                </span>
                <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-deep-black leading-none">
                  Not an <br />
                  <span className="text-vibrant-green">Institution.</span> <br />
                  A Real Family Home.
                </h2>
                <div className="w-16 h-1 bg-action-yellow" />
              </div>

              <div className="space-y-4 text-sm text-on-surface-variant font-light leading-relaxed">
                <p>
                  In 1989, having walked through childhood hardship and rejection, Pastor Emmanuel Nnyanzi and his wife Sarah gave their lives to Jesus Christ. During house-to-house evangelism, they met four young children whose mother had passed away and whose father suffered from severe mental illness.
                </p>
                <p>
                  Living in a single rented room with barely enough for themselves, Pastor Emmanuel turned to Sarah with faith: <span className="font-semibold text-deep-black italic">&ldquo;These children do not need wealth—they need parental love and a home.&rdquo;</span> With courage and compassion, they took them in.
                </p>
                <p>
                  From four children in one room, the family expanded to 12, then to 47 children. When school fees became an impossible hurdle, Pastor Emmanuel and Sarah made a bold sacrifice: selling their only house to build classrooms and dormitories so every child could study and thrive.
                </p>
                <p>
                  Today, over 25 years later, more than 2,000 children have passed through the Ministry they started and later called Katonda Talemwa Ministries,raised with unconditional love, spiritual discipleship, and education into doctors, pastors, teachers, and future leaders.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="border-l-4 border-vibrant-green pl-4">
                  <div className="font-headline text-2xl font-black text-vibrant-green">1989</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Founded in Faith</p>
                </div>
                <div className="border-l-4 border-action-yellow pl-4">
                  <div className="font-headline text-2xl font-black text-deep-black">2,000+</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Children Raised</p>
                </div>
                <div className="border-l-4 border-outline-variant pl-4">
                  <div className="font-headline text-2xl font-black text-deep-black">25+ Yrs</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Of Home Care</p>
                </div>
              </div>
            </div>

            {/* Right: video still with play button */}
            <div data-aos="zoom-in" data-aos-delay="100" className="relative border border-outline-variant/60 rounded-none overflow-hidden group cursor-pointer shadow-sm">
              <img
                className="w-full aspect-video object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                src={IMAGES.villages}
                alt="Katonda Talemwa Family Homes"
              />
              <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-vibrant-green text-pure-white flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all">
                  <MaterialIcon name="play_arrow" className="text-4xl translate-x-0.5" filled />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent flex items-center justify-between">
                <span className="text-pure-white text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-action-yellow" /> Watch: Our Story of Hope &amp; Faith
                </span>
                <span className="text-pure-white text-xs font-mono bg-deep-black/60 px-2 py-0.5">2:45</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── VILLAGE PILLARS: 6-pillar editorial grid ── */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-14">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">What the home Provides</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Six Pillars of <br />
                <span className="text-vibrant-green">Holistic Care</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/40 border border-outline-variant/40">
              {[
                { icon: 'school', title: 'Quality Education', desc: 'From nursery through university — every child receives full academic support including fees, books, and tutoring. Literacy rate: 100%.' },
                { icon: 'medical_services', title: 'Healthcare', desc: 'On-site clinics provide immunisations, daily wellness monitoring, dental care, optical screening, and emergency medical response.' },
                { icon: 'church', title: 'Spiritual Discipleship', desc: 'Faith is foundational. Weekly worship, home devotions, Bible study, and pastoral mentoring build children with character that lasts.' },
                { icon: 'sports_soccer', title: 'Sports & Fitness', desc: 'Every child participates in structured sports — football, netball, athletics — building teamwork, discipline, and physical wellbeing.' },
                { icon: 'music_note', title: 'Worship Academy', desc: 'Instrument lessons in keyboard, guitar, drums, and vocals. Our children perform across Uganda and we look forward to them performing internationally.' },
                { icon: 'eco', title: 'Sustainability Projects', desc: 'Village gardens, poultry farms, and renewable energy systems teach life skills while reducing environmental footprint.' },
              ].map((pillar, i) => (
                <div
                  key={pillar.title}
                  data-aos="fade-up"
                  data-aos-delay={Math.min(i, 2) * 100}
                  className="bg-surface p-8 group hover:bg-vibrant-green/5 hover:border-vibrant-green transition-all duration-300 flex flex-col gap-5 relative overflow-hidden"
                >
                  <div className="w-10 h-10 bg-vibrant-green/10 border border-vibrant-green/20 flex items-center justify-center group-hover:bg-vibrant-green group-hover:border-vibrant-green transition-all">
                    <MaterialIcon name={pillar.icon} className="text-vibrant-green group-hover:text-pure-white text-lg transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-sm font-black uppercase text-deep-black tracking-wide group-hover:text-vibrant-green transition-colors">{pillar.title}</h3>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-vibrant-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── STORIES OF TRANSFORMATION ── */}
        <section className="py-24 bg-surface-container border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-14">
            <div data-aos="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Real Lives Changed</span>
                <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                  Stories of <br />
                  <span className="text-vibrant-green">Transformation</span>
                </h2>
                <div className="w-16 h-1 bg-action-yellow" />
              </div>
              <Link to="/sponsor" className="text-xs font-headline font-black uppercase tracking-widest text-vibrant-green flex items-center gap-2 hover:gap-4 transition-all">
                See All Profiles <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>

            {/* Horizontal magazine-style story cards */}
            <div className="space-y-px">
              {[
                {
                  id: 'gerald',
                  fallbackImage: IMAGES.villagesHero,
                  tag: 'Child Story',
                  name: 'Gerald',
                  location: 'Gulu Village, Uganda',
                  quote: 'I used to cry every night. Now I have brothers, a mother, and a dream to become an engineer.',
                  fallbackDesc: 'Gerald lost both parents to illness when he was 4. He arrived at the Gulu village malnourished and silent. Today he is top of his class in mathematics.',
                  cta: 'Sponsor a Child',
                  link: '/sponsor?tab=child',
                  bgAccent: 'bg-vibrant-green',
                },
                {
                  id: 'mama_phiona',
                  fallbackImage: IMAGES.watotoMother,
                  tag: 'Mother Story',
                  name: 'Mama Phiona',
                  location: 'Kampala Village, Uganda',
                  quote: 'When my husband died I thought my life was over. Katonda Talemwa gave me 7 children and a purpose.',
                  fallbackDesc: 'Phiona became a village mother in 2010. She has raised over 15 children and continues to mentor new mothers joining the programme.',
                  cta: 'Support a home',
                  link: '/sponsor?tab=mother',
                  bgAccent: 'bg-secondary',
                },
              ].map((story, i) => {
                const profile = children.find(c => c.id === story.id)
                return (
                  <div
                    key={story.id}
                    data-aos={i === 0 ? 'fade-right' : 'fade-left'}
                    className="grid grid-cols-1 md:grid-cols-12 border border-outline-variant/50 overflow-hidden group"
                  >
                    {/* Image */}
                    <div className={`md:col-span-4 relative min-h-[280px] ${i === 1 ? 'md:order-2' : ''}`}>
                      <img
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                        src={profile?.image || story.fallbackImage}
                        alt={story.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent" />
                      <span className={`absolute top-4 left-4 text-pure-white text-[10px] font-black uppercase tracking-widest px-3 py-1 ${story.bgAccent}`}>
                        {story.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`md:col-span-8 p-10 md:p-12 bg-surface flex flex-col justify-between gap-8 ${i === 1 ? 'md:order-1' : ''}`}>
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">{story.location}</span>
                          <h3 className="font-headline text-2xl font-black uppercase text-deep-black mt-1">Meet {story.name}</h3>
                        </div>
                        <p className="text-lg italic font-light text-deep-black leading-relaxed border-l-4 border-vibrant-green pl-4">
                          &ldquo;{story.quote}&rdquo;
                        </p>
                        <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                          {profile?.description || story.fallbackDesc}
                        </p>
                      </div>
                      <Link
                        to={story.link}
                        className="w-full sm:w-auto text-center bg-deep-black text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-vibrant-green active:scale-95 transition-all rounded-none self-start"
                      >
                        {story.cta}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA: Split panel ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-t border-outline-variant/30">
          {/* Left: Samuel sponsor card */}
          <div data-aos="fade-right" className="bg-surface-container-low p-12 md:p-16 flex flex-col justify-center space-y-6 border-r border-outline-variant/30">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Meet Samuel, Age 8</span>
            <div className="border border-outline-variant/60 overflow-hidden rounded-none">
              <img className="w-full aspect-video object-cover" src={IMAGES.samuelCard} alt="Samuel" />
            </div>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Samuel dreams of becoming a doctor. He is in Primary 3, loves football, and asks his mother to pray with him every night before bed.
            </p>
            <Link
              to="/sponsor?tab=child"
              className="w-full text-center bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
            >
              Sponsor Samuel — $38/mo
            </Link>
          </div>

          {/* Right: General CTA */}
          <div data-aos="fade-left" className="bg-deep-black text-pure-white p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">Ready to Change a Life?</span>
            <h2 className="font-headline text-4xl font-black uppercase leading-none">
              Help us <br />
              <span className="text-vibrant-green">rewrite</span> <br />
              their story.
            </h2>
            <p className="text-sm font-light opacity-90 leading-relaxed">
              By sponsoring a child or mother in a Katonda Talemwa home, you&apos;re not just sending money — you&apos;re providing a family, an education, and a future filled with hope and dignity.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/sponsor?tab=child"
                className="text-center bg-action-yellow text-deep-black font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
              >
                Sponsor a Child
              </Link>
              <Link
                to="/sponsor?tab=mother"
                className="text-center border border-pure-white/30 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white hover:bg-pure-white/10 transition-all rounded-none"
              >
                Support a Home
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
