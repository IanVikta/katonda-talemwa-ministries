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
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover object-bottom" src={IMAGES.villagesHero} alt="Smiling Ugandan children in a village" />
            <div className="absolute inset-0 bg-deep-black opacity-40" />
          </div>
          <div className="relative z-10 w-full px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto">
            <div className="max-w-3xl">
              <p className="font-bold text-label-bold text-action-yellow uppercase tracking-widest mb-4">Our Core Mission</p>
              <h1 className="font-headline text-headline-xl text-pure-white mb-6">
                KATONDA TALEMWA VILLAGES: <br />
                WHERE THE LOST FIND A <span className="text-action-yellow">FAMILY</span>
              </h1>
              <p className="text-body-lg text-pure-white opacity-90 mb-10 max-w-2xl">
                A Katonda Talemwa village is a safe place where orphaned and vulnerable children can truly experience the love of a family through holistic care and unwavering faith.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/sponsor"
                  className="bg-secondary text-pure-white font-headline text-button-text px-10 py-4 rounded-lg uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl font-bold"
                >
                  Sponsor a Child
                </Link>
                <button className="border-2 border-pure-white text-pure-white font-headline text-button-text px-10 py-4 rounded-lg uppercase tracking-widest hover:bg-pure-white hover:text-deep-black transition-all font-bold">
                  Watch Their Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Pillars Section */}
        <section className="py-16 bg-surface-container-low border-b border-outline-variant/30 text-center">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <h2 className="font-headline text-headline-md text-deep-black uppercase mb-6 font-black max-w-2xl mx-auto">
              A child needs more than a house, <span className="text-primary font-black">a child needs a home and a family</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-10">
              Our villages provide a holistic environment where every child receives the support needed to grow up healthy and whole.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'school', label: 'Education' },
                { name: 'medical_services', label: 'Medical Care' },
                { name: 'sports_soccer', label: 'Sports Academy' },
                { name: 'music', label: 'Worship Academy' },
                { name: 'menu_book', label: 'Discipleship' },
                { name: 'eco', label: 'Sustainability' }
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  className="flex items-center gap-2.5 px-6 py-3 bg-surface border border-outline-variant/40 rounded-full shadow-sm text-sm font-bold text-deep-black hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <MaterialIcon name={pillar.name} className="text-primary" />
                  <span>{pillar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-6 space-y-6">
              <span className="text-primary font-bold text-label-bold uppercase tracking-widest block">The Family Model</span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black leading-tight">
                OUR MODEL IS CENTERED <br />
                AROUND <span className="text-primary">FAMILIES</span>
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Instead of large, institutional orphanages, Katonda Talemwa builds family-oriented villages. Each home contains a Katonda Talemwa Mother who commits to raising seven orphaned or abandoned children as siblings.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                The village is a secure, vibrant community containing a nursery, primary school, high school, vocational center, healthcare clinic, and community church.
              </p>
            </div>
            <div className="md:col-span-6 relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  src={IMAGES.villages}
                  alt="Katonda Talemwa Village Community Model"
                />
                <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-deep-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary text-pure-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all duration-300">
                    <MaterialIcon name="play_arrow" className="text-4xl translate-x-0.5" filled />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-pure-white text-sm font-bold z-10">
                  <span>Watch: The Katonda Talemwa Village Model</span>
                  <span className="bg-deep-black/50 px-2 py-0.5 rounded text-xs">2:45</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-headline-lg text-primary mb-4">The Village Life</h2>
            <div className="h-1 w-24 bg-action-yellow mx-auto mb-6" />
            <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              More than just houses, our villages are vibrant communities designed to foster physical, emotional, and spiritual growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <ScrollReveal className="md:col-span-8 bg-pure-white bento-item p-8 rounded-xl flex flex-col justify-between overflow-hidden relative group">
              <div className="z-10">
                <MaterialIcon name="home" className="text-primary text-5xl mb-4" filled />
                <h3 className="font-headline text-headline-md mb-4">The Family Home</h3>
                <p className="text-on-surface-variant mb-6 max-w-md">
                  Every child is placed in a family unit consisting of a mother and seven siblings. This isn&apos;t an institution; it&apos;s a real home where children build lifelong bonds.
                </p>
                <a href="#" className="text-primary font-bold hover:underline flex items-center gap-2">
                  Learn more about family units <MaterialIcon name="arrow_forward" className="text-sm" />
                </a>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <MaterialIcon name="family_restroom" className="text-[200px]" />
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-4 bg-tertiary-container bento-item p-8 rounded-xl text-pure-white">
              <MaterialIcon name="school" className="text-action-yellow text-4xl mb-4" />
              <h3 className="font-headline text-headline-md mb-2">Education</h3>
              <p className="opacity-90">From primary school to vocational training and university, we ensure every child has the tools to succeed.</p>
              <div className="mt-8 pt-8 border-t border-pure-white/20">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-bold text-label-bold">Literacy Rate</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2 bg-pure-white/20 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-action-yellow" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-4 bg-primary bento-item p-8 rounded-xl text-pure-white">
              <MaterialIcon name="medical_services" className="text-action-yellow text-4xl mb-4" />
              <h3 className="font-headline text-headline-md mb-2">Healthcare</h3>
              <p className="opacity-90">Comprehensive medical care is provided within each village, including specialized support for children with disabilities.</p>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-8 bg-surface-container bento-item p-0 rounded-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <MaterialIcon name="auto_awesome" className="text-primary text-4xl mb-4" />
                <h3 className="font-headline text-headline-md mb-2">Spiritual Growth</h3>
                <p className="text-on-surface-variant">
                  Faith is the foundation of everything we do. Children are nurtured in their relationship with Christ through church and community prayer.
                </p>
              </div>
              <div className="md:w-1/2 min-h-[200px] relative">
                <img className="w-full h-full object-cover" src={IMAGES.spiritualGrowth} alt="Children in prayer" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-primary py-section-padding text-pure-white">
          <div className="px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-action-yellow">
                <img className="w-full aspect-[4/5] object-cover" src={IMAGES.watotoMother} alt="Katonda Talemwa Mother with children" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-action-yellow -z-10 rounded-lg" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-trust-blue -z-10 opacity-20 rounded-full blur-3xl" />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-headline text-headline-lg mb-6 leading-tight">
                THE KATONDA TALEMWA MOTHER:
                <br />
                <span className="text-action-yellow underline">THE HEART OF EVERY HOME</span>
              </h2>
              <p className="text-body-lg mb-6 opacity-90 italic">
                &ldquo;I didn&apos;t just get a job; I found my calling. These children are my life, and watching them grow into leaders is my greatest joy.&rdquo; — Mother Grace
              </p>
              <p className="mb-8 opacity-80">
                Each Katonda Talemwa mother is a widow or a woman with a passion to care for children. She provides the emotional stability, spiritual guidance, and unconditional love that every child needs to flourish. She isn&apos;t a staff member; she is Mom.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-on-primary-fixed-variant p-4 rounded-lg">
                  <h4 className="font-headline text-headline-md text-action-yellow mb-1">3,000+</h4>
                  <p className="font-bold text-label-bold">Children in Care</p>
                </div>
                <div className="bg-on-primary-fixed-variant p-4 rounded-lg">
                  <h4 className="font-headline text-headline-md text-action-yellow mb-1">400+</h4>
                  <p className="font-bold text-label-bold">Active Mothers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories of Transformation Section */}
        <section className="py-20 bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-label-bold uppercase tracking-widest block mb-2">Restoring Hope</span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black uppercase">Stories of Transformation</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Gerald Story */}
              <div className="bg-surface rounded-2xl border border-outline-variant overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <img
                    className="w-full h-full object-cover"
                    src={children.find(c => c.id === 'gerald')?.image || IMAGES.villagesHero}
                    alt="Gerald"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">Child Story</span>
                    <h3 className="font-headline font-bold text-xl text-deep-black mb-3">Meet Gerald</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                      {children.find(c => c.id === 'gerald')?.description || 'Gerald lost both parents but has found a home, a mother, and brothers in a Katonda Talemwa Village.'}
                    </p>
                  </div>
                  <Link
                    to="/sponsor?tab=child"
                    className="text-primary font-headline text-sm font-black uppercase tracking-wider hover:text-secondary hover:gap-3 flex items-center gap-2 group transition-all"
                  >
                    Sponsor Gerald
                    <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Phiona Story */}
              <div className="bg-surface rounded-2xl border border-outline-variant overflow-hidden shadow-md flex flex-col md:flex-row hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <img
                    className="w-full h-full object-cover"
                    src={children.find(c => c.id === 'mama_phiona')?.image || IMAGES.watotoMother}
                    alt="Mama Phiona"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">Mother Story</span>
                    <h3 className="font-headline font-bold text-xl text-deep-black mb-3">Meet Mama Phiona</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                      {children.find(c => c.id === 'mama_phiona')?.description || 'Phiona is a dedicated Katonda Talemwa Mother who has cared for over 15 children. She provides love and guidance.'}
                    </p>
                  </div>
                  <Link
                    to="/sponsor?tab=mother"
                    className="text-primary font-headline text-sm font-black uppercase tracking-wider hover:text-secondary hover:gap-3 flex items-center gap-2 group transition-all"
                  >
                    Sponsor a Mother
                    <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto text-center overflow-hidden">
          <div className="bg-surface-container rounded-3xl p-12 md:p-20 relative overflow-hidden border border-outline-variant/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full -ml-32 -mb-32" />
            <h2 className="font-headline text-headline-lg text-deep-black mb-8 font-black uppercase">Ready to change a life?</h2>
            <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              By sponsoring a child in a Katonda Talemwa Village, you aren&apos;t just sending money—you&apos;re providing a family, an education, and a future filled with hope.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="bg-surface p-2 rounded-xl shadow-lg w-full max-w-sm border border-outline-variant/50">
                <img className="w-full aspect-square object-cover rounded-lg mb-4" src={IMAGES.samuelCard} alt="Samuel, 8" />
                <div className="p-4 text-left">
                  <h4 className="font-headline text-headline-md text-primary mb-1">Meet Samuel, 8</h4>
                  <p className="text-on-surface-variant mb-4">Samuel dreams of becoming a doctor. He loves football and his favorite color is green.</p>
                  <Link
                    to="/sponsor?tab=child"
                    className="block w-full text-center bg-secondary text-pure-white font-headline text-button-text py-3 rounded-lg hover:brightness-110 transition-colors uppercase tracking-widest font-bold"
                  >
                    Sponsor Samuel
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-label-bold text-primary">OR EXPLORE MORE LIVES</p>
                <Link
                  to="/sponsor"
                  className="bg-primary text-pure-white font-headline text-button-text px-12 py-4 rounded-lg uppercase tracking-widest flex items-center justify-center gap-3 group hover:brightness-110 transition-all shadow-md font-bold"
                >
                  View All Children
                  <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterProgram highlightProgram="villages" />
    </div>
  )
}
