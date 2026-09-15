import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import BootSequence from './components/BootSequence';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';

import Profile from './pages/Profile';
import Transcript from './pages/Transcript';
import SOP from './pages/SOP';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Activities from './pages/Activities';
import Certificates from './pages/Certificates';

const sectionIds = ['profile', 'transcript', 'sop', 'projects', 'experiences', 'activities', 'certificates'];

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeSection, setActiveSection] = useState('profile');

  // Initialize Lenis Smooth Scroll & Precise ScrollSpy
  useEffect(() => {
    if (!booting) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Precise ScrollSpy Observer
      const handleScrollSpy = () => {
        const threshold = window.innerHeight * 0.35; // Trigger when section reaches top 35% of screen
        
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= threshold && rect.bottom >= threshold) {
              setActiveSection(id);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScrollSpy, { passive: true });
      handleScrollSpy();

      return () => {
        lenis.destroy();
        window.removeEventListener('scroll', handleScrollSpy);
      };
    }
  }, [booting]);

  const handleSelectSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 90; // Offset for fixed top navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] text-gray-100 relative font-chakra cyber-grid overflow-x-hidden">
      {/* CRT Overlay */}
      <div className="crt-overlay" />

      {/* Boot Sequence Screen */}
      <AnimatePresence>
        {booting && (
          <BootSequence onComplete={() => setBooting(false)} />
        )}
      </AnimatePresence>

      {!booting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col min-h-screen"
        >
          {/* Always Visible Fixed Top Holographic Navigation */}
          <Navigation
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
          />

          {/* Main Full-Width Landing Scroll Layout */}
          <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 space-y-16 pt-20 pb-24">
            {/* Landing Motion Hero Banner */}
            <HeroSection onScrollDown={() => handleSelectSection('profile')} />

            {/* Scroll-Down Motion Sections */}
            <Profile />
            <Transcript />
            <SOP />
            <Projects />
            <Experience />
            <Activities />
            <Certificates />
          </main>

          {/* Cyberpunk Footer */}
          <footer className="border-t border-neonCyan/40 bg-[#03030a] py-6 px-4 text-center font-mono text-xs text-gray-400 space-y-2 relative z-10">
            <p className="text-neonCyan">
              PANNATORN THONGRAK (ปัณณธร ทองรักษ์ - PAN) // ROBOTICS & AI ENGINEER PORTFOLIO
            </p>
            <p className="text-hotPink text-[10px] tracking-widest uppercase">
              1980s-90s RETRO FUTURISTIC INTERACTIVE LANDING OS ARCHIVE
            </p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
