import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaterialIcon from './ui/MaterialIcon'
import logo from '../assets/logo.png'

type SubmenuType = 'none' | 'what-we-do' | 'get-involved' | 'sponsor'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuType>('none')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Track scroll position to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDrawer = () => {
    if (drawerOpen) {
      setActiveSubmenu('none')
    }
    setDrawerOpen(!drawerOpen)
  }
  const toggleLang = () => setLangOpen(!langOpen)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'pt', label: 'Português' },
  ]

  const submenus = {
    'what-we-do': {
      title: 'What We Do',
      links: [
        { label: 'Katonda Talemwa Villages', to: '/katonda-villages' },
        { label: 'Baby Katonda Talemwa', to: '/baby-katonda' },
        { label: 'Katonda Talemwa Neighbourhood', to: '#' },
        { label: 'Keep a Girl in School', to: '#' },
        { label: 'Katonda Talemwa Church', to: '#' },
      ]
    },
    'get-involved': {
      title: 'Get Involved',
      links: [
        { label: 'Donate Now', to: '/donate' },
        { label: 'Volunteer / Go', to: '#' },
        { label: 'Pray With Us', to: '#' },
        { label: 'Careers', to: '#' },
      ]
    },
    'sponsor': {
      title: 'Sponsor',
      links: [
        { label: 'Sponsor a Child', to: '/sponsor?tab=child' },
        { label: 'Sponsor a Baby', to: '/sponsor?tab=baby' },
        { label: 'Sponsor a Katonda Talemwa Mother', to: '/sponsor?tab=mother' },
        { label: 'Sponsor a Neighbourhood Mother', to: '/sponsor?tab=neighbourhood-mother' },
      ]
    }
  }

  const mainMenuItems = [
    { label: 'Home', to: '/' },
    { label: 'What We Do', submenu: 'what-we-do' as const },
    { label: "Katonda Talemwa Children's Choir", to: '#' },
    { label: 'Katonda Talemwa Tours', to: '#' },
    { label: 'Who We Are', to: '/who-we-are' },
    { label: 'Stories of Impact', to: '#' },
    { label: 'Get Involved', submenu: 'get-involved' as const },
    { label: 'Donate', to: '/donate' },
    { label: 'Sponsor', submenu: 'sponsor' as const },
    { label: 'Financials', to: '#' },
    { label: 'Katonda Talemwa Church', to: '#' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Store', to: '#' },
    { label: 'Stay Connected', to: '#' },
  ]

  const menuConfig = [
    { label: 'Home', to: '/' },
    {
      label: 'What We Do',
      submenu: [
        { label: 'Katonda Talemwa Villages', to: '/katonda-villages' },
        { label: 'Baby Katonda Talemwa', to: '/baby-katonda' },
        { label: 'Katonda Talemwa Neighbourhood', to: '#' },
        { label: 'Keep a Girl in School', to: '#' },
        { label: 'Katonda Talemwa Church', to: '#' },
      ]
    },
    {
      label: 'Sponsor',
      submenu: [
        { label: 'Sponsor a Child', to: '/sponsor?tab=child' },
        { label: 'Sponsor a Baby', to: '/sponsor?tab=baby' },
        { label: 'Sponsor a Katonda Talemwa Mother', to: '/sponsor?tab=mother' },
        { label: 'Sponsor a Neighbourhood Mother', to: '/sponsor?tab=neighbourhood-mother' },
      ]
    },
    {
      label: 'Get Involved',
      submenu: [
        { label: 'Donate Now', to: '/donate' },
        { label: 'Volunteer / Go', to: '#' },
        { label: 'Pray With Us', to: '#' },
        { label: 'Careers', to: '#' },
      ]
    },
    { label: 'Who We Are', to: '/who-we-are' },
    { label: 'Contact Us', to: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-outline-variant/30 shadow-md h-20'
          : 'bg-surface/90 backdrop-blur-sm border-outline-variant/15 h-24'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-4 md:px-margin-desktop max-w-(--spacing-container-max) mx-auto h-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity shrink-0"
        >
          <img
            src={logo}
            alt="Katonda Talemwa Ministries"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-12' : 'h-16'
            }`}
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 font-body font-light text-sm tracking-widest uppercase h-full">
          {menuConfig.map((item) => {
            if (item.submenu) {
              const isSubmenuActive = item.submenu.some(sub => location.pathname === sub.to || location.search.includes(sub.to.split('?')[1] || '---'))
              return (
                <div key={item.label} className="relative group flex items-center h-full">
                  <button
                    className={`flex items-center gap-1.5 py-2 transition-colors duration-300 cursor-pointer text-sm uppercase tracking-widest ${
                      isSubmenuActive ? 'text-primary font-normal' : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <span>{item.label}</span>
                    <MaterialIcon name="expand_more" className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-12px)] w-60 bg-surface border border-outline-variant/30 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 rounded-lg">
                    {item.submenu.map((sub) => {
                      const isSubActive = location.pathname === sub.to || (location.pathname + location.search) === sub.to
                      return (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className={`block px-5 py-2.5 text-xs tracking-wider transition-colors hover:bg-primary/5 hover:text-primary ${
                            isSubActive ? 'text-primary font-bold bg-primary/5' : 'text-on-surface-variant font-normal'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            } else {
              const isActive = location.pathname === item.to
              return (
                <Link
                  key={item.label}
                  to={item.to || '#'}
                  className={`relative flex items-center h-full transition-colors duration-300 group cursor-pointer text-sm uppercase tracking-widest ${
                    isActive ? 'text-primary font-normal' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            }
          })}
        </div>

        {/* Action Buttons & Navigation */}
        <div className="flex items-center gap-4">
          <Link
            to="/sponsor"
            className="bg-vibrant-green text-pure-white px-6 py-2.5 font-headline text-label-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all hidden sm:block font-extrabold border border-vibrant-green"
          >
            Sponsor
          </Link>

          {/* Animated Hamburger Menu (Visible on Mobile/Tablet) */}
          <button
            onClick={toggleDrawer}
            className="relative w-10 h-10 flex flex-col justify-center items-center group lg:hidden z-[60] cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 right-0 h-0.5 transition-all duration-300 rounded-full ${
                  drawerOpen ? 'top-2 bg-pure-white rotate-45' : 'top-0 bg-vibrant-green'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 transition-all duration-300 rounded-full ${
                  drawerOpen ? 'top-2 bg-pure-white opacity-0' : 'top-2 bg-action-yellow'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 transition-all duration-300 rounded-full ${
                  drawerOpen ? 'top-2 bg-pure-white -rotate-45' : 'top-4 bg-vibrant-green'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Navigation Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-deep-black/60 z-50 transition-opacity duration-300 backdrop-blur-sm"
          onClick={toggleDrawer}
        />
      )}

      {/* Slide-out Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-[#009E3D] z-55 shadow-2xl transition-transform duration-300 flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <Link to="/" onClick={toggleDrawer} className="hover:opacity-90 transition-opacity">
            <img
              src={logo}
              alt="Katonda Talemwa Ministries"
              className="h-10 w-auto object-contain"
            />
          </Link>
          {/* Hamburger button acts as the close toggle from the main header (z-60 floating) */}
          <div className="w-10 h-10" /> 
        </div>

        {/* Drawer Links Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">
          {activeSubmenu === 'none' ? (
            /* Main List */
            <div className="flex flex-col space-y-4">
              {mainMenuItems.map((item) => {
                if (item.submenu) {
                  return (
                    <button
                      key={item.label}
                      onClick={() => setActiveSubmenu(item.submenu)}
                      className="flex justify-between items-center w-full py-2.5 text-pure-white hover:text-action-yellow text-md font-headline font-black uppercase tracking-wider transition-colors text-left"
                    >
                      <span>{item.label}</span>
                      <MaterialIcon name="chevron_right" className="text-pure-white/70" />
                    </button>
                  )
                } else {
                  return (
                    <Link
                      key={item.label}
                      to={item.to || '#'}
                      onClick={toggleDrawer}
                      className="block py-2.5 text-pure-white hover:text-action-yellow text-md font-headline font-black uppercase tracking-wider transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  )
                }
              })}
            </div>
          ) : (
            /* Submenu List */
            <div className="space-y-6">
              <button
                onClick={() => setActiveSubmenu('none')}
                className="flex items-center gap-2 text-pure-white hover:text-action-yellow font-headline text-sm font-black uppercase tracking-wider py-2 transition-colors"
              >
                <MaterialIcon name="arrow_back" className="text-lg" />
                <span>Back to Menu</span>
              </button>

              <div className="h-px bg-pure-white/20 w-full mb-6" />

              <h3 className="text-action-yellow font-headline text-xl font-black uppercase tracking-widest mb-6">
                {submenus[activeSubmenu].title}
              </h3>

              <div className="flex flex-col space-y-4">
                {submenus[activeSubmenu].links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={toggleDrawer}
                    className="block py-2.5 text-pure-white hover:text-action-yellow text-md font-headline font-black uppercase tracking-wider transition-colors text-left"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Socials */}
        <div className="p-8 border-t border-pure-white/10 bg-[#008c36] flex flex-col items-center gap-5">
          {/* Socials */}
          <div className="flex gap-6 justify-center items-center">
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current text-pure-white hover:text-action-yellow transition-all hover:scale-110" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current text-pure-white hover:text-action-yellow transition-all hover:scale-110" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current text-pure-white hover:text-action-yellow transition-all hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg className="w-5 h-5 fill-current text-pure-white hover:text-action-yellow transition-all hover:scale-110" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* Vimeo */}
            <a href="#" aria-label="Vimeo">
              <svg className="w-5 h-5 fill-current text-pure-white hover:text-action-yellow transition-all hover:scale-110" viewBox="0 0 24 24">
                <path d="M22.396 7.158c-.093 2.026-1.507 4.8-4.245 8.322-2.837 3.659-5.234 5.489-7.195 5.489-1.214 0-2.241-1.12-3.08-3.359L5.034 7.69C4.381 5.308 3.633 4.116 2.793 4.116c-.187 0-.84.392-1.961 1.177L0 4.254c1.157-1.018 2.298-2.036 3.428-3.055C4.98.056 6.069-.074 6.697.073c1.476.346 2.382 2.32 2.718 4.919.373 2.877.625 4.643.757 5.297.439 2.233.916 3.35 1.429 3.35.393 0 1.009-.616 1.841-1.85 1.635-2.429 1.69-4.102 1.644-5.021-.075-1.505-.935-2.257-2.587-2.257-.757 0-1.532.178-2.327.533 1.55-5.064 4.512-7.596 8.883-7.596 3.223 0 4.708 2.149 4.461 6.452z"/>
              </svg>
            </a>
          </div>
          <span className="text-xxs text-pure-white/70 font-semibold tracking-wider">
            © 2026 Katonda Talemwa Ministries
          </span>
        </div>
      </div>
    </header>
  )
}
