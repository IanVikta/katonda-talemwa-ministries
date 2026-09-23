import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES } from '../data/content'
import SEO from '../components/SEO'

export default function WatotoVillagesPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Katonda Children’s Villages | Family Orphan Care"
        description="Discover how Katonda Talemwa Ministries creates permanent, faith-filled families in Kyasenya, Lwengo. Nurturing mothers, holistic education, and lifelong care."
        canonicalPath="/katonda-villages"
        keywords="Katonda Children's Villages, Katonda Talemwa villages, orphan care village Uganda, family style orphan care, foster care Africa, Kyasenya Lwengo"
      />
      <Navbar />

      <main>

        {/* ── CINEMATIC HERO: Sharp Geometric Layout ── */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-deep-black text-pure-white pt-24 pb-10">
          {/* Background image with high contrast vignette */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-top filter brightness-[0.72] contrast-[1.08]"
              src={IMAGES.villagesHero}
              alt="Katonda Talemwa Ministries children in community village Uganda"
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
                  A Loving Home. <br />
                  A Forever Family. <br />
                  <span className="text-action-yellow">A Purposeful Future.</span>
                </h1>

                <p className="text-sm sm:text-base text-pure-white/90 font-light leading-relaxed max-w-lg">
                  Reviving the joy and security of family life for orphaned and vulnerable Ugandan children through compassionate, Christ-anchored village communities.
                </p>

                {/* Key feature cards (sharp rectangular chips) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="border border-pure-white/20 bg-deep-black/70 backdrop-blur-sm p-4 flex flex-col justify-between gap-3 rounded-none">
                    <MaterialIcon name="cottage" className="text-action-yellow text-2xl" />
                    <span className="text-[11px] font-headline font-black uppercase tracking-wider text-pure-white">
                      Christ-Anchored Homes
                    </span>
                  </div>
                  <div className="border border-pure-white/20 bg-deep-black/70 backdrop-blur-sm p-4 flex flex-col justify-between gap-3 rounded-none">
                    <MaterialIcon name="favorite" className="text-vibrant-green text-2xl" />
                    <span className="text-[11px] font-headline font-black uppercase tracking-wider text-pure-white">
                      Loving House Mothers
                    </span>
                  </div>
                  <div className="border border-pure-white/20 bg-deep-black/70 backdrop-blur-sm p-4 flex flex-col justify-between gap-3 rounded-none">
                    <MaterialIcon name="school" className="text-action-yellow text-2xl" />
                    <span className="text-[11px] font-headline font-black uppercase tracking-wider text-pure-white">
                      Full-Cycle Education
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sharp Mission Box */}
              <div data-aos="fade-left" data-aos-delay="150" className="lg:col-span-5">
                <div className="bg-deep-black/85 backdrop-blur-md border border-pure-white/20 border-t-4 border-t-action-yellow p-8 sm:p-10 space-y-6 shadow-2xl rounded-none relative">

                  <div className="space-y-2">
                    <span className="text-[10px] font-headline font-extrabold uppercase tracking-widest text-vibrant-green block border-l-3 border-vibrant-green pl-2.5">
                      The Father&apos;s Love in Action
                    </span>
                    <h2 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-pure-white">
                      Where God&apos;s Unfailing Love <span className="text-action-yellow">Creates A Family</span>
                    </h2>
                  </div>

                  <p className="text-sm font-light text-pure-white/85 leading-relaxed">
                    We translate the Father&apos;s heart into everyday reality—ensuring vulnerable children find far more than emergency shelter: they receive an affectionate mother, lifelong brothers and sisters, and the restorative embrace of a genuine home.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/sponsor"
                      className="flex-1 bg-vibrant-green hover:brightness-110 active:scale-95 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-4 px-5 text-center flex items-center justify-center gap-2 transition-all rounded-none shadow-md"
                    >
                      <span>Support Our Mission</span>
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
                      <div className="text-[10px] uppercase font-bold tracking-wider text-pure-white/70">Holistic Care</div>
                    </div>
                    <div className="border-l-2 border-vibrant-green pl-3">
                      <div className="font-headline text-xl font-black text-vibrant-green">2,000+</div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-pure-white/70">Young Lives Nurtured</div>
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
              <span className="text-[10px] uppercase tracking-widest font-bold group-hover:tracking-wider transition-all">Discover Our Family Model</span>
              <MaterialIcon name="keyboard_arrow_down" className="text-xl animate-bounce text-action-yellow" />
            </a>
          </div>
        </section>

        {/* ── KEY NUMBERS STRIP ── */}
        <section className="bg-vibrant-green border-b-4 border-action-yellow">
          <div className="max-w-3xl mx-auto px-4 md:px-margin-desktop grid grid-cols-2 divide-x divide-pure-white/20">
            {[
              { stat: '2,000', suffix: '+', label: 'Children Welcomed & Empowered' },
              { stat: '25', suffix: '+', label: 'Years of Unwavering Service' },
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
                  The Spark of Grace
                </span>
                <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-deep-black leading-none">
                  Never An Institution, <br />
                  <span className="text-vibrant-green">Always A Living Home</span> <br />
                  For Every Vulnerable Child.
                </h2>
                <div className="w-16 h-1 bg-action-yellow" />
              </div>

              <div className="space-y-4 text-sm text-on-surface-variant font-light leading-relaxed">
                <p>
                  In 1989, deeply marked by their own early encounters with hardship and rejection, Pastor Emmanuel Nnyanzi and his wife Sarah placed their trust in Jesus Christ. While reaching out to families through door-to-door fellowship, they came across four young siblings whose mother had died and whose father struggled with debilitating mental illness.
                </p>
                <p>
                  Sheltering in a modest, single rented room with scarcely enough resources for their own survival, Pastor Emmanuel turned to Sarah in steadfast faith: <span className="font-semibold text-deep-black italic">&ldquo;These children do not need material riches—they need parental tenderness and a place to belong.&rdquo;</span> Moved by courage and Christlike mercy, they welcomed them into their arms and lives.
                </p>
                <p>
                  What began as four children sharing one humble room swiftly multiplied to 12, and soon to 47 boys and girls. When the rising cost of school tuition threatened to close the door to their education, Pastor Emmanuel and Sarah made an astonishing sacrifice: they sold their only home to construct classrooms and residence halls, ensuring every boy and girl could study and flourish.
                </p>
                <p>
                  Over 25 years later, more than 2,000 children have crossed the threshold of Katonda Talemwa Ministries. Reared in unconditional family love, grounded in biblical faith, and equipped through quality schooling, these young people have risen to become physicians, educators, pastors, and impactful community leaders across Uganda and beyond.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="border-l-4 border-vibrant-green pl-4">
                  <div className="font-headline text-2xl font-black text-vibrant-green">1989</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Sown in Faith</p>
                </div>
                <div className="border-l-4 border-action-yellow pl-4">
                  <div className="font-headline text-2xl font-black text-deep-black">2,000+</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Lives Rebuilt</p>
                </div>
                <div className="border-l-4 border-outline-variant pl-4">
                  <div className="font-headline text-2xl font-black text-deep-black">25+ Yrs</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Dedicated Care</p>
                </div>
              </div>
            </div>

            {/* Right: video still with play button */}
            <div data-aos="zoom-in" data-aos-delay="100" className="relative border border-outline-variant/60 rounded-none overflow-hidden group cursor-pointer shadow-sm">
              <img
                className="w-full aspect-video object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                src={IMAGES.villages}
                alt="Katonda Talemwa Ministries family homes in Kyasenya village Uganda"
              />
              <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-vibrant-green text-pure-white flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all">
                  <MaterialIcon name="play_arrow" className="text-4xl translate-x-0.5" filled />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent flex items-center justify-between">
                <span className="text-pure-white text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-action-yellow" /> Watch: From a Rented Room to a Village of Hope
                </span>
                <span className="text-pure-white text-xs font-mono bg-deep-black/60 px-2 py-0.5">2:45</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── VILLAGE PILLARS: 6-pillar editorial grid ── */}
        <section id="the-model" className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-14">
            <div data-aos="fade-up" className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Our Holistic Framework</span>
              <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                Six Pillars of <br />
                <span className="text-vibrant-green">Comprehensive Child Care</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/40 border border-outline-variant/40">
              {[
                {
                  icon: 'school',
                  title: 'Comprehensive Education',
                  desc: 'From early childhood through higher education and vocational training, every child receives complete scholastic coverage—tuition, books, uniforms, and dedicated tutoring, sustaining a 100% literacy rate.',
                },
                {
                  icon: 'medical_services',
                  title: 'Full-Spectrum Healthcare',
                  desc: 'On-campus medical clinics deliver routine immunizations, daily health checkups, vision and dental screenings, and immediate emergency clinical care to keep every child vibrant and healthy.',
                },
                {
                  icon: 'church',
                  title: 'Spiritual Formation',
                  desc: 'Faith anchors our daily rhythm. Family evening devotions, weekly church worship, guided Bible studies, and dedicated pastoral mentorship cultivate resilient, Christ-centered character.',
                },
                {
                  icon: 'sports_soccer',
                  title: 'Athletics & Physical Wellbeing',
                  desc: 'Structured athletic programs—spanning football, netball, and track sports—foster vital teamwork, self-discipline, healthy physical development, and lasting confidence.',
                },
                {
                  icon: 'music_note',
                  title: 'Creative Arts & Music Academy',
                  desc: 'Hands-on training in piano keyboard, acoustic guitar, drums, and choral vocal performance empowers children to discover their creative gifts and lead worship across Uganda and the world.',
                },
                {
                  icon: 'eco',
                  title: 'Practical Life & Environmental Skills',
                  desc: 'Community agricultural plots, poultry farming, and renewable energy systems instill hands-on work ethics, practical self-reliance, and faithful stewardship of the environment.',
                },
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
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Transformed Lives</span>
                <h2 className="font-headline text-4xl font-black uppercase text-deep-black leading-none">
                  Testimonies of <br />
                  <span className="text-vibrant-green">Hope Restored</span>
                </h2>
                <div className="w-16 h-1 bg-action-yellow" />
              </div>
              <Link to="/sponsor" className="text-xs font-headline font-black uppercase tracking-widest text-vibrant-green flex items-center gap-2 hover:gap-4 transition-all">
                Explore More Stories <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>

            {/* Horizontal magazine-style story cards */}
            <div className="space-y-px">
              {[
                {
                  id: 'gerald',
                  fallbackImage: IMAGES.villagesHero,
                  tag: 'Child’s Journey',
                  name: 'Gerald',
                  location: 'Kyasenya Village, Uganda',
                  quote: 'I once spent every night crying in fear. Today, I am surrounded by brothers, protected by a loving mother, and dreaming boldly of becoming an engineer.',
                  fallbackDesc: 'After losing both parents to sickness at just four years old, Gerald arrived at our Kyasenya village fragile, malnourished, and withdrawn. Wrapped in the steady love of a village family and equipped through our school, he now leads his class in mathematics with an infectious smile.',
                  cta: 'Sponsor a Child',
                  link: '/sponsor?tab=child',
                  bgAccent: 'bg-vibrant-green',
                },
                {
                  id: 'mama_phiona',
                  fallbackImage: IMAGES.watotoMother,
                  tag: 'Devoted Village Mother',
                  name: 'Mama Phiona',
                  location: 'Kyasenya Village, Uganda',
                  quote: 'When I lost my husband, grief made me believe my days had lost all meaning. Katonda Talemwa entrusted me with seven precious children and gave my life a divine purpose.',
                  fallbackDesc: 'Joining the ministry as a house mother in 2010, Mama Phiona has lovingly mothered more than fifteen boys and girls into capable adulthood, while actively coaching and encouraging newly welcomed mothers.',
                  cta: 'Support a Village Family',
                  link: '/sponsor',
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
                        alt={`${story.name} - Katonda Talemwa Ministries transformation story`}
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
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">Meet Samuel — Age 8</span>
            <div className="border border-outline-variant/60 overflow-hidden rounded-none">
              <img className="w-full aspect-video object-cover" src={IMAGES.samuelCard} alt="Samuel, a sponsored child at Katonda Talemwa Ministries" />
            </div>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Energetic and full of joy, Samuel is in Primary 3 and longs to become a medical doctor so he can heal others. An avid football enthusiast, he never ends a day without gathering with his village mother to give thanks in prayer.
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
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">Make An Eternal Difference</span>
            <h2 className="font-headline text-4xl font-black uppercase leading-none">
              Help us <br />
              <span className="text-vibrant-green">transform</span> <br />
              a child&apos;s future.
            </h2>
            <p className="text-sm font-light opacity-90 leading-relaxed">
              When you partner with a child or house mother in our Katonda Talemwa village homes, your gift reaches far beyond financial relief—you plant a child firmly in a family, unlock life-changing education, and secure a future brimming with dignity and faith.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/sponsor?tab=child"
                className="text-center bg-action-yellow text-deep-black font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
              >
                Sponsor a Child
              </Link>
              <Link
                to="/sponsor"
                className="text-center border border-pure-white/30 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white hover:bg-pure-white/10 transition-all rounded-none"
              >
                Explore Ways to Give
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
