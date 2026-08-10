import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaterialIcon from './ui/MaterialIcon'
import logo from '../assets/logo.png'

interface SubmenuItem {
  label: string
  to: string
  icon: string
  desc: string
}

interface MenuItem {
  label: string
  to?: string
  submenu?: SubmenuItem[]
}

const menuConfig: MenuItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'What We Do',
    submenu: [
      { label: 'Katonda Talemwa Ministries', to: '/katonda-villages', icon: 'holiday_village', desc: 'Family-style home care' },
      { label: "Emmanuel Baby's Home", to: '/emmanuel-baby-home', icon: 'child_friendly', desc: 'Newborn rescue & shelter' },
      { label: 'The Esther Mission', to: '/keep-a-girl', icon: 'female', desc: 'Keep a girl in school' },
      { label: 'Katonda Talemwa Church', to: '/katonda-church', icon: 'church', desc: 'Community & spiritual life' },
      { label: 'Photo Gallery', to: '/gallery', icon: 'photo_library', desc: 'Moments of hope & transformation' },
    ]
  },
  {
    label: 'Sponsor',
    submenu: [
      { label: 'Sponsor a Child', to: '/sponsor?tab=child', icon: 'child_care', desc: 'Education & healthcare support' },
      { label: 'Sponsor a Baby', to: '/emmanuel-baby-home', icon: 'baby_changing_station', desc: 'Emergency nutrition & care' },
    ]
  },
  {
    label: 'Get Involved',
    submenu: [
      { label: 'Donate Now', to: '/donate', icon: 'volunteer_activism', desc: 'Immediate financial support' },
      { label: 'Volunteer / Go', to: '/volunteer', icon: 'flight_takeoff', desc: 'Volunteer opportunities' },
      { label: 'Exchange Program', to: '/exchange-program', icon: 'public', desc: 'Mission trips & cultural exchange' },
      { label: 'Pray With Us', to: '/pray-with-us', icon: 'brightness_high', desc: 'Spiritual intercession & updates' },
      { label: 'Careers', to: '/careers', icon: 'work', desc: 'Join our team & make impact' },
    ]
  },
  { label: 'Who We Are', to: '/who-we-are' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
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
      setOpenSubmenus({})
    }
    setDrawerOpen(!drawerOpen)
  }

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

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
          className="flex items-center hover:opacity-90 transition-opacity shrink-0 border-none outline-none focus:outline-none focus:ring-0"
        >
          <img
            src={logo}
            alt="Katonda Talemwa Ministries"
            className={`w-auto object-contain transition-all duration-300 border-none outline-none focus:outline-none focus:ring-0 select-none ${
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
            className={`relative w-11 h-11 flex flex-col justify-center items-center group lg:hidden z-[60] cursor-pointer rounded-full transition-all duration-300 ${
              drawerOpen ? 'bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]' : ''
            }`}
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
        className={`fixed top-0 right-0 h-screen w-full sm:w-[440px] bg-[#043417] z-55 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="relative flex justify-between items-center px-8 pt-8 pb-6 border-b border-white/10 shrink-0">
          <Link to="/" onClick={toggleDrawer} className="hover:opacity-90 transition-opacity">
            <img
              src={logo}
              alt="Katonda Talemwa Ministries"
              className="h-12 w-auto object-contain select-none filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
            />
          </Link>
          <div className="w-11 h-11" /> 
        </div>

        {/* Drawer Links Content */}
        <div className="relative flex-1 overflow-y-auto px-8 py-6 custom-scrollbar space-y-6">
          
          {/* Call to Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <Link
              to="/donate"
              onClick={toggleDrawer}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-[#043417] font-headline text-xs font-bold uppercase tracking-wider hover:bg-white/95 active:scale-95 transition-all shadow-md"
            >
              <MaterialIcon name="volunteer_activism" className="text-sm" />
              Donate
            </Link>
            <Link
              to="/sponsor"
              onClick={toggleDrawer}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-action-yellow text-deep-black font-headline text-xs font-bold uppercase tracking-wider hover:bg-action-yellow/90 active:scale-95 transition-all shadow-md"
            >
              <MaterialIcon name="child_care" className="text-sm" />
              Sponsor
            </Link>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Unified Navigation Items */}
          <div className="flex flex-col gap-1">
            {menuConfig.map((item, index) => {
              const itemStyle = {
                animationDelay: drawerOpen ? `${(index + 1) * 50}ms` : '0ms'
              }

              if (item.submenu) {
                const isExpanded = !!openSubmenus[item.label]

                return (
                  <div
                    key={item.label}
                    style={itemStyle}
                    className={`w-full border-b border-white/10 ${
                      drawerOpen ? 'animate-nav-item' : 'opacity-0'
                    }`}
                  >
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center justify-between w-full py-4 text-left cursor-pointer group/sec"
                    >
                      <span className="text-sm font-headline font-bold uppercase tracking-wider text-white group-hover/sec:text-action-yellow transition-colors duration-300">
                        {item.label}
                      </span>
                      <MaterialIcon
                        name="expand_more"
                        className={`text-white/60 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-action-yellow' : 'group-hover/sec:text-white/80'
                        }`}
                      />
                    </button>

                    {/* Expanded submenu links */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-1 pb-4">
                          {item.submenu.map((sub) => {
                            const isSubLinkActive = location.pathname === sub.to || (location.pathname + location.search) === sub.to
                            return (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={toggleDrawer}
                                className="flex items-center gap-3.5 py-3 hover:pl-2 transition-all duration-200 group/sublink text-left"
                              >
                                <MaterialIcon name={sub.icon} className={`text-lg transition-colors ${
                                  isSubLinkActive ? 'text-action-yellow' : 'text-white/60 group-hover/sublink:text-action-yellow'
                                }`} />
                                <div className="flex flex-col">
                                  <span className={`text-xs font-headline font-bold tracking-wider transition-colors duration-200 ${
                                    isSubLinkActive ? 'text-action-yellow' : 'text-white group-hover/sublink:text-action-yellow'
                                  }`}>
                                    {sub.label}
                                  </span>
                                  <span className="text-[10px] text-white/50 leading-none mt-1 font-body font-light">
                                    {sub.desc}
                                  </span>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                const isLinkActive = location.pathname === item.to
                return (
                  <div
                    key={item.label}
                    style={itemStyle}
                    className={`w-full border-b border-white/10 ${
                      drawerOpen ? 'animate-nav-item' : 'opacity-0'
                    }`}
                  >
                    <Link
                      to={item.to || '#'}
                      onClick={toggleDrawer}
                      className={`block py-4 text-sm font-headline font-bold uppercase tracking-wider transition-colors duration-200 hover:text-action-yellow text-left ${
                        isLinkActive ? 'text-action-yellow' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                )
              }
            })}
          </div>
        </div>

        {/* Drawer Footer Socials */}
        <div className="relative p-8 border-t border-white/10 bg-[#032912] flex flex-col items-center gap-4 shrink-0 z-10">
          <span className="font-cursive text-action-yellow text-lg tracking-wide opacity-90 select-none">
            Restoring hope, building families.
          </span>
          <div className="flex gap-4 justify-center items-center">
            {[
              {
                label: 'Facebook',
                href: '#',
                path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'
              },
              {
                label: 'Twitter',
                href: '#',
                path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
              },
              {
                label: 'Instagram',
                href: '#',
                path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 .013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
              },
              {
                label: 'YouTube',
                href: '#',
                path: 'M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.06] text-white/70 hover:text-action-yellow hover:bg-white/[0.08] hover:border-action-yellow/30 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
          <span className="text-[10px] text-white/40 font-headline font-semibold tracking-wider">
            © 2026 Katonda Talemwa Ministries
          </span>
        </div>
      </div>
    </header>
  )
}
