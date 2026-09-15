import React from 'react';
import { motion } from 'framer-motion';

export default function SkillBar({ name, level, category }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center text-xs md:text-sm font-mono">
        <span className="text-neonCyan font-bold tracking-wider">{name}</span>
        <span className="text-hotPink font-bold">{level}%</span>
      </div>

      <div className="h-3 w-full bg-[#0a0a20] rounded border border-neonCyan/30 p-0.5 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyberPurple via-hotPink to-neonCyan rounded-sm relative shadow-[0_0_10px_#00FFFF]"
        >
          {/* Pixel glow line effect */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-white animate-pulse" />
        </motion.div>
      </div>

      {category && (
        <span className="text-[10px] text-gray-400 font-mono italic block text-right">
          [{category}]
        </span>
      )}
    </div>
  );
}
