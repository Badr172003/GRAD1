import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Activity,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Server,
  Lock,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const recentEvents = [
  { time: '00:02', type: 'BLOCKED', label: 'SQL Injection Attempt', src: '192.168.1.42', severity: 'high', color: 'text-red-400', dot: 'bg-red-400' },
  { time: '00:07', type: 'ALERT', label: 'Unusual Port Scan', src: '10.0.0.18', severity: 'medium', color: 'text-yellow-400', dot: 'bg-yellow-400' },
  { time: '00:11', type: 'BLOCKED', label: 'Brute Force Login', src: '172.16.0.5', severity: 'high', color: 'text-red-400', dot: 'bg-red-400' },
  { time: '00:15', type: 'PASS', label: 'Authorized API Access', src: '10.0.1.100', severity: 'low', color: 'text-green-400', dot: 'bg-green-400' },
  { time: '00:22', type: 'ALERT', label: 'High Bandwidth Transfer', src: '192.168.2.80', severity: 'medium', color: 'text-yellow-400', dot: 'bg-yellow-400' },
];

function SecurityScoreRing({ score }: { score: number }) {
  const radius = 42;
  const circ = 2 * Math.PI * radius;
  const dash = (score / 100) * circ;

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - dash }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#35e6a2" />
            <stop offset="100%" stopColor="#168c65" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center">
        <span className="text-white font-bold text-2xl leading-none">{score}</span>
        <span className="block text-slate-500 text-[9px] font-mono tracking-wider uppercase mt-0.5">Score</span>
      </div>
    </div>
  );
}

function NetworkBar({ height, delay }: { height: number; delay: number }) {
  return (
    <motion.div
      className="flex-1 rounded-sm"
      style={{ background: 'rgba(59,225,155, 0.35)', minHeight: '4px' }}
      animate={{ height: `${height}%` }}
      transition={{ duration: 0.5, delay, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 1.5 }}
    />
  );
}

export default function SecurityDashboard() {
  const [threatLevel, setThreatLevel] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('LOW');
  const [eventCount, setEventCount] = useState(12);

  useEffect(() => {
    const levels: ('LOW' | 'MEDIUM' | 'HIGH')[] = ['LOW', 'MEDIUM', 'LOW', 'LOW', 'MEDIUM'];
    let idx = 0;
    const t = setInterval(() => {
      idx = (idx + 1) % levels.length;
      setThreatLevel(levels[idx]);
    }, 5000);
    const t2 = setInterval(() => {
      if (Math.random() > 0.6) setEventCount((p) => p + 1);
    }, 3000);
    return () => { clearInterval(t); clearInterval(t2); };
  }, []);

  const threatColor = {
    LOW: 'text-green-400',
    MEDIUM: 'text-yellow-400',
    HIGH: 'text-red-400',
  }[threatLevel];

  const barHeights = [55, 75, 45, 90, 65, 80, 50, 70, 60, 85, 45, 75];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="Security dashboard demo">
      <div
        className="absolute top-0 left-1/4 w-125 h-125 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59,225,155,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Platform"
          title="The AUTOMA"
          highlight="Security Dashboard"
          description="A unified view of your security posture — threat levels, firewall activity, network traffic, and recent events in one platform."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 bg-surface-800 border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/70"
          aria-label="Security dashboard interface (demo)"
        >
          {/* Dashboard header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/6 bg-[#0D1414]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-400" aria-hidden="true" />
              <span className="text-white text-sm font-semibold tracking-wide">AUTOMA Security</span>
              <span className="text-slate-600 text-xs mx-1">·</span>
              <span className="text-slate-600 text-xs">Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-label="System status: operational">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-green" aria-hidden="true" />
                <span className="text-green-400 text-[10px] font-mono">All Systems Operational</span>
              </div>
              <span className="text-slate-600 text-[10px] font-mono tracking-wider uppercase">Demo</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/6">

            {/* Left panel: metrics */}
            <div className="p-5 space-y-4">

              {/* Score + threat */}
              <div className="flex items-center gap-4">
                <SecurityScoreRing score={88} />
                <div className="flex-1 space-y-3">
                  <div>
                    <span className="text-slate-600 text-[9px] font-mono tracking-wider uppercase block mb-1">Threat Level</span>
                    <motion.span
                      key={threatLevel}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-sm font-bold font-mono ${threatColor}`}
                    >
                      {threatLevel}
                    </motion.span>
                  </div>
                  <div>
                    <span className="text-slate-600 text-[9px] font-mono tracking-wider uppercase block mb-1">Security Events</span>
                    <motion.span key={eventCount} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} className="text-white text-sm font-mono font-bold">
                      {eventCount} today
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Status list */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                {[
                  { Icon: Lock, label: 'Firewall', value: 'Active', color: 'text-brand-400' },
                  { Icon: Wifi, label: 'Network', value: 'Monitored', color: 'text-brand-400' },
                  { Icon: Server, label: 'Assets', value: '128', color: 'text-brand-400' },
                  { Icon: Clock, label: 'Uptime', value: '99.9%', color: 'text-emerald-400' },
                ].map(({ Icon, label, value, color }) => (
                  <div key={label} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3 h-3 text-slate-600" aria-hidden="true" />
                      <span className="text-slate-500 text-[10px] font-mono">{label}</span>
                    </div>
                    <span className={`text-[10px] font-mono font-semibold ${color}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: network + events */}
            <div className="lg:col-span-2 p-5 space-y-5">

              {/* Network activity */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                    <span className="text-slate-500 text-[10px] font-mono tracking-wider uppercase">Network Activity</span>
                  </div>
                  <span className="text-slate-700 text-[9px] font-mono tracking-wider">Last 24h · Demo data</span>
                </div>
                <div className="flex items-end gap-1 h-20" aria-hidden="true">
                  {barHeights.map((h, i) => (
                    <NetworkBar key={i} height={h} delay={i * 0.05} />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-slate-700 text-[9px] font-mono">00:00</span>
                  <span className="text-slate-700 text-[9px] font-mono">12:00</span>
                  <span className="text-slate-700 text-[9px] font-mono">24:00</span>
                </div>
              </div>

              {/* Recent events */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                    <span className="text-slate-500 text-[10px] font-mono tracking-wider uppercase">Recent Events</span>
                  </div>
                  <span className="text-slate-700 text-[9px] font-mono tracking-wider">Illustrative data only</span>
                </div>
                <div className="space-y-2">
                  {recentEvents.map((evt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex items-center gap-3 py-2 border-b border-white/4 last:border-0"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${evt.dot}`} aria-hidden="true" />
                      <span className="text-slate-600 text-[9px] font-mono w-8 shrink-0">{evt.time}</span>
                      <span className="text-slate-300 text-[11px] font-mono flex-1 truncate">{evt.label}</span>
                      <span className="text-slate-600 text-[9px] font-mono hidden sm:block shrink-0">{evt.src}</span>
                      <span className={`text-[9px] font-mono font-bold tracking-wider shrink-0 ${evt.color}`}>
                        {evt.type}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Summary row */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { Icon: CheckCircle2, label: 'Protected', color: 'text-green-400 bg-green-500/10' },
                  { Icon: AlertTriangle, label: 'Monitoring', color: 'text-yellow-400 bg-yellow-500/10' },
                  { Icon: Activity, label: 'Scanning', color: 'text-brand-400 bg-brand-400/10' },
                ].map(({ Icon, label, color }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${color.split(' ')[1]} border border-white/4`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${color.split(' ')[0]}`} aria-hidden="true" />
                    <span className={`text-[10px] font-mono font-medium ${color.split(' ')[0]}`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="border-t border-white/5 px-5 py-2.5 flex items-center justify-between bg-[#0D1414]">
            <span className="text-slate-700 text-[9px] font-mono tracking-wider uppercase">
              Demo interface — illustrative data only
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400/40 pulse-status" aria-hidden="true" />
              <span className="text-slate-700 text-[9px] font-mono">AUTOMA Security Platform</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
