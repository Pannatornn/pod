import React from 'react';
import { motion } from 'framer-motion';

export default function HologramCard({ children, title, subtitle, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative p-5 rounded-lg border border-neonCyan/40 bg-gradient-to-br from-[#0c051a]/90 via-[#050510]/90 to-[#001524]/90 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.15)] group overflow-hidden ${className}`}
    >
      {/* Scanning Laser Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonCyan/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

      {title && (
        <div className="border-b border-neonCyan/30 pb-3 mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-orbitron font-bold text-sm md:text-base text-neonCyan tracking-wider text-glow-cyan">
              {title}
            </h3>
            {subtitle && <p className="text-xs text-hotPink font-mono mt-0.5">{subtitle}</p>}
          </div>
          <div className="w-2 h-2 rounded-full bg-neonGreen animate-ping" />
        </div>
      )}

      <div className="relative z-10 text-gray-200 text-sm">
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neonCyan" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-neonCyan" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-neonCyan" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neonCyan" />
    </motion.div>
  );
}
