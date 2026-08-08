import { Link } from 'react-router-dom'
import MaterialIcon from './ui/MaterialIcon'
import logo from '../assets/logo.png'

export function UnifiedFooter() {
  return (
    <footer className="bg-[#080B11] text-pure-white/60 pt-16 pb-10 font-body relative">

      <div className="max-w-(--spacing-container-max) mx-auto px-6 md:px-margin-desktop">

        {/* Horizontal Centered Newsletter Banner (Middle Row layout) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pb-10 mb-12 border-b border-pure-white/5 text-center md:text-left">
          <span className="text-xs font-headline font-bold uppercase tracking-wider text-pure-white shrink-0">
            Subscribe to our newsletter
          </span>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-pure-white/5 rounded-full p-1 border border-pure-white/10 focus-within:border-vibrant-green/50 focus-within:ring-2 focus-within:ring-vibrant-green/10 transition-all duration-300 w-full max-w-sm"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="bg-transparent px-4 py-2 text-xs outline-none w-full text-pure-white placeholder-pure-white/30"
            />
            <button
              type="submit"
              className="bg-vibrant-green hover:bg-vibrant-green/90 text-pure-white font-headline text-xxs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full active:scale-95 transition-all cursor-pointer shrink-0 shadow-md"
            >
              Join
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-pure-white/5">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity shrink-0 inline-block border-none outline-none focus:outline-none focus:ring-0"
            >
              <img
                src={logo}
                alt="Katonda Talemwa Ministries"
                className="h-12 w-auto object-contain border-none outline-none focus:outline-none focus:ring-0 select-none"
              />
            </Link>

            <p className="text-xs leading-relaxed text-pure-white/50 font-light">
              Katonda Talemwa Ministries (KTM) is an indigenous Christian non-profit organization passionate about creating long-term, sustainable solutions for disadvantaged children, youth, and young women in East Africa.
            </p>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-pure-white border-b border-pure-white/10 pb-3">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Katonda Talemwa Ministries', to: '/katonda-villages' },
                { label: "Emmanuel Baby's Home", to: '/emmanuel-baby-home' },
                { label: 'The Esther Mission', to: '/keep-a-girl' },
                { label: 'Katonda Talemwa Church', to: '/katonda-church' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-vibrant-green hover:translate-x-1.5 transition-all duration-300 block py-0.5 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Column */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-pure-white border-b border-pure-white/10 pb-3">
              Get Involved
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Sponsor a Child', to: '/sponsor' },
                { label: 'Donate Today', to: '/donate' },
                { label: 'Volunteer / Go', to: '/volunteer' },
                { label: 'Exchange Program', to: '/exchange-program' },
                { label: 'Pray With Us', to: '/pray-with-us' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-vibrant-green hover:translate-x-1.5 transition-all duration-300 block py-0.5 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-pure-white border-b border-pure-white/10 pb-3">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex gap-3 items-start">
                <MaterialIcon name="place" className="text-vibrant-green text-base mt-0.5 shrink-0" />
                <span className="leading-relaxed text-pure-white/70">
                  Kyasenya, Lwengo<br />
                  P. O. Box 222344 Masaka, Uganda
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <MaterialIcon name="email" className="text-vibrant-green text-base shrink-0" />
                <a href="mailto:pcm.uganda@gmail.com" className="hover:text-vibrant-green transition-colors text-pure-white/70">
                  katondatalemwaministries@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <MaterialIcon name="phone" className="text-vibrant-green text-base shrink-0" />
                <a href="tel:+256776883749" className="hover:text-vibrant-green transition-colors text-pure-white/70">
                  +256 705 118 356
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-pure-white/40">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span>© 2026 Katonda Talemwa Ministries. All rights reserved.</span>

            {/* Inline SVG Social Icons for maximum visual crispness */}
            <div className="flex gap-4 items-center">
              <a href="https://www.facebook.com/share/1BdeDxAkwX/" aria-label="Facebook" className="hover:text-vibrant-green transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://x.com/parental_care" aria-label="X (Twitter)" className="hover:text-vibrant-green transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/parental_care_ministries_ug?igsh=YWE0YnJpZzVoMms4" aria-label="Instagram" className="hover:text-vibrant-green transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583 0.07-4.849 0.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://youtube.com/@parentalcareministries7334?si=H4Vcgb8whVFxSlE3" aria-label="YouTube" className="hover:text-vibrant-green transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-vibrant-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-vibrant-green transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export function FooterHome() {
  return <UnifiedFooter />
}

interface FooterProgramProps {
  highlightProgram?: string
}

export function FooterProgram({ }: FooterProgramProps) {
  return <UnifiedFooter />
}

export function FooterSponsor() {
  return <UnifiedFooter />
}
