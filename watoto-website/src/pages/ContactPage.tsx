import { useState } from 'react'
import Navbar from '../components/Navbar'
import { FooterHome } from '../components/Footer'
import MaterialIcon from '../components/ui/MaterialIcon'
import { IMAGES } from '../data/content'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API request
    setTimeout(() => {
      setLoading(false)
      setFormSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-action-yellow selection:text-deep-black overflow-x-hidden page-enter">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-deep-black text-pure-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-40 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${IMAGES.heroHome}')` }}
            />
          </div>
          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-6 md:px-margin-desktop text-center space-y-6">
            <span className="text-action-yellow font-bold text-label-bold uppercase tracking-widest block animate-pulse">
              Get in Touch
            </span>
            <h1 className="font-headline text-headline-xl mb-4 font-black uppercase leading-tight tracking-wide">
              Contact <span className="text-action-yellow">Us</span>
            </h1>
            <p className="max-w-2xl mx-auto text-body-lg opacity-90 font-light leading-relaxed">
              Have questions or want to partner with us? We'd love to hear from you. Reach out and join us in bringing hope and healing.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-(--spacing-container-max) mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Card 1: Phone */}
              <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-pure-white transition-all duration-300">
                  <MaterialIcon name="phone" className="text-2xl" />
                </div>
                <h3 className="font-headline text-lg font-black uppercase text-deep-black">Call Us</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Call our office in Uganda for support, inquiries, or details about our programs.
                </p>
                <div className="space-y-1 pt-2">
                  <a href="tel:+256776883749" className="block text-base font-bold text-secondary hover:text-primary transition-colors">
                    +256 776 883 749
                  </a>
                  <a href="tel:+256708344930" className="block text-base font-bold text-secondary hover:text-primary transition-colors">
                    +256 708 344 930
                  </a>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto text-vibrant-green group-hover:bg-vibrant-green group-hover:text-pure-white transition-all duration-300">
                  <MaterialIcon name="email" className="text-2xl" />
                </div>
                <h3 className="font-headline text-lg font-black uppercase text-deep-black">Email Us</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Drop us an email and our team will get back to you as soon as possible.
                </p>
                <div className="space-y-1 pt-2">
                  <a href="mailto:pcm.uganda@gmail.com" className="block text-base font-bold text-secondary hover:text-primary transition-colors break-all">
                    pcm.uganda@gmail.com
                  </a>
                  <a href="mailto:emmynyanzi2018@gmail.com" className="block text-base font-bold text-secondary hover:text-primary transition-colors break-all">
                    emmynyanzi2018@gmail.com
                  </a>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 text-center space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-action-yellow/20 rounded-full flex items-center justify-center mx-auto text-on-secondary-fixed-variant group-hover:bg-action-yellow group-hover:text-deep-black transition-all duration-300">
                  <MaterialIcon name="place" className="text-2xl" />
                </div>
                <h3 className="font-headline text-lg font-black uppercase text-deep-black">Visit Us</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Our main offices are located in Mbarara. Feel free to reach out before visiting.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-semibold text-deep-black">
                    Nkokojeru, Kamukuzi Kakiika
                  </p>
                  <p className="text-sm font-semibold text-deep-black">
                    P. O. Box 1690 Mbarara, Uganda
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url('${IMAGES.villages}')` }}
        >
          {/* Dark Overlay for high card legibility */}
          <div className="absolute inset-0 bg-deep-black/50 z-0" />

          <div className="relative z-10 max-w-(--spacing-container-max) mx-auto px-6 md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

              {/* Form Column */}
              <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/20 rounded-2xl p-8 md:p-10 shadow-lg space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h2 className="font-headline text-2xl font-black uppercase text-deep-black tracking-wide">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Please fill out the form below and we will reach out shortly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-vibrant-green/10 border border-vibrant-green/30 rounded-xl space-y-3 text-center">
                    <div className="w-12 h-12 bg-vibrant-green text-pure-white rounded-full flex items-center justify-center mx-auto">
                      <MaterialIcon name="check" className="text-2xl font-bold" />
                    </div>
                    <h4 className="font-headline text-lg font-bold text-vibrant-green uppercase">Thank You!</h4>
                    <p className="text-sm text-on-surface-variant">
                      Your message has been sent successfully. We will review and respond to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-sm font-bold text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-sm font-bold text-deep-black uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-surface border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-deep-black outline-none transition-all placeholder-on-surface-variant/40"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-sm font-bold text-deep-black uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-surface border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-deep-black outline-none transition-all placeholder-on-surface-variant/40"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-sm font-bold text-deep-black uppercase tracking-wider">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full bg-surface border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-deep-black outline-none transition-all placeholder-on-surface-variant/40"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-sm font-bold text-deep-black uppercase tracking-wider">
                        Your Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message details here..."
                        className="w-full bg-surface border border-outline-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-lg px-4 py-3 text-sm text-deep-black outline-none transition-all placeholder-on-surface-variant/40 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      id="contact-submit-btn"
                      className="w-full bg-secondary hover:bg-secondary/95 text-pure-white font-headline text-sm font-black uppercase tracking-widest py-4 rounded-lg shadow-md active:scale-[0.98] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-pure-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <MaterialIcon name="send" className="text-sm" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>

              {/* Map Column Card */}
              <div className="lg:col-span-6 bg-surface-container-low border border-outline-variant/20 rounded-2xl p-8 md:p-10 shadow-lg space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h2 className="font-headline text-2xl font-black uppercase text-deep-black tracking-wide">
                    Our Location
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Find us on the map or get driving directions to our office in Mbarara, Uganda.
                  </p>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-md h-[280px] bg-surface-container-high group shrink-0">
                  <iframe
                    title="Katonda Talemwa Ministries Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.594304090553!2d30.654502199999992!3d-0.6071596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d91bbfbb456d95%3A0xa248bff70a14428d!2sParental%20Care%20Ministries%20Uganda!5e0!3m2!1sen!2sug!4v1784325144251!5m2!1sen!2sug"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Additional Office info */}
                <div className="p-4 bg-surface border border-outline-variant/30 rounded-xl flex items-start gap-3 mt-auto">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg mt-0.5">
                    <MaterialIcon name="info" className="text-lg" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-deep-black uppercase tracking-wider">Office Hours</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Monday – Friday: 8:00 AM – 5:00 PM (EAT) | Sat: 9:00 AM – 1:00 PM<br />
                      Sunday: Closed (Join us for service at Katonda Talemwa Church!)
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <FooterHome />
    </div>
  )
}
