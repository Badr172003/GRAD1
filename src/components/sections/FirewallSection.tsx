import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertTriangle, Shield, Globe, Server } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

type PacketType = 'safe' | 'blocked' | 'suspicious';

interface Packet {
  id: number;
  type: PacketType;
  lane: number;
}

const packetConfig: Record<PacketType, { color: string; label: string; Icon: React.ElementType; textColor: string }> = {
  safe: {
    color: 'bg-green-500/30 border-green-500/40',
    label: 'SAFE',
    Icon: CheckCircle2,
    textColor: 'text-green-400',
  },
  blocked: {
    color: 'bg-red-500/30 border-red-500/40',
    label: 'BLOCKED',
    Icon: XCircle,
    textColor: 'text-red-400',
  },
  suspicious: {
    color: 'bg-yellow-500/30 border-yellow-500/40',
    label: 'SUSPICIOUS',
    Icon: AlertTriangle,
    textColor: 'text-yellow-400',
  },
};

const LANES = 5;

function generatePacket(id: number): Packet {
  const rand = Math.random();
  const type: PacketType = rand > 0.55 ? 'safe' : rand > 0.28 ? 'blocked' : 'suspicious';
  return { id, type, lane: Math.floor(Math.random() * LANES) };
}

export default function FirewallSection() {
  const [packets, setPackets] = useState<Packet[]>([]);
  const [stats, setStats] = useState({ blocked: 0, passed: 0, suspicious: 0 });
  const idRef = useRef(0);

  const addPacket = useCallback(() => {
    idRef.current += 1;
    const p = generatePacket(idRef.current);
    setPackets((prev) => [...prev.slice(-12), p]);
    setStats((prev) => ({
      blocked: prev.blocked + (p.type === 'blocked' ? 1 : 0),
      passed: prev.passed + (p.type === 'safe' ? 1 : 0),
      suspicious: prev.suspicious + (p.type === 'suspicious' ? 1 : 0),
    }));
  }, []);

  useEffect(() => {
    const timer = setInterval(addPacket, 900);
    return () => clearInterval(timer);
  }, [addPacket]);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="Firewall visualization">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-100 h-150 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at right center, rgba(59,225,155,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <SectionHeading
              label="Firewall"
              title="Traffic Inspection in"
              highlight="Real Time"
              description="AUTOMA's firewall inspects every packet entering your network. Malicious connections are dropped immediately. Legitimate traffic flows without interruption."
              align="left"
            />

            <div className="mt-10 space-y-4">
              {[
                { Icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20', label: 'Safe traffic', desc: 'Authorized connections pass through instantly.' },
                { Icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20', label: 'Malicious traffic', desc: 'Threats are dropped before they reach your network.' },
                { Icon: AlertTriangle, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', label: 'Suspicious activity', desc: 'Flagged for review with detailed inspection logs.' },
              ].map(({ Icon, color, bg, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`shrink-0 w-8 h-8 rounded-lg border ${bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { label: 'Passed', value: stats.passed, color: 'text-green-400' },
                { label: 'Blocked', value: stats.blocked, color: 'text-red-400' },
                { label: 'Flagged', value: stats.suspicious, color: 'text-yellow-400' },
              ].map(({ label, value, color }) => (
                <div key={label} className="bg-white/3 border border-white/7 rounded-xl p-3 text-center">
                  <motion.span
                    key={value}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className={`block text-xl font-bold font-mono ${color}`}
                  >
                    {value}
                  </motion.span>
                  <span className="text-slate-600 text-[10px] font-mono tracking-wider uppercase mt-0.5 block">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-700 text-[10px] font-mono mt-2 tracking-wider uppercase">
              Demo — session counters only
            </p>
          </div>

          {/* Right: visual */}
          <div className="relative" aria-label="Firewall traffic visualization (demo)" aria-hidden="true">
            <div className="relative bg-surface-800 border border-white/8 rounded-2xl overflow-hidden p-6 shadow-2xl shadow-black/60">

              {/* INTERNET */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-slate-500" />
                <span className="text-slate-500 text-[10px] font-mono tracking-[0.18em] uppercase">
                  Internet / Incoming Traffic
                </span>
              </div>

              {/* Packet lanes */}
              <div className="flex justify-between gap-2 mb-0 relative" style={{ height: '100px' }}>
                {Array.from({ length: LANES }).map((_, lane) => (
                  <div key={lane} className="relative flex-1 overflow-hidden flex justify-center">
                    {/* Lane line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/4" />
                    {/* Arrow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-700 text-xs leading-none">↓</div>

                    <AnimatePresence>
                      {packets
                        .filter((p) => p.lane === lane)
                        .slice(-2)
                        .map((p) => {
                          const cfg = packetConfig[p.type];
                          return (
                            <motion.div
                              key={p.id}
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 80, opacity: [0, 1, 1, p.type !== 'safe' ? 0 : 1] }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 1.2, ease: 'easeIn' }}
                              className={`absolute top-0 w-5 h-5 rounded border ${cfg.color} flex items-center justify-center`}
                            >
                              <cfg.Icon className={`w-2.5 h-2.5 ${cfg.textColor}`} />
                            </motion.div>
                          );
                        })}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Firewall block */}
              <div className="relative border border-brand-400/25 bg-brand-400/4 rounded-xl p-4 my-1">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-400/40 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-400/40 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-400/40 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-400/40 rounded-br-xl" />

                <div className="flex items-center gap-2 justify-center mb-3">
                  <Shield className="w-4 h-4 text-brand-400" />
                  <span className="text-brand-400 text-[11px] font-mono font-semibold tracking-[0.2em] uppercase">
                    AUTOMA FIREWALL
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400 pulse-green" />
                </div>
                <div className="flex justify-around text-center">
                  <div>
                    <div className="text-[9px] font-mono text-green-400 tracking-wider">✓ SAFE</div>
                    <div className="text-[9px] font-mono text-green-400/50">PASS</div>
                  </div>
                  <div className="w-px bg-white/6" />
                  <div>
                    <div className="text-[9px] font-mono text-red-400 tracking-wider">✕ MALICIOUS</div>
                    <div className="text-[9px] font-mono text-red-400/50">BLOCK</div>
                  </div>
                  <div className="w-px bg-white/6" />
                  <div>
                    <div className="text-[9px] font-mono text-yellow-400 tracking-wider">⚠ SUSPECT</div>
                    <div className="text-[9px] font-mono text-yellow-400/50">REVIEW</div>
                  </div>
                </div>
              </div>

              {/* Safe traffic continues down */}
              <div className="flex justify-around mt-1 mb-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="relative flex-1 flex justify-center" style={{ height: '60px' }}>
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-green-500/20" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-green-700 text-xs">↓</div>
                    <motion.div
                      animate={{ y: [0, 50] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                      className="absolute top-0 w-3 h-3 rounded border bg-green-500/30 border-green-500/50"
                    />
                  </div>
                ))}
              </div>

              {/* Protected network */}
              <div className="flex items-center justify-center gap-2 border border-green-500/15 bg-green-500/3 rounded-xl py-3">
                <Server className="w-4 h-4 text-green-400/60" />
                <span className="text-green-400/60 text-[10px] font-mono tracking-[0.18em] uppercase">
                  Protected Network
                </span>
              </div>

              {/* Scan line */}
              <div className="scan-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
