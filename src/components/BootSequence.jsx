import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

const bootLogs = [
  "INITIALIZING NEON OS v1.9.9.5...",
  "CHECKING HARDWARE INTEGRITY... MEMORY 640K OK",
  "LOADING CORE MODULES: [ROBOTICS, AI, EMBEDDED, C++]",
  "ESTABLISHING SECURE CONNECTION TO PANNATORN DATABASE...",
  "DECRYPTING ARCHIVE FILES...",
  "SYSTEM STATUS: 100% OPERATIONAL",
  "WELCOME OPERATOR. ACCESS GRANTED."
];

export default function BootSequence({ onComplete }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex < bootLogs.length) {
      const line = bootLogs[currentLineIndex];
      let charIndex = 0;

      const timer = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText(line.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, 300);
        }
      }, 30);

      return () => clearInterval(timer);
    } else {
      setIsTyping(false);
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearInterval(finishTimer);
    }
  }, [currentLineIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-[#03030a] text-neonCyan font-mono flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none crt-overlay"
    >
      {/* Background Cyber Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-neonCyan/30 pb-4">
        <div className="flex items-center gap-2 text-hotPink font-orbitron text-xs md:text-sm tracking-widest">
          <Terminal className="w-5 h-5 animate-pulse" />
          <span>NEON_BOOT_LOADER.EXE</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-neonCyan/70">
          <span className="hidden sm:inline">SYS_TEMP: 32°C</span>
          <span className="flex items-center gap-1 text-neonGreen">
            <Zap className="w-4 h-4 animate-bounce" /> READY
          </span>
        </div>
      </div>

      {/* Center Terminal Content */}
      <div className="my-auto max-w-3xl w-full mx-auto space-y-4 font-mono text-sm md:text-lg">
        {bootLogs.slice(0, currentLineIndex).map((log, idx) => (
          <div key={idx} className="flex items-start gap-3 text-neonCyan/90 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
            <span className="text-hotPink font-bold">&gt;</span>
            <span>{log}</span>
          </div>
        ))}

        {currentLineIndex < bootLogs.length && (
          <div className="flex items-start gap-3 text-neonCyan drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]">
            <span className="text-hotPink font-bold animate-pulse">&gt;</span>
            <span>{displayedText}</span>
            <span className="w-2.5 h-5 bg-hotPink inline-block animate-pulse ml-1" />
          </div>
        )}

        {!isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-6 text-center text-neonGreen font-orbitron text-lg md:text-2xl font-bold tracking-wider animate-pulse drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]"
          >
            [ LAUNCHING NEON OS INTERFACE... ]
          </motion.div>
        )}
      </div>

      {/* Bottom Status */}
      <div className="flex items-center justify-between border-t border-neonCyan/30 pt-4 text-xs text-gray-500 font-mono">
        <div>SYS_VERSION: 1.9.9.5-PROD</div>
        <div className="text-hotPink animate-pulse">PANNATORN THONGRAK ARCHIVE</div>
      </div>
    </motion.div>
  );
}
