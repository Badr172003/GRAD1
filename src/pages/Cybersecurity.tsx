import { motion } from 'framer-motion';
import { ShieldCheck, Network, SearchCode, Siren, MonitorDot, KeyRound, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import CTASection from '../components/sections/CTASection';

const capabilityDetails = [
  {
    icon: ShieldCheck,
    title: 'Threat Detection',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
    border: 'border-brand-400/20',
    points: [
      'Signature-based detection for known attack patterns',
      'Behavioral analysis to identify anomalous activity',
      'Real-time alerting with severity classification',
      'Detection across network, host, and application layers',
    ],
  },
  {
    icon: Network,
    title: 'Network Security',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
    border: 'border-brand-400/20',
    points: [
      'Full traffic visibility across all network segments',
      'Enforce network segmentation and access policies',
      'Detect lateral movement and unauthorized connections',
      'Protocol analysis and deep packet inspection',
    ],
  },
  {
    icon: SearchCode,
    title: 'Vulnerability Assessment',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
    border: 'border-brand-400/20',
    points: [
      'Identify exposed services and misconfigured systems',
      'Prioritize vulnerabilities by exploitability and impact',
      'Track remediation progress and risk reduction',
      'Continuous assessment as infrastructure evolves',
    ],
  },
  {
    icon: Siren,
    title: 'Incident Response',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    points: [
      'Structured response workflows for confirmed incidents',
      'Rapid asset isolation to contain active threats',
      'Evidence collection and forensic trail preservation',
      'Post-incident analysis to prevent recurrence',
    ],
  },
  {
    icon: MonitorDot,
    title: 'Security Monitoring',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    points: [
      'Centralized event collection from all sources',
      'Continuous visibility into your security posture',
      'Correlation of events across multiple systems',
      'Audit logs for compliance and investigation support',
    ],
  },
  {
    icon: KeyRound,
    title: 'Access Protection',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    points: [
      'Enforce least-privilege access across resources',
      'Detect and alert on unauthorized access attempts',
      'Monitor privileged account activity',
      'Control access to sensitive systems and data',
    ],
  },
];

export default function Cybersecurity() {
  return (
    <main className="pt-16">
      {/* Page hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden" aria-label="Cybersecurity page header">
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
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
              <span className="text-brand-400 text-xs font-semibold tracking-[0.18em] uppercase">
                Security Capabilities
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Comprehensive Protection{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
                Across Every Layer
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              AUTOMA's cybersecurity capabilities address every stage of the attack lifecycle —
              from initial reconnaissance through active exploitation and post-incident recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities detail */}
      <section className="pb-24 sm:pb-32" aria-label="Security capabilities detail">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityDetails.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group p-7 rounded-2xl border ${cap.border} ${cap.bg} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300`}
                >
                  <div className={`w-11 h-11 rounded-xl ${cap.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${cap.color}`} aria-hidden="true" />
                  </div>
                  <h2 className="text-white font-bold text-lg mb-4">{cap.title}</h2>
                  <ul className="space-y-2.5" role="list">
                    {cap.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <ArrowRight className={`w-3.5 h-3.5 ${cap.color} shrink-0 mt-0.5`} aria-hidden="true" />
                        <span className="text-slate-400 text-sm leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Security approach */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <SectionHeading
              label="Approach"
              title="Defense in"
              highlight="Depth"
              description="No single security control is sufficient. AUTOMA layers multiple protections so that if one is bypassed, others continue to protect your environment."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Prevent', desc: 'Block known threats at the perimeter using firewall rules and access controls.' },
                { label: 'Detect', desc: 'Continuously monitor for anomalies and indicators of compromise across the environment.' },
                { label: 'Respond', desc: 'Contain and remediate threats quickly with structured incident response procedures.' },
              ].map(({ label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/7 bg-white/2.5 text-center"
                >
                  <div className="text-brand-400 font-bold text-lg mb-3">{label}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
