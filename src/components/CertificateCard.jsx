import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Unlock } from 'lucide-react';

export default function CertificateCard({ cert }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl border-2 border-neonCyan/50 bg-gradient-to-br from-[#0e0024]/90 via-[#050510]/95 to-[#001f33]/90 p-5 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:border-hotPink hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] transition-all overflow-hidden group"
    >
      {/* Game Achievement Badge Banner */}
      <div className="flex items-center justify-between border-b border-neonCyan/30 pb-3 mb-4">
        <span className="font-mono text-xs text-neonGreen font-bold flex items-center gap-1.5 px-2.5 py-1 rounded bg-neonGreen/10 border border-neonGreen/40">
          <Unlock className="w-3.5 h-3.5 animate-pulse" /> {cert.badge || "UNLOCKED ACHIEVEMENT"}
        </span>
        <span className="font-mono text-xs text-hotPink font-bold">
          YEAR {cert.year}
        </span>
      </div>

      {/* Icon & Certificate Title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-cyberPurple/30 border border-cyberPurple text-hotPink group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,0,128,0.4)]">
          <Award className="w-7 h-7" />
        </div>
        <div>
          <h3 className="font-orbitron font-bold text-sm md:text-base text-neonCyan group-hover:text-hotPink transition-colors leading-snug">
            {cert.title}
          </h3>
          <p className="font-chakra text-xs text-gray-400 mt-1">
            ISSUED BY: <span className="text-white font-semibold">{cert.issuer}</span>
          </p>
        </div>
      </div>

      {/* Category Tag */}
      <div className="flex items-center justify-between pt-3 border-t border-neonCyan/20 text-xs font-mono">
        <span className="text-retroOrange flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> {cert.category}
        </span>
        <span className="text-neonCyan/60 text-[10px] uppercase">
          SYS_ID: {cert.id}
        </span>
      </div>

      {/* Corner Pixels */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-neonCyan/40 group-hover:bg-hotPink transition-colors" />
    </motion.div>
  );
}
