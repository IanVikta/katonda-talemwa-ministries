import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'

export default function NeighbourhoodPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main className="pt-20">
        
        {/* Newspaper Editorial Hero Section */}
        <section className="bg-surface py-12 border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Area (8/12 Columns): Newspaper Frontpage */}
            <div className="lg:col-span-8 space-y-6">
              <span
                data-aos="fade-down"
                className="text-[10px] uppercase font-black tracking-widest text-vibrant-green border-b border-outline-variant/60 pb-3 mb-6 block"
              >
                PROGRAM BULLETIN: RURAL UGANDA OUTREACH
              </span>
              
              <div data-aos="fade-right" data-aos-duration="700" className="space-y-4">
                <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase text-deep-black leading-none tracking-tight">
                  The <br />
                  <span className="text-vibrant-green">Neighbourhood</span>
                </h1>
                <h2 className="font-headline text-lg sm:text-2xl font-bold uppercase text-secondary tracking-wide">
                  Vocational Empowerment &amp; Recovery
                </h2>
              </div>

              {/* Big Editorial Photo */}
              <div data-aos="zoom-in" data-aos-duration="600" className="border border-outline-variant/60 p-2 bg-surface rounded-none shadow-sm">
                <img
                  className="w-full aspect-[16/9] object-cover rounded-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                  src="/images/dignity.jpg"
                  alt="Mothers working together"
                />
              </div>

              {/* Newspaper Two-Column Text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-sm font-light text-on-surface-variant leading-relaxed">
                <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
                  <p className="first-letter:text-4xl first-letter:font-black first-letter:text-vibrant-green first-letter:float-left first-letter:mr-2">
                    Katonda Talemwa Neighbourhood is an intensive 12-month vocational program specifically created for extremely vulnerable women in Gulu and Mbarara. Many of these mothers are widows, HIV positive, or former child soldiers bearing the trauma of war.
                  </p>
                  <p>
                    By restoring their dignity and training them in marketable vocational trades, we help them transition from dependency to complete financial self-reliance. This comprehensive program covers clinical therapy, literacy, numeracy, and micro-business management.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="space-y-4 border-l border-outline-variant/30 pl-0 md:pl-8">
                  <p className="font-semibold text-deep-black uppercase tracking-wider">
                    Our Committment to the Family Unit:
                  </p>
                  <p>
                    We believe that the best way to care for a child is to empower their mother. When a mother is self-employed, her children gain access to regular nutrition, clean housing, and stable education, breaking the inter-generational cycle of poverty.
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-xxs font-black text-vibrant-green uppercase tracking-widest border-b border-vibrant-green/30 pb-0.5">
                      Scroll to explore program pillars <MaterialIcon name="arrow_downward" className="text-xs" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Area (4/12 Columns): Sidebar Dashboard Card */}
            <div data-aos="fade-left" data-aos-duration="800" className="lg:col-span-4 h-full flex flex-col">
              <div className="bg-vibrant-green text-pure-white rounded-none border border-vibrant-green shadow-md flex flex-col h-full overflow-hidden">
                
                {/* Card Header */}
                <div className="border-b border-pure-white/20 px-8 pt-8 pb-6">
                  <span className="text-[10px] uppercase tracking-widest text-action-yellow font-extrabold block mb-1">Live Dashboard</span>
                  <h3 className="font-headline text-lg font-black uppercase text-pure-white">Neighbourhood at a Glance</h3>
                </div>

                {/* Sidebar Metrics — flex-1 so it fills all available space */}
                <div className="flex-1 flex flex-col justify-evenly px-8 py-6 divide-y divide-pure-white/10">
                  <div data-aos="fade-up" data-aos-delay="100" className="pb-5">
                    <div className="text-4xl font-headline font-black text-action-yellow">1,500+</div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-pure-white mt-2">Mothers Graduated</h4>
                    <p className="text-xs font-light opacity-85 leading-snug mt-1">Vocational graduates running local businesses or hired in workshops.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200" className="py-5">
                    <div className="text-4xl font-headline font-black text-action-yellow">92%</div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-pure-white mt-2">Retention Rate</h4>
                    <p className="text-xs font-light opacity-85 leading-snug mt-1">Active business survival and self-employment rate post-graduation.</p>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" className="pt-5">
                    <div className="text-4xl font-headline font-black text-action-yellow">4,500+</div>
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-pure-white mt-2">Children Impacted</h4>
                    <p className="text-xs font-light opacity-85 leading-snug mt-1">Dependants supported with education and nutrition via household income.</p>
                  </div>
                </div>

                {/* Full-bleed CTA Button */}
                <Link
                  to="/sponsor?tab=neighbourhood-mother"
                  className="w-full text-center bg-action-yellow text-deep-black font-headline text-xs font-black uppercase tracking-widest py-5 hover:brightness-110 active:scale-95 transition-all rounded-none block select-none"
                >
                  Sponsor a Mother
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* The Pillars of Recovery (Side-by-Side Magazine Columns) */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            
            <div data-aos="fade-up" className="text-center space-y-4 max-w-xl mx-auto">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-wider block">The Empowerment Model</span>
              <h2 className="font-headline text-headline-lg text-deep-black leading-none uppercase font-black">
                Program Pillars
              </h2>
              <div className="w-24 h-1 bg-vibrant-green mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pillar 1 */}
              <div data-aos="fade-up" data-aos-delay="0" className="bg-surface border border-outline-variant/60 p-8 rounded-none flex flex-col justify-between min-h-[460px] shadow-sm hover:border-vibrant-green/60 transition-colors group">
                <div className="space-y-6">
                  <span className="font-serif text-5xl font-black text-secondary block leading-none">I.</span>
                  <div className="aspect-[4/3] overflow-hidden border border-outline-variant/40 p-1">
                    <img
                      className="w-full h-full object-cover rounded-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDokPv7xL4QxzKaXFGE9JHtcX8mDUpqXr0wRYOec9evJdlzrT_dCiPQuJgTZqlL8pmUpk3NogeqfXtDKpgUNVRyWxfuJMk3Xj7uBb61Y7yp373WHqyvIGC68iqpT06r7nYFafNlMQxOafiS3RAJAxLv9cSmeOpfMd8XLGmutOsP6sJrYDaYu4BKGhqr0zchZ-IrwSP61z__ZJiaLHLfwq7cOmHg3yWxWSvOjI_VPUdb-qBWzNM6qoXpxMkmPMd0ZeuS1lDnEpziIjs"
                      alt="Counselling circle"
                    />
                  </div>
                  <h3 className="font-headline text-lg font-black uppercase text-deep-black tracking-wide">Trauma Counselling</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Extensive clinical therapy, group counseling sessions, and spiritual mentorship. Inner healing is crucial before mothers can focus on vocational skill learning.
                  </p>
                </div>
                <div className="border-t border-outline-variant/40 pt-4 mt-6 text-xs font-bold text-on-surface-variant uppercase tracking-wider space-y-1">
                  <div>• Individualized therapy</div>
                  <div>• Peer sharing groups</div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div data-aos="fade-up" data-aos-delay="150" className="bg-surface border border-outline-variant/60 p-8 rounded-none flex flex-col justify-between min-h-[460px] shadow-sm hover:border-vibrant-green/60 transition-colors group">
                <div className="space-y-6">
                  <span className="font-serif text-5xl font-black text-vibrant-green block leading-none">II.</span>
                  <div className="aspect-[4/3] overflow-hidden border border-outline-variant/40 p-1">
                    <img
                      className="w-full h-full object-cover rounded-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXElVwkjxSZheCl7AhH7HwOBQAJxDKuOmDWhDSqA7crECCe3SnR1xkthGS64hSlWgt02fzlcQYZKUd0_l4mEOfPAciImbMAeHF7sxfq9KmbQ1B0s2XHUI3htftmg4eIy2KaYw4QAwsgvaF8BjOVJTcaiQIIiTswDelN-AZrNoS8FLzKSOvvVeqiusQRhXZwmE5bka0W5arrjSyaMYbHSn8MJ1zl79i07Y_8lVq7Of-kqF3G8LKBScQrgEaaWq5R4_1bSP6jBbLy4"
                      alt="Tailoring skills"
                    />
                  </div>
                  <h3 className="font-headline text-lg font-black uppercase text-deep-black tracking-wide">Vocational Training</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Practical, certified instruction in tailoring, hairdressing, pottery, and knitting. Mothers select trades according to market demand in Gulu and Mbarara.
                  </p>
                </div>
                <div className="border-t border-outline-variant/40 pt-4 mt-6 text-xs font-bold text-on-surface-variant uppercase tracking-wider space-y-1">
                  <div>• Practical trades</div>
                  <div>• Industry-standard gear</div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div data-aos="fade-up" data-aos-delay="300" className="bg-surface border border-outline-variant/60 p-8 rounded-none flex flex-col justify-between min-h-[460px] shadow-sm hover:border-vibrant-green/60 transition-colors group">
                <div className="space-y-6">
                  <span className="font-serif text-5xl font-black text-secondary block leading-none">III.</span>
                  <div className="aspect-[4/3] overflow-hidden border border-outline-variant/40 p-1">
                    <img
                      className="w-full h-full object-cover rounded-none filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzh8qsn2JCfLVB9eQ5WMlHGLyiEoq5p0gJwF8fpiEDLIDsNwhbjfM97qwzqzVO9eyALefC2Z65PbMhjQCwrQaXFpc65ej4RBNhDEMY1qJhXdwO4jrLvZEMak6sk0lvoBkUatG4j9ABVmRAyx6AWeJWyWCGY9QiRPwXlz7blg4jITOqo319ldOz2WD_kjTX6ZxHXpftB5zzcR55ubcuMym-ea-G2BgnJDtpxqI77BoMK94Dri8WDaXE32x6_cTKgJHVWs0FisI2Z1E"
                      alt="Business books"
                    />
                  </div>
                  <h3 className="font-headline text-lg font-black uppercase text-deep-black tracking-wide">Literacy &amp; Finance</h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Adult basic literacy, numeracy, business bookkeeping, and customer service. Graduates compile business plans and join community savings associations (VSLA).
                  </p>
                </div>
                <div className="border-t border-outline-variant/40 pt-4 mt-6 text-xs font-bold text-on-surface-variant uppercase tracking-wider space-y-1">
                  <div>• VSLA savings model</div>
                  <div>• Business coaching support</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Florence's Story (Cream Journal Grid Layout) */}
        <section className="py-24 bg-surface">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="bg-[#fcfbf9] border border-outline-variant/60 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch rounded-none shadow-sm">
              
              {/* Left Column: Florence's Double-Framed Photo */}
              <div data-aos="zoom-in" data-aos-duration="700" className="lg:col-span-5 bg-surface border border-outline-variant/60 p-2 shadow-sm rounded-none flex flex-col justify-between min-h-[400px]">
                <img
                  className="w-full aspect-[4/5] object-cover rounded-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDokPv7xL4QxzKaXFGE9JHtcX8mDUpqXr0wRYOec9evJdlzrT_dCiPQuJgTZqlL8pmUpk3NogeqfXtDKpgUNVRyWxfuJMk3Xj7uBb61Y7yp373WHqyvIGC68iqpT06r7nYFafNlMQxOafiS3RAJAxLv9cSmeOpfMd8XLGmutOsP6sJrYDaYu4BKGhqr0zchZ-IrwSP61z__ZJiaLHLfwq7cOmHg3yWxWSvOjI_VPUdb-qBWzNM6qoXpxMkmPMd0ZeuS1lDnEpziIjs"
                  alt="Florence smiling at tailoring desk"
                />
                <div className="bg-surface-container-low p-4 mt-2 border border-outline-variant/30 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-vibrant-green font-bold block mb-1">Graduate Profile</span>
                  <p className="text-[11px] font-semibold text-deep-black">Florence | Gulu Market Shop Owner</p>
                </div>
              </div>

              {/* Right Column: Diary Before-and-After Narrative */}
              <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="150" className="lg:col-span-7 flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                    Transformation Chronicle
                  </span>
                  <h3 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                    &ldquo;I did not know <br />
                    how I would survive.&rdquo;
                  </h3>
                  <div className="h-0.5 bg-outline-variant/40 w-16" />

                  {/* Journal Timeline Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-sm">
                    <div data-aos="fade-up" data-aos-delay="200" className="space-y-2">
                      <h4 className="font-extrabold uppercase text-secondary">The Struggle</h4>
                      <p className="font-light text-on-surface-variant leading-relaxed text-sm">
                        A Gulu war survivor, widowed, and HIV positive. She could not afford rent or food, and her children were pulled out of primary school.
                      </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className="space-y-2 border-l border-outline-variant/30 pl-0 sm:pl-4">
                      <h4 className="font-extrabold uppercase text-vibrant-green">The Recovery</h4>
                      <p className="font-light text-on-surface-variant leading-relaxed text-sm">
                        Enrolled in KTM Neighbourhood. Received therapy, learned sewing trades, and built micro-business accounting skills through the VSLA.
                      </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="space-y-2 border-l border-outline-variant/30 pl-0 sm:pl-4">
                      <h4 className="font-extrabold uppercase text-deep-black">The victory</h4>
                      <p className="font-light text-on-surface-variant leading-relaxed text-sm">
                        Owns a tailoring stall in the Gulu central market, pays all school fees herself, and has restored her health and household hope.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <blockquote data-aos="fade-right" data-aos-delay="200" className="font-serif italic text-sm text-on-surface-variant">
                    &ldquo;Today, my children are healthy and in class. God never fails.&rdquo;
                  </blockquote>
                  <Link
                    to="/sponsor?tab=neighbourhood-mother"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="w-full sm:w-auto bg-secondary text-pure-white px-8 py-3.5 rounded-none font-headline text-button-text uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all font-black text-center text-xs shadow-md"
                  >
                    Read More Testimonials
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Sponsorship Call (Split Contrast CTA) */}
        <section className="grid grid-cols-1 md:grid-cols-2 rounded-none overflow-hidden border-t border-outline-variant/30">
          {/* Left panel: Deep Black */}
          <div data-aos="fade-right" data-aos-duration="800" className="bg-deep-black text-pure-white p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow">
              Sponsor Relationship
            </span>
            <h3 className="font-headline text-2xl font-black uppercase tracking-tight">
              Personal Connection &amp; <br />
              <span className="text-action-yellow">Tax Deductible Giving</span>
            </h3>
            <p className="text-sm font-light opacity-85 leading-relaxed max-w-md">
              Sponsoring a mother establishes a personal connection. You will receive regular updates, letter exchanges, and progress updates from her training coordinators. 100% of your gift goes directly to the Gulu and Mbarara training operations.
            </p>
          </div>

          {/* Right panel: Vibrant Green */}
          <div data-aos="fade-left" data-aos-duration="800" className="bg-vibrant-green text-pure-white p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow">
              Action Call
            </span>
            <h3 className="font-headline text-2xl font-black uppercase tracking-tight">
              Help a Mother Build a <br />
              Sustainable Household
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/sponsor?tab=neighbourhood-mother"
                className="w-full sm:w-auto bg-action-yellow text-deep-black px-8 py-4 rounded-none font-headline text-button-text uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all font-black text-center"
              >
                Sponsor a Mother
              </Link>
              <Link
                to="/donate"
                className="w-full sm:w-auto border border-pure-white text-pure-white px-8 py-4 rounded-none font-headline text-button-text uppercase tracking-widest hover:bg-pure-white hover:text-deep-black active:scale-95 transition-all font-black text-center"
              >
                Donate Funds
              </Link>
            </div>
          </div>
        </section>

      </main>

      <FooterProgram highlightProgram="neighbourhood" />
    </div>
  )
}
