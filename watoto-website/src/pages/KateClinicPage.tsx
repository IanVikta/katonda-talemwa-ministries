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
    description: 'Subsidizes essential laboratory diagnostics and first-line treatment for rural patients suffering from acute malaria and typhoid.',
    badge: 'Immediate Relief',
  },
  {
    id: 'newborn-delivery',
    title: 'Fund a Newborn Delivery at Our Rural Clinic',
    cost: '$60',
    amount: '60',
    icon: 'child_friendly',
    headline: 'This could cater for band aids, bandages, sutures, and soap.',
    description: 'Provides a clean, sterile, and dignified delivery kit for an expectant mother and newborn in our rural maternity room under skilled midwife care.',
    badge: 'Maternal Care',
  },
  {
    id: 'requisite-supplies',
    title: 'Equip Our Clinic with Requisite Supplies',
    cost: '$299',
    amount: '299',
    icon: 'medical_services',
    headline: 'Kate Clinic could use new bed sheets, medical gowns, oxy-meters etc. for the inpatients.',
    description: 'Directly furnishes our inpatient recovery beds with fresh sanitizable linens, patient gowns, basic consumables, and digital pulse oximeters.',
    badge: 'Clinic Supplies',
  },
  {
    id: 'omwana-kids',
    title: 'Treat Emmanuel babies home Kids',
    cost: '$1,000',
    amount: '1000',
    icon: 'healing',
    headline: 'Help us purchase meds and pay for care for our Omwana House and Parental Care School Kids that are hospitalized.',
    description: 'Covers prescription medications, hydration, and medical care for orphaned and vulnerable school children when hospitalized.',
    badge: 'Pediatric Care',
  },
  {
    id: 'water-grid',
    title: 'Connection to Water Grid',
    cost: '$4,000',
    amount: '4000',
    icon: 'water_drop',
    headline: 'Help us secure clean water for the clinic',
    description: 'Connects the clinic facility to the clean water grid, securing reliable running water for deliveries, basic hygiene, and sanitation.',
    badge: 'Essential Utility',
  },
  {
    id: 'staff-housing',
    title: 'Kate Clinic Staff Housing',
    cost: '$4,000',
    amount: '4000',
    icon: 'cottage',
    headline: 'Help us finish the staff quarters. Staff housing will have 10 rooms for staff.',
    description: 'Completes on-site housing so nurses and staff reside on clinic grounds, enabling emergency responses for night deliveries and acute complications.',
    detail: 'In each room we need: a bed $160, desk $30, and a set of chairs $90 ($280 per room).',
    badge: 'Campus Facility',
  },
  {
    id: 'standby-generator',
    title: 'Buy a Diesel Standby Generator for the Clinic',
    cost: '$15,000',
    amount: '15000',
    icon: 'bolt',
    headline: 'Imagine operating a medical facility that uses electric machines but has no electricity.',
    description: 'We need a functioning clinic with the labor, delivery, and testing undeterred by frequent rural blackouts. Help our care level increase!',
    detail: 'Provides dependable standby electricity during frequent rural power outages for lights and basic clinic equipment.',
    badge: 'Critical Infrastructure',
    featured: true,
  },
]

export default function KateClinicPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <SEO
        title="Kate Clinic | Maternal & Healthcare Services in Uganda"
        description="Kate Clinic provides accessible maternal healthcare, malaria testing, pediatric triage, and outpatient care to rural families and orphans in Kyasenya, Uganda."
        canonicalPath="/kate-clinic"
        keywords="Kate Clinic, Katonda Talemwa clinic, rural clinic Uganda, maternal healthcare Uganda, malaria diagnosis Africa, Jude Walakira, Kyasenya Lwengo clinic"
      />

      <Navbar />

      <main className="pt-20">
        {/* Minimalist Centered Title Section (Matching KeepGirlInSchool / WhoWeAre) */}
        <section className="bg-deep-black text-pure-white py-16 text-center rounded-none relative overflow-hidden">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop w-full space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow block">
              The Father&apos;s Love in Action — Healing &amp; Compassion
            </span>
            <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase leading-tight tracking-tight text-pure-white">
              Kate <span className="text-action-yellow">Clinic</span>
            </h1>
            <p className="text-sm md:text-base font-headline font-extrabold uppercase tracking-widest text-vibrant-green">
              Lifesaving Maternal Care, Testing &amp; Pediatric Support in Kyasenya
            </p>

            <div className="max-w-4xl mx-auto space-y-4 text-sm md:text-base font-light text-pure-white/85 leading-relaxed">
              <p>
                In rural Southwestern Uganda, access to timely medical intervention is often the difference between life and death. Before Katonda Talemwa Ministries opened <strong>Kate Clinic</strong> in Kyasenya, Lwengo District, expectant mothers had to walk over <strong>7 kilometers</strong> on foot through rough dirt roads just to reach the nearest health center. Mothers in labor faced dangerous delays, and children with sudden acute fevers faced severe complications.
              </p>
              <p>
                Today, Kate Clinic stands as a compassionate, local healthcare point. Operating with nominal, subsidized fees so no rural family is turned away, we provide basic antenatal visits, clean newborn deliveries, emergency pediatric triage, rapid malaria and typhoid testing, and compassionate outpatient care for our baby home, school children, and surrounding villagers.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
              <a
                href="#urgent-needs"
                className="bg-vibrant-green hover:bg-vibrant-green/90 text-pure-white px-8 py-3.5 font-headline text-xs font-black uppercase tracking-widest transition-all rounded-none shadow-sm"
              >
                View Urgent Clinic Needs
              </a>
              <Link
                to="/donate?designation=Kate+Clinic+%26+Medical+Services"
                className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-black px-8 py-3.5 font-headline text-xs font-bold uppercase tracking-widest transition-all rounded-none"
              >
                Donate Directly to Clinic
              </Link>
            </div>
          </div>
        </section>

        {/* Triple Image Filmstrip Banner (Matching Other Pages) */}
        <section className="border-y border-outline-variant/60 bg-surface-container-high">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                src={IMAGES.kateClinic}
                alt="Kate Clinic building in Kyasenya, Uganda"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                src={IMAGES.emmanuelBabiesCare}
                alt="Baby receiving nurturing care at Katonda Talemwa"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                src={IMAGES.villagesHero}
                alt="Community families in rural Kyasenya served by Kate Clinic"
              />
            </div>
          </div>
        </section>

        {/* Statistics Dashboard: Sharp Grid Cards (Matching Site Style) */}
        <section className="py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                  The Reality on the Ground
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-tight">
                  Bringing Care Close <br />
                  <span className="text-vibrant-green">To Those in Need</span>
                </h2>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Rural families in Kyasenya previously lived without nearby medical assistance. Kate Clinic bridges this critical divide with accessible maternal care, rapid fevers testing, and continuous emergency support.
                </p>
              </div>

              {/* Data Cards Grid (rounded-none) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    stat: '7 km',
                    title: 'Walk Eliminated',
                    desc: 'Mothers and children no longer have to trek for hours on foot to find medical aid.',
                    bg: 'bg-surface',
                    color: 'text-action-yellow',
                  },
                  {
                    stat: '24/7',
                    title: 'Emergency Triage',
                    desc: 'On-call coverage for Emmanuel Baby’s Home infants and rural delivery complications.',
                    bg: 'bg-vibrant-green text-pure-white border-vibrant-green',
                    color: 'text-pure-white',
                  },
                  {
                    stat: '100%',
                    title: 'Subsidized Care',
                    desc: 'Nominal fees ensure no sick child or impoverished farmer is turned away.',
                    bg: 'bg-surface',
                    color: 'text-deep-black',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`border border-outline-variant/60 p-6 rounded-none flex flex-col justify-between min-h-[200px] shadow-sm ${item.bg}`}
                  >
                    <div className={`font-headline text-3xl sm:text-4xl font-black ${item.color}`}>
                      {item.stat}
                    </div>
                    <div className="space-y-1 mt-4">
                      <h4 className="font-bold text-xs uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs opacity-90 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* History & Leadership Feature (Sharp Side-by-Side Layout) */}
        <section className="py-20 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Mission History */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                Our History &amp; Heart
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-tight">
                Why Kate Clinic <br />
                <span className="text-vibrant-green">Was Established</span>
              </h2>
              <div className="space-y-4 text-sm font-light text-on-surface-variant leading-relaxed">
                <p>
                  Before Kate Clinic existed, the families of Kyasenya and neighboring rural zones lived in a dangerous medical desert. The closest primary health post was 7 kilometers away across unpaved red dirt trails. When expectant mothers went into labor at night, or when a child contracted acute malaria, the lack of transportation meant long, agonizing hours on foot — and in far too many cases, preventable tragedies.
                </p>
                <p>
                  Katonda Talemwa Ministries founded Kate Clinic to bring compassionate, Christ-centered medical dignity directly into this community. The clinic charges nominal, subsidized costs so that peasant families and mothers can receive immediate attention.
                </p>
                <p>
                  The clinic also serves as the primary medical point for <strong>Emmanuel Baby’s Home</strong> — where orphaned and abandoned newborns arrive needing immediate health screening and monitoring — as well as the pupils at <strong>Omwana House</strong> and <strong>Parental Care School</strong>.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs text-deep-black font-semibold">
                <MaterialIcon name="verified" className="text-vibrant-green text-lg" filled />
                <span>Operating with dedicated nurses, certified midwives, and community health staff.</span>
              </div>
            </div>

            {/* Right Column: Leadership Spotlight Card (rounded-none) */}
            <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/60 rounded-none p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 overflow-hidden shrink-0 border-2 border-outline-variant/60 rounded-none">
                  <img
                    src={IMAGES.jude}
                    alt="Walakira Jude, Head of Kate Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-vibrant-green bg-vibrant-green/10 px-2 py-0.5 rounded-none inline-block">
                    Clinical Leadership
                  </span>
                  <h3 className="font-headline text-lg font-bold uppercase text-deep-black">
                    Walakira Jude
                  </h3>
                  <p className="text-xs font-semibold text-on-surface-variant">
                    Head of Kate Clinic &amp; Healthcare Lead
                  </p>
                </div>
              </div>

              <div className="text-xs text-on-surface-variant font-light leading-relaxed border-t border-outline-variant/30 pt-4 space-y-3">
                <p className="italic">
                  &ldquo;Directs clinical triage, emergency pediatric care, routine immunizations, and community healthcare outreach serving mothers and children at Kate Clinic.&rdquo;
                </p>
                <div className="flex items-start gap-2 pt-1 text-deep-black font-medium">
                  <MaterialIcon name="medical_information" className="text-vibrant-green text-sm shrink-0 mt-0.5" />
                  <span>Leads emergency triage for rescued infants and hospitalized school children.</span>
                </div>
                <div className="flex items-start gap-2 text-deep-black font-medium">
                  <MaterialIcon name="groups" className="text-vibrant-green text-sm shrink-0 mt-0.5" />
                  <span>Oversees rural health screenings and health education in Kyasenya.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Clinical Services (Sharp Grid with Crisp Borders) */}
        <section className="py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block">
                Primary Healthcare
              </span>
              <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                Services Provided at Kate Clinic
              </h2>
              <div className="w-16 h-1 bg-vibrant-green mx-auto" />
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                Operating to meet the immediate, essential medical needs of rural villagers, mothers, and children in Kyasenya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'pregnant_woman',
                  title: 'Maternal & Newborn Care',
                  desc: 'Midwife-led prenatal checks, clean and safe newborn delivery, postpartum recovery, and basic baby kits.',
                },
                {
                  icon: 'biotech',
                  title: 'Malaria & Typhoid Testing',
                  desc: 'Rapid diagnostic tests and blood smear analysis for early detection of malaria, typhoid, and common infections.',
                },
                {
                  icon: 'child_care',
                  title: 'Pediatric Triage & Care',
                  desc: 'First-line emergency medical care for infants from Emmanuel Baby’s Home and pupils from Parental Care School.',
                },
                {
                  icon: 'hotel',
                  title: 'Inpatient Recovery Beds',
                  desc: 'Supervised beds with fresh linens, vital signs monitoring, and hydration for patients needing observation.',
                },
                {
                  icon: 'medication',
                  title: 'Charitable Pharmacy',
                  desc: 'Subsidized basic medicines including anti-malarials, antibiotics, rehydration salts, and pediatric syrups.',
                },
                {
                  icon: 'vaccines',
                  title: 'Immunization & Outreach',
                  desc: 'Routine childhood immunizations, clean water sensitization, and preventive care guidance for village families.',
                },
              ].map((svc, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-6 border border-outline-variant/60 rounded-none shadow-xs space-y-3 flex flex-col justify-between hover:border-vibrant-green transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-none bg-vibrant-green/10 flex items-center justify-center text-vibrant-green">
                      <MaterialIcon name={svc.icon} className="text-xl" />
                    </div>
                    <h3 className="font-headline text-sm font-bold uppercase text-deep-black tracking-wide">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* URGENT CLINIC NEEDS & DIRECT GIVING (Sharp Cards Matching Site Style) */}
        <section id="urgent-needs" className="py-20 bg-surface relative">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest px-3 py-1 bg-vibrant-green/10 rounded-none inline-block">
                Direct Giving Opportunities
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-tight">
                Urgent Clinic Needs &amp; <span className="text-vibrant-green">Capital Projects</span>
              </h2>
              <div className="w-16 h-1 bg-action-yellow mx-auto" />
              <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                You can directly sponsor a specific diagnostic test, fund a clean delivery, equip our beds, or help finish our staff housing and generator. Every gift directly impacts patient care in Kyasenya.
              </p>
            </div>

            {/* Needs Grid (Sharp rectangular cards, rounded-none) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicNeeds.map((need, idx) => {
                const isFeatured = need.featured

                return (
                  <ScrollReveal
                    key={need.id}
                    animation="fade-up"
                    delay={idx * 60}
                    className={`rounded-none border transition-all duration-200 flex flex-col justify-between shadow-xs ${isFeatured
                      ? 'lg:col-span-3 bg-deep-black text-pure-white border-vibrant-green p-6 sm:p-8'
                      : 'bg-surface border-outline-variant/60 hover:border-vibrant-green p-6'
                      }`}
                  >
                    <div className="space-y-3">
                      {/* Top Row: Badge & Cost */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-none ${isFeatured
                            ? 'bg-action-yellow text-deep-black'
                            : 'bg-vibrant-green/10 text-vibrant-green'
                            }`}
                        >
                          {need.badge}
                        </span>
                        <div
                          className={`font-headline text-2xl font-black ${isFeatured ? 'text-action-yellow' : 'text-vibrant-green'
                            }`}
                        >
                          {need.cost}
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 ${isFeatured
                            ? 'bg-pure-white/10 text-action-yellow'
                            : 'bg-vibrant-green/10 text-vibrant-green'
                            }`}
                        >
                          <MaterialIcon name={need.icon} className="text-lg" />
                        </div>
                        <h3
                          className={`font-headline text-sm sm:text-base font-bold uppercase leading-snug ${isFeatured ? 'text-pure-white' : 'text-deep-black'
                            }`}
                        >
                          {need.title}
                        </h3>
                      </div>

                      {/* Direct Quotes / Headline from flyer */}
                      <p
                        className={`text-xs font-semibold leading-relaxed border-l-2 pl-3 py-1 ${isFeatured
                          ? 'border-action-yellow text-pure-white/90'
                          : 'border-vibrant-green text-deep-black'
                          }`}
                      >
                        &ldquo;{need.headline}&rdquo;
                      </p>

                      {/* Description */}
                      <p
                        className={`text-xs font-light leading-relaxed ${isFeatured ? 'text-pure-white/80' : 'text-on-surface-variant'
                          }`}
                      >
                        {need.description}
                      </p>

                      {need.detail && (
                        <div
                          className={`p-2.5 text-[11px] font-medium rounded-none ${isFeatured
                            ? 'bg-action-yellow/10 border border-action-yellow/20 text-action-yellow'
                            : 'bg-surface-container-high border border-outline-variant/40 text-deep-black'
                            }`}
                        >
                          <strong>Detail:</strong> {need.detail}
                        </div>
                      )}
                    </div>

                    {/* Action Button (rounded-none) */}
                    <div className="pt-4 border-t border-outline-variant/20 mt-4">
                      <Link
                        to={`/donate?designation=Kate+Clinic+%26+Medical+Services&amount=${need.amount}`}
                        className={`w-full block text-center py-3 px-4 font-headline text-xs font-black uppercase tracking-widest rounded-none transition-all duration-200 active:scale-95 ${isFeatured
                          ? 'bg-action-yellow hover:brightness-110 text-deep-black'
                          : 'bg-vibrant-green hover:brightness-110 text-pure-white'
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
            <div className="bg-surface-container-low border border-outline-variant/60 rounded-none p-6 sm:p-8 text-center max-w-2xl mx-auto space-y-3">
              <MaterialIcon name="volunteer_activism" className="text-vibrant-green text-3xl mx-auto" />
              <h3 className="font-headline text-lg sm:text-xl font-bold uppercase text-deep-black">
                Support with a Custom Donation
              </h3>
              <p className="text-xs text-on-surface-variant font-light leading-relaxed max-w-md mx-auto">
                Whether sponsoring monthly medicine supplies or making a gift of any amount, your gift directly supports patient care in Kyasenya.
              </p>
              <div className="pt-2">
                <Link
                  to="/donate?designation=Kate+Clinic+%26+Medical+Services"
                  className="inline-block bg-deep-black hover:bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-none transition-all active:scale-95"
                >
                  Give a Custom Amount
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Integrated Community Healthcare Synergy (Sharp Cards) */}
        <section className="py-20 bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block">
                Integrated Care Network
              </span>
              <h2 className="font-headline text-3xl font-black uppercase text-deep-black leading-tight">
                How Kate Clinic Serves The Ministry
              </h2>
              <div className="w-16 h-1 bg-vibrant-green mx-auto" />
              <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                Healthcare is the essential foundation that protects our orphaned babies, school children, and village families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Emmanuel Baby’s Home',
                  subtitle: 'Neonatal Care & Stabilization',
                  image: IMAGES.emmanuelBabiesCare,
                  desc: 'Newborns and infants welcomed into our care receive initial medical triage, weight checks, and ongoing pediatric care at Kate Clinic.',
                  link: '/emmanuel-baby-home',
                  linkText: 'Explore Baby’s Home →',
                },
                {
                  title: 'The Esther Mission',
                  subtitle: 'Adolescent Reproductive Health',
                  image: IMAGES.girlSchool,
                  desc: 'Kate Clinic nurses conduct health sensitization and hygiene education for young girls receiving sanitary support kits.',
                  link: '/keep-a-girl',
                  linkText: 'Explore Esther Mission →',
                },
                {
                  title: 'Parental Care School & Emmanuel Babies Home',
                  subtitle: 'Pupil Wellness & Deworming',
                  image: IMAGES.studentLife,
                  desc: 'Provides periodic health screenings, malaria checks, and emergency care so children remain healthy and active in school.',
                  link: '/katonda-villages',
                  linkText: 'Explore Family Homes →',
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-surface border border-outline-variant/60 rounded-none overflow-hidden shadow-xs flex flex-col justify-between hover:border-vibrant-green transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-vibrant-green bg-vibrant-green/10 px-2 py-0.5 rounded-none inline-block">
                        {card.subtitle}
                      </span>
                      <h3 className="font-headline text-base font-bold uppercase text-deep-black">
                        {card.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-outline-variant/20">
                      <Link
                        to={card.link}
                        className="text-xs font-bold text-vibrant-green hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                      >
                        {card.linkText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Mission & Volunteer Exchange Banner (Sharp Design)
        <section className="py-20 bg-deep-black text-pure-white text-center rounded-none relative overflow-hidden">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-6 relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow block">
              Medical Mission Volunteers
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-pure-white leading-tight">
              Are You a Doctor, Nurse, or Healthcare Professional?
            </h2>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-pure-white/80 font-light leading-relaxed">
              We welcome healthcare professionals, nurses, midwives, and medical students to join our short-term mission teams. Serve alongside Walakira Jude and local clinical staff to conduct village checkups and support families in need.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 justify-center">
              <Link
                to="/exchange-program"
                className="bg-action-yellow hover:brightness-110 text-deep-black font-headline text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-none shadow-sm transition-all active:scale-95"
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
        </section> */}
      </main>

      <UnifiedFooter />
    </div>
  )
}
