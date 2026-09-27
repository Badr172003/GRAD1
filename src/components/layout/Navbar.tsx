import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/cybersecurity', label: 'Cybersecurity', end: false },
  { to: '/firewall', label: 'Firewall', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070A]/92 backdrop-blur-xl border-b border-white/6 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg p-1"
          aria-label="AUTOMA Security — Home"
        >
          <div className="relative shrink-0">
            <ShieldCheck
              className="w-7 h-7 text-brand-400 group-hover:text-brand-400 transition-colors duration-200"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-brand-400/15 blur-lg rounded-full pointer-events-none" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-[17px] tracking-[0.06em]">AUTOMA</span>
            <span className="text-brand-400/60 text-[8px] font-semibold tracking-[0.22em] uppercase mt-0.5">
              SECURITY
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5" role="list">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-brand-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#05070A] bg-brand-400 hover:bg-brand-500 rounded-lg transition-colors duration-200 shadow-lg shadow-brand-500/20"
          >
            Get Protected
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-surface-800/98 backdrop-blur-2xl border-b border-white/6"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
                      isActive
                        ? 'text-brand-400 bg-brand-400/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/4'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-semibold text-[#05070A] bg-brand-400 hover:bg-brand-500 rounded-lg text-center transition-colors duration-150"
              >
                Get Protected
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
