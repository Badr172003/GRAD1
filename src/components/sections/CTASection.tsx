import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/7 bg-surface-800 p-10 sm:p-14 lg:p-16 text-center"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,225,155,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 100%, rgba(59,225,155,0.06) 0%, transparent 60%)',
            }}
          />
          <div className="bg-line-grid absolute inset-0 opacity-30" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-400/10 border border-brand-400/20 mb-8">
              <ShieldCheck className="w-7 h-7 text-brand-400" aria-hidden="true" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Ready to Secure{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                Your Infrastructure?
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Start protecting your network with AUTOMA — real-time threat detection, firewall protection,
              and automated response working together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-400 hover:bg-brand-500 text-[#05070A] font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/20"
              >
                Get Protected
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/10 hover:border-white/22 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-brand-400/15 rounded-tl-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-brand-400/15 rounded-br-3xl pointer-events-none" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
