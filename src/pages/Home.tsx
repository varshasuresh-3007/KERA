import { useState, useRef } from 'react';
import {
  ChevronDown, Ship, Anchor, ChefHat, Wifi,
  ShieldCheck, LifeBuoy, Headphones, Sparkles, Play,
  ArrowRight
} from 'lucide-react';
import TextCursorProximity from '@/components/ui/text-cursor-proximity';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [tourType, setTourType] = useState('Houseboat Cruise');
  const [destination, setDestination] = useState('Alleppey Backwaters');
  const containerRef = useRef<HTMLDivElement>(null);

  const signaturePackages = [
    {
      id: 'houseboat-cruise',
      image: '/images/houseboat-cruise.png',
      badge: '1 Night / 2 Days',
      badgeColor: 'amber',
      title: 'Houseboat Cruise',
      description: 'Experience the rhythm of the backwaters on our handcrafted luxury vessels with traditional Kerala cuisine and sunrise views.',
      targetPage: 'packages',
      params: { category: 'houseboat' }
    },
    {
      id: 'houseboat-package',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM.jpeg',
      badge: '2 Nights / 3 Days',
      badgeColor: 'green',
      title: 'Houseboat Packages',
      description: 'Relax with a complete 2-night drift. Experience village canal life, watch local farmers, and enjoy fresh backwater cuisine.',
      targetPage: 'packages',
      params: { category: 'houseboat' }
    },
    {
      id: 'houseboat-package-3n',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM.jpeg',
      badge: '3 Nights / 4 Days',
      badgeColor: 'amber',
      title: 'Extended Cruise',
      description: 'A deep-dive voyage traversing ancient heritage locations, spice routes, and agricultural backwaters of Vembanad Lake.',
      targetPage: 'packages',
      params: { category: 'houseboat' }
    },
  ];

  const whyChooseUsItems = [
    { icon: Ship, label: 'Own Boats', desc: 'Complete fleet of handcrafted luxury houseboats built to the highest standards.' },
    { icon: Anchor, label: 'Private Jetty', desc: 'Exclusive boarding from our private jetty at Punnamada Lake, Alappuzha.' },
    { icon: ChefHat, label: 'Personal Chef', desc: 'Onboard chef preparing authentic Kerala cuisine with fresh local ingredients.' },
    { icon: Wifi, label: 'Free WiFi', desc: 'Stay connected with complimentary high-speed internet throughout your cruise.' },
    { icon: ShieldCheck, label: 'Fully Insured', desc: 'Comprehensive insurance coverage for complete peace of mind on every voyage.' },
    { icon: LifeBuoy, label: 'Safety First', desc: 'International safety standards with certified crew and modern safety equipment.' },
    { icon: Headphones, label: '24/7 Service', desc: 'Round-the-clock dedicated concierge service for all your travel needs.' },
    { icon: Sparkles, label: 'Housekeeping', desc: 'Meticulous housekeeping ensuring pristine cabins and spotless living spaces.' },
  ];

  const destinations = [
    { name: 'Alleppey', image: '/images/destination-alleppey.png' },
    { name: 'Munnar', image: '/images/destination-munnar.png' },
    { name: 'Thekkady', image: '/images/destination-thekkady.png' },
    { name: 'Kochi', image: '/images/destination-kochi.png' },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      quote: 'The most serene experience we\'ve ever had. Kera Houseboats truly understands luxury. From the private chef to the sunset views, every detail was perfect.',
      name: 'Eleanor Rigby',
      location: 'United Kingdom',
    },
    {
      quote: 'An unforgettable journey through the backwaters. The crew went above and beyond to make our honeymoon truly magical. Highly recommended!',
      name: 'James Thornton',
      location: 'Australia',
    },
    {
      quote: 'World-class hospitality in an incredible setting. We\'ve traveled extensively, and this was easily one of our top experiences globally.',
      name: 'Marie Laurent',
      location: 'France',
    },
  ];

  const handleSearch = () => {
    onNavigate('booking', { tourType, destination });
  };

  return (
    <div className="animate-fade-in">
      {/* ─── HERO ─── */}
      <section
        id="hero"
        ref={containerRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-05-26 at 11.40.52 AM.jpeg"
            alt="Kerala backwaters aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <p className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-4">
            Luxury Backwater Experience
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 flex flex-col items-center select-none">
            <TextCursorProximity
              label="Drift Through"
              className="will-change-transform"
              styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.2)",
                },
                color: { 
                  from: "#FFFFFF", 
                  to: "#D4890A"
                },
              }}
              falloff="gaussian"
              radius={200}
              containerRef={containerRef}
            />
            <TextCursorProximity
              label="God's Own Country"
              className="will-change-transform mt-2"
              styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.2)",
                },
                color: { 
                  from: "#FFFFFF", 
                  to: "#D4890A"
                },
              }}
              falloff="gaussian"
              radius={200}
              containerRef={containerRef}
            />
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">
            Luxury Houseboat Cruises & Packages from Alleppey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 mt-2 mb-16 sm:mb-24">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-3 items-end">
            {/* Tour Type */}
            <div className="flex-1 w-full">
              <label className="block text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-1.5">
                Tour Type
              </label>
              <div className="relative">
                <select
                  id="tour-type-select"
                  value={tourType}
                  onChange={(e) => setTourType(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-text-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
                >
                  <option>Houseboat Cruise</option>
                  <option>Houseboat Package</option>
                  <option>Backwater Expedition</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Destination */}
            <div className="flex-1 w-full">
              <label className="block text-[10px] uppercase tracking-widest text-text-muted font-semibold mb-1.5">
                Destination
              </label>
              <div className="relative">
                <select
                  id="destination-select"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-text-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
                >
                  <option>Alleppey Backwaters</option>
                  <option>Munnar Hills</option>
                  <option>Thekkady Wildlife</option>
                  <option>Kochi Heritage</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <button
              id="search-btn"
              onClick={handleSearch}
              className="w-full sm:w-auto px-8 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg btn-transition hover:bg-accent-hover whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ─── PACKAGES PREVIEW ─── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <p className="section-label mb-2">Curated Experiences</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-dark">
                Signature Kerala Packages
              </h2>
            </div>
            <button
              onClick={() => onNavigate('packages', { category: 'houseboat' })}
              className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer"
            >
              View Houseboat Packages <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {signaturePackages.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-xl overflow-hidden card-hover shadow-sm">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${
                      pkg.badgeColor === 'amber' ? 'bg-accent' : 'bg-primary'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-semibold text-text-dark mb-2">{pkg.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-2">{pkg.description}</p>
                  <button
                    onClick={() => onNavigate(pkg.targetPage, (pkg as any).params)}
                    className="w-full py-2.5 border border-text-dark text-text-dark text-[11px] font-bold uppercase tracking-wider rounded-lg btn-transition hover:bg-text-dark hover:text-white cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-primary py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Unparalleled Service Excellence
          </h2>
          <div className="w-10 h-0.5 bg-accent mx-auto mb-5" />
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-12 lg:mb-16 leading-relaxed">
            Every detail of your journey is crafted to provide a seamless blend of traditional charm and modern luxury.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {whyChooseUsItems.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center group">
                <div className="mb-4 p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{label}</h3>
                <p className="text-white/60 text-xs leading-relaxed max-w-[200px]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-accent-hover btn-transition cursor-pointer"
            >
              Learn More About Kera <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── DESTINATIONS PREVIEW ─── */}
      <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 lg:mb-14">
            <div>
              <p className="section-label mb-2">Explore Kerala</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-dark">
                Popular Destinations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('destinations')}
              className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer"
            >
              All Destinations <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {destinations.map(({ name, image }) => (
              <div
                key={name}
                onClick={() => onNavigate('destinations')}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer destination-hover group"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg font-serif group-hover:text-accent transition-colors duration-300">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="font-serif text-7xl sm:text-8xl text-primary/20 leading-none select-none">
            &ldquo;
          </span>

          <blockquote className="font-serif text-lg sm:text-xl italic text-text-dark leading-relaxed -mt-6 mb-8">
            {testimonials[testimonialIndex].quote}
          </blockquote>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-white text-sm font-bold">
              {testimonials[testimonialIndex].name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-text-dark">{testimonials[testimonialIndex].name}</p>
              <p className="text-xs text-text-muted">{testimonials[testimonialIndex].location}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === testimonialIndex ? 'bg-primary scale-110' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIRTUAL TOUR ─── */}
      <section className="bg-bg-warm py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="section-label mb-2">Immersive Experience</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-text-dark mb-5">
                Explore From Your Home
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 max-w-lg">
                Step inside our luxury vessels with our high-definition 360-degree virtual tour.
                Experience the spacious cabins, the sun-drenched decks, and the meticulous
                craftsmanship before you even arrive.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('booking')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary text-primary text-xs font-bold uppercase tracking-wider rounded-full btn-transition hover:bg-primary hover:text-white cursor-pointer"
                >
                  <Play size={16} /> Book virtual cruise
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-text-dark text-white text-xs font-bold uppercase tracking-wider rounded-full btn-transition hover:bg-gray-800 cursor-pointer"
                >
                  <Ship size={16} /> Photo Gallery
                </button>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div
              onClick={() => onNavigate('gallery')}
              className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video shadow-xl"
            >
              <img
                src="/images/boat-interior.png"
                alt="Luxury houseboat interior virtual tour"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST LOGOS ─── */}
      <section className="bg-gray-100 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-0">
          {['Kerala Tourism', 'ATDC Approved', 'Incredible India', 'Accredited Operator', 'Approved & Tested'].map((name, i, arr) => (
            <div key={name} className="flex items-center">
              <span className="text-text-muted text-xs sm:text-sm font-medium px-4 sm:px-6 whitespace-nowrap">
                {name}
              </span>
              {i < arr.length - 1 && (
                <span className="hidden sm:block w-px h-5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
