import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, Wifi, Lock, Activity } from 'lucide-react';

const securityEvents = [
  { label: 'SQL Injection Attempt', status: 'BLOCKED', color: 'text-red-400' },
  { label: 'Port Scan Detected', status: 'ALERT', color: 'text-yellow-400' },
  { label: 'Brute Force Attempt', status: 'BLOCKED', color: 'text-red-400' },
  { label: 'Authorized Session', status: 'PASS', color: 'text-green-400' },
  { label: 'XSS Payload Detected', status: 'BLOCKED', color: 'text-red-400' },
];

function SecurityConsole() {
  const [threatCount, setThreatCount] = useState(48);
  const [protectedAssets] = useState(128);
  const [detectionPct, setDetectionPct] = useState(94);
  const [networkBars, setNetworkBars] = useState([4, 6, 8, 5, 7, 9, 6, 4, 7, 5, 8, 6]);
  const [eventIndex, setEventIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const barTimer = setInterval(() => {
      setNetworkBars(() =>
        Array.from({ length: 12 }, () => Math.floor(Math.random() * 8) + 2)
      );
    }, 1200);

    const threatTimer = setInterval(() => {
      if (Math.random() > 0.6) {
        setThreatCount((prev) => prev + 1);
      }
    }, 2500);

    const pctTimer = setInterval(() => {
      setDetectionPct((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.min(99, Math.max(87, prev + delta));
      });
    }, 3000);

    const eventTimer = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % securityEvents.length);
    }, 2800);

    intervalRef.current = barTimer;

    return () => {
      clearInterval(barTimer);
      clearInterval(threatTimer);
      clearInterval(pctTimer);
      clearInterval(eventTimer);
    };
  }, []);

  const currentEvent = securityEvents[eventIndex];
  const maxBarHeight = 32;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      className="relative"
      aria-label="AUTOMA Security Console (demo)"
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,225,155,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Console panel */}
      <div className="relative bg-surface-800 border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/70">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/6 bg-[#0D1414]">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-slate-600 text-[10px] font-mono tracking-[0.18em] uppercase select-none">
            AUTOMA · SECURITY CONSOLE
          </span>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-green" />
            <span className="text-green-400 text-[9px] font-mono">LIVE</span>
          </div>
        </div>

        <div className="p-4 space-y-3.5">
          {/* Status rows */}
          <div className="space-y-1.5">
            {[
              { Icon: ShieldCheck, label: 'SYSTEM STATUS', value: 'PROTECTED', valueClass: 'text-green-400' },
              { Icon: Wifi, label: 'NETWORK', value: 'ACTIVE', valueClass: 'text-brand-400' },
              { Icon: Lock, label: 'FIREWALL', value: 'ENABLED', valueClass: 'text-brand-400' },
            ].map(({ Icon, label, value, valueClass }) => (
              <div
                key={label}
                className="flex items-center justify-between py-1.5 border-b border-white/4 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3 h-3 text-slate-600" aria-hidden="true" />
                  <span className="text-slate-500 text-[10px] font-mono tracking-[0.14em]">{label}</span>
                </div>
                <span className={`text-[10px] font-mono font-semibold tracking-[0.14em] ${valueClass}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Threat detection progress */}
          <div>
            <div className="flex justify-between mb-1.5">
              <span className="text-slate-500 text-[10px] font-mono tracking-[0.14em]">THREAT DETECTION</span>
              <span className="text-brand-400 text-[10px] font-mono">{detectionPct}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: `${detectionPct}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full bg-linear-to-r from-brand-300 to-brand-500 rounded-full"
              />
            </div>
          </div>

          {/* Network activity bars */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Activity className="w-3 h-3 text-slate-600" aria-hidden="true" />
              <span className="text-slate-500 text-[10px] font-mono tracking-[0.14em]">NETWORK ACTIVITY</span>
            </div>
            <div className="flex items-end gap-1" style={{ height: `${maxBarHeight}px` }} aria-hidden="true">
              {networkBars.map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: `${(h / 10) * maxBarHeight}px` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex-1 rounded-sm"
                  style={{
                    background: `rgba(59,225,155, ${0.25 + (h / 10) * 0.4})`,
                    minHeight: '3px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#0D1414] rounded-xl p-3 border border-white/5">
              <motion.span
                key={threatCount}
                initial={{ opacity: 0.6, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="block text-white font-bold text-2xl font-mono leading-none"
              >
                {threatCount}
              </motion.span>
              <span className="block text-slate-600 text-[9px] font-mono tracking-[0.14em] uppercase mt-1">
                Threats Blocked
              </span>
            </div>
            <div className="bg-[#0D1414] rounded-xl p-3 border border-white/5">
              <span className="block text-white font-bold text-2xl font-mono leading-none">
                {protectedAssets}
              </span>
              <span className="block text-slate-600 text-[9px] font-mono tracking-[0.14em] uppercase mt-1">
                Protected Assets
              </span>
            </div>
          </div>

          {/* Last event */}
          <div className="bg-[#0D1414] rounded-xl p-3 border border-white/5">
            <span className="block text-slate-600 text-[9px] font-mono tracking-[0.14em] uppercase mb-2">
              LAST DETECTION
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={eventIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between"
              >
                <span className="text-slate-300 text-[11px] font-mono">{currentEvent.label}</span>
                <span className={`text-[9px] font-mono font-bold tracking-[0.12em] ${currentEvent.color}`}>
                  {currentEvent.status}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Animated scan line */}
        <div className="scan-line" aria-hidden="true" />
      </div>

      {/* Corner accents */}
      <div
        className="absolute top-0 right-0 w-16 h-16 border-t border-r border-brand-400/15 rounded-tr-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-brand-400/15 rounded-bl-2xl pointer-events-none"
        aria-hidden="true"
      />

      <p className="text-center text-slate-700 text-[9px] font-mono mt-2 tracking-widest uppercase">
        Demo visualization only
      </p>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-line-grid" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59,225,155,0.055) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(59,225,155,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(59,225,155,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-brand-400/20 bg-brand-400/[0.07] mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400 pulse-status" aria-hidden="true" />
              <span className="text-brand-400 text-xs font-semibold tracking-[0.18em] uppercase">
                Cybersecurity Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Defend Your{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-300 via-brand-400 to-brand-500">
                Digital Infrastructure.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-120"
            >
              AUTOMA monitors your network, enforces firewall rules, and detects threats
              in real time — so suspicious activity never becomes a security incident.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-400 hover:bg-brand-500 text-[#05070A] font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
              >
                Get Protected
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/cybersecurity"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/10 hover:border-white/22 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-200"
              >
                Explore Capabilities
              </Link>
            </motion.div>
          </div>

          {/* Right: security console */}
          <div className="lg:pl-4">
            <SecurityConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
