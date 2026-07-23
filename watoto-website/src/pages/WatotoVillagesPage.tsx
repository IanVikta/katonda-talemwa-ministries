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

        {/* ── CINEMATIC HERO: Full-bleed image with bold overlay text ── */}
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-bottom"
              src={IMAGES.villagesHero}
              alt="Katonda Talemwa Village children"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
          </div>

          {/* Bottom-anchored hero text */}
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop pb-20 pt-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div data-aos="fade-right" className="space-y-6">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">
                  Our Core Mission — Est. 1994
                </span>
                <h1 className="font-headline text-5xl sm:text-7xl font-black uppercase leading-none tracking-tight text-pure-white">
                  A Village. <br />
                  A Family. <br />
                  <span className="text-action-yellow">A Future.</span>
                </h1>
              </div>
              <div data-aos="fade-left" data-aos-delay="150" className="space-y-6">
                <p className="text-base font-light text-pure-white/90 leading-relaxed">
                  Where orphaned and abandoned children across Uganda and South Sudan find not just shelter, but a real mother, real siblings, and the unconditional love of a true family.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/sponsor?tab=mother"
                    className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
                  >
                    Sponsor a Mother
                  </Link>
                  <Link
                    to="/sponsor?tab=child"
                    className="border border-pure-white/60 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:border-pure-white hover:bg-pure-white/10 transition-all rounded-none"
                  >
                    Sponsor a Child
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-pure-white/50">
            <span className="text-[9px] uppercase tracking-widest font-bold">Scroll</span>
            <MaterialIcon name="keyboard_arrow_down" className="text-xl animate-bounce" />
          </div>
        </section>

        {/* ── KEY NUMBERS STRIP ── */}
        <section className="bg-vibrant-green border-b-4 border-action-yellow">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 divide-x divide-pure-white/20">
            {[
              { stat: '10', suffix: '+', label: 'Village Communities' },
              { stat: '3,000', suffix: '+', label: 'Children in Care' },
              { stat: '400', suffix: '+', label: 'Village Mothers' },
              { stat: '30', suffix: '+', label: 'Years of Ministry' },
            ].map(({ stat, suffix, label }, i) => (
              <div key={label} data-aos="fade-up" data-aos-delay={i * 80} className="py-10 px-6 text-pure-white text-center">
                <div className="font-headline text-3xl sm:text-4xl font-black text-action-yellow">{stat}{suffix}</div>
                <p className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE VILLAGE MODEL: Two-column narrative ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div data-aos="fade-right" className="space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">The Family Model</span>
                <h2 className="font-headline text-4xl sm:text-5xl font-black uppercase text-deep-black leading-none">
                  Not an <br />
                  <span className="text-vibrant-green">Orphanage.</span> <br />
                  A Home.
                </h2>
                <div className="w-16 h-1 bg-action-yellow" />
              </div>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                Unlike large institutional orphanages, a Katonda Talemwa Village is built around real family units. Each home contains one dedicated mother who commits to raising exactly seven children as her own — cooking for them, helping with homework, worshipping together, and growing old together.
              </p>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                These are not just houses. They are addresses where children can say &ldquo;I live there, and that is my mother.&rdquo; The village includes a nursery, primary school, secondary school, vocational center, healthcare clinic, and community church — everything needed for a child to thrive without ever leaving the safety of community.
              </p>
              <div className="flex gap-6">
                <div className="border-l-4 border-vibrant-green pl-4">
                  <div className="font-headline text-2xl font-black text-vibrant-green">7</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Children per family</p>
                </div>
                <div className="border-l-4 border-action-yellow pl-4">
                  <div className="font-headline text-2xl font-black text-deep-black">1</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Dedicated Mother</p>
                </div>
                <div className="border-l-4 border-outline-variant pl-4">
                  <div className="font-headline text-2xl font-black text-deep-black">∞</div>
                  <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant">Years of love</p>
                </div>
              </div>
            </div>

            {/* Right: video still with play button */}
            <div data-aos="zoom-in" data-aos-delay="100" className="relative border border-outline-variant/60 rounded-none overflow-hidden group cursor-pointer shadow-sm">
              <img
                className="w-full aspect-video object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                src={IMAGES.villages}
                alt="Katonda Talemwa Village"
              />
              <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-vibrant-green text-pure-white flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all">
                  <MaterialIcon name="play_arrow" className="text-4xl translate-x-0.5" filled />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-black/80 to-transparent flex items-center justify-between">
                <span className="text-pure-white text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-action-yellow" /> Watch: Life in the Village
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
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block">What the Village Provides</span>
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
                { icon: 'music_note', title: 'Worship Academy', desc: 'Instrument lessons in keyboard, guitar, drums, and vocals. Our children perform across Uganda and internationally.' },
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

        {/* ── THE MOTHER: Bold editorial double column ── */}
        <section className="py-24 bg-deep-black text-pure-white border-b border-outline-variant/10">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-pure-white/10">

              {/* Photo panel */}
              <div data-aos="zoom-in" className="lg:col-span-5 relative min-h-[500px]">
                <img
                  className="w-full h-full object-cover absolute inset-0"
                  src={IMAGES.watotoMother}
                  alt="Katonda Talemwa Mother"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-black/30" />
                <div className="absolute bottom-8 left-8 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-action-yellow bg-vibrant-green/90 px-3 py-1 block w-fit">
                    Village Mother
                  </span>
                  <h3 className="font-headline text-xl font-black uppercase">Mother Grace</h3>
                  <p className="text-xs opacity-70">Serving since 2008 · Gulu Village</p>
                </div>
              </div>

              {/* Content panel */}
              <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-between gap-12">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block">The Heart of Every Home</span>
                  <h2 className="font-headline text-4xl font-black uppercase leading-none">
                    She is not staff. <br />
                    <span className="text-vibrant-green">She is Mom.</span>
                  </h2>
                  <div className="w-16 h-0.5 bg-action-yellow" />
                  <p className="text-sm font-light opacity-90 leading-relaxed">
                    A Katonda Talemwa Mother is a widow or a woman called to a life of service. She commits to raising seven orphaned children as her own — permanently. She cooks, disciplines, celebrates, comforts, and prays with every child in her home.
                  </p>
                  <blockquote className="border-l-4 border-vibrant-green pl-6 italic text-lg font-light opacity-90">
                    &ldquo;I didn&apos;t just get a job; I found my calling. These children are my life, and watching them grow into leaders is my greatest joy.&rdquo;
                    <footer className="not-italic text-xs font-black uppercase tracking-widest text-action-yellow mt-3 block">— Mother Grace</footer>
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-pure-white/10 p-6 bg-pure-white/5">
                    <div className="font-headline text-3xl font-black text-vibrant-green">400+</div>
                    <p className="text-xs uppercase font-bold tracking-wider mt-1 opacity-70">Active Village Mothers</p>
                  </div>
                  <div className="border border-pure-white/10 p-6 bg-pure-white/5">
                    <div className="font-headline text-3xl font-black text-action-yellow">15 yrs</div>
                    <p className="text-xs uppercase font-bold tracking-wider mt-1 opacity-70">Average Commitment</p>
                  </div>
                  <Link
                    to="/sponsor?tab=mother"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="col-span-2 bg-vibrant-green text-pure-white text-center font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
                  >
                    Sponsor a Village Mother — $38/mo
                  </Link>
                </div>
              </div>
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
                  cta: 'Sponsor a Mother',
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
              By sponsoring a child or mother in a Katonda Talemwa Village, you&apos;re not just sending money — you&apos;re providing a family, an education, and a future filled with hope and dignity.
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
                Sponsor a Village Mother
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
