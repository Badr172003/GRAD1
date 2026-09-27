import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Target, Siren } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const serviceCategories = [
  {
    id: 'offensive',
    label: 'Offensive Security',
    color: 'text-red-400',
    border: 'border-red-500/20',
    bg: 'bg-red-500/8',
    iconBg: 'bg-red-500/10',
    icon: Target,
    tagline: 'Find your weaknesses before attackers do.',
    services: [
      {
        title: 'Penetration Testing',
        desc: 'Simulated attacks on your systems to identify exploitable vulnerabilities. Each engagement produces a detailed findings report with prioritized remediation guidance.',
        points: ['Network penetration testing', 'Web application testing', 'Social engineering assessment', 'Wireless security evaluation'],
      },
      {
        title: 'Vulnerability Assessment',
        desc: 'Systematic scanning and analysis of your infrastructure to identify, classify, and prioritize security weaknesses across hosts, applications, and services.',
        points: ['Automated vulnerability scanning', 'Manual verification of findings', 'Risk-based prioritization', 'Remediation tracking'],
      },
      {
        title: 'Security Testing',
        desc: 'Targeted evaluation of specific security controls and configurations to verify they function as intended and provide the expected level of protection.',
        points: ['Firewall rule validation', 'Access control testing', 'Authentication mechanism review', 'Encryption configuration audit'],
      },
    ],
  },
  {
    id: 'defensive',
    label: 'Defensive Security',
    color: 'text-brand-400',
    border: 'border-brand-500/20',
    bg: 'bg-brand-500/8',
    iconBg: 'bg-brand-500/10',
    icon: ShieldCheck,
    tagline: 'Protect your infrastructure continuously.',
    services: [
      {
        title: 'Network Security',
        desc: 'Monitor and control all network traffic to enforce access policies, detect anomalies, and prevent unauthorized lateral movement across your environment.',
        points: ['Traffic monitoring and analysis', 'Network segmentation enforcement', 'Protocol anomaly detection', 'Bandwidth and flow monitoring'],
      },
      {
        title: 'Firewall Protection',
        desc: 'Configure and manage stateful firewall rules that block malicious connections while allowing legitimate traffic to flow efficiently.',
        points: ['Stateful packet inspection', 'Application layer filtering', 'Intrusion prevention', 'Rule management and auditing'],
      },
      {
        title: 'Threat Detection',
        desc: 'Continuous monitoring using signature-based and behavioral detection to identify active threats as they emerge in your environment.',
        points: ['Known threat signature matching', 'Behavioral anomaly analysis', 'Lateral movement detection', 'Malware activity identification'],
      },
      {
        title: 'Security Monitoring',
        desc: 'Centralized collection and correlation of security events from across your infrastructure to provide unified visibility into your security posture.',
        points: ['Log aggregation and normalization', 'Event correlation and alerting', 'Security dashboard and reporting', 'Compliance audit support'],
      },
    ],
  },
  {
    id: 'response',
    label: 'Incident Response',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/8',
    iconBg: 'bg-violet-500/10',
    icon: Siren,
    tagline: 'React quickly. Contain damage. Recover fully.',
    services: [
      {
        title: 'Incident Investigation',
        desc: 'Thorough analysis of confirmed security incidents to understand scope, attack vector, affected assets, and the full timeline of attacker activity.',
        points: ['Digital forensics and evidence collection', 'Attack timeline reconstruction', 'Affected asset identification', 'Root cause determination'],
      },
      {
        title: 'Threat Analysis',
        desc: 'Deep examination of threat indicators and attacker techniques to understand intent, capability, and potential further actions against your environment.',
        points: ['Indicator of compromise analysis', 'Threat actor profiling', 'Malware reverse analysis', 'Attack technique mapping'],
      },
      {
        title: 'Response Management',
        desc: 'Coordinated execution of containment, eradication, and recovery actions to minimize damage and restore normal operations as quickly as possible.',
        points: ['Incident containment and isolation', 'Threat eradication procedures', 'System recovery and validation', 'Post-incident review and reporting'],
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="pt-16 bg-[radial-gradient(circle_at_top,rgba(53,230,162,0.08),transparent_30%),linear-gradient(180deg,#0a1010_0%,#070b0c_100%)]">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden" aria-label="Services page header">
        <div className="absolute inset-0 bg-line-grid opacity-40" aria-hidden="true" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(94,231,166,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/[0.07] mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" aria-hidden="true" />
              <span className="text-brand-400 text-xs font-semibold tracking-[0.18em] uppercase">Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Security Services{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-400 via-brand-300 to-accent-400">
                Built for Your Needs
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              From proactive security assessments to real-time threat monitoring and structured incident response —
              AUTOMA covers every dimension of your security program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service categories */}
      <section className="pb-24 sm:pb-32" aria-label="Service categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/6">
                  <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center shrink-0`}>
                    <CatIcon className={`w-5 h-5 ${cat.color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${cat.color} block mb-0.5`}>
                      {cat.label}
                    </span>
                    <p className="text-slate-400 text-sm">{cat.tagline}</p>
                  </div>
                </div>

                {/* Services in this category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.services.map((svc, i) => (
                    <motion.div
                      key={svc.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`group p-6 rounded-2xl border ${cat.border} ${cat.bg} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col`}
                    >
                      <h3 className="text-white font-bold text-base mb-3">{svc.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">{svc.desc}</p>
                      <ul className="space-y-2 mt-auto" role="list">
                        {svc.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2">
                            <ArrowRight
                              className={`w-3 h-3 ${cat.color} shrink-0 mt-0.5`}
                              aria-hidden="true"
                            />
                            <span className="text-slate-500 text-xs leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </main>
  );
}