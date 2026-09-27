import HeroSection from '../components/sections/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import CybersecuritySection from '../components/sections/CybersecuritySection';
import FirewallSection from '../components/sections/FirewallSection';
import SecurityDashboard from '../components/sections/SecurityDashboard';
import ProcessSection from '../components/sections/ProcessSection';
import StatsSection from '../components/sections/StatsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(53,230,162,0.08),transparent_32%),linear-gradient(180deg,#0a1010_0%,#070b0c_100%)] text-white">
      <HeroSection />
      <TrustStrip />
      <CybersecuritySection />
      <FirewallSection />
      <SecurityDashboard />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}