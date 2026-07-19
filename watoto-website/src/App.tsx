import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import WatotoVillagesPage from './pages/WatotoVillagesPage'
import BabyWatotoPage from './pages/BabyWatotoPage'
import SponsorPage from './pages/SponsorPage'
import WhoWeArePage from './pages/WhoWeArePage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/katonda-villages" element={<WatotoVillagesPage />} />
        <Route path="/baby-katonda" element={<BabyWatotoPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}
