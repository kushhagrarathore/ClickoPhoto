import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  Camera, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  Zap,
  Search,
  MapPin,
  Calendar
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import AnimatedDrone from '@/components/fx/AnimatedDrone'
import CameraWidget from '@/components/ui/CameraWidget'

const LandingPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  // Typewriter effect for headline
  const fullHeadline = 'Find Your Perfect Photography & Drone Partner'
  const [typed, setTyped] = useState('')
  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(fullHeadline.slice(0, i + 1))
      i++
      if (i >= fullHeadline.length) clearInterval(t)
    }, 25)
    return () => clearInterval(t)
  }, [])

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d } })
  }
  const hoverCard = {
    rest: { y: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' },
    hover: { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.25)', transition: { type: 'spring', stiffness: 300, damping: 20 } }
  }

  const handleBrowseServices = () => {
    if (!user) {
      navigate('/auth')
    } else {
      navigate('/services')
    }
  }

  const features = [
    {
      icon: Search,
      title: 'Easy Discovery',
      description: 'Find the perfect photographer or drone operator with our advanced search and filtering system.'
    },
    {
      icon: Star,
      title: 'Verified Professionals',
      description: 'All hosts are verified professionals with reviews and ratings from real customers.'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book services instantly with secure payment processing and real-time availability.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of photography enthusiasts and professional service providers.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We ensure high-quality services with our satisfaction guarantee and support system.'
    },
    {
      icon: Camera,
      title: 'Professional Results',
      description: 'Get stunning photos and videos from experienced photographers and drone operators.'
    }
  ]

  const stats = [
    { value: '500+', label: 'Professional Hosts', icon: Users },
    { value: '10K+', label: 'Completed Bookings', icon: CheckCircle },
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '50+', label: 'Cities Covered', icon: MapPin },
  ]

  // Showcase flash effect
  const showcaseRef = useRef(null)
  const inViewShowcase = useInView(showcaseRef, { once: true, margin: '-20% 0px' })
  const audioRef = useRef(null)
  useEffect(() => {
    if (inViewShowcase && audioRef.current) {
      try { audioRef.current.currentTime = 0; audioRef.current.play().catch(() => {}) } catch {}
    }
  }, [inViewShowcase])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Cinematic Animated Gradient + Bokeh + Subtle Video Loop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-[pulse_8s_ease-in-out_infinite] opacity-80" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0, rgba(0,0,0,0) 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 0, rgba(0,0,0,0) 45%)' }} />
        <div className="absolute inset-0 mix-blend-screen opacity-30" style={{ background: 'radial-gradient(ellipse at top, rgba(255,200,150,0.2), transparent 60%), radial-gradient(ellipse at center, rgba(150,200,255,0.15), transparent 60%)' }} />
        <video className="absolute inset-0 w-full h-full object-cover opacity-10" autoPlay muted loop playsInline>
          <source src="https://cdn.coverr.co/videos/coverr-clouds-over-the-mountains-9442/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero with Typewriter + Subtle Animated Drone (behind content) */}
      <section className="relative overflow-hidden">
        <AnimatedDrone className="top-10 left-0 md:scale-100 scale-75" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2"
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-sky-300">
                {typed}
                <span className="inline-block w-[1ch] ml-1 bg-white/80" style={{ height: '1em', transform: 'translateY(0.2em)' }} />
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book cinematic drone shoots, wedding photography, and premium videography with verified pros.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <button 
                onClick={handleBrowseServices}
                className="px-8 py-3 rounded-full bg-amber-300 text-black font-semibold hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] transition-all hover:-translate-y-0.5"
              >
                Browse Services
              </button>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/auth" className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors">Become a Host</Link>
              </motion.div>
            </motion.div>

            {/* Interactive Camera Widget */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <CameraWidget />
            </motion.div>
          </div>
        </div>

        {/* Floating bokeh lights */}
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute rounded-full bg-white/20 blur-xl"
            style={{ width: 18 + (i % 4) * 8, height: 18 + (i % 4) * 8, left: `${(i * 83) % 100}%`, top: `${(i * 37) % 100}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: (i % 7) * 0.3 }}
          />
        ))}
      </section>

      {/* Curved Divider */}
      <div className="relative">
        <svg className="w-full h-20 text-black" preserveAspectRatio="none" viewBox="0 0 1440 84" fill="currentColor"><path d="M0,0 C240,72 480,108 720,108 C960,108 1200,72 1440,0 L1440,84 L0,84 Z"></path></svg>
      </div>

      {/* Gallery Showcase with Camera Flash */}
      <section ref={showcaseRef} className="relative bg-white text-gray-900 py-20 overflow-hidden">
        {/* Flash overlay */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={inViewShowcase ? { opacity: [0, 0.9, 0] } : {}}
          transition={{ duration: 0.5, times: [0, 0.15, 1] }}
          style={{ mixBlendMode: 'screen' }}
        />
        {/* Center camera icon */}
        <motion.div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inViewShowcase ? { scale: [0.95, 1.05, 1], opacity: [0.2, 0.6, 0.2] } : {}}
          transition={{ duration: 0.9 }}
        >
          <div className="rounded-full p-4 bg-gradient-to-tr from-gray-100 to-white shadow-inner">
            <Camera className="w-10 h-10 text-gray-700" />
          </div>
        </motion.div>
        <audio ref={audioRef} preload="auto" src="https://assets.mixkit.co/sfx/download/mixkit-camera-shutter-click-1133.wav" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1200&auto=format&fit=crop"].map((src, i) => (
              <motion.div key={i} className="relative rounded-2xl overflow-hidden shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ scale: 1.025 }}>
                <img src={src} alt="gallery" className="w-full h-64 object-cover" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" initial={{ opacity: 0.5 }} whileHover={{ opacity: 0.7 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards with Hover Glow */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-3xl text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Explore Services</h2>
            <p className="text-lg text-gray-600">Drone Shoots • Videography • Wedding Photography</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Drone Shoots', desc: 'Aerial perspectives with cinematic motion.', icon: Zap },
              { title: 'Videography', desc: 'Stories crafted with light, motion and sound.', icon: Camera },
              { title: 'Wedding Photography', desc: 'Timeless moments with editorial flair.', icon: Star },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={hoverCard}
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                className="group relative rounded-2xl p-8 bg-white shadow-lg border border-gray-100"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-amber-200/40 to-sky-200/40" />
                <div className="relative">
                  <card.icon className="w-10 h-10 text-gray-900 mb-5" />
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.desc}</p>
                  <motion.button onClick={handleBrowseServices} whileHover={{ x: 4 }} className="mt-6 inline-flex items-center gap-2 text-amber-600 font-medium">
                    Explore <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / Portfolio (Masonry-like) */}
      <section className="bg-white text-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Showcase</motion.h2>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
            {[
              {src:'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop', name:'Aerial Vista'},
              {src:'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1200&auto=format&fit=crop', name:'Golden Hour'},
              {src:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop', name:'City Glide'},
              {src:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop', name:'Mountain Pass'},
              {src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop', name:'Ridge Line'},
              {src:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop', name:'Sea Breeze'},
              {src:'https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1200&auto=format&fit=crop', name:'Dusk Waves'},
              {src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', name:'Aurora Sky'},
              {src:'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200&auto=format&fit=crop', name:'Desert Trail'}
            ].map((item, i)=> (
              <motion.div key={i} className="relative overflow-hidden rounded-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.05 }} whileHover={{ scale: 1.01 }}>
                <img src={item.src} alt="portfolio" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors" />
                <div className="absolute bottom-3 left-3 text-white/90 text-sm font-medium">{item.name}</div>
              </motion.div>
            ))}
          </div></div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>How It Works</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {icon: Search, title:'Browse Services', desc:'Find the perfect professional with filters for style, budget, and availability.'},
              {icon: Calendar, title:'Book & Pay', desc:'Reserve your slot with secure payments and instant confirmation.'},
              {icon: Camera, title:'Get Your Shoot', desc:'Enjoy your session while we capture cinematic results.'},
            ].map((s, i)=>(
              <motion.div key={s.title} className="bg-white rounded-2xl p-8 shadow hover:shadow-lg border border-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }}>
                <s.icon className="w-10 h-10 text-gray-900 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (simple carousel) */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What Clients Say</motion.h2>
          <div className="space-y-8">
            {[
              { quote: 'Booked a drone for our wedding – stunning results! We loved every shot.', name: 'Aarav & Aanya' },
              { quote: 'The real estate video boosted our listing traffic by 3x. Highly recommended.', name: 'Arjun (Realtor)' },
              { quote: 'Professional, punctual, and cinematic quality. Exactly what we needed.', name: 'Neha (Event Planner)' },
            ].map((t, i)=> (
              <motion.blockquote key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }}>
                <p className="text-lg text-gray-700">“{t.quote}”</p>
                <div className="mt-4 font-semibold text-gray-900">{t.name}</div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-6">Trusted by</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center opacity-80">
            {['EventCo','RealtorPro','SkyWorks','WedElite','StudioMax'].map((logo)=> (
              <motion.div key={logo} className="py-4 px-6 rounded-xl border border-gray-200 bg-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-gray-700 font-semibold text-sm">{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.h3 className="text-2xl md:text-3xl font-bold mb-4" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Get early access to exclusive offers</motion.h3>
          <p className="text-gray-600 mb-6">Photographers and drone services—be the first to know about promos and features.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="Enter your email" className="input-field !bg-gray-50 !border-gray-200 w-full sm:w-80" />
            <button type="button" className="btn-primary px-6">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Coverage Map (placeholder) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3 className="text-3xl font-bold mb-8 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>We Cover These Locations</motion.h3>
        
          <div className="relative rounded-3xl overflow-hidden shadow border border-gray-200">
            <img src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1600&auto=format&fit=crop" alt="map" className="w-full h-96 object-cover" />
            {[15,35,55,72].map((left,i)=> (
              <motion.span key={i} className="absolute w-3 h-3 bg-amber-400 rounded-full shadow" style={{ left: `${left}%`, top: `${30 + i*12}%` }} animate={{ scale: [1,1.6,1], opacity: [0.8,1,0.8] }} transition={{ duration: 2.5, repeat: Infinity, delay: i*0.3 }} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3 className="text-3xl md:text-4xl font-extrabold mb-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Hire the Best Drone & Photography Experts Today</motion.h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleBrowseServices} className="px-8 py-3 rounded-full bg-amber-300 text-black font-semibold hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] transition-all">Browse Services</button>
            <Link to="/auth" className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors">Become a Host</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage


