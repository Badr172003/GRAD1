import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Wifi, Zap, Eye, Lock } from 'lucide-react';

const capabilities = [
  { icon: CheckCircle2, text: 'Continuous Monitoring' },
  { icon: Zap, text: 'Real-Time Detection' },
  { icon: Lock, text: 'Firewall Protection' },
  { icon: Wifi, text: 'Network Security' },
  { icon: Eye, text: 'Threat Visibility' },
  { icon: ArrowRight, text: 'Automated Response' },
];

export default function TrustStrip() {
  return (
    <section className="py-10 border-y border-white/5 bg-surface-800/60" aria-label="Platform capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {capabilities.map(({ icon: Icon, text }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 transition-colors group"
            >
              <Icon
                className="w-3.5 h-3.5 text-brand-400/60 group-hover:text-brand-400 transition-colors shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs font-medium tracking-wider uppercase whitespace-nowrap">
                {text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
