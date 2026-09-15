import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Cpu, Bot, Zap, Code, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onScrollDown }) {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-between py-12 px-4 text-center overflow-hidden border-b border-neonCyan/30 mb-12">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Banner Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hotPink/15 border border-hotPink text-hotPink font-mono text-xs md:text-sm font-bold shadow-[0_0_15px_rgba(255,0,128,0.4)] mb-6"
      >
        <Terminal className="w-4 h-4 animate-pulse" />
        <span>OPERATOR DATABASE ARCHIVE v1.9.9.5 // PAN</span>
      </motion.div>

      {/* Main Title */}
      <div className="max-w-4xl w-full mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-orbitron font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-widest text-glow-cyan uppercase animate-glitch">
            PANNATORN THONGRAK
          </h1>
          <p className="font-orbitron text-neonCyan text-lg sm:text-2xl font-bold mt-2 tracking-wider drop-shadow-[0_0_10px_#00FFFF]">
            ปัณณธร ทองรักษ์ (Pan / ปัน)
          </p>
          <p className="font-chakra text-retroOrange text-sm sm:text-base font-semibold mt-3 tracking-widest uppercase">
            ⚡ ROBOTICS ⚡ ARTIFICIAL INTELLIGENCE ⚡ EMBEDDED SYSTEMS ⚡
          </p>
        </motion.div>

        {/* Clean Cyberpunk HUD Badges Grid (Replaces old misaligned 3D element) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto my-8 font-mono text-xs"
        >
          <div className="retro-glass p-4 rounded-lg border border-neonCyan/40 shadow-[0_0_15px_rgba(0,255,255,0.15)] flex flex-col items-center gap-2">
            <Bot className="w-6 h-6 text-hotPink animate-bounce" />
            <span className="text-neonCyan font-bold">ROBOTICS ARCHITECTURE</span>
            <span className="text-gray-400 text-[10px]">DJI RoboMaster & Autonomous</span>
          </div>

          <div className="retro-glass p-4 rounded-lg border border-hotPink/40 shadow-[0_0_15px_rgba(255,0,128,0.15)] flex flex-col items-center gap-2">
            <Cpu className="w-6 h-6 text-neonGreen animate-pulse" />
            <span className="text-neonGreen font-bold">EMBEDDED HARDWARE</span>
            <span className="text-gray-400 text-[10px]">Arduino, ESP32, C++</span>
          </div>

          <div className="retro-glass p-4 rounded-lg border border-neonCyan/40 shadow-[0_0_15px_rgba(0,255,255,0.15)] flex flex-col items-center gap-2">
            <Code className="w-6 h-6 text-retroOrange" />
            <span className="text-retroOrange font-bold">AI & VISION LAB</span>
            <span className="text-gray-400 text-[10px]">MicroPython & MQTT</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Prompt Indicator */}
      <motion.button
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="group cursor-pointer flex flex-col items-center gap-2 text-neonCyan font-mono text-xs md:text-sm font-bold tracking-widest transition-transform hover:scale-110 mt-4"
      >
        <span className="group-hover:text-hotPink transition-colors drop-shadow-[0_0_8px_#00FFFF]">
          [ SCROLL DOWN TO EXPLORE SYSTEM DATABASE ]
        </span>
        <div className="p-2 rounded-full border border-neonCyan/50 bg-neonCyan/10 group-hover:border-hotPink group-hover:bg-hotPink/20 transition-all animate-bounce shadow-[0_0_15px_rgba(0,255,255,0.4)]">
          <ChevronDown className="w-5 h-5 text-neonCyan group-hover:text-hotPink" />
        </div>
      </motion.button>
    </section>
  );
}
