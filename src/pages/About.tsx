import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Zap, Target, ArrowRight } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const values = [
  {
    icon: Eye,
    title: 'Full Visibility',
    desc: 'You cannot protect what you cannot see. AUTOMA provides complete visibility into your network activity, security events, and system behavior.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
  },
  {
    icon: Zap,
    title: 'Speed of Response',
    desc: 'In cybersecurity, time is critical. The faster a threat is identified and contained, the less damage it causes. AUTOMA is designed to minimize dwell time.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
  },
  {
    icon: Target,
    title: 'Precision Protection',
    desc: 'Broad blocking creates operational friction. AUTOMA targets only malicious activity, allowing your operations to function without security becoming a bottleneck.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
  },
  {
    icon: ShieldCheck,
    title: 'Layered Defense',
    desc: 'No single control is impenetrable. AUTOMA applies multiple independent security layers so that if one is bypassed, others continue protecting your environment.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
];

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden" aria-label="About AUTOMA">
        <div className="absolute inset-0 bg-line-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(59,225,155,0.06) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-400/20 bg-brand-400/[0.07] mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
              <span className="text-brand-400 text-xs font-semibold tracking-[0.18em] uppercase">About</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Rethinking How{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                Security Works
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Most organizations discover breaches too late — after data has been compromised,
              operations disrupted, and damage done. AUTOMA was built to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is AUTOMA */}
      <section className="pb-20 sm:pb-24" aria-label="What is AUTOMA">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-3 text-brand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
                What is AUTOMA
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Intelligent Cybersecurity{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                  by Design
                </span>
              </h2>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  AUTOMA is a cybersecurity protection platform that combines network monitoring,
                  firewall management, threat detection, and automated incident response into a unified system.
                </p>
                <p>
                  Unlike traditional security tools that operate in isolation, AUTOMA correlates signals
                  across your environment to identify threats that individual tools would miss.
                </p>
                <p>
                  The platform is designed to give security teams — regardless of size — the visibility
                  and control they need to protect their infrastructure against modern cyber threats.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                { label: 'Firewall', value: 'Network perimeter protection and traffic filtering.' },
                { label: 'Threat Detection', value: 'Continuous scanning for malicious behavior and attack patterns.' },
                { label: 'Monitoring', value: 'Full visibility into security events across your environment.' },
                { label: 'Automated Response', value: 'Immediate containment actions when threats are confirmed.' },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/7 bg-white/2.5"
                >
                  <ArrowRight className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-white font-semibold text-sm">{label}</span>
                    <p className="text-slate-500 text-sm mt-0.5">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem / Mission */}
      <section className="py-20 sm:py-24 border-y border-white/5 bg-surface-800/40" aria-label="Our mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-red-400 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                The Problem
              </span>
              <h2 className="text-2xl font-bold text-white mb-5">
                Threats move faster than most teams can respond
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                Modern attacks are automated, sophisticated, and persistent. They exploit misconfigured
                systems, weak access controls, and the gap between when a threat appears and when
                a security team notices it.
              </p>
              <p className="text-slate-400 leading-relaxed">
                By the time most organizations detect a breach, attackers have already moved laterally,
                established persistence, and exfiltrated sensitive data. The window between intrusion
                and detection is the most dangerous gap in any security program.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-brand-400 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                Our Mission
              </span>
              <h2 className="text-2xl font-bold text-white mb-5">
                Close the gap between threat and response
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5">
                AUTOMA's mission is to eliminate the dwell-time advantage attackers currently exploit.
                By automating detection and enabling faster response, we reduce the window in which
                threats can cause damage.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We believe that effective security should not require an army of analysts. The right
                platform should do the heavy lifting — monitoring continuously, detecting accurately,
                and responding immediately — so your team can focus on the decisions that require
                human judgment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Principles */}
      <section className="py-20 sm:py-28" aria-label="Core principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-3 text-brand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
                Principles
                <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                How We Approach{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                  Security
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-5 p-7 rounded-2xl border border-white/7 bg-white/2.5 hover:-translate-y-1 hover:border-white/12 transition-all duration-300"
              >
                <div className={`shrink-0 w-11 h-11 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
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
