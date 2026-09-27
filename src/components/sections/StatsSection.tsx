import { motion } from 'framer-motion';
import { Clock, Zap, Layers, RefreshCw } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '24 / 7',
    label: 'Continuous Monitoring',
    description: 'Uninterrupted security surveillance across your infrastructure.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/8',
    border: 'border-brand-400/15',
  },
  {
    icon: Zap,
    value: 'Real-Time',
    label: 'Threat Detection',
    description: 'Suspicious activity is identified the moment it occurs.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/8',
    border: 'border-brand-400/15',
  },
  {
    icon: Layers,
    value: '5 Layers',
    label: 'Protection Depth',
    description: 'Multi-layer defense across network, host, application, data, and identity.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/8',
    border: 'border-brand-400/15',
  },
  {
    icon: RefreshCw,
    value: 'Automated',
    label: 'Incident Response',
    description: 'Trigger automated containment and remediation the moment threats are confirmed.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/8',
    border: 'border-violet-500/15',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-28 border-y border-white/5 bg-surface-800/40" aria-label="Platform capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-3 text-brand-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
            By Design
            <span className="w-5 h-px bg-brand-400/50" aria-hidden="true" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Security Built Into{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 to-brand-500">
              Everything
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label, description, color, bg, border }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-6 rounded-2xl border ${border} ${bg} hover:border-opacity-40 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold ${color} mb-1 leading-none`}>
                {value}
              </div>
              <div className="text-white text-sm font-semibold mb-2">{label}</div>
              <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
