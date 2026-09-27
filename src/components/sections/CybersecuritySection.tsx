import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Radar,
  Network,
  SearchCode,
  Siren,
  MonitorDot,
  KeyRound,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Capability {
  icon: React.ElementType;
  category: string;
  title: string;
  description: string;
  accentClass: string;
  iconBg: string;
  borderHover: string;
  large?: boolean;
}

const capabilities: Capability[] = [
  {
    icon: Radar,
    category: 'Detection',
    title: 'Threat Detection',
    description:
      'Continuously scan for suspicious behavior, abnormal patterns, and known attack signatures across your entire network perimeter. AUTOMA identifies threats before they escalate.',
    accentClass: 'text-brand-400',
    iconBg: 'bg-brand-400/10',
    borderHover: 'hover:border-brand-400/30',
    large: true,
  },
  {
    icon: Network,
    category: 'Infrastructure',
    title: 'Network Security',
    description:
      'Monitor all network traffic and enforce segmentation policies to prevent lateral movement and unauthorized access.',
    accentClass: 'text-brand-400',
    iconBg: 'bg-brand-400/10',
    borderHover: 'hover:border-brand-400/30',
  },
  {
    icon: SearchCode,
    category: 'Assessment',
    title: 'Vulnerability Assessment',
    description:
      'Identify and prioritize weaknesses in your infrastructure before attackers can exploit them.',
    accentClass: 'text-brand-400',
    iconBg: 'bg-brand-400/10',
    borderHover: 'hover:border-brand-400/30',
  },
  {
    icon: Siren,
    category: 'Response',
    title: 'Incident Response',
    description:
      'Investigate and contain active security incidents with structured response workflows that minimize damage.',
    accentClass: 'text-red-400',
    iconBg: 'bg-red-500/10',
    borderHover: 'hover:border-red-500/30',
  },
  {
    icon: MonitorDot,
    category: 'Visibility',
    title: 'Security Monitoring',
    description:
      'Maintain continuous visibility across your systems, events, and logs — all in one unified platform.',
    accentClass: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    borderHover: 'hover:border-emerald-500/30',
  },
  {
    icon: KeyRound,
    category: 'Access',
    title: 'Access Protection',
    description:
      'Control and verify every access request. Enforce least-privilege principles to limit your attack surface.',
    accentClass: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    borderHover: 'hover:border-violet-500/30',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function CybersecuritySection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="Cybersecurity capabilities">
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59,225,155,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Capabilities"
          title="Security Built Around"
          highlight="Every Threat Vector"
          description="AUTOMA delivers comprehensive protection across your entire attack surface — from network perimeter to internal assets."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`group relative flex flex-col p-6 rounded-2xl border border-white/7 bg-white/2.5 ${cap.borderHover} hover:-translate-y-1 hover:bg-white/4.5 transition-all duration-300 cursor-default ${cap.large ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl ${cap.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${cap.accentClass}`} aria-hidden="true" />
                </div>

                {/* Category label */}
                <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${cap.accentClass} mb-2 opacity-70`}>
                  {cap.category}
                </span>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-3">{cap.title}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{cap.description}</p>

                {/* Hover arrow */}
                <div
                  className={`mt-5 flex items-center gap-1.5 ${cap.accentClass} text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </div>

                {/* Top-left corner accent */}
                <div
                  className={`absolute top-0 left-0 w-10 h-0.5 ${cap.accentClass} bg-current opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-tl-2xl`}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/cybersecurity"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-brand-400 transition-colors font-medium"
          >
            View all capabilities
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
