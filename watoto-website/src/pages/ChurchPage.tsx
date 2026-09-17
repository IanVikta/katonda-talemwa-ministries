import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterProgram } from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

interface ChurchGalleryItem {
  id: string
  title: string
  category: 'worship' | 'choir' | 'outreach' | 'prayer'
  location: string
  caption: string
  image: string
}

const churchGallery: ChurchGalleryItem[] = [
  {
    id: 'worship-gathering',
    title: 'Sunday Celebration Worship',
    category: 'worship',
    location: 'Central Campus · Mbarara',
    caption: 'Lifting praises with passionate congregational singing, expressive African rhythm, and uncompromised Bible teaching.',
    image: IMAGES.church,
  },
  {
    id: 'children-choir',
    title: 'Youth & Children\'s Choir',
    category: 'choir',
    location: 'East Africa Mission Tour',
    caption: 'Our energetic choir ministers across districts sharing original African praise songs, dance, and testimonies of God’s faithfulness.',
    image: IMAGES.spiritualGrowth,
  },
  {
    id: 'rural-outreach',
    title: 'Rural Village Evangelism',
    category: 'outreach',
    location: 'Kyotera & Kalisizo',
    caption: 'Taking the Good News door-to-door in remote villages, planting churches, and leading families into Christ’s love.',
    image: IMAGES.villagesHero,
  },
  {
    id: 'family-fellowship',
    title: 'Community Home Fellowship',
    category: 'prayer',
    location: 'Southwestern Uganda',
    caption: 'Gathering in weekly small group home fellowships for deep biblical study, mutual care, and fervent prayer.',
    image: IMAGES.heroHome,
  },
  {
    id: 'mothers-prayer',
    title: 'Women & Mothers of Faith',
    category: 'prayer',
    location: 'Mbarara District',
    caption: 'Devoted mothers interceding for their households, children, and communities, standing as pillars of faith.',
    image: IMAGES.watotoMother,
  },
  {
    id: 'community-compassion',
    title: 'Compassion & Relief Outreach',
    category: 'outreach',
    location: 'Rural Outposts',
    caption: 'Demonstrating the love of Christ tangibly through nutrition relief, clean water projects, and supporting vulnerable widows.',
    image: IMAGES.neighbourhood,
  },
]

export default function ChurchPage() {
  const [lightboxItem, setLightboxItem] = useState<ChurchGalleryItem | null>(null)

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main className="pt-20">
        {/* Modern Minimalist Sanctuary Hero */}
        <section className="bg-deep-black text-pure-white py-24 text-center rounded-none relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img className="w-full h-full object-cover" src={IMAGES.church} alt="Katonda Talemwa Church congregation" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
              Katonda Talemwa <br />
              <span className="text-action-yellow">Church Network</span>
            </h1>
            <p className="text-base font-light opacity-90 leading-relaxed max-w-2xl mx-auto">
              A dynamic network of 91+ churches mostly in rural and underserved areas of south western Uganda and East Africa—dedicated to preaching the uncompromised Gospel, discipling believers, and transforming communities across spiritual, developmental, and personal growth sectors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="#network-reach"
                className="bg-vibrant-green text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-95 transition-all rounded-none"
              >
                Explore Church Network
              </a>
              <Link
                to="/contact"
                className="border border-pure-white text-pure-white font-headline text-xs font-black uppercase tracking-widest px-8 py-4 hover:bg-pure-white hover:text-deep-black active:scale-95 transition-all rounded-none"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── REGIONAL CHURCH NETWORK STATS ── */}
        <section id="network-reach" className="py-20 bg-vibrant-green text-pure-white border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-pure-white/20 text-center">
              <div data-aos="fade-up" className="pt-4 md:pt-0">
                <div className="font-headline text-4xl sm:text-5xl font-black text-action-yellow">89</div>
                <h4 className="font-headline text-sm font-black uppercase tracking-wider mt-2">Churches in Uganda</h4>
                <p className="text-xs font-light text-pure-white/80 mt-1 max-w-[200px] mx-auto">South Western Uganda, Kyotera, Mbarara &amp; Rural Communities</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100" className="pt-4 md:pt-0 md:pl-8">
                <div className="font-headline text-4xl sm:text-5xl font-black text-action-yellow">2</div>
                <h4 className="font-headline text-sm font-black uppercase tracking-wider mt-2">Churches in Rwanda</h4>
                <p className="text-xs font-light text-pure-white/80 mt-1 max-w-[200px] mx-auto">Cross-border mission outposts ministering reconciliation &amp; hope</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="pt-4 md:pt-0 md:pl-8">
                <div className="font-headline text-4xl sm:text-5xl font-black text-action-yellow">91+</div>
                <h4 className="font-headline text-sm font-black uppercase tracking-wider mt-2">Total Congregations</h4>
                <p className="text-xs font-light text-pure-white/80 mt-1 max-w-[200px] mx-auto">United under one apostolic vision of Christ&apos;s love and discipleship</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="pt-4 md:pt-0 md:pl-8">
                <div className="font-headline text-4xl sm:text-5xl font-black text-action-yellow">25+</div>
                <h4 className="font-headline text-sm font-black uppercase tracking-wider mt-2">Years of Mission</h4>
                <p className="text-xs font-light text-pure-white/80 mt-1 max-w-[200px] mx-auto">Established in 1989 through faithful grassroots church planting</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPANDED TRANSFORMATION PILLARS: Spiritual, Developmental, Personal ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3 w-fit mx-auto">
                Holistic Ministry Approach
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-deep-black uppercase leading-tight">
                Transforming Lives Across <br />
                <span className="text-vibrant-green">Three Key Sectors</span>
              </h2>
              <div className="w-24 h-1 bg-action-yellow mx-auto" />
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                Katonda Talemwa Church does not simply hold Sunday services; every local church serves as a catalyst for holistic transformation, addressing the deepest spiritual, physical, and developmental needs of in-need communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sector 1: Spiritual Sector */}
              <div data-aos="fade-up" className="bg-surface-container-low border border-outline-variant/60 p-8 flex flex-col justify-between rounded-none shadow-sm group hover:border-vibrant-green transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-vibrant-green/10 text-vibrant-green flex items-center justify-center border-l-4 border-vibrant-green">
                    <MaterialIcon name="church" className="text-3xl" />
                  </div>
                  <h3 className="font-headline text-xl font-black uppercase text-deep-black">
                    1. Spiritual Sector
                  </h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Preaching the uncompromised Gospel of Jesus Christ, salvation through faith, and the power of the Holy Spirit. We conduct door-to-door evangelism, weekly home fellowships, prayer intercession, and grounded biblical discipleship that turns lost souls into committed disciples.
                  </p>
                </div>
                <div className="pt-6 border-t border-outline-variant/40 mt-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-vibrant-green block">
                    Gospel Centered · 91+ Churches
                  </span>
                </div>
              </div>

              {/* Sector 2: Developmental Sector */}
              <div data-aos="fade-up" data-aos-delay="100" className="bg-surface-container-low border border-outline-variant/60 p-8 flex flex-col justify-between rounded-none shadow-sm group hover:border-action-yellow transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-action-yellow/20 text-deep-black flex items-center justify-center border-l-4 border-action-yellow">
                    <MaterialIcon name="volunteer_activism" className="text-3xl" />
                  </div>
                  <h3 className="font-headline text-xl font-black uppercase text-deep-black">
                    2. Developmental Sector
                  </h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Meeting tangible human needs in impoverished rural areas. Our churches spearhead community relief, clean water initiatives, support for widows and orphans, and emergency food distributions. Where a KTM church is planted, the entire community experiences physical upliftment.
                  </p>
                </div>
                <div className="pt-6 border-t border-outline-variant/40 mt-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-deep-black block font-bold">
                    Clean Water · Relief · Family Care
                  </span>
                </div>
              </div>

              {/* Sector 3: Personal Growth Sector */}
              <div data-aos="fade-up" data-aos-delay="200" className="bg-surface-container-low border border-outline-variant/60 p-8 flex flex-col justify-between rounded-none shadow-sm group hover:border-deep-black transition-all">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-deep-black/10 text-deep-black flex items-center justify-center border-l-4 border-deep-black">
                    <MaterialIcon name="psychology" className="text-3xl" />
                  </div>
                  <h3 className="font-headline text-xl font-black uppercase text-deep-black">
                    3. Personal Growth Sector
                  </h3>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    Empowering youth and adults with vocational skills, moral mentorship, leadership training, and marriage counseling. We believe God calls every individual to live with dignity, self-reliance, and purpose, raising the next generation of ethical African leaders.
                  </p>
                </div>
                <div className="pt-6 border-t border-outline-variant/40 mt-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant block">
                    Leadership · Mentorship · Skills
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REGIONAL NETWORK REACH BREAKDOWN ── */}
        <section className="py-24 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block border-l-4 border-vibrant-green pl-3">
                  East Africa Expansion
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-none">
                  Where Our <span className="text-vibrant-green">Churches Serve</span>
                </h2>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  From rural villages in Southwestern Uganda to frontier church plants in Rwanda, our congregations bring light to the most forgotten corners.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-deep-black text-action-yellow px-6 py-3.5 font-headline text-xs font-black uppercase tracking-widest hover:bg-black transition-all shrink-0 w-fit"
              >
                Partner With Our Church Plants
              </Link>
            </div>

            <div className="w-full">
              {/* Church Network Box */}
              <div className="bg-surface border border-outline-variant/60 p-8 md:p-10 space-y-6">
                <div className="flex items-center justify-between border-b border-outline-variant/40 pb-4">
                  <div className="flex items-center gap-3">
                    <MaterialIcon name="place" className="text-vibrant-green text-2xl" />
                    <div>
                      <h4 className="font-headline text-lg font-black uppercase text-deep-black">Church Network</h4>
                      <p className="text-xs text-on-surface-variant">89 Active Churches</p>
                    </div>
                  </div>
                  <span className="bg-vibrant-green/10 text-vibrant-green text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Core Region
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                  Headquartered at our main campus in Southwestern Uganda, the network spans rural districts and communities across our ministry zones. These churches host our family homes, schools, community health clinics, and children’s ministries.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                  {['Mbarara zone', 'Greater Masaka zone', 'Ibanda zone', 'Ntungamo zone', 'Kiruhura zone', 'Rwanda zone', 'Kampala zone'].map((dist) => (
                    <div key={dist} className="bg-surface-container-low p-2.5 text-[11px] font-bold text-deep-black border border-outline-variant/40 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-vibrant-green shrink-0" />
                      <span className="truncate">{dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MINI GALLERY: Life in Our Churches ── */}
        <section className="py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">
            <div data-aos="fade-up" className="space-y-3 max-w-2xl">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-vibrant-green block border-l-4 border-vibrant-green pl-3">
                Life Across Our Congregations
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-deep-black leading-none">
                Moments of <span className="text-vibrant-green">Worship &amp; Mission</span>
              </h2>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                A glimpse into our church life—celebration services, youth choirs, rural evangelism outposts, and community fellowship.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {churchGallery.map((item, idx) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 100}
                  onClick={() => setLightboxItem(item)}
                  className="group relative bg-deep-black aspect-4/3 overflow-hidden cursor-pointer border border-outline-variant/60 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-85 transition-all duration-700 filter brightness-95"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-deep-black/80 backdrop-blur-sm text-action-yellow text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 z-10 border-l-2 border-action-yellow">
                    {item.location}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-pure-white space-y-2">
                    <div className="flex items-center gap-1 text-action-yellow">
                      <MaterialIcon name="zoom_in" className="text-xl" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">View Photo</span>
                    </div>
                    <h3 className="font-headline text-base font-black uppercase leading-snug">{item.title}</h3>
                    <p className="text-xs text-pure-white/80 font-light line-clamp-2 leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Written Message from Pastor Emmy */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Left Column: Framed Image */}
            <ScrollReveal animation="zoom-in" className="lg:col-span-5 border border-outline-variant/60 p-2 bg-surface flex flex-col justify-between h-full rounded-none shadow-sm">
              <img
                className="w-full aspect-[4/3] lg:aspect-square object-cover object-top rounded-none"
                src={IMAGES.pastorLeadership}
                alt="Pastor Emmanuel (Emmy) Nnyanzi & Sarah Nnyanzi"
              />
              <div className="p-4 bg-surface-container-low mt-2 border border-outline-variant/30 text-center">
                <span className="text-[10px] uppercase tracking-widest text-vibrant-green font-bold block mb-1">Our Apostolic Leadership</span>
                <p className="text-[11px] font-semibold text-deep-black">Pastor Emmanuel (Emmy) Nnyanzi &amp; Sarah Nnyanzi</p>
              </div>
            </ScrollReveal>

            {/* Right Column: Letter Page Block */}
            <ScrollReveal animation="fade-left" className="lg:col-span-7 bg-surface border border-outline-variant/60 p-8 md:p-12 flex flex-col justify-between rounded-none shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-action-yellow/10 rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
              <div className="space-y-6">
                <span className="text-vibrant-green font-bold text-xs uppercase tracking-widest block border-l-4 border-vibrant-green pl-3">
                  A Message From Pastor Emmy Nnyanzi
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-deep-black leading-tight">
                  &ldquo;When people feel loved, <br />
                  they will stay and flourish.&rdquo;
                </h3>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  When the Lord first called me back to my home village to preach the Gospel in 1989, I never imagined that God would use a humble, fearful young man to plant and oversee a network of 91+ churches. We started in a mud hut, with zero money, but hearts completely surrendered to Jesus Christ.
                </p>
                <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                  Our churches exist to be spiritual homes of genuine love, repentance, and community restoration. When the Gospel is preached alongside tangible love—feeding the hungry, caring for the orphan, and discipling the youth—God turns darkness into light and transforms generations.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MaterialIcon name="verified" className="text-vibrant-green text-lg" filled />
                  <span className="font-bold text-xs text-deep-black uppercase tracking-wider">91+ Churches · 1 Mission</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-vibrant-green text-pure-white px-8 py-3.5 rounded-none font-headline uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all font-black text-center text-xs shadow-md"
                >
                  Connect With Us
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-deep-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-deep-black border border-pure-white/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-deep-black/80 text-pure-white hover:text-action-yellow flex items-center justify-center border border-pure-white/20 cursor-pointer transition-colors"
                aria-label="Close"
              >
                <MaterialIcon name="close" className="text-xl" />
              </button>

              <div className="relative aspect-16/10 bg-black">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-deep-black text-pure-white space-y-3 border-t border-pure-white/15">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-action-yellow border-l-2 border-action-yellow pl-2.5">
                    {lightboxItem.location}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-vibrant-green bg-vibrant-green/10 px-2.5 py-1 border border-vibrant-green/20">
                    Katonda Talemwa Churches
                  </span>
                </div>
                <h3 className="font-headline text-xl sm:text-2xl font-black uppercase text-pure-white">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm font-light text-pure-white/80 leading-relaxed">
                  {lightboxItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      <FooterProgram highlightProgram="church" />
    </div>
  )
}
