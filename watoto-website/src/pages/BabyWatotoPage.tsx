import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'
import { children, IMAGES } from '../data/content'

const timelineSteps = [
  { num: 1, title: 'Discovery', desc: 'Prompt rescue from crisis situations.' },
  { num: 2, title: 'Stability', desc: 'Clinical care and weight gain tracking.' },
  { num: 3, title: 'Nurturing', desc: 'Cognitive and motor skill development.' },
  { num: 4, title: 'Family', desc: 'Integration into a village home.' },
]

const stats = [
  { value: '24/7', label: 'Emergency Rescue' },
  { value: '3,000+', label: 'Babies Rescued' },
  { value: '100%', label: 'Medical Support' },
  { value: '20+', label: 'Years of Care' },
]

export default function BabyWatotoPage() {
  return (
    <div className="bg-surface text-on-surface overflow-x-hidden page-enter">
      <Navbar />

      <main>
        <section className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${IMAGES.babyHero}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-black/70 via-deep-black/40 to-transparent" />
          </div>
          <div className="container mx-auto px-4 md:px-margin-desktop relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-secondary text-pure-white font-bold text-label-bold uppercase tracking-widest mb-6">
                Baby Katonda Talemwa
              </span>
              <h1 className="font-headline text-headline-xl text-pure-white mb-6 uppercase">
                Rescuing the Lost, <span className="text-action-yellow">Giving Hope</span>
              </h1>
              <p className="text-body-lg text-pure-white/90 mb-10 max-w-xl">
                When a baby is abandoned or left without a family, Baby Katonda Talemwa is there to provide immediate, life-saving care and a home filled with love.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/sponsor?tab=baby"
                  className="bg-secondary text-pure-white px-10 py-4 rounded-full font-headline text-button-text uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg font-bold"
                >
                  Sponsor a Baby
                  <MaterialIcon name="favorite" />
                </Link>
                <button className="bg-transparent border-2 border-pure-white text-pure-white px-10 py-4 rounded-full font-headline text-button-text uppercase tracking-widest hover:bg-pure-white hover:text-deep-black transition-all font-bold">
                  Our Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-12">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-headline text-headline-lg text-action-yellow">{value}</div>
                <div className="font-bold text-label-bold text-pure-white/80 uppercase">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Loving Family Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-primary font-bold text-label-bold uppercase tracking-widest block">Loving Family</span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black leading-tight uppercase">
                HOLISTIC <br />
                NURTURING <span className="text-primary">CARE</span>
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Because infants require highly specialized attention, Baby Katonda Talemwa operates with a 1:4 nanny-to-baby ratio. Each child receives round-the-clock medical monitoring, custom nutritional formulas, early development play, and lots of hugs.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                We believe that every child deserves to feel the secure attachment and warmth of a loving parent from their earliest days.
              </p>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -left-4 -bottom-4 w-full h-full bg-primary/10 -z-10 group-hover:-left-6 group-hover:-bottom-6 transition-all" />
              <div
                className="w-full aspect-square bg-cover bg-center border-b-8 border-primary rounded-2xl overflow-hidden shadow-lg"
                style={{ backgroundImage: `url('${IMAGES.babyWatoto}')` }}
              />
            </div>
          </div>
        </section>

        <section className="py-section-padding px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-headline text-headline-lg text-deep-black uppercase mb-4">
                A Holistic Approach to <span className="text-primary">Life</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                We don&apos;t just provide a bed; we provide a future. From the moment of rescue to the day they transition to their forever family.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-action-yellow" />
              <div className="w-12 h-1 bg-primary" />
              <div className="w-12 h-1 bg-trust-blue" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
            <ScrollReveal className="md:col-span-8 md:row-span-1 bg-pure-white border border-outline-variant p-8 flex flex-col md:flex-row gap-8 bento-card">
              <div className="md:w-1/2">
                <span className="text-primary font-bold text-label-bold uppercase tracking-widest mb-4 block">Stage 01</span>
                <h3 className="font-headline text-headline-md text-deep-black mb-4">Emergency Rescue</h3>
                <p className="text-on-surface-variant mb-6">
                  Our team is available round the clock to respond to reports of abandoned babies. We coordinate with local authorities to ensure immediate safety and medical assessment.
                </p>
                <button className="flex items-center gap-2 text-primary font-headline text-button-text uppercase tracking-widest hover:gap-4 transition-all">
                  Learn About Rescue <MaterialIcon name="arrow_forward" />
                </button>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${IMAGES.rescue}')` }} />
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-4 md:row-span-2 bg-primary text-pure-white p-8 flex flex-col justify-between bento-card">
              <div>
                <span className="text-action-yellow font-bold text-label-bold uppercase tracking-widest mb-4 block">Nutrition</span>
                <h3 className="font-headline text-headline-md mb-4 uppercase">
                  Scientific <br />
                  Care
                </h3>
                <p className="opacity-90">
                  Every infant receives a customized nutritional plan. Malnourished babies are carefully monitored by our clinical team to reach their healthy milestones.
                </p>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden border-2 border-action-yellow/30">
                <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url('${IMAGES.nutrition}')` }} />
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-4 md:row-span-1 bg-surface-container-high p-8 flex flex-col justify-center bento-card">
              <span className="text-trust-blue font-bold text-label-bold uppercase tracking-widest mb-4 block">Medical support</span>
              <h3 className="font-headline text-headline-md text-deep-black mb-4">Specialized Clinic</h3>
              <p className="text-on-surface-variant">
                Our on-site medical staff provides 24/7 monitoring, ensuring that every cough, fever, or developmental need is addressed instantly.
              </p>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-4 md:row-span-1 bg-pure-white border border-outline-variant p-8 flex flex-col justify-center bento-card">
              <span className="text-vibrant-green font-bold text-label-bold uppercase tracking-widest mb-4 block">The Mother&apos;s Love</span>
              <h3 className="font-headline text-headline-md text-deep-black mb-4">Forever Family</h3>
              <p className="text-on-surface-variant">
                Once healthy, babies transition into Katonda Talemwa Villages, where they are welcomed into a permanent family with a loving mother and siblings.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-surface-container py-section-padding">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline text-headline-lg text-deep-black uppercase">
                The Path to a <span className="text-primary">Bright Future</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-outline-variant -translate-y-1/2 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative z-10">
                {timelineSteps.map(({ num, title, desc }) => (
                  <div key={num} className="bg-pure-white p-6 border border-outline-variant rounded-lg text-center">
                    <div className="w-12 h-12 bg-primary text-pure-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {num}
                    </div>
                    <h4 className="font-bold text-label-bold text-deep-black uppercase mb-2">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Jayson Rescue Story Section */}
        <section className="py-20 bg-surface border-y border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-label-bold uppercase tracking-widest block mb-2">Rescue Story</span>
              <h2 className="font-headline text-headline-lg font-black text-deep-black uppercase">Given A Future Full Of Hope</h2>
              <div className="h-1.5 w-24 bg-secondary mx-auto mt-4" />
            </div>

            <div className="bg-surface-container rounded-2xl border border-outline-variant/50 overflow-hidden shadow-md max-w-4xl mx-auto flex flex-col md:flex-row hover:shadow-lg transition-all duration-300">
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  className="w-full h-full object-cover"
                  src={children.find(c => c.id === 'jayson')?.image || IMAGES.rescue}
                  alt="Baby Jayson"
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="bg-secondary/15 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide inline-block">Baby Rescue</span>
                  <h3 className="font-headline font-bold text-2xl text-deep-black">Meet Baby Jayson</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {children.find(c => c.id === 'jayson')?.description || 'Jayson was rescued from a crisis situation when he was only 2 weeks old. He is growing stronger every day under nanny care.'}
                  </p>
                </div>
                <Link
                  to="/sponsor?tab=baby"
                  className="mt-8 text-primary font-headline text-sm font-black uppercase tracking-widest hover:text-secondary hover:gap-3 flex items-center gap-2 group transition-all"
                >
                  Sponsor Jayson
                  <MaterialIcon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-action-yellow/20 rounded-full blur-xl" />
                <div
                  className="w-full h-full bg-cover bg-center rounded-xl overflow-hidden shadow-2xl relative z-10"
                  style={{ backgroundImage: `url('${IMAGES.sponsorshipBaby}')` }}
                />
                <div className="absolute -bottom-8 -right-8 bg-pure-white p-6 rounded-lg shadow-xl z-20 border border-outline-variant max-w-xs">
                  <p className="text-on-surface-variant italic">
                    &ldquo;Asha was found when she was only 3 days old. Today, she is the smartest in her class.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <MaterialIcon name="verified" className="text-primary text-sm" />
                    </div>
                    <span className="font-bold text-label-bold">Impact Story</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-headline-lg text-deep-black uppercase mb-6 leading-tight">
                Become a <br />
                <span className="text-primary">Life-Sustainer</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Your monthly sponsorship of $38 provides a baby with life-saving formula, specialized medical care, and the dedicated attention of our nannies.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Personal connection through updates and letters.',
                  'Guaranteed access to top-tier pediatric medical care.',
                  '100% of your gift goes directly to the care of your baby.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <MaterialIcon name="check_circle" className="text-vibrant-green mt-1" filled />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-primary font-headline text-headline-md">
                    $38<span className="text-on-surface-variant text-body-md font-normal">/month</span>
                  </div>
                  <div className="bg-action-yellow/20 px-3 py-1 rounded-full text-secondary font-bold text-label-bold uppercase">
                    Tax Deductible
                  </div>
                </div>
                <Link
                  to="/sponsor?tab=baby"
                  className="block w-full text-center bg-secondary text-pure-white py-5 rounded-full font-headline text-button-text uppercase tracking-widest shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all font-bold"
                >
                  Start Your Sponsorship
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deep-black py-section-padding overflow-hidden relative">
          <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
            <MaterialIcon name="format_quote" className="text-[300px] text-pure-white" filled />
          </div>
          <div className="max-w-4xl mx-auto px-4 md:px-margin-desktop relative z-10 text-center">
            <h2 className="font-headline text-headline-lg text-pure-white italic mb-8">
              &ldquo;We cannot change the world for everyone, but for this one baby, their whole world is about to change.&rdquo;
            </h2>
            <p className="font-bold text-label-bold text-action-yellow uppercase tracking-widest">
              — Marilyn Skinner, Co-Founder
            </p>
          </div>
        </section>
      </main>

      <FooterProgram highlightProgram="baby-watoto" />
    </div>
  )
}
