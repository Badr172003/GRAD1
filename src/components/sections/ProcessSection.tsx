import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, BarChart2, Shield, Zap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    id: 1,
    icon: Search,
    label: 'Step 1',
    title: 'Discover',
    description:
      'Map your digital assets and attack surface. Understand what needs to be protected before threats emerge.',
    color: 'text-brand-400',
    border: 'border-brand-400/30',
    bg: 'bg-brand-400/10',
    activeBg: 'bg-brand-400/15',
  },
  {
    id: 2,
    icon: Eye,
    label: 'Step 2',
    title: 'Detect',
    description:
      'Monitor continuously for suspicious behavior, policy violations, and known attack patterns across your environment.',
    color: 'text-brand-400',
    border: 'border-brand-400/30',
    bg: 'bg-brand-400/10',
    activeBg: 'bg-brand-400/15',
  },
  {
    id: 3,
    icon: BarChart2,
    label: 'Step 3',
    title: 'Analyze',
    description:
      'Assess the severity and potential impact of detected threats. Prioritize based on risk to your critical assets.',
    color: 'text-brand-400',
    border: 'border-brand-400/30',
    bg: 'bg-brand-400/10',
    activeBg: 'bg-brand-400/15',
  },
  {
    id: 4,
    icon: Shield,
    label: 'Step 4',
    title: 'Defend',
    description:
      'Apply targeted protective measures. Block malicious traffic, isolate affected assets, and enforce updated policies.',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    activeBg: 'bg-violet-500/15',
  },
  {
    id: 5,
    icon: Zap,
    label: 'Step 5',
    title: 'Respond',
    description:
      'Execute structured incident response. Contain damage, restore operations, and document findings for continuous improvement.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    activeBg: 'bg-emerald-500/15',
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const activeStep = steps[active];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="How AUTOMA protects">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(59,225,155,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="How AUTOMA"
          highlight="Protects You"
          description="A structured five-stage security lifecycle that keeps threats out and keeps your operations running."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Step selector — desktop horizontal, stacked on mobile */}
          <div className="space-y-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = active === i;
              return (
                <motion.button
                  key={step.id}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                    isActive
                      ? `${step.activeBg} ${step.border} shadow-lg`
                      : 'border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/10'
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Step ${step.id}: ${step.title}`}
                >
                  {/* Number */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                      isActive ? `${step.bg} ${step.color}` : 'bg-white/4 text-slate-600'
                    }`}
                    aria-hidden="true"
                  >
                    {String(step.id).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div
                    className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? `${step.bg}` : 'bg-white/4'
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className={`w-4 h-4 ${isActive ? step.color : 'text-slate-600'}`} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase block mb-0.5 ${isActive ? step.color : 'text-slate-600'}`}>
                      {step.label}
                    </span>
                    <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {step.title}
                    </span>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="step-indicator"
                      className={`ml-auto w-1.5 h-1.5 rounded-full ${step.bg} ${step.color} bg-current`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active step detail */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`p-8 rounded-2xl border ${activeStep.border} ${activeStep.bg} bg-opacity-50`}
            >
              <div className={`w-12 h-12 rounded-2xl ${activeStep.bg} flex items-center justify-center mb-6`} aria-hidden="true">
                <activeStep.icon className={`w-6 h-6 ${activeStep.color}`} />
              </div>

              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${activeStep.color} block mb-2`}>
                {activeStep.label}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">{activeStep.title}</h3>
              <p className="text-slate-400 leading-relaxed">{activeStep.description}</p>

              {/* Step progress */}
              <div className="mt-8 flex items-center gap-2" aria-hidden="true">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.75 rounded-full transition-all duration-300 ${
                      i === active
                        ? `flex-1 ${activeStep.bg} bg-current ${activeStep.color}`
                        : i < active
                        ? 'flex-1 bg-white/20'
                        : 'w-4 bg-white/6'
                    }`}
                  />
                ))}
              </div>
              <p className="text-slate-600 text-xs mt-2 font-mono">
                {active + 1} / {steps.length}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
