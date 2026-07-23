import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES } from '../data/content'

export default function WatotoVillagesPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden page-enter">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover object-bottom" src={IMAGES.villagesHero} alt="Smiling Ugandan children in a village" />
            <div className="absolute inset-0 bg-deep-black/40" />
          </div>
          <div className="relative z-10 w-full px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto">
            <ScrollReveal animation="zoom-in" duration={800} className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-action-yellow mb-4">
                Our Core Mission
              </span>
              <h1 className="font-headline text-[2rem] sm:text-[3rem] md:text-[4rem] text-pure-white mb-6 leading-none font-black uppercase tracking-tight">
                Katonda Talemwa Villages: <br />
                Where the Lost Find a <span className="text-action-yellow">Family</span>
              </h1>
              <p className="text-body-lg text-pure-white/95 mb-10 max-w-2xl font-light leading-relaxed">
                A Katonda Talemwa village is a safe, nurturing place where orphaned and vulnerable children can truly experience the unconditional love of a family through holistic care, quality education, and unwavering faith.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/sponsor"
                  className="bg-secondary text-pure-white font-headline text-button-text px-8 py-4 uppercase tracking-widest hover:bg-secondary/90 active:scale-95 transition-all font-bold rounded-none"
                >
                  Sponsor a Child
                </Link>
                <button className="border border-pure-white text-pure-white font-headline text-button-text px-8 py-4 uppercase tracking-widest hover:bg-pure-white hover:text-deep-black active:scale-95 transition-all font-bold rounded-none flex items-center gap-2">
                  <MaterialIcon name="play_arrow" className="text-xl" />
                  Watch Their Story
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Intro Pillars Section */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30 relative">
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Heading and Text */}
              <ScrollReveal animation="fade-right" duration={700} className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                <span className="text-vibrant-green font-bold text-label-bold uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                  Holistic Care
                </span>
                <h2 className="font-headline text-headline-lg text-deep-black uppercase font-black leading-tight tracking-tight">
                  A child needs more <br />
                  than a house, <br />
                  <span className="text-vibrant-green font-black">a child needs a home and a family</span>
                </h2>
                <div className="h-1 w-20 bg-vibrant-green" />
                <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
                  Our villages provide a holistic ecosystem containing everything needed for vulnerable children to grow up healthy, educated, and prepared for a bright future.
                </p>
                <div className="pt-4">
                  <Link
                    to="/sponsor"
                    className="inline-block bg-vibrant-green text-pure-white font-headline text-button-text px-8 py-4 uppercase tracking-widest hover:bg-vibrant-green/90 transition-all font-bold rounded-none"
                  >
                    Partner With Us
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right Column: Geometric Grid of Pillars */}
              <ScrollReveal animation="fade-left" duration={700} className="lg:col-span-7 bg-surface border border-outline-variant/60 shadow-lg rounded-none overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-x divide-outline-variant/40">
                  {[
                    { icon: 'school', title: 'Education', desc: 'Primary, secondary, and vocational training supporting 100% literacy.' },
                    { icon: 'medical_services', title: 'Medical Care', desc: 'On-site clinical support, immunizations, and general healthcare.' },
                    { icon: 'sports_soccer', title: 'Sports Academy', desc: 'Talent development, physical fitness, and teamwork coaching.' },
                    { icon: 'music_note', title: 'Worship Academy', desc: 'Creative expression, musical instrumentation, and choir training.' },
                    { icon: 'menu_book', title: 'Discipleship', desc: 'Christian values, spiritual guidance, and character building.' },
                    { icon: 'eco', title: 'Sustainability', desc: 'Environmental agricultural projects and renewable energy systems.' }
                  ].map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-8 bg-surface relative overflow-hidden transition-all duration-300 group flex flex-col justify-between min-h-[240px] hover:bg-vibrant-green/[0.02] cursor-pointer"
                    >
                      {/* Icon with scale and lift transition */}
                      <div className="text-vibrant-green mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 ease-out">
                        <MaterialIcon name={pillar.icon} size={36} />
                      </div>
                      
                      {/* Text details */}
                      <div className="space-y-2 relative z-10">
                        <h3 className="text-md font-bold text-deep-black uppercase tracking-wider group-hover:text-vibrant-green transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed font-light">
                          {pillar.desc}
                        </p>
                      </div>

                      {/* Sliding bottom indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-vibrant-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </div>
                  ))}
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Model Section */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-12 gap-16 items-center">
            <ScrollReveal animation="fade-right" duration={700} className="md:col-span-6 space-y-6">
              <span className="text-vibrant-green font-bold text-label-bold uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                The Family Model
              </span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black leading-tight uppercase tracking-tight">
                OUR MODEL IS CENTERED <br />
                AROUND <span className="text-vibrant-green">FAMILIES</span>
              </h2>
              <div className="h-1 w-20 bg-secondary" />
              <p className="text-on-surface-variant leading-relaxed text-body-lg font-light">
                Instead of large, institutional orphanages, Katonda Talemwa builds family-oriented villages. Each home contains a Katonda Talemwa Mother who commits to raising seven orphaned or abandoned children as siblings.
              </p>
              <p className="text-on-surface-variant leading-relaxed font-light">
                The village is a secure, vibrant community containing a nursery, primary school, high school, vocational center, healthcare clinic, and community church. This model ensures children grow up with a true sense of belonging.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="zoom-in" duration={800} className="md:col-span-6 relative">
              <div className="relative aspect-video border border-outline-variant/60 rounded-none shadow-lg overflow-hidden group cursor-pointer">
                <img
                  className="w-full h-full object-cover brightness-90"
                  src={IMAGES.villages}
                  alt="Katonda Talemwa Village Community Model"
                />
                <div className="absolute inset-0 bg-deep-black/30 group-hover:bg-deep-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-secondary text-pure-white flex items-center justify-center shadow-lg group-hover:scale-105 active:scale-95 transition-all duration-300 rounded-none">
                    <MaterialIcon name="play_arrow" className="text-4xl translate-x-0.5" filled />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-pure-white text-sm font-bold z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-action-yellow" />
                    <span>Watch: The Village Model</span>
                  </div>
                  <span className="bg-deep-black/80 px-3 py-1 text-xs border border-pure-white/10 font-mono rounded-none">2:45</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bento Grid - The Village Life */}
        <section className="py-24 bg-surface-container-low border-t border-outline-variant/30 relative">
          <div className="relative z-10 px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto">
            <ScrollReveal animation="fade-down" className="text-center mb-16">
              <span className="text-vibrant-green font-bold text-label-bold uppercase tracking-widest block mb-2">Vibrant Communities</span>
              <h2 className="font-headline text-headline-lg text-deep-black uppercase font-black tracking-tight">The Village Life</h2>
              <div className="h-1.5 w-24 bg-action-yellow mx-auto mt-4" />
              <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto mt-6 font-light">
                More than just houses, our villages are vibrant communities designed to foster physical, emotional, and spiritual growth.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Card 1: Family Home */}
              <ScrollReveal animation="fade-right" duration={700} className="md:col-span-8 bg-surface rounded-none p-8 border border-outline-variant/60 flex flex-col justify-between overflow-hidden relative group hover:shadow-md transition-all duration-300">
                <div className="z-10 relative">
                  <div className="w-12 h-12 bg-vibrant-green/5 flex items-center justify-center mb-6 rounded-none">
                    <MaterialIcon name="home" className="text-vibrant-green text-3xl" filled />
                  </div>
                  <h3 className="font-headline text-headline-md text-deep-black mb-4 uppercase font-black">The Family Home</h3>
                  <p className="text-on-surface-variant mb-8 max-w-lg leading-relaxed text-body-md font-light">
                    Every child is placed in a family unit consisting of a mother and seven siblings. This isn&apos;t an institution; it&apos;s a real home where children build lifelong bonds, share chores, study together, and learn what it means to be part of a family.
                  </p>
                  <a href="#" className="text-vibrant-green font-headline text-sm font-black uppercase tracking-wider hover:text-secondary inline-flex items-center gap-2 transition-colors">
                    Learn more about family units <MaterialIcon name="arrow_forward" className="text-sm" />
                  </a>
                </div>
                <div className="absolute -right-6 -bottom-6 text-on-surface/[0.02] group-hover:text-vibrant-green/[0.04] transition-colors pointer-events-none">
                  <MaterialIcon name="family_restroom" className="text-[200px]" />
                </div>
              </ScrollReveal>

              {/* Card 2: Education */}
              <ScrollReveal animation="fade-left" duration={700} delay={100} className="md:col-span-4 bg-primary rounded-none p-8 text-pure-white flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="z-10">
                  <div className="w-10 h-10 bg-pure-white/10 flex items-center justify-center mb-6 rounded-none">
                    <MaterialIcon name="school" className="text-action-yellow text-xl" />
                  </div>
                  <h3 className="font-headline text-headline-md mb-3 uppercase font-black">Education</h3>
                  <p className="opacity-90 text-sm leading-relaxed font-light">
                    From early childhood learning to primary, secondary, and vocational training, we ensure every child receives quality schooling to unlock their potential.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-pure-white/20 z-10">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="text-action-yellow">Literacy Rate</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2 bg-pure-white/10 rounded-none overflow-hidden">
                    <div className="w-full h-full bg-action-yellow" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Healthcare */}
              <ScrollReveal animation="fade-right" duration={700} delay={150} className="md:col-span-4 bg-secondary rounded-none p-8 text-pure-white flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="z-10">
                  <div className="w-10 h-10 bg-pure-white/10 flex items-center justify-center mb-6 rounded-none">
                    <MaterialIcon name="medical_services" className="text-action-yellow text-xl" />
                  </div>
                  <h3 className="font-headline text-headline-md mb-3 uppercase font-black">Healthcare</h3>
                  <p className="opacity-90 text-sm leading-relaxed font-light">
                    Comprehensive medical and emotional care is provided within each village through our clinics, ensuring healthy physical development and psychological support.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-pure-white/20 text-xs font-semibold tracking-wider flex items-center gap-2">
                  <MaterialIcon name="check_circle" className="text-action-yellow text-sm" />
                  <span>On-site clinics & pharmacies</span>
                </div>
              </ScrollReveal>

              {/* Card 4: Spiritual Growth */}
              <ScrollReveal animation="fade-left" duration={700} delay={200} className="md:col-span-8 bg-surface rounded-none border border-outline-variant/60 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-vibrant-green/5 flex items-center justify-center mb-6 rounded-none">
                      <MaterialIcon name="auto_awesome" className="text-vibrant-green text-xl" />
                    </div>
                    <h3 className="font-headline text-headline-md text-deep-black mb-3 uppercase font-black">Spiritual Growth</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">
                      Faith is the foundation of everything we do. Children are nurtured in their relationship with Christ through weekly church service, home prayers, and dedicated discipleship programs.
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-vibrant-green font-bold">Rescuing hearts, changing lives</span>
                </div>
                <div className="md:w-1/2 min-h-[220px] relative overflow-hidden">
                  <img className="w-full h-full object-cover" src={IMAGES.spiritualGrowth} alt="Children in prayer" />
                  <div className="absolute inset-0 bg-surface/10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mother Section */}
        <section className="relative py-28 bg-surface-container border-y border-outline-variant/30 overflow-hidden">
          <div className="relative z-10 px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto space-y-16">
            
            {/* Section Header & Large Testimonial Quote */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <ScrollReveal animation="fade-right" duration={700} className="lg:col-span-5 space-y-4">
                <span className="inline-block border-l-4 border-vibrant-green pl-3 text-vibrant-green text-xs uppercase font-bold tracking-widest">
                  Holistic Caregivers
                </span>
                <h2 className="font-headline text-headline-xl leading-none font-black uppercase text-deep-black tracking-tight">
                  The Heart of <br />
                  <span className="text-vibrant-green">Every Home</span>
                </h2>
                <div className="h-1 w-20 bg-vibrant-green" />
              </ScrollReveal>
              
              <ScrollReveal animation="flip-up" delay={200} duration={800} className="lg:col-span-7 bg-surface border border-outline-variant/40 border-l-8 border-l-vibrant-green p-8 md:p-10 rounded-none relative shadow-sm">
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-deep-black">
                  &ldquo;I didn&apos;t just get a job; I found my calling. These children are my life, and watching them grow into leaders is my greatest joy.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-vibrant-green" />
                  <p className="text-sm font-black text-vibrant-green tracking-widest uppercase">Mother Grace</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Editorial Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Side: Framed Image */}
              <ScrollReveal animation="zoom-in" duration={700} className="md:col-span-5 border border-outline-variant/60 p-2 bg-surface flex flex-col justify-between h-full rounded-none shadow-sm">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  src={IMAGES.watotoMother}
                  alt="Katonda Talemwa Mother with children"
                />
                <div className="p-4 bg-surface-container-low mt-2 border border-outline-variant/30">
                  <span className="text-xs uppercase tracking-widest text-vibrant-green font-bold block mb-1">A Mother's Devotion</span>
                  <p className="text-xs font-light text-on-surface-variant leading-relaxed">Raising the next generation of African leaders with unconditional, motherly love.</p>
                </div>
              </ScrollReveal>

              {/* Right Side: Paragraph Narrative & Statistics Grid */}
              <div className="md:col-span-7 flex flex-col justify-between gap-8">
                <ScrollReveal animation="fade-left" duration={600} className="space-y-6">
                  <h3 className="font-headline text-xl font-bold uppercase text-vibrant-green border-b border-outline-variant/40 pb-4">
                    Calling & Commitment
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed font-light">
                    Each Katonda Talemwa mother is a widow or a woman with a deep passion to care for vulnerable children. She commits to raising seven orphaned or abandoned children as siblings.
                  </p>
                  <p className="text-body-md text-on-surface-variant leading-relaxed font-light">
                    She isn&apos;t a staff member; she is Mom. She runs the household, cooks meals, helps with homework, guides them in their relationship with Christ, and creates a true family unit in every sense.
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 gap-6 mt-auto">
                  <ScrollReveal animation="flip-up" delay={150} duration={500} className="border border-outline-variant/60 p-6 bg-surface hover:border-vibrant-green/60 transition-colors rounded-none text-center shadow-sm">
                    <h4 className="font-headline text-4xl text-vibrant-green font-black mb-1">3,000+</h4>
                    <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant font-medium">Children in Care</p>
                  </ScrollReveal>
                  <ScrollReveal animation="flip-up" delay={300} duration={500} className="border border-outline-variant/60 p-6 bg-surface hover:border-vibrant-green/60 transition-colors rounded-none text-center shadow-sm">
                    <h4 className="font-headline text-4xl text-vibrant-green font-black mb-1">400+</h4>
                    <p className="text-xs uppercase font-bold tracking-wider text-on-surface-variant font-medium">Active Mothers</p>
                  </ScrollReveal>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stories of Transformation Section */}
        <section className="py-24 bg-surface border-y border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <ScrollReveal animation="fade-down" className="text-center mb-16">
              <span className="text-vibrant-green font-bold text-label-bold uppercase tracking-widest block mb-2">Restoring Hope</span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black uppercase tracking-tight">Stories of Transformation</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto mt-4" />
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Gerald Story */}
              <ScrollReveal animation="fade-right" duration={700} className="bg-surface rounded-none border border-outline-variant/60 overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-lg transition-all duration-300 group">
                <div className="md:w-1/2 h-72 md:h-auto relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={children.find(c => c.id === 'gerald')?.image || IMAGES.villagesHero}
                    alt="Gerald"
                  />
                  <span className="absolute top-4 left-4 bg-vibrant-green text-pure-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-none shadow-sm">
                    Child Story
                  </span>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between bg-surface-container-low rounded-none">
                  <div>
                    <h3 className="font-headline font-black text-2xl text-deep-black mb-3">Meet Gerald</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-light">
                      {children.find(c => c.id === 'gerald')?.description || 'Gerald lost both parents but has found a home, a mother, and brothers in a Katonda Talemwa Village.'}
                    </p>
                  </div>
                  <Link
                    to="/sponsor?tab=child"
                    className="text-vibrant-green font-headline text-sm font-black uppercase tracking-wider hover:text-secondary flex items-center gap-2 group transition-colors mt-4"
                  >
                    Sponsor Gerald
                    <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Phiona Story */}
              <ScrollReveal animation="fade-left" duration={700} delay={200} className="bg-surface rounded-none border border-outline-variant/60 overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-lg transition-all duration-300 group">
                <div className="md:w-1/2 h-72 md:h-auto relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={children.find(c => c.id === 'mama_phiona')?.image || IMAGES.watotoMother}
                    alt="Mama Phiona"
                  />
                  <span className="absolute top-4 left-4 bg-secondary text-pure-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-none shadow-sm">
                    Mother Story
                  </span>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between bg-surface-container-low rounded-none">
                  <div>
                    <h3 className="font-headline font-black text-2xl text-deep-black mb-3">Meet Mama Phiona</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-light">
                      {children.find(c => c.id === 'mama_phiona')?.description || 'Phiona is a dedicated Katonda Talemwa Mother who has cared for over 15 children. She provides love and guidance.'}
                    </p>
                  </div>
                  <Link
                    to="/sponsor?tab=mother"
                    className="text-vibrant-green font-headline text-sm font-black uppercase tracking-wider hover:text-secondary flex items-center gap-2 group transition-colors mt-4"
                  >
                    Sponsor a Mother
                    <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ready to Change a Life? CTA section */}
        <section className="py-24 px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto text-center overflow-hidden">
          <ScrollReveal animation="zoom-in" duration={850} className="bg-[#0d1f2d] border border-pure-white/10 p-12 md:p-24 relative overflow-hidden shadow-2xl text-pure-white rounded-none">
            <h2 className="font-headline text-headline-lg mb-6 font-black uppercase relative z-10 tracking-tight">Ready to change a life?</h2>
            <p className="text-body-lg opacity-90 mb-16 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              By sponsoring a child in a Katonda Talemwa Village, you aren&apos;t just sending money—you&apos;re providing a family, an education, and a future filled with hope.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 relative z-10 max-w-5xl mx-auto">
              {/* Samuel Profile Showcase */}
              <ScrollReveal animation="rotate-in" delay={200} duration={800} className="bg-surface text-on-surface p-4 rounded-none shadow-2xl w-full max-w-2xl border border-outline-variant/60 hover:scale-[1.01] transition-transform duration-300 flex flex-col sm:flex-row gap-6">
                {/* Image on the left */}
                <div className="relative overflow-hidden rounded-none w-full sm:w-1/2 aspect-square flex-shrink-0">
                  <img className="w-full h-full object-cover" src={IMAGES.samuelCard} alt="Samuel, 8" />
                  <span className="absolute bottom-4 left-4 bg-secondary text-pure-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-none">
                    Waiting for Sponsor
                  </span>
                </div>
                {/* Title & contents on the right */}
                <div className="flex flex-col justify-between p-2 text-left w-full sm:w-1/2">
                  <div>
                    <h4 className="font-headline text-headline-md text-vibrant-green mb-2 font-black uppercase tracking-tight">Meet Samuel, 8</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                      Samuel dreams of becoming a doctor. He loves football and his favorite color is green.
                    </p>
                  </div>
                  <Link
                    to="/sponsor?tab=child"
                    className="block w-full text-center bg-secondary text-pure-white font-headline text-button-text py-4 rounded-none hover:bg-secondary/90 transition-all uppercase tracking-widest font-black"
                  >
                    Sponsor Samuel
                  </Link>
                </div>
              </ScrollReveal>

              {/* Action column */}
              <ScrollReveal animation="fade-left" delay={300} duration={700} className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                <span className="font-black text-sm tracking-widest text-action-yellow uppercase">Or explore more lives</span>
                <h3 className="font-headline text-3xl font-black uppercase max-w-xs leading-tight tracking-tight">
                  Help us rewrite <span className="text-action-yellow">their stories</span>
                </h3>
                <p className="text-pure-white/80 max-w-sm text-sm font-light leading-relaxed">
                  There are many children like Samuel who are waiting for a sponsor to help provide them with nutrition, education, and loving care.
                </p>
                <Link
                  to="/sponsor"
                  className="bg-pure-white text-vibrant-green font-headline text-button-text px-10 py-4 rounded-none uppercase tracking-widest flex items-center justify-center gap-3 group hover:bg-action-yellow hover:text-deep-black transition-all shadow-lg font-black mt-4"
                >
                  View All Children
                  <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
