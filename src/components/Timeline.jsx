import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Trophy, Activity, CheckSquare } from 'lucide-react';

const iconMap = {
  Cpu,
  Wifi,
  Trophy,
  Activity
};

export default function Timeline({ experiences }) {
  return (
    <div className="relative border-l-2 border-neonCyan/40 ml-4 md:ml-8 space-y-8 py-4">
      {experiences.map((exp, index) => {
        const IconComponent = iconMap[exp.icon] || Cpu;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-6 md:pl-10 group"
          >
            {/* Mission Node Pin */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#050510] border-2 border-hotPink flex items-center justify-center text-hotPink shadow-[0_0_15px_#FF0080] group-hover:scale-125 transition-transform">
              <IconComponent className="w-4 h-4" />
            </div>

            {/* Mission Log Box */}
            <div className="retro-glass rounded-xl p-5 border border-neonCyan/40 hover:border-hotPink transition-all shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,0,128,0.3)]">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neonCyan/20 pb-3 mb-3">
                <span className="font-orbitron font-bold text-xs md:text-sm text-hotPink tracking-wider">
                  [{exp.missionId}]
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-neonGreen/10 border border-neonGreen/40 text-neonGreen font-bold">
                  STATUS: {exp.status}
                </span>
              </div>

              {/* Organization & Role */}
              <h3 className="font-orbitron font-bold text-base md:text-lg text-neonCyan mb-1">
                {exp.organization}
              </h3>
              <p className="font-mono text-xs text-retroOrange font-semibold mb-3">
                ROLE: {exp.role} // {exp.duration}
              </p>

              {/* Objective & Achievement */}
              <div className="space-y-2 font-chakra text-xs md:text-sm text-gray-300">
                <div className="bg-[#0a001a]/60 p-3 rounded border border-cyberPurple/40">
                  <span className="text-hotPink font-mono font-bold block mb-1">
                    🎯 MISSION OBJECTIVE:
                  </span>
                  {exp.objective}
                </div>

                <div className="bg-[#001a14]/60 p-3 rounded border border-neonGreen/40 text-gray-200">
                  <span className="text-neonGreen font-mono font-bold flex items-center gap-1 mb-1">
                    <CheckSquare className="w-3.5 h-3.5" /> MISSION ACHIEVEMENT:
                  </span>
                  {exp.achievement}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
