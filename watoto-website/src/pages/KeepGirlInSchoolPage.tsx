import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

export default function KeepGirlInSchoolPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main className="pt-20">
        {/* Minimalist Centered Title Section */}
        <section className="bg-deep-black text-pure-white py-16 text-center rounded-none relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow">
              Menstrual Health & Education Access
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl font-black uppercase leading-tight tracking-tight">
              Keep a <span className="text-action-yellow">Girl in School</span>
            </h1>
            <p className="text-sm font-light opacity-80 leading-relaxed max-w-xl mx-auto">
              Removing the hygiene barriers that cause adolescent girls to miss school, drop out, or face early child marriage in rural Uganda.
            </p>
          </div>
        </section>

        {/* Triple Image Filmstrip Banner */}
        <section className="border-y border-outline-variant/60 bg-surface-container-high">
          <div className="grid grid-cols-3 gap-0.5">
            <div className="aspect-[4/3] overflow-hidden">
              <img className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all" src={IMAGES.girlSchool} alt="Girls in school" />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all" src={IMAGES.villagesHero} alt="Villages community" />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all" src={IMAGES.spiritualGrowth} alt="Choir singing" />
            </div>
          </div>
        </section>

        {/* Infographics Dashboard: Bold Grid Cards */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                  The Statistics
                </span>
                <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                  The numbers behind <br />
                  <span className="text-vibrant-green">the hygiene barrier</span>
                </h2>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Adolescent girls in low-resource communities lose critical school hours simply due to lack of sanitary towels and health education. Our data-driven outreach actively addresses this gap across rural districts.
                </p>
              </div>

              {/* Data Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { number: '1 in 10', label: 'Girls Miss Class', desc: 'African girls miss school during menstruation due to lack of pads.', bg: 'bg-surface' },
                  { number: '8,500+', label: 'Kits Distributed', desc: 'Complete annual reusable hygiene kits provided to students.', bg: 'bg-vibrant-green text-pure-white border-vibrant-green' },
                  { number: '35+', label: 'School Partners', desc: 'Partner schools reporting improved attendance.', bg: 'bg-surface' }
                ].map((stat, idx) => (
                  <div key={idx} className={`border border-outline-variant/60 p-6 rounded-none flex flex-col justify-between min-h-[220px] shadow-sm ${stat.bg}`}>
                    <div className="font-headline text-3xl sm:text-4xl font-black">{stat.number}</div>
                    <div className="space-y-1 mt-6">
                      <h4 className="font-bold text-xs uppercase tracking-wider">{stat.label}</h4>
                      <p className="text-xs opacity-90 leading-relaxed font-light">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Inside the Kit: Table Checklist */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Description */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                The Product
              </span>
              <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                What is inside <br />
                <span className="text-vibrant-green">the $15 hygiene kit?</span>
              </h2>
              <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                Each kit is designed to last up to 12 months, removing the recurring cost barrier that families face. Materials are locally sourced and compiled by trained women.
              </p>
            </div>

            {/* Right Column Table Checklist */}
            <div className="lg:col-span-8 border border-outline-variant/60 rounded-none bg-surface-container-low divide-y divide-outline-variant/40">
              {[
                { title: '4 Reusable Sanitary Towels', desc: 'High-absorbency, washable cotton flannel sheets designed for comfort and durability.', value: '1-Year Life' },
                { title: '3 Pairs of Undergarments', desc: 'Comfortable, durable cotton undergarments to secure towels properly.', value: '100% Cotton' },
                { title: 'Personal Hygiene Soap', desc: 'Locally crafted antibacterial soap to wash towels hygienically.', value: 'Antibacterial' },
                { title: 'Waterproof Carrying Case', desc: 'Discreet, waterproof storage bags to carry soiled items safely to wash.', value: 'Discreet' },
                { title: 'Health Educational Booklet', desc: 'A custom, translated guide containing menstrual health guidance and safety tips.', value: 'Translated' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-surface transition-colors">
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-deep-black uppercase tracking-wide">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-vibrant-green bg-vibrant-green/10 border border-vibrant-green/15 px-3 py-1 rounded-none whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Aisha's Success Journal */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Framed Image */}
            <ScrollReveal animation="zoom-in" className="lg:col-span-5 border border-outline-variant/60 p-2 bg-surface flex flex-col justify-between h-full rounded-none shadow-sm">
              <img
                className="w-full aspect-square object-cover rounded-none"
                src="/images/aisha.jpg"
                alt="Aisha at school desk"
              />
              <div className="p-4 bg-surface-container-low mt-2 border border-outline-variant/30 text-center">
                <span className="text-[10px] uppercase tracking-widest text-vibrant-green font-bold block mb-1">Aisha&apos;s Profile</span>
                <p className="text-[11px] font-semibold text-deep-black">Age: 14 | Grade: Primary 7 | Gulu district</p>
              </div>
            </ScrollReveal>

            {/* Right Column: Journal Entry Block */}
            <ScrollReveal animation="fade-left" className="lg:col-span-7 bg-surface border border-outline-variant/60 p-8 md:p-12 flex flex-col justify-between rounded-none shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-action-yellow/10 rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
              <div className="space-y-6">
                <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                  Success Journal Entry
                </span>
                <h3 className="font-headline text-2xl font-black uppercase text-deep-black leading-tight">
                  &ldquo;I never miss a single day <br />
                  of class anymore.&rdquo;
                </h3>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Before I received my kit, I was missing 4 or 5 days of school every month. When I stayed home, my lessons piled up and my exams were difficult. My father was thinking of pulling me out of school.
                </p>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Once the Katonda Talemwa team visited our school and gave us kits and counseling, everything changed. I had the confidence to attend every class. My scores went up, I came first in my exams, and I got a high school scholarship!
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MaterialIcon name="verified" className="text-vibrant-green text-lg" filled />
                  <span className="font-bold text-xs text-deep-black uppercase tracking-wider">Perfect Attendance Graduate</span>
                </div>
                <Link
                  to="/donate"
                  className="w-full sm:w-auto bg-secondary text-pure-white px-8 py-3.5 rounded-none font-headline text-button-text uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all font-black text-center text-xs shadow-md"
                >
                  Fund a Kit Like Aisha&apos;s
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* Donation Selectors Panel */}
        <section className="py-24 bg-surface border-t border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="text-center space-y-4 max-w-xl mx-auto">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-wider block">Get Involved</span>
              <h2 className="font-headline text-headline-lg text-deep-black leading-none uppercase font-black">
                Hygiene Outreach Funding
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-none" />
              <p className="text-xs text-on-surface-variant font-light">
                Choose a donation tier to purchase reusable hygiene kits for rural girl students.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { amount: '$15', title: '1 Girl Supported', desc: 'Provides one student with a complete 1-year hygiene kit.' },
                { amount: '$30', title: '2 Girls Supported', desc: 'Provides two students with hygiene kits & health education.' },
                { amount: '$75', title: '5 Girls Supported', desc: 'Equips 5 girl students with annual reusable pad kits.' },
                { amount: '$150', title: '10 Girls Supported', desc: 'Funds hygiene kits & counseling workshops for an entire classroom.' }
              ].map((tier, idx) => (
                <ScrollReveal
                  key={idx}
                  animation="fade-up"
                  delay={idx * 150}
                  duration={600}
                  className="bg-surface border border-outline-variant/60 p-6 rounded-none flex flex-col justify-between min-h-[250px] shadow-sm hover:border-vibrant-green/60 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-out cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="text-vibrant-green font-headline text-3xl font-black">{tier.amount}</div>
                    <h4 className="font-bold text-sm uppercase text-deep-black tracking-wider">{tier.title}</h4>
                  </div>
                  <div className="space-y-4 mt-6">
                    <p className="text-xs text-on-surface-variant leading-relaxed font-light">{tier.desc}</p>
                    <Link
                      to="/donate"
                      className="block w-full py-3 bg-secondary text-pure-white text-center font-headline text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-none"
                    >
                      Give {tier.amount}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterProgram highlightProgram="keep-a-girl" />
    </div>
  )
}
