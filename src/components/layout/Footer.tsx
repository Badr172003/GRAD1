import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Send, BadgeCheck } from 'lucide-react';

const productLinks = [
  { to: '/cybersecurity', label: 'Cybersecurity' },
  { to: '/firewall', label: 'Firewall' },
  { to: '/services', label: 'Services' },
];

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { to: '#', label: 'Privacy Policy' },
  { to: '#', label: 'Terms of Use' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#05070A] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 group mb-4"
              aria-label="AUTOMA Security"
            >
              <ShieldCheck
                className="w-6 h-6 text-brand-400 group-hover:text-brand-400 transition-colors"
                aria-hidden="true"
              />
              <div className="leading-none">
                <span className="block text-white font-bold text-base tracking-[0.06em]">AUTOMA</span>
                <span className="block text-brand-400/55 text-[8px] font-semibold tracking-[0.22em] uppercase mt-0.5">
                  SECURITY
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-55">
              Intelligent security for a connected world.
            </p>
            <div className="flex items-center gap-1 mt-6">
              {[
                { href: '#', label: 'Global', Icon: Globe },
                { href: '#', label: 'Updates', Icon: Send },
                { href: '#', label: 'Trusted', Icon: BadgeCheck },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 text-slate-600 hover:text-slate-300 transition-colors rounded-lg"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.14em] uppercase mb-5">
              Product
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {productLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.14em] uppercase mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {companyLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-xs font-semibold tracking-[0.14em] uppercase mb-5">
              Legal
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {legalLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} AUTOMA Security. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs tracking-wider uppercase">
            Protect · Monitor · Respond
          </p>
        </div>
      </div>
    </footer>
  );
}
