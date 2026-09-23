import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { UnifiedFooter } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import SEO from '../components/SEO'

export default function NotFoundPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-body selection:bg-action-yellow selection:text-deep-black">
      <SEO
        title="Page Not Found | Katonda Talemwa Ministries"
        description="The page you are looking for cannot be found. Return to Katonda Talemwa Ministries homepage, sponsor a child, or explore our programs across Uganda."
        canonicalPath="/404"
        robots="noindex, follow"
      />
      <Navbar />

      <main className="grow flex items-center justify-center py-28 px-4 md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-xl w-full text-center space-y-8 bg-surface border border-outline-variant/50 p-8 sm:p-12 shadow-sm rounded-none">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-vibrant-green/10 border-2 border-vibrant-green text-vibrant-green">
            <MaterialIcon name="explore_off" className="text-4xl" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-headline font-black uppercase tracking-widest text-action-yellow bg-deep-black px-3 py-1 inline-block">
              Error 404
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase text-deep-black leading-tight">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant font-light leading-relaxed">
              We couldn&apos;t find the page you were looking for. It may have moved, or the link may be out of date. Let us help you find your way back to our mission in Uganda.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-vibrant-green hover:brightness-110 active:scale-95 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-3.5 px-6 transition-all rounded-none flex items-center justify-center gap-2 shadow-sm"
            >
              <MaterialIcon name="home" className="text-base" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/sponsor"
              className="bg-deep-black hover:bg-deep-black/80 active:scale-95 text-pure-white font-headline text-xs font-black uppercase tracking-widest py-3.5 px-6 transition-all rounded-none flex items-center justify-center gap-2"
            >
              <MaterialIcon name="favorite" className="text-action-yellow text-base" />
              <span>Sponsor a Child</span>
            </Link>
            <Link
              to="/contact"
              className="border border-outline-variant/80 hover:border-deep-black hover:bg-surface-container active:scale-95 text-deep-black font-headline text-xs font-black uppercase tracking-widest py-3.5 px-6 transition-all rounded-none flex items-center justify-center gap-2"
            >
              <MaterialIcon name="mail" className="text-base" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  )
}
