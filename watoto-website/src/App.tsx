import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import WatotoVillagesPage from './pages/WatotoVillagesPage'
import BabyWatotoPage from './pages/BabyWatotoPage'
import SponsorPage from './pages/SponsorPage'
import WhoWeArePage from './pages/WhoWeArePage'
import ContactPage from './pages/ContactPage'
import DonatePage from './pages/DonatePage'
import KeepGirlInSchoolPage from './pages/KeepGirlInSchoolPage'
import ChurchPage from './pages/ChurchPage'
import VolunteerPage from './pages/VolunteerPage'
import ExchangeProgramPage from './pages/ExchangeProgramPage'
import PrayWithUsPage from './pages/PrayWithUsPage'
import CareersPage from './pages/CareersPage'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/katonda-villages" element={<WatotoVillagesPage />} />
        <Route path="/emmanuel-baby-home" element={<BabyWatotoPage />} />
        <Route path="/baby-katonda" element={<Navigate to="/emmanuel-baby-home" replace />} />
        <Route path="/keep-a-girl" element={<KeepGirlInSchoolPage />} />
        <Route path="/katonda-church" element={<ChurchPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/exchange-program" element={<ExchangeProgramPage />} />
        <Route path="/pray-with-us" element={<PrayWithUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}
