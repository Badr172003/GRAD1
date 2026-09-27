import { motion } from 'framer-motion';
import { Shield, CheckCircle2, XCircle, AlertTriangle, Lock, Wifi, Filter, Globe } from 'lucide-react';
import FirewallSection from '../components/sections/FirewallSection';
import CTASection from '../components/sections/CTASection';

const firewallFeatures = [
  {
    icon: Filter,
    title: 'Deep Packet Inspection',
    desc: 'Analyze packet content beyond headers to detect application-layer threats that bypass traditional filters.',
  },
  {
    icon: Lock,
    title: 'Stateful Connection Tracking',
    desc: 'Track the full state of active connections to detect protocol anomalies and session hijacking attempts.',
  },
  {
    icon: Globe,
    title: 'Geo-Based Filtering',
    desc: 'Restrict or allow connections based on geographic origin, reducing exposure to high-risk regions.',
  },
  {
    icon: Wifi,
    title: 'Intrusion Prevention',
    desc: 'Detect and block exploit attempts in real time using continuously updated threat signatures.',
  },
];

export default function Firewall() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden" aria-label="Firewall page header">
        <div className="absolute inset-0 bg-line-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(59,225,155,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-400/20 bg-brand-400/[0.07] mb-8">
              <Shield className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
              <span className="text-brand-400 text-xs font-semibold tracking-[0.18em] uppercase">
                Firewall Protection
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Your First Line of{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                Defense
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              AUTOMA's firewall inspects every connection entering and leaving your network.
              Malicious traffic is blocked instantly. Legitimate traffic flows without interruption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Traffic classification */}
      <section className="pb-20 sm:pb-24" aria-label="Traffic classification">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {[
              {
                Icon: CheckCircle2,
                title: 'Safe Traffic',
                color: 'text-green-400',
                border: 'border-green-500/20',
                bg: 'bg-green-500/8',
                desc: 'Authorized connections from trusted sources pass through without delay.',
              },
              {
                Icon: XCircle,
                title: 'Blocked Threats',
                color: 'text-red-400',
                border: 'border-red-500/20',
                bg: 'bg-red-500/8',
                desc: 'Connections matching malicious patterns are dropped before reaching your network.',
              },
              {
                Icon: AlertTriangle,
                title: 'Suspicious Activity',
                color: 'text-yellow-400',
                border: 'border-yellow-500/20',
                bg: 'bg-yellow-500/8',
                desc: 'Ambiguous traffic is flagged for review and logged for investigation.',
              },
            ].map(({ Icon, title, color, border, bg, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${border} ${bg} text-center`}
              >
                <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
                </div>
                <h2 className="text-white font-semibold text-base mb-2">{title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated visualization */}
      <FirewallSection />

      {/* Features */}
      <section className="py-20 sm:py-28" aria-label="Firewall features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Advanced{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                Inspection Engine
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {firewallFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-white/7 bg-white/2.5 hover:border-brand-400/20 hover:bg-white/4 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-400/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
