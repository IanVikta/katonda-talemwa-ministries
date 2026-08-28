import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterHome } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import ScrollReveal from '../components/ScrollReveal'
import { IMAGES } from '../data/content'

export default function HomePage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black">
      <Navbar />

      <header className="relative bg-deep-black min-h-[80vh] flex flex-col items-center justify-center text-center px-margin-mobile pt-24 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${IMAGES.heroHome}')` }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 px-4">
          <h1 className="font-headline text-headline-xl text-pure-white uppercase">
            Empowered by Christ,
            <br />
            Transforming Communities
          </h1>
          <p className="text-body-lg text-pure-white/90 max-w-2xl mx-auto">
            Katonda Talemwa Ministries brings hope and healing to vulnerable children in East Africa. We demonstrate the Father's love in action and invite you to join us.
          </p>
          <div className="flex flex-row gap-4 justify-center pt-4 max-w-md mx-auto w-full">
            <Link
              to="/sponsor"
              className="flex-1 sm:flex-none text-center bg-vibrant-green text-pure-white px-6 sm:px-10 py-4 font-headline text-button-text uppercase tracking-widest hover:brightness-110 transition-all scale-100 hover:scale-105 active:scale-95 rounded font-bold"
            >
              Sponsor
            </Link>
            <Link
              to="/donate"
              className="flex-1 sm:flex-none text-center bg-primary text-pure-white px-6 sm:px-10 py-4 font-headline text-button-text uppercase tracking-widest hover:brightness-110 transition-all scale-100 hover:scale-105 active:scale-95 rounded font-bold"
            >
              Donate
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <MaterialIcon name="expand_more" className="text-pure-white text-4xl" />
        </div>
      </header>

      <section className="py-section-padding bg-surface">
        <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block mb-2">Katonda Talemwa Ministries</span>
              <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-deep-black leading-tight tracking-tight">
                The Father’s Love <br />
                <span className="text-vibrant-green">in Action</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mt-4" />
            </div>
            <p className="text-on-surface-variant text-base font-light leading-relaxed">
              Katonda Talemwa Ministries exists to express the Father’s love in action—providing a sanctuary of hope where orphaned and vulnerable children experience the unconditional love, comfort, and security of a real family.
            </p>
            <p className="text-on-surface-variant text-base font-light leading-relaxed">
              In living out the Father’s heart, we offer holistic care to over 3,000 children who receive everything they need to grow up healthy and whole—nutrition, clothing, healthcare, and quality education.
            </p>
            <div className="pt-2">
              <Link
                to="/katonda-villages"
                className="inline-block bg-vibrant-green text-pure-white px-8 py-4 font-headline text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-none"
              >
                Learn More
              </Link>
            </div>
          </div>
          <ScrollReveal animation="fade-left" className="order-1 md:order-2 relative group">
            <div className="absolute -right-4 -bottom-4 w-full h-full bg-primary/10 -z-10 group-hover:-right-6 group-hover:-bottom-6 transition-all" />
            <div
              className="w-full aspect-square bg-cover bg-center border-b-8 border-primary"
              style={{ backgroundImage: `url('${IMAGES.villages}')` }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal animation="fade-right" className="relative group">
            <div className="absolute -left-4 -bottom-4 w-full h-full bg-action-yellow/10 -z-10 group-hover:-left-6 group-hover:-bottom-6 transition-all" />
            <div
              className="w-full aspect-video md:aspect-square bg-cover bg-center border-b-8 border-action-yellow"
              style={{ backgroundImage: `url('${IMAGES.babyWatoto}')` }}
            />
          </ScrollReveal>
          <div>
            <span className="text-primary font-bold text-label-bold uppercase tracking-wider mb-2 block">Emmanuel Baby's Home</span>
            <h2 className="font-headline text-headline-lg mb-6 leading-tight">
              Rescuing Orphaned
              <br />
              and Abandoned Babies,
              <br />
              Giving Them A <span className="text-trust-blue font-extrabold uppercase">Bright Future</span>
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              We provide critical care for infants, giving them the nutrition, medical support, and loving environment they need to thrive in their first years of life.
            </p>
            <Link
              to="/emmanuel-baby-home"
              className="inline-block bg-primary text-pure-white px-8 py-3 font-headline text-button-text uppercase rounded hover:brightness-110 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container">
        <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal animation="rotate-in" className="relative group">
            <div className="absolute -left-4 -bottom-4 w-full h-full bg-trust-blue/10 -z-10 group-hover:-left-6 group-hover:-bottom-6 transition-all" />
            <div
              className="w-full aspect-square bg-cover bg-center border-b-8 border-trust-blue"
              style={{ backgroundImage: `url('${IMAGES.girlSchool}')` }}
            />
          </ScrollReveal>
          <div>
            <span className="text-primary font-bold text-label-bold uppercase tracking-wider mb-1 block">The Esther Mission</span>
            <span className="text-xs font-bold uppercase tracking-widest text-vibrant-green mb-4 block">Keep a Girl in School</span>
            <h2 className="font-headline text-headline-lg mb-6 leading-tight">
              Because Every
              <br />
              <span className="text-trust-blue font-extrabold uppercase">Girl Matters</span>
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              We&apos;re committed to keeping girls in school through The Esther Mission by providing sanitary towels and health education, ensuring they don&apos;t miss out on their future because of their period.
            </p>
            <button className="bg-primary text-pure-white px-8 py-3 font-headline text-button-text uppercase rounded hover:brightness-110 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-section-padding text-pure-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-fixed bg-center brightness-[0.35]"
            style={{ backgroundImage: `url('${IMAGES.church}')` }}
          />
        </div>
        <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center">
          <span className="text-action-yellow font-bold text-label-bold uppercase tracking-widest mb-4 block">Our Heartbeat</span>
          <h2 className="font-headline text-headline-lg md:text-headline-xl mb-8 uppercase font-black">Katonda Talemwa Church</h2>
          <p className="text-body-lg max-w-3xl mx-auto mb-10 text-pure-white/90 leading-relaxed">
            At the heart of everything we do is Katonda Talemwa Church. We are a vibrant, English-speaking cell-based community church in the city of Kampala, celebrating Christ and caring for community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#" className="border-2 border-pure-white text-pure-white px-10 py-4 font-headline text-button-text uppercase tracking-widest hover:bg-pure-white hover:text-deep-black transition-all rounded font-bold">
              Visit Our Site
            </a>
            <a href="#" className="bg-primary text-pure-white px-10 py-4 font-headline text-button-text uppercase tracking-widest hover:brightness-110 transition-all rounded font-bold">
              Watch Live
            </a>
          </div>
        </div>
      </section>

      {/* Children's Choir Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-primary font-bold text-label-bold uppercase tracking-wider mb-2 block">Katonda Talemwa Children&apos;s Choir</span>
            <h2 className="font-headline text-headline-lg mb-6 leading-tight font-bold">
              A Vibrant
              <br />
              Worship <span className="text-primary font-extrabold">EXPERIENCE</span>
            </h2>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              The Katonda Talemwa Children&apos;s Choir has traveled international stages since 1994, sharing the love of Jesus through high-energy African song and dance, and powerful testimonies.
            </p>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Each child in the choir has risen above hardship and represents the hope and future of a rebuilt Africa.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-pure-white px-8 py-3 font-headline text-button-text uppercase rounded hover:brightness-110 transition-all"
            >
              Learn More
            </a>
          </div>
          <ScrollReveal animation="flip-up" className="order-1 md:order-2 relative group">
            <div className="absolute -right-4 -bottom-4 w-full h-full bg-primary/10 -z-10 group-hover:-right-6 group-hover:-bottom-6 transition-all" />
            <div
              className="w-full aspect-square bg-cover bg-center border-b-8 border-primary rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundImage: `url('${IMAGES.spiritualGrowth}')` }}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center">
          <h2 className="font-headline text-headline-lg mb-4 font-black uppercase text-deep-black">Join Us</h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto mb-8" />
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
            Help us rebuild this beautiful Africa. Together, we can change lives, restore hope, and write new stories.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sponsor Card */}
            <div className="bg-surface border border-outline-variant p-10 rounded-2xl shadow-md text-left flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <MaterialIcon name="favorite" className="text-secondary text-2xl" filled />
                </div>
                <h3 className="font-headline text-headline-md text-deep-black mb-4 font-bold uppercase">Sponsor</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Sponsor a child, a baby, or a mother today and provide housing, healthcare, education, and the love of a family.
                </p>
              </div>
              <Link
                to="/sponsor"
                className="w-full py-4 bg-secondary text-pure-white text-center font-headline text-button-text uppercase tracking-wider rounded-lg hover:brightness-110 transition-all font-bold"
              >
                Sponsor a Life
              </Link>
            </div>

            {/* Donate Card */}
            <div className="bg-surface border border-outline-variant p-10 rounded-2xl shadow-md text-left flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MaterialIcon name="payments" className="text-primary text-2xl" />
                </div>
                <h3 className="font-headline text-headline-md text-deep-black mb-4 font-bold uppercase">Donate</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Make a one-time donation to our sustainability fund or specific initiatives like Keep a Girl in School.
                </p>
              </div>
              <Link
                to="/donate"
                className="w-full py-4 bg-primary text-pure-white text-center font-headline text-button-text uppercase tracking-wider rounded-lg hover:brightness-110 transition-all font-bold"
              >
                Donate Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  )
}
