import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { UnifiedFooter } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import ScrollReveal from '../components/ScrollReveal'
import { IMAGES } from '../data/content'
import SEO from '../components/SEO'

interface ClinicNeed {
  id: string
  title: string
  cost: string
  amount: string
  icon: string
  headline: string
  description: string
  detail?: string
  badge?: string
  featured?: boolean
}

const clinicNeeds: ClinicNeed[] = [
  {
    id: 'malaria-typhoid',
    title: 'Help Diagnose Malaria & Typhoid',
    cost: '$35',
    amount: '35',
    icon: 'biotech',
    headline: 'Enable a patient to make their way to the clinic by making medical care affordable to them.',
    description: 'Subsidizes critical laboratory diagnostics, blood smear microscopy, and first-line treatment for low-income patients suffering from acute malaria and typhoid.',
    badge: 'Immediate Relief',
  },
  {
    id: 'newborn-delivery',
    title: 'Fund a Newborn Delivery at Our Rural Hospital',
    cost: '$60',
    amount: '60',
    icon: 'child_friendly',
    headline: 'This could cater for band aids, bandages, sutures, and soap.',
    description: 'Provides a complete, sterile, and dignified delivery kit for an expectant mother and newborn in our rural maternity wing under skilled midwife supervision.',
    badge: 'Maternal Care',
  },
  {
    id: 'requisite-supplies',
    title: 'Equip Our Clinic with Requisite Supplies',
    cost: '$299',
    amount: '299',
    icon: 'medical_services',
    headline: 'Kate Clinic could use new bed sheets, medical gowns, oxy-meters etc. for the inpatients.',
    description: 'Directly furnishes our inpatient and recovery wards with fresh sanitizable linens, patient gowns, sterile consumables, and digital pulse oximeters.',
    badge: 'Inpatient Ward',
  },
  {
    id: 'omwana-kids',
    title: 'Treat Omwana House Kids',
    cost: '$1,000',
    amount: '1000',
    icon: 'healing',
    headline: 'Help us purchase meds and pay for care for our Omwana House and Parental Care School Kids that are hospitalized.',
    description: 'Establishes a dedicated pediatric emergency medical fund covering prescription medications, IV hydration, and hospitalization costs for orphaned and vulnerable school children.',
    badge: 'Pediatric Fund',
  },
  {
    id: 'water-grid',
    title: 'Connection to Water Grid',
    cost: '$2,000',
    amount: '2000',
    icon: 'water_drop',
    headline: 'Help ensure we will have enough good, clean water for our patients.',
    description: 'Connects the clinic infrastructure to the reliable municipal clean water grid, securing pressurized, sterile running water for maternity deliveries, sterilizers, and lab sanitation.',
    badge: 'Essential Utility',
  },
  {
    id: 'staff-housing',
    title: 'Kate Clinic Staff Housing',
    cost: '$4,000',
    amount: '4000',
    icon: 'cottage',
    headline: 'Help us finish the staff quarters. Staff housing will have 10 rooms for staff.',
    description: 'Completes on-site housing so nurses and clinicians reside on campus 24/7, enabling immediate emergency responses for night deliveries and acute complications.',
    detail: 'In each room we need: a bed $160, desk $30, and a set of chairs $90 ($280 per room).',
    badge: 'Campus Capital',
  },
  {
    id: 'standby-generator',
    title: 'Buy a Diesel Standby Generator for the Clinic',
    cost: '$8,900',
    amount: '8900',
    icon: 'bolt',
    headline: 'Imagine operating a medical facility that uses electric machines but has no electricity.',
    description: 'We need a fully functioning clinic with the labor, delivery, and laboratory departments undeterred by blackouts. Help our care level increase exponentially!',
    detail: 'Guarantees uninterrupted electricity for diagnostic centrifuges, fetal monitors, sterilizers, and emergency lighting during frequent rural power grid outages.',
    badge: 'Critical Infrastructure',
    featured: true,
  },
]

const clinicalServices = [
  {
    icon: 'pregnant_woman',
    title: 'Maternal & Newborn Care',
    desc: 'Comprehensive antenatal monitoring, safe midwife-led labor and delivery, postpartum recovery, and sterile newborn kits that protect mothers from life-threatening delivery complications.',
  },
  {
    icon: 'biotech',
    title: 'Diagnostic Laboratory',
    desc: 'On-site laboratory equipped for rapid malaria testing, typhoid titers, full blood count analysis, urinalysis, and infectious disease screenings with immediate results.',
  },
  {
    icon: 'child_care',
    title: 'Pediatric Stabilization',
    desc: 'Round-the-clock emergency medical triage for infants from Emmanuel Baby’s Home and vulnerable pupils from Parental Care School, treating severe malaria, respiratory distress, and dehydration.',
  },
  {
    icon: 'hotel',
    title: 'Inpatient & Observation Ward',
    desc: 'Supervised recovery ward with inpatient beds, sterile linen, digital pulse oximetry, and IV medication administration for patients requiring close medical observation.',
  },
  {
    icon: 'medication',
    title: 'Charitable Pharmacy',
    desc: 'Subsidized, quality-assured pharmaceuticals including anti-malarials, antibiotics, rehydration salts, pain management, and essential pediatric formulations.',
  },
  {
    icon: 'vaccines',
    title: 'Immunization & Outreach',
    desc: 'Routine national childhood immunizations, community health education, clean water sensitization, and preventive care workshops for rural families.',
  },
]

export default function KateClinicPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Kate Clinic | Maternal & Healthcare Services in Uganda"
        description="Kate Clinic delivers accessible maternal healthcare, malaria and typhoid lab diagnostics, pediatric stabilization, and outpatient services to rural families and orphans in Kyasenya, Uganda."
        canonicalPath="/kate-clinic"
        keywords="Kate Clinic, Katonda Talemwa clinic, rural hospital Uganda, maternal healthcare Uganda, malaria diagnosis Africa, Jude Walakira, Kyasenya Lwengo clinic"
      />

      <Navbar />

      <main className="pt-20">
        {/* Hero Header Section */}
        <section className="bg-deep-black text-pure-white py-16 lg:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-vibrant-green/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop w-full space-y-6 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow block">
              The Father&apos;s Love in Action — Healing &amp; Compassion
            </span>
            <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase leading-tight tracking-tight text-pure-white">
              Kate <span className="text-action-yellow">Clinic</span>
            </h1>
            <p className="text-sm md:text-base font-headline font-extrabold uppercase tracking-widest text-vibrant-green">
              Lifesaving Maternal Care, Lab Diagnostics &amp; Pediatric Medicine
            </p>

            <div className="max-w-4xl mx-auto space-y-4 text-sm md:text-base font-light text-pure-white/85 leading-relaxed">
              <p>
                In rural Southwestern Uganda, access to timely medical intervention is often the difference between life and death. Before Katonda Talemwa Ministries opened <strong>Kate Clinic</strong> in Kyasenya, Lwengo District, expectant mothers had to walk over <strong>7 kilometers</strong> on foot just to reach the nearest medical center. Mothers in labor suffered catastrophic delays, and young children with acute malaria or typhoid faced grave mortality risks.
              </p>
              <p>
                Today, Kate Clinic stands as a compassionate healthcare sanctuary. Operating as a charitable clinic with deeply subsidized care, we provide professional antenatal visits, safe newborn deliveries, emergency pediatric triage, an on-site diagnostic laboratory, and compassionate outpatient care for our family homes, schools, and hundreds of surrounding rural villagers.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 justify-center items-center">
              <a
                href="#urgent-needs"
                className="bg-vibrant-green hover:bg-vibrant-green/90 text-pure-white px-8 py-3.5 font-headline text-xs font-black uppercase tracking-widest shadow-lg hover:shadow-xl active:scale-95 transition-all"
              >
                View Urgent Clinic Needs
              </a>
              <Link
                to="/donate?designation=Kate+Clinic+%26+Medical+Services"
                className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-black px-8 py-3.5 font-headline text-xs font-bold uppercase tracking-widest transition-all"
              >
                Donate Directly to Clinic
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Media Showcase */}
        <section className="border-y border-outline-variant/60 bg-surface-container-high relative">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 overflow-hidden rounded-xl shadow-lg border border-outline-variant/40 group relative aspect-[16/10] bg-surface-container">
                <img
                  src={IMAGES.kateClinic}
                  alt="Kate Clinic child and maternal health center in Kyasenya, Uganda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-pure-white space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-action-yellow bg-deep-black/60 px-2.5 py-1 rounded inline-block">
                      Kyasenya, Lwengo District, Uganda
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold uppercase">
                      Kate Clinic Healthcare Center
                    </h3>
                    <p className="text-xs text-pure-white/80 font-light">
                      Providing clinical triage, inpatient recovery, lab tests, and 24/7 emergency support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vital Stat Highlights */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    stat: '7 km',
                    title: 'Walk Eliminated',
                    desc: 'Mothers and children no longer traverse miles on foot to seek emergency care.',
                    color: 'text-action-yellow',
                  },
                  {
                    stat: '24/7',
                    title: 'Emergency Triage',
                    desc: 'Continuous coverage for Emmanuel Baby’s Home, Omwana House & local families.',
                    color: 'text-vibrant-green',
                  },
                  {
                    stat: '100%',
                    title: 'Subsidized & Caring',
                    desc: 'Charitable pricing ensures no sick child or mother is turned away due to poverty.',
                    color: 'text-trust-blue',
                  },
                  {
                    stat: '1,000s',
                    title: 'Tested & Treated',
                    desc: 'Microscopic blood analysis, typhoid testing, malaria cures, and maternal deliveries.',
                    color: 'text-deep-black',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-surface border border-outline-variant/60 rounded-xl shadow-sm flex flex-col justify-between"
                  >
                    <div className={`font-headline text-3xl font-black ${item.color}`}>
                      {item.stat}
                    </div>
                    <div className="mt-3 space-y-1">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-deep-black">
                        {item.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Origin & Community Mission */}
        <section className="py-20 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                Our History &amp; Heart
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-tight">
                Why Kate Clinic <br />
                <span className="text-vibrant-green">Was Established</span>
              </h2>
              <div className="space-y-4 text-sm font-light text-on-surface-variant leading-relaxed">
                <p>
                  Before Kate Clinic existed, the families of Kyasenya and neighboring rural zones lived in a dangerous medical desert. The closest primary health center was 7 kilometers away across unpaved red dirt trails. When expectant mothers went into labor at night, or when a child contracted virulent cerebral malaria, the lack of transportation meant long, agonizing hours of walking — and in far too many cases, preventable death.
                </p>
                <p>
                  Katonda Talemwa Ministries founded Kate Clinic to bring Christ-centered medical dignity directly into this community. We built the facility to charge minimal, nominal costs so that even the most impoverished peasant farmers can receive immediate medical intervention.
                </p>
                <p>
                  The clinic also serves as the primary medical guardian for <strong>Emmanuel Baby’s Home</strong> — where orphaned and abandoned newborns arrive requiring intensive triage, intravenous hydration, and clinical monitoring — as well as the boarding pupils at <strong>Omwana House</strong> and <strong>Parental Care School</strong>.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs text-deep-black font-semibold">
                <MaterialIcon name="verified" className="text-vibrant-green text-lg" filled />
                <span>Operating fully with certified medical officers, certified midwives, and dedicated triage nurses.</span>
              </div>
            </div>

            {/* Leadership Spotlight: Walakira Jude */}
            <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/60 rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-green/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-4 border-vibrant-green/20 shadow-md">
                  <img
                    src="/images/clinic.jpg"
                    alt="Walakira Jude, Head of Kate Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-vibrant-green bg-vibrant-green/10 px-2.5 py-0.5 rounded-full inline-block">
                    Clinical Leadership
                  </span>
                  <h3 className="font-headline text-xl font-bold uppercase text-deep-black">
                    Walakira Jude
                  </h3>
                  <p className="text-xs font-semibold text-on-surface-variant">
                    Head of Kate Clinic &amp; Healthcare Lead
                  </p>
                  <p className="text-xs text-on-surface-variant font-light leading-relaxed pt-2">
                    &ldquo;Directs clinical triage, emergency pediatric care, routine immunizations, and community healthcare outreach serving mothers and children at Kate Clinic.&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/30 space-y-3">
                <div className="flex items-start gap-3 text-xs text-on-surface-variant font-light">
                  <MaterialIcon name="medical_information" className="text-vibrant-green text-base shrink-0 mt-0.5" />
                  <span>Leads emergency stabilization for orphaned newborns and acute pediatric patients.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-on-surface-variant font-light">
                  <MaterialIcon name="groups" className="text-vibrant-green text-base shrink-0 mt-0.5" />
                  <span>Oversees rural health screenings, school checkups, and maternal education programs.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Services & Departments */}
        <section className="py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block">
                Comprehensive Healthcare
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-tight">
                Our Clinical Departments
              </h2>
              <div className="w-16 h-1 bg-vibrant-green mx-auto" />
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                From prenatal scans and labor delivery to diagnostic laboratory testing and pediatric care, Kate Clinic operates every day to restore health and save lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalServices.map((svc, idx) => (
                <ScrollReveal
                  key={idx}
                  animation="fade-up"
                  delay={idx * 100}
                  className="bg-surface p-7 border border-outline-variant/60 rounded-xl shadow-sm hover:shadow-md hover:border-vibrant-green/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-vibrant-green/10 flex items-center justify-center text-vibrant-green">
                      <MaterialIcon name={svc.icon} className="text-2xl" />
                    </div>
                    <h3 className="font-headline text-base font-bold uppercase text-deep-black tracking-wide">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* URGENT CLINIC NEEDS & CAPITAL PROJECTS (Direct from User Image) */}
        <section id="urgent-needs" className="py-24 bg-surface relative">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest px-3 py-1 bg-vibrant-green/10 rounded-full inline-block">
                Direct Giving Opportunities
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-deep-black leading-tight">
                Urgent Clinic Needs &amp; <span className="text-vibrant-green">Capital Projects</span>
              </h2>
              <div className="w-20 h-1 bg-action-yellow mx-auto" />
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                You can directly sponsor a specific diagnostic test, fund a safe delivery, equip our wards, or help finish our staff housing and standby power generator. Every gift directly impacts patient survival in Kyasenya.
              </p>
            </div>

            {/* Needs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicNeeds.map((need, idx) => {
                const isFeatured = need.featured

                return (
                  <ScrollReveal
                    key={need.id}
                    animation="fade-up"
                    delay={idx * 100}
                    className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg ${
                      isFeatured
                        ? 'lg:col-span-3 bg-gradient-to-br from-deep-black via-[#0d1612] to-deep-black text-pure-white border-vibrant-green/50 p-8 sm:p-10'
                        : 'bg-surface border-outline-variant/60 hover:border-vibrant-green/60 p-7'
                    }`}
                  >
                    <div>
                      {/* Top Row: Badge & Cost */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                            isFeatured
                              ? 'bg-action-yellow text-deep-black'
                              : 'bg-vibrant-green/10 text-vibrant-green'
                          }`}
                        >
                          {need.badge}
                        </span>
                        <div
                          className={`font-headline text-2xl sm:text-3xl font-black tracking-tight ${
                            isFeatured ? 'text-action-yellow' : 'text-vibrant-green'
                          }`}
                        >
                          {need.cost}
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            isFeatured
                              ? 'bg-pure-white/10 text-action-yellow'
                              : 'bg-vibrant-green/10 text-vibrant-green'
                          }`}
                        >
                          <MaterialIcon name={need.icon} className="text-xl" />
                        </div>
                        <h3
                          className={`font-headline text-base sm:text-lg font-bold uppercase leading-snug ${
                            isFeatured ? 'text-pure-white' : 'text-deep-black'
                          }`}
                        >
                          {need.title}
                        </h3>
                      </div>

                      {/* Headline / Quotes from user image */}
                      <div
                        className={`p-3.5 rounded-xl text-xs font-semibold leading-relaxed mb-4 border ${
                          isFeatured
                            ? 'bg-pure-white/5 border-pure-white/10 text-pure-white/90'
                            : 'bg-surface-container-low border-outline-variant/30 text-deep-black'
                        }`}
                      >
                        &ldquo;{need.headline}&rdquo;
                      </div>

                      {/* Description & optional breakdown details */}
                      <p
                        className={`text-xs font-light leading-relaxed mb-4 ${
                          isFeatured ? 'text-pure-white/80' : 'text-on-surface-variant'
                        }`}
                      >
                        {need.description}
                      </p>

                      {need.detail && (
                        <div
                          className={`p-3 rounded-lg text-xxs font-medium mb-6 ${
                            isFeatured
                              ? 'bg-action-yellow/10 border border-action-yellow/20 text-action-yellow'
                              : 'bg-vibrant-green/5 border border-vibrant-green/15 text-vibrant-green'
                          }`}
                        >
                          <MaterialIcon name="info" className="text-xs inline mr-1 align-text-bottom" />
                          <strong>Breakdown:</strong> {need.detail}
                        </div>
                      )}
                    </div>

                    {/* Action Button linking to pre-populated Donate Page */}
                    <div className="pt-4 border-t border-outline-variant/20 mt-4">
                      <Link
                        to={`/donate?designation=Kate+Clinic+%26+Medical+Services&amount=${need.amount}`}
                        className={`w-full block text-center py-3 px-4 font-headline text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-200 shadow-sm active:scale-95 ${
                          isFeatured
                            ? 'bg-action-yellow hover:bg-action-yellow/90 text-deep-black shadow-action-yellow/20'
                            : 'bg-vibrant-green hover:bg-vibrant-green/90 text-pure-white'
                        }`}
                      >
                        Fund This Need ({need.cost})
                      </Link>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>

            {/* Custom Amount Callout */}
            <div className="bg-surface-container-low border border-outline-variant/60 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
              <MaterialIcon name="volunteer_activism" className="text-vibrant-green text-3xl mx-auto" />
              <h3 className="font-headline text-xl font-bold uppercase text-deep-black">
                Want to Support with a Different Amount?
              </h3>
              <p className="text-xs text-on-surface-variant font-light leading-relaxed max-w-xl mx-auto">
                Whether you want to sponsor ongoing monthly medical supplies, pay nurse stipends, or give a one-time gift of any size, every contribution directly saves lives at Kate Clinic.
              </p>
              <div className="pt-2">
                <Link
                  to="/donate?designation=Kate+Clinic+%26+Medical+Services"
                  className="inline-block bg-deep-black hover:bg-deep-black/90 text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  Give a Custom Donation
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Healthcare Ecosystem Synergy */}
        <section className="py-20 bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block">
                Integrated Care Network
              </span>
              <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                How Kate Clinic Powers Our Ministries
              </h2>
              <div className="w-16 h-1 bg-vibrant-green mx-auto" />
              <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                Healthcare is the critical foundation that allows all our other community, orphan, and educational initiatives to flourish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Emmanuel Baby’s Home',
                  subtitle: 'Neonatal Care & Stabilization',
                  desc: 'Newborns and infants rescued from abandonment receive initial health screenings, weight tracking, specialized therapeutic formulas, and emergency stabilization at Kate Clinic.',
                  link: '/emmanuel-baby-home',
                  linkText: 'Explore Baby’s Home →',
                },
                {
                  title: 'The Esther Mission',
                  subtitle: 'Adolescent Reproductive Health',
                  desc: 'Kate Clinic nurses conduct educational workshops, period hygiene instruction, and confidential health screenings for adolescent girls supported by our hygiene kit distributions.',
                  link: '/keep-a-girl',
                  linkText: 'Explore Esther Mission →',
                },
                {
                  title: 'Parental Care School & Omwana House',
                  subtitle: 'Pupil Wellness & Deworming',
                  desc: 'Provides bi-annual health screenings, routine dental checks, emergency injury triage, and malaria treatments so children stay in the classroom and excel in school.',
                  link: '/katonda-villages',
                  linkText: 'Explore Family Homes →',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-7 border border-outline-variant/60 rounded-xl shadow-sm flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-vibrant-green bg-vibrant-green/10 px-2.5 py-1 rounded inline-block">
                      {card.subtitle}
                    </span>
                    <h3 className="font-headline text-lg font-bold uppercase text-deep-black">
                      {card.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      to={card.link}
                      className="text-xs font-bold text-vibrant-green hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      {card.linkText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Mission & Volunteer Exchange Banner */}
        <section className="py-20 bg-deep-black text-pure-white relative overflow-hidden">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center space-y-6 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow block">
              Medical Mission Volunteers
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-pure-white leading-tight">
              Are You a Doctor, Nurse, or Healthcare Professional?
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-pure-white/80 font-light leading-relaxed">
              We welcome licensed physicians, nurses, midwives, ultrasound technicians, pharmacists, and medical students to join our short-term exchange mission teams. Serve directly alongside Walakira Jude and our clinical staff at Kate Clinic to conduct community health screenings, train local staff, and minister to families in need.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <Link
                to="/exchange-program"
                className="bg-action-yellow hover:bg-action-yellow/90 text-deep-black font-headline text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-none shadow-lg active:scale-95 transition-all"
              >
                Join an Exchange Mission Trip
              </Link>
              <Link
                to="/contact"
                className="border border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-black font-headline text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-none transition-all"
              >
                Contact Healthcare Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <UnifiedFooter />
    </div>
  )
}
