import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/move.png';
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Zumba', path: '/zumba' },
  { label: 'Yoga', path: '/yoga' },
  { label: 'Cardio', path: '/cardio' },
  { label: 'Videos', path: '/videos' },
  { label: 'About', path: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 shadow-lg shadow-pink-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={logo} alt="Move With Me Logo" className="w-full h-full object-contain group-hover:animate-pulse" />
            </div>
            <div className="leading-none">
              <div className="font-heading text-xl text-white tracking-widest">MOVE</div>
              <div className="font-body text-[10px] tracking-[0.2em] text-pink-500 uppercase font-light">WITH ME</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-body text-sm font-medium nav-underline transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#e91e8c]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Join Now Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.youtube.com/@moveWithMe-foryou"
              target="_blank"
              rel="noreferrer"
              className="bg-[#e91e8c] hover:bg-pink-600 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
            >
              Join Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/98 border-t border-white/10 py-4 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 font-body text-white/80 hover:text-[#e91e8c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="block bg-[#e91e8c] text-white text-center font-semibold py-2.5 rounded-full"
              >
                Join Now →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
