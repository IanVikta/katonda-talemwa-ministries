import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FooterHome } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'

export default function WhoWeArePage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-deep-black text-pure-white py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 opacity-40 z-0">
            {/* Placeholder Image container */}
            <div className="w-full h-full bg-vibrant-green/20 flex items-center justify-center">
              <span className="font-headline text-headline-xl uppercase tracking-widest text-pure-white/10 select-none">WHO WE ARE</span>
            </div>
          </div>
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center space-y-6">
            <span className="font-bold text-xs uppercase tracking-widest text-action-yellow bg-vibrant-green/20 px-4 py-1.5 rounded-full inline-block">
              Katonda Talemwa Ministries
            </span>
            <h1 className="font-headline text-headline-xl mb-4 font-black uppercase leading-none md:text-6xl text-4xl">
              Towards a <span className="text-action-yellow">Sustainable Future</span>
            </h1>
            <p className="max-w-2xl mx-auto text-body-lg font-light opacity-90 leading-relaxed">
              Rescuing children, empowering women, and building long-term, self-sustaining solutions for vulnerable communities.
            </p>
            <div className="flex justify-center gap-6 pt-2 font-headline text-xs font-bold uppercase tracking-widest text-pure-white/80">
              <span className="flex items-center gap-1.5"><MaterialIcon name="done" className="text-action-yellow" /> Proclaim</span>
              <span className="flex items-center gap-1.5"><MaterialIcon name="favorite" className="text-action-yellow" /> Comfort</span>
              <span className="flex items-center gap-1.5"><MaterialIcon name="trending_up" className="text-action-yellow" /> Multiply</span>
            </div>
          </div>
        </section>

        {/* Pillars / Intro Grid */}
        <section className="py-20 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Organization Intro */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-vibrant-green font-bold text-xs uppercase tracking-wider block">Our Story</span>
                <h2 className="font-headline text-headline-lg text-deep-black leading-tight">
                  A Pillar of Hope Since <span className="text-vibrant-green font-black">1994</span>
                </h2>
                <p className="text-on-surface-variant font-light text-base leading-relaxed">
                  Katonda Talemwa Ministries (KTM) is an indigenous Christian non-profit organization passionate about creating long-term solutions for disadvantaged children, youth, and young women. Originally launched in 1994 as a pillar of hope to destitute children, KTM is registered as a non-profit organization (Registration Number INDP109892631NB).
                </p>
                <p className="text-on-surface-variant font-light text-base leading-relaxed">
                  Our binary focus is to provide equitable and quality education, health, and relief services, empowering individuals to break cycles of poverty and achieve their full potential.
                </p>
              </div>

              {/* Right Column: Image Placeholder & Quick Stats */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -right-4 -bottom-4 w-full h-full bg-vibrant-green/10 -z-10 rounded-lg" />
                <div className="w-full aspect-[4/3] bg-surface-container rounded-lg border-b-8 border-vibrant-green flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="text-center p-6 space-y-2">
                    <MaterialIcon name="groups" className="text-vibrant-green text-5xl" />
                    <p className="font-headline text-xs font-black uppercase tracking-widest text-deep-black">KTM Founders & Team</p>
                    <p className="text-xxs text-on-surface-variant max-w-[240px] font-semibold">Empowering and rescuing communities in East Africa</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-vibrant-green/10 text-vibrant-green rounded-lg flex items-center justify-center">
                  <MaterialIcon name="visibility" className="text-2xl" />
                </div>
                <h3 className="font-headline text-xl font-bold uppercase tracking-wide text-deep-black">Our Vision</h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  A generation of equal opportunities and new beginnings, where every child has the freedom and support to design a bright future.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                  <MaterialIcon name="explore" className="text-2xl" />
                </div>
                <h3 className="font-headline text-xl font-bold uppercase tracking-wide text-deep-black">Our Mission</h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  To put the Father's Love in Action through impacting lives socially, providing resources, spiritual discipleship, and physical care.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* What Makes Us Different / Core Operations */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Image Placeholder */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="absolute -left-4 -bottom-4 w-full h-full bg-secondary/10 -z-10 rounded-lg" />
                <div className="w-full aspect-[4/3] bg-surface rounded-lg border-b-8 border-secondary flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="text-center p-6 space-y-2">
                    <MaterialIcon name="school" className="text-secondary text-5xl" />
                    <p className="font-headline text-xs font-black uppercase tracking-widest text-deep-black">Student Life & Education</p>
                    <p className="text-xxs text-on-surface-variant max-w-[240px] font-semibold">Transforming classrooms and schools for local children</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Operation Details */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-secondary font-bold text-xs uppercase tracking-wider block">Our Philosophy</span>
                <h2 className="font-headline text-headline-lg text-deep-black leading-tight">
                  What Makes Us Different?
                </h2>
                <p className="text-on-surface-variant font-light text-base leading-relaxed">
                  We are relentlessly committed to taking full responsibility for disadvantaged children and delivering a great future for them. We do this by providing excellence in every project and maximizing the value of every single resource trusted to us.
                </p>
                <div className="space-y-4">
                  <p className="font-headline text-xs font-black text-deep-black uppercase tracking-wider">
                    Our operations focus on the following core activities:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { num: '1', text: 'Rescuing Children from abuse' },
                      { num: '2', text: 'Rehabilitation of abused children' },
                      { num: '3', text: 'Nurturing Children with Love' },
                      { num: '4', text: 'Advocacy for Children’s Rights' },
                      { num: '5', text: 'Skilling and Education' },
                      { num: '6', text: 'Health Services Provision' },
                      { num: '7', text: 'Advocacy, Rehabilitation & Support for young women' },
                    ].map((item) => (
                      <div key={item.num} className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-vibrant-green/10 text-vibrant-green text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                          {item.num}
                        </span>
                        <span className="text-xs text-on-surface-variant font-medium leading-normal">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Project Highlights Section */}
        <section className="py-20 bg-surface border-b border-outline-variant/30">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop space-y-12">

            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-vibrant-green font-bold text-xs uppercase tracking-wider block">Impact Pillars</span>
              <h2 className="font-headline text-headline-lg text-deep-black leading-none">
                Transformational Projects
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Highlight 1 */}
              <div className="bg-surface border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-surface-container flex items-center justify-center">
                  <MaterialIcon name="child_care" className="text-vibrant-green text-4xl" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-deep-black uppercase">Child Sponsorship</h3>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      We support over 800 children in our child care program. These children are provided with nutritious food, clothing, health care, shelter, and quality education. Under this project, we have impacted up to 50,015 children since we established our very first school.
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="bg-surface border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-surface-container flex items-center justify-center">
                  <MaterialIcon name="local_hospital" className="text-vibrant-green text-4xl" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-deep-black uppercase">Child Health: Kate Clinic</h3>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      Before Kate Clinic, expectant mothers had to walk 7 kilometers to reach the nearest health facility. Mortality rates from malaria and maternity complications were high. We opened Kate Clinic as a charitable clinic to charge minimal costs, providing lab work, antenatal care, and general medicine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="bg-surface border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-surface-container flex items-center justify-center">
                  <MaterialIcon name="home" className="text-vibrant-green text-4xl" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-deep-black uppercase">Child Care: EMMANUEL BABIES HOME</h3>
                    <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                      Established in 2016, Emmanuel Babies Home takes in orphaned and abandoned babies from infancy to 8 years old to give them a healthy start. The home depends on donor support to care for babies who have lost mothers, or been abandoned in hospitals with no known relatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contribution Goals & Calling */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop grid lg:grid-cols-12 gap-12 items-center">

            {/* Left: Contribution List */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-secondary font-bold text-xs uppercase tracking-wider block">Financial Transparency</span>
              <h2 className="font-headline text-headline-lg text-deep-black leading-tight">
                What Your Contribution Can Do
              </h2>
              <p className="text-on-surface-variant font-light text-base leading-relaxed">
                Every resource helps us pay medical nannies, clinic nannies, purchase supplies, and provide nutrition. Here is how your donation directly impacts KTM's services:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  { cost: '$25', desc: 'Diagnose malaria and typhoid' },
                  { cost: '$50', desc: 'Fund a newborn delivery at our hospital' },
                  { cost: '$250', desc: 'Equip our clinic with needed supplies' },
                  { cost: '$400', desc: 'Immunize our kids' },
                  { cost: '$2,000', desc: 'Pay clinic staff monthly salaries' },
                  { cost: '$15/mo', desc: 'School supplies for a child' },
                  { cost: '$20/mo', desc: 'Feed our babies' },
                  { cost: '$60/mo', desc: 'Fully sponsor a baby' },
                  { cost: '$30', desc: 'School supplies for a teacher' },
                  { cost: '$15', desc: 'Purchase key student textbooks' },
                  { cost: '$45', desc: 'School desk for three children' },
                  { cost: '$15', desc: 'Uniform for an unsponsored child' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-surface border border-outline-variant/10 rounded-lg">
                    <span className="text-vibrant-green font-black text-sm shrink-0">{item.cost}</span>
                    <span className="text-[11px] text-on-surface-variant font-semibold leading-normal">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-vibrant-green/5 border border-vibrant-green/10 rounded-lg space-y-2">
                <p className="font-headline text-xs font-black uppercase tracking-wider text-vibrant-green">Special Capital Campaigns & Equipment:</p>
                <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc pl-5 font-medium">
                  <li><strong>$8,000:</strong> Finishing teacher's housing in Kyasenya</li>
                  <li><strong>$20,000:</strong> Implementing solar power for a school</li>
                  <li><strong>$45,000:</strong> Miracle Bus transport to safely move staff & kids across East Africa</li>
                </ul>
              </div>
            </div>

            {/* Right: Join Us Action Card */}
            <div className="lg:col-span-5 bg-vibrant-green text-pure-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pure-white/5 rounded-full translate-x-10 -translate-y-10" />
              <MaterialIcon name="volunteer_activism" className="text-action-yellow text-5xl" />
              <h3 className="font-headline text-2xl font-black uppercase tracking-wide leading-none">
                You Can Join Us To Change Lives
              </h3>
              <p className="text-xs opacity-90 leading-relaxed font-light">
                We need willing people like you to be the hand and feet of Jesus. You can join to support us either as an individual, as a family, or as an organization.
              </p>
              <p className="text-xs opacity-90 leading-relaxed font-light">
                Contact us for any help or questions on how you can be part of what God is doing in Uganda. There are also beautiful opportunities for volunteers.
              </p>
              <div className="h-px bg-pure-white/20 w-full my-4" />
              <div className="space-y-2 text-xxs font-semibold tracking-wider">
                <p>P.O. Box 1690 Mbarara, Uganda (East Africa)</p>
                <p>Nkokojeru, Kamukuzi Kakiika</p>
                <p>Email: pcm.uganda@gmail.com | emmynyanzi2018@gmail.com</p>
                <p>Tel: +256 776 883 749 | +256 708 344 930</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-action-yellow text-deep-black font-headline text-xs font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg rounded"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <FooterHome />
    </div>
  )
}
