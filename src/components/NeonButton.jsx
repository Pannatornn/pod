import React from 'react';
import { motion } from 'framer-motion';

export default function NeonButton({ children, onClick, active = false, icon: Icon, className = "" }) {
  // Simple audio frequency simulation effect on click
  const playClickSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Audio context fallbacks
    }
  };

  const handleClick = (e) => {
    playClickSound();
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, x: 5 }}
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      className={`relative group w-full text-left px-4 py-3 rounded-md font-orbitron text-xs md:text-sm tracking-wider font-bold transition-all duration-300 flex items-center justify-between border ${
        active
          ? 'bg-gradient-to-r from-hotPink/30 via-cyberPurple/40 to-transparent border-hotPink text-white shadow-[0_0_20px_rgba(255,0,128,0.6)]'
          : 'bg-[#0a0a1a]/80 border-neonCyan/30 text-neonCyan/80 hover:text-neonCyan hover:border-neonCyan hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]'
      } ${className}`}
    >
      {/* Left Hologram Accent Bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-md transition-colors ${
        active ? 'bg-hotPink shadow-[0_0_10px_#FF0080]' : 'bg-transparent group-hover:bg-neonCyan'
      }`} />

      <div className="flex items-center gap-3 pl-2">
        {Icon && <Icon className={`w-4 h-4 transition-transform group-hover:rotate-12 ${active ? 'text-hotPink' : 'text-neonCyan'}`} />}
        <span>{children}</span>
      </div>

      {/* Arrow indicator */}
      <span className={`text-xs transition-transform group-hover:translate-x-1 ${active ? 'text-hotPink' : 'text-neonCyan/50 group-hover:text-neonCyan'}`}>
        ►
      </span>
    </motion.button>
  );
}
