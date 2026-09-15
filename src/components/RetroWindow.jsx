import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Square, X, Terminal } from 'lucide-react';

export default function RetroWindow({ title, children, className = "", id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`retro-glass rounded-lg overflow-hidden border border-neonCyan/40 shadow-[0_0_20px_rgba(0,255,255,0.15)] relative ${className}`}
    >
      {/* Retro Header Bar */}
      <div className="bg-gradient-to-r from-[#12002b] via-[#002b3d] to-[#12002b] px-4 py-2 border-b border-neonCyan/40 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-hotPink animate-pulse" />
          <span className="font-orbitron text-xs md:text-sm tracking-wider text-neonCyan font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 hover:bg-yellow-400 flex items-center justify-center text-[8px] text-black">
            <Minus className="w-2.5 h-2.5" />
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-green-500/80 hover:bg-green-400 flex items-center justify-center text-[8px] text-black">
            <Square className="w-2 h-2" />
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-hotPink/80 hover:bg-hotPink flex items-center justify-center text-[8px] text-black">
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Window Content Body */}
      <div className="p-4 md:p-6 relative z-10">
        {children}
      </div>

      {/* Subtle Cyber Grid Overlay in Window */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none z-0" />
    </motion.div>
  );
}
