import { useState, useEffect } from 'react';
import {
  Menu, X, Phone, MapPin,
  MessageCircle, Leaf, Mail
} from 'lucide-react';

// Import Page Components
import Home from './pages/Home';
import About from './pages/About';
import Houseboats from './pages/Houseboats';
import Packages from './pages/Packages';
import Destinations from './pages/Destinations';
import FoodMenu from './pages/FoodMenu';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';

/* Inline Social Icons */
const FacebookIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const TwitterIcon = ({ size = 18, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

/* ─── NAVIGATION ─── */
interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'houseboats', label: 'Houseboats' },
    { id: 'packages', label: 'Packages' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'menu', label: 'Food Menu' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center cursor-pointer">
          <img src="/images/kera.png" alt="Kera Houseboats" className="h-10 lg:h-12 w-auto" />
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => onNavigate(link.id)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                  currentPage === link.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Book Now */}
        <button
          onClick={() => onNavigate('booking')}
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full btn-transition hover:bg-accent-hover cursor-pointer"
        >
          Book Now
        </button>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden text-text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4 shadow-inner">
          <ul className="flex flex-col px-6 pt-3 gap-3">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileOpen(false);
                  }}
                  className={`block py-2 w-full text-left text-xs font-bold uppercase tracking-wider cursor-pointer ${
                    currentPage === link.id ? 'text-primary' : 'text-text-dark hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  onNavigate('booking');
                  setMobileOpen(false);
                }}
                className="w-full text-center mt-2 px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ─── FOOTER ─── */
interface FooterProps {
  onNavigate: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="aboutus" className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={() => onNavigate('home')} className="block brightness-0 invert focus:outline-none">
              <img src="/images/kera.png" alt="Kera Houseboats" className="h-10 w-auto" />
            </button>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Redefining luxury on the backwaters of Alleppey since 2012. Offering premium handcrafted vessels and traditional hospitality.
            </p>
            <div className="text-[10px] text-white/35">
              GSTIN: 32AAPFK5557R1ZH
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-accent mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { id: 'houseboats', label: 'Our Fleet' },
                { id: 'packages', label: 'Cruise Packages' },
                { id: 'menu', label: 'Food Menu' },
                { id: 'destinations', label: 'Destinations' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/50 text-xs hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-accent mb-4">Reservation Info</h4>
            <ul className="space-y-2.5">
              {[
                { id: 'booking', label: 'Terms & Conditions' },
                { id: 'booking', label: 'Cancellation Policy' },
                { id: 'booking', label: 'Bank Account Details' },
                { id: 'gallery', label: 'Photo Gallery' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/50 text-xs hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-accent mb-4">Contact Us</h4>
            <div className="space-y-3 text-xs text-white/50">
              <p className="flex items-start gap-2 max-w-[240px] leading-relaxed">
                <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
                Kera Houseboats Alleppey, Gr. floor, Tharayil building, Thondankulangara-Punnamada Rd, near HMCA Chapel, Alappuzha, Kerala, India
              </p>
              <div className="space-y-1">
                <a href="tel:+918086907043" className="flex items-center gap-2 hover:text-white">
                  <Phone size={16} className="shrink-0 text-accent" />
                  +91 80869 07043
                </a>
                <a href="tel:+919495944443" className="flex items-center gap-2 pl-6 hover:text-white">
                  +91 94959 44443
                </a>
                <a href="tel:+919446617808" className="flex items-center gap-2 pl-6 hover:text-white">
                  +91 94466 17808
                </a>
              </div>
              <div className="space-y-1">
                <a href="mailto:houseboatkera@gmail.com" className="flex items-center gap-2  hover:text-white break-all">
                   <Mail size={16} className="shrink-0 text-accent" />
                  houseboatkera@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href="https://www.facebook.com/kerahb1/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200" aria-label="Facebook">
                  <FacebookIcon size={18} />
                </a>
                <a href="https://www.instagram.com/kerahouseboats/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200" aria-label="Instagram">
                  <InstagramIcon size={18} />
                </a>
                <a href="https://twitter.com/kera_holidays" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200" aria-label="Twitter">
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2026 Kera Houseboats. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Leaf size={14} className="text-primary animate-pulse" /> Sustainable Tourism Certified
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FAB ─── */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918086907043"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-fab"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
      <span className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
        <MessageCircle size={26} className="text-white" fill="white" />
      </span>
    </a>
  );
}

/* ─── APP ─── */
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState<any>(undefined);

  // Navigation Handler
  const handleNavigate = (page: string, params?: any) => {
    setCurrentPage(page);
    setPageParams(params);
    // Scroll smoothly to top on page transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Page Content dynamically based on route state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'houseboats':
        return <Houseboats onNavigate={handleNavigate} prefillParams={pageParams} />;
      case 'packages':
        return <Packages onNavigate={handleNavigate} prefillParams={pageParams} />;
      case 'destinations':
        return <Destinations onNavigate={handleNavigate} />;
      case 'menu':
        return <FoodMenu />;
      case 'gallery':
        return <Gallery />;
      case 'booking':
        return <Booking prefillParams={pageParams} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="min-h-[70vh]">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppFab />
    </>
  );
}
