import React, { useState, useEffect } from 'react';
import { User, FileText, ScrollText, Cpu, Briefcase, Activity, Award, Menu, X, Terminal } from 'lucide-react';

const menuItems = [
  { id: 'profile', label: 'PROFILE', icon: User },
  { id: 'transcript', label: 'TRANSCRIPT', icon: FileText },
  { id: 'sop', label: 'SOP', icon: ScrollText },
  { id: 'projects', label: 'PROJECTS', icon: Cpu },
  { id: 'experiences', label: 'EXPERIENCES', icon: Briefcase },
  { id: 'activities', label: 'ACTIVITIES', icon: Activity },
  { id: 'certificates', label: 'CERTIFICATES', icon: Award },
];

export default function Navigation({ activeSection, onSelectSection }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate live scroll progress bar percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const playSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  };

  const handleNavClick = (id) => {
    playSound();
    onSelectSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-[#050510]/95 backdrop-blur-xl border-b border-neonCyan/40 shadow-[0_4px_30px_rgba(0,255,255,0.3)] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left System Brand */}
        <button
          onClick={() => handleNavClick('profile')}
          className="flex items-center gap-2.5 text-left group shrink-0"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-hotPink animate-ping shadow-[0_0_10px_#FF0080]" />
          <div>
            <span className="font-orbitron font-extrabold text-sm md:text-base text-neonCyan tracking-widest text-glow-cyan group-hover:text-hotPink transition-colors">
              PAN.OS_v1.9.9.5
            </span>
            <span className="hidden sm:block text-[9px] font-mono text-neonGreen font-semibold">
              SYS_OPERATOR: PAN (ปัน)
            </span>
          </div>
        </button>

        {/* Desktop Top Horizontal Menu with Active Indicators */}
        <nav className="hidden xl:flex items-center gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 rounded-md font-orbitron text-xs tracking-wider font-bold transition-all duration-300 flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-hotPink/30 border-hotPink text-white shadow-[0_0_20px_rgba(255,0,128,0.8)] scale-105'
                    : 'bg-[#0a0a1a]/80 border-neonCyan/20 text-neonCyan/70 hover:text-neonCyan hover:border-neonCyan/60 hover:bg-neonCyan/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-hotPink animate-pulse' : 'text-neonCyan/70'}`} />
                <span>{item.label}</span>

                {/* Active Glowing Dot Indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-hotPink shadow-[0_0_8px_#FF0080]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Current Active Section Badge for Medium/Mobile Displays */}
        <div className="hidden sm:flex xl:hidden items-center gap-2 px-3 py-1 rounded bg-hotPink/20 border border-hotPink text-white font-orbitron text-xs font-bold">
          <span className="text-neonCyan">SECTION:</span>
          <span className="text-hotPink uppercase tracking-wider">{activeSection}</span>
        </div>

        {/* Mobile / Tablet Menu Toggle */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2.5 rounded-md bg-neonCyan/10 border border-neonCyan/50 text-neonCyan hover:text-hotPink hover:border-hotPink transition-colors shadow-[0_0_15px_rgba(0,255,255,0.2)]"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar (หลอดความคืบหน้าการเลื่อนหน้าจอ) */}
      <div className="w-full h-1 bg-[#0a0a20] relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyberPurple via-hotPink to-neonCyan transition-all duration-150 shadow-[0_0_12px_#00FFFF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="xl:hidden border-t border-neonCyan/30 bg-[#050510]/98 backdrop-blur-2xl p-4 space-y-3 font-chakra">
          <div className="text-center font-orbitron text-xs text-hotPink tracking-widest pb-2 border-b border-hotPink/30 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>SELECT DATABASE MODULE // CURRENT: {activeSection.toUpperCase()}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded font-orbitron text-xs tracking-wider font-bold transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-hotPink/35 border-hotPink text-white shadow-[0_0_15px_#FF0080]'
                      : 'bg-[#0a0a20] border-neonCyan/30 text-neonCyan/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-hotPink' : 'text-neonCyan'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
