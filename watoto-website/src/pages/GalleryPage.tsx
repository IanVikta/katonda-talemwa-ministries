import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import { UnifiedFooter } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import SEO from '../components/SEO'

const photos: string[] = [
  '/images/villages-family.jpg',
  '/images/baby 2.jpg',
  '/images/girl.jpg',
  '/images/choir.jpg',
  '/images/mother.jpg',
  '/images/babies.jpg',
  '/images/aisha.jpg',
  '/images/church-1.jpg',
  '/images/hope.jpg',
  '/images/dignity.jpg',
  '/images/forgotten.jpg',
  '/images/baby.jpg',
  '/images/hero -1.jpg',
  '/images/DSC_0049.jpg',
  '/images/DSC_0578.jpg',
  '/images/DSC_1010.jpg',
  '/images/DSC_3646.jpg',
  '/images/DSC_4623.jpg',
  '/images/DSC_5881.jpg',
  '/images/DSC_6451.jpg',
  '/images/DSC_7399.jpg',
  '/images/DSC_7467.jpg',
  '/images/DSC_8368.jpg',
  '/images/DSC_8377.jpg',
  '/images/DSC_8650.jpg',
  '/images/DSC_8874_Fix.jpg',
  '/images/IMG_0666.jpg',
  '/images/IMG_0671.jpg',
  '/images/IMG_0672.jpg',
  '/images/IMG_0695+(1).jpg',
  '/images/IMG_0808.jpg',
  '/images/IMG_0810.jpg',
  '/images/IMG_0811.jpg',
  '/images/IMG_1748.jpg',
  '/images/IMG_1830.jpg',
  '/images/IMG_6036.jpg',
  '/images/IMG_6039.jpg',
  '/images/IMG_6041.jpg',
  '/images/IMG_6045.jpg',
  '/images/IMG_6508.jpg',
  '/images/IMG_7949.jpg',
  '/images/IMG_7960.jpg',
  '/images/IMG_7961.jpg',
  '/images/IMG_8501.jpg',
  '/images/dsc4701-945133.jpg',
  '/images/dsc4785-945137.jpg',
  '/images/dsc4823-2-945142.jpg',
  '/images/dsc5258-945153.jpg',
  '/images/dsc6015-945170.jpg',
  '/images/dsc6113-945174.jpg',
  '/images/dsc6131-945176.jpg',
  '/images/dsc6134-945177.jpg',
  '/images/dsc6146-945178.jpg',
  '/images/dsc6474-945180.jpg',
  '/images/dsc6495-945183.jpg',
  '/images/dsc6508-945184.jpg',
  '/images/dsc6705-945193.jpg',
  '/images/dsc6750-945194.jpg',
  '/images/dsc6844-945196.jpg',
  '/images/dsc6858-945197.jpg',
  '/images/dsc6882-945201.jpg',
  '/images/dsc6928-945336.jpg',
  '/images/dsc7148-945210.jpg',
  '/images/dsc7173-945212.jpg',
  '/images/dsc7200-945214.jpg',
  '/images/dsc7280-945218.jpg',
  '/images/dsc7302-945344.jpg',
  '/images/dsc7374-945221.jpg',
  '/images/dsc7378-945222.jpg',
  '/images/dsc7387-945223.jpg',
  '/images/dsc7533-945227.jpg',
  '/images/dsc7555-945228.jpg',
  '/images/dsc7579-945230.jpg',
  '/images/dsc7589-945232.jpg',
  '/images/dsc7620-945237.jpg',
  '/images/dsc7624-945240.jpg',
  '/images/dsc7741-945243.jpg',
  '/images/dsc7744-945244.jpg',
  '/images/dsc7880-945249.jpg',
  '/images/dsc7956-945253.jpg',
  '/images/dsc8046-945260.jpg',
  '/images/dsc8087-945261.jpg',
  '/images/dsc8132-945263.jpg',
  '/images/dsc8248-945345.jpg',
  '/images/dsc8276-945272.jpg',
  '/images/dsc8353-945276.jpg',
  '/images/dsc8358-945277.jpg',
  '/images/dsc8380-945281.jpg',
  '/images/dsc8704-945303.jpg',
  '/images/dsc8712-945304.jpg',
  '/images/dsc8722-945305.jpg',
]

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 40 })
    document.title = 'Gallery | Katonda Talemwa Ministries'
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0))
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  return (
    <div className="bg-[#0b0f17] text-pure-white selection:bg-action-yellow selection:text-deep-black overflow-x-hidden font-body page-enter min-h-screen flex flex-col">
      <SEO
        title="Photo & Video Gallery | Moments of Joy & Hope in Uganda"
        description="Browse photos and videos of Katonda Talemwa Ministries in Uganda. See our children, village family homes, schools, clinic, and community impact in action."
        canonicalPath="/gallery"
        keywords="Katonda Talemwa photos, Uganda orphanage pictures, charity gallery Africa, Emmanuel Baby Home photos"
      />
      <Navbar />

      <main className="pt-20 grow">
        {/* ── HERO BANNER ── */}
        <section className="relative bg-deep-black text-pure-white py-16 sm:py-20 border-b border-pure-white/10">
          <div className="max-w-(--spacing-container-max) mx-auto px-4 md:px-margin-desktop text-center space-y-3">
            <span
              data-aos="fade-down"
              className="text-[10px] uppercase font-extrabold tracking-widest text-action-yellow block"
            >
              Moments &amp; Memories
            </span>
            <h1
              data-aos="fade-up"
              className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-pure-white"
            >
              Photo <span className="text-vibrant-green">Gallery</span>
            </h1>
            <div className="w-16 h-1 bg-action-yellow mx-auto" />
          </div>
        </section>

        {/* ── PURE PHOTO GRID (NO TEXT / NO CATEGORIES) ── */}
        <section className="py-10 sm:py-14 max-w-(--spacing-container-max) mx-auto px-3 sm:px-6 md:px-margin-desktop">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
            {photos.map((imgSrc, index) => (
              <div
                key={imgSrc + index}
                data-aos="fade-up"
                data-aos-delay={Math.min((index % 5) * 50, 200)}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square bg-[#131926] overflow-hidden cursor-pointer rounded-none border border-pure-white/5 hover:border-action-yellow transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <img
                  src={imgSrc}
                  alt={`Gallery photo ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Subtle hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-deep-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-action-yellow text-deep-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <MaterialIcon name="zoom_in" className="text-xl font-bold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── FULLSCREEN LIGHTBOX (CLEAN - IMAGE ONLY) ── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 select-none animate-[fadeIn_0.15s_ease-out]"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 bg-pure-white/10 hover:bg-action-yellow hover:text-deep-black text-pure-white flex items-center justify-center transition-colors cursor-pointer border border-pure-white/20"
            title="Close (Esc)"
          >
            <MaterialIcon name="close" className="text-2xl" />
          </button>

          {/* Counter pill */}
          <div className="absolute top-5 left-5 z-50 px-3 py-1 bg-pure-white/10 backdrop-blur-sm text-pure-white text-xs font-headline font-bold uppercase tracking-widest border border-pure-white/20">
            {selectedIndex + 1} / {photos.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1))
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-deep-black/80 hover:bg-action-yellow hover:text-deep-black text-pure-white flex items-center justify-center transition-all cursor-pointer border border-pure-white/20"
            title="Previous (Left Arrow)"
          >
            <MaterialIcon name="chevron_left" className="text-3xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0))
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-deep-black/80 hover:bg-action-yellow hover:text-deep-black text-pure-white flex items-center justify-center transition-all cursor-pointer border border-pure-white/20"
            title="Next (Right Arrow)"
          >
            <MaterialIcon name="chevron_right" className="text-3xl" />
          </button>

          {/* Main Full-Size Image */}
          <div
            className="relative max-w-6xl max-h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedIndex]}
              alt={`Full view ${selectedIndex + 1}`}
              className="max-w-full max-h-[88vh] object-contain shadow-2xl border border-pure-white/10"
            />
          </div>
        </div>
      )}

      <UnifiedFooter />
    </div>
  )
}
