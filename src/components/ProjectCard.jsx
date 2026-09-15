import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, CheckCircle, Award, Wrench, Zap, Layers, FileCheck } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ url: project.mainImage || project.image, caption: project.name }];

  const certImages = project.certificates || [];

  return (
    <>
      {/* 3D Tilt Glass Holographic Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          setActiveImageIndex(0);
          setSelectedCertIndex(0);
          setIsOpen(true);
        }}
        className="group relative cursor-pointer rounded-xl border border-neonCyan/40 bg-gradient-to-br from-[#0c051a]/90 via-[#050510]/95 to-[#001829]/90 p-5 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:border-hotPink hover:shadow-[0_0_30px_rgba(255,0,128,0.4)] transition-all overflow-hidden"
      >
        {/* Hologram scanline effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hotPink/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none" />

        {/* Top Header Card Info */}
        <div className="flex items-center justify-between border-b border-neonCyan/20 pb-3 mb-4">
          <span className="font-mono text-xs text-hotPink font-bold tracking-widest">
            [{project.id}]
          </span>
          <span className="font-mono text-xs text-neonGreen px-2 py-0.5 rounded border border-neonGreen/40 bg-neonGreen/10 font-bold">
            YEAR: {project.year}
          </span>
        </div>

        {/* Image Display */}
        <div className="relative h-48 rounded-lg overflow-hidden border border-neonCyan/30 mb-4 group-hover:border-hotPink/60 transition-colors">
          <img
            src={project.mainImage || project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono bg-[#050510]/90 text-neonCyan px-2 py-0.5 rounded border border-neonCyan/40"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-mono bg-hotPink/30 text-white px-1.5 py-0.5 rounded border border-hotPink">
                +{project.techStack.length - 4} MORE
              </span>
            )}
          </div>
        </div>

        {/* Title & Short Overview */}
        <h3 className="font-orbitron font-bold text-base md:text-lg text-neonCyan group-hover:text-hotPink transition-colors mb-1 line-clamp-1">
          {project.name}
        </h3>
        {project.nameTH && (
          <p className="font-chakra text-xs text-neonGreen font-semibold mb-2 line-clamp-1">
            {project.nameTH}
          </p>
        )}
        <p className="font-chakra text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
          {project.overview || project.description}
        </p>

        {/* Action Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-neonCyan/20 text-xs text-neonCyan font-mono">
          <span className="flex items-center gap-1 group-hover:text-hotPink">
            <Cpu className="w-3.5 h-3.5" /> ACCESS FULL DATABASE
          </span>
          <span className="text-hotPink group-hover:translate-x-1 transition-transform">
            EXPAND ►
          </span>
        </div>
      </motion.div>

      {/* Expandable Full Project Database Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full retro-glass rounded-xl border-2 border-hotPink shadow-[0_0_50px_rgba(255,0,128,0.5)] overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Modal Retro Header Bar */}
              <div className="bg-gradient-to-r from-hotPink/40 via-cyberPurple/60 to-neonCyan/40 px-6 py-3 border-b border-hotPink flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 text-white font-orbitron text-xs md:text-sm font-bold">
                  <Cpu className="w-4 h-4 text-hotPink animate-pulse" />
                  <span>PROJECT DATABASE FILE // {project.id}</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md bg-hotPink hover:bg-hotPink/80 text-white transition-colors shadow-[0_0_10px_#FF0080]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 font-chakra">
                {/* Project Header Banner */}
                <div className="border-b border-neonCyan/30 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-hotPink bg-hotPink/15 px-2.5 py-0.5 rounded border border-hotPink">
                      YEAR {project.year}
                    </span>
                    <span className="text-xs font-mono text-neonGreen">
                      STATUS: VERIFIED PROJECT
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-orbitron font-bold text-white mt-2 text-glow-cyan">
                    {project.name}
                  </h2>
                  {project.nameTH && (
                    <p className="text-sm md:text-base text-neonGreen font-semibold mt-1">
                      {project.nameTH}
                    </p>
                  )}
                </div>

                {/* 1. Project Photo Gallery */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-neonCyan tracking-widest uppercase flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neonCyan" /> // PROJECT WORK GALLERY (ภาพถ่ายการทำงาน)
                  </h4>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-neonCyan/50 bg-black">
                    <img
                      src={galleryImages[activeImageIndex]?.url}
                      alt={galleryImages[activeImageIndex]?.caption || project.name}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 text-xs font-mono text-neonCyan flex items-center justify-between">
                      <span>📸 {galleryImages[activeImageIndex]?.caption}</span>
                      <span className="text-hotPink font-bold">
                        {activeImageIndex + 1} / {galleryImages.length}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  {galleryImages.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded overflow-hidden border-2 shrink-0 transition-all ${
                            activeImageIndex === idx
                              ? 'border-hotPink shadow-[0_0_10px_#FF0080] scale-105'
                              : 'border-neonCyan/30 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img.url} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Project Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-neonCyan tracking-widest uppercase flex items-center gap-2">
                    <Layers className="w-4 h-4 text-neonCyan" /> // PROJECT OVERVIEW
                  </h4>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed bg-[#0a0518]/90 p-4 rounded-lg border border-neonCyan/30">
                    {project.overview || project.description}
                  </p>
                </div>

                {/* 3. Key Features & My Role Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Key Features */}
                  {project.keyFeatures && (
                    <div className="p-4 rounded-lg bg-[#001824]/90 border border-neonCyan/40 space-y-3">
                      <h4 className="text-xs font-mono text-neonCyan font-bold tracking-wider uppercase flex items-center gap-2">
                        <Zap className="w-4 h-4 text-neonCyan" /> KEY FEATURES
                      </h4>
                      <ul className="space-y-1.5 text-xs md:text-sm text-gray-200">
                        {project.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-hotPink font-bold">⚡</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* My Role */}
                  {project.myRoles && (
                    <div className="p-4 rounded-lg bg-[#140024]/90 border border-cyberPurple/50 space-y-3">
                      <h4 className="text-xs font-mono text-hotPink font-bold tracking-wider uppercase flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-hotPink" /> MY ROLE & RESPONSIBILITIES
                      </h4>
                      <ul className="space-y-1.5 text-xs md:text-sm text-gray-200">
                        {project.myRoles.map((roleItem, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-neonGreen font-bold">▸</span>
                            <span>{roleItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 4. Achievements & Awards */}
                {project.achievements && project.achievements.length > 0 && (
                  <div className="p-4 rounded-lg bg-[#1a0a00]/90 border border-retroOrange/50 space-y-3">
                    <h4 className="text-xs font-mono text-retroOrange font-bold tracking-wider uppercase flex items-center gap-2">
                      <Award className="w-4 h-4 text-retroOrange" /> ACHIEVEMENTS & AWARDS
                    </h4>
                    <ul className="space-y-2 text-xs md:text-sm text-gray-100 font-semibold">
                      {project.achievements.map((ach, idx) => (
                        <li key={idx} className="p-2.5 rounded bg-retroOrange/10 border border-retroOrange/30 flex items-start gap-2.5">
                          <span className="text-base shrink-0">🏆</span>
                          <span className="leading-snug">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 5. Separate Section for Official Certificates & Diplomas Proof */}
                {certImages.length > 0 && (
                  <div className="space-y-3 p-4 rounded-lg bg-[#001524]/80 border border-neonGreen/40">
                    <h4 className="text-xs font-mono text-neonGreen font-bold tracking-wider uppercase flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-neonGreen" /> // OFFICIAL CERTIFICATES & DIPLOMAS PROOF (เกียรติบัตรรับรองผลงาน)
                    </h4>
                    <p className="text-xs text-gray-300 font-mono">
                      เกียรติบัตรและหลักฐานรางวัลรับรองโครงการอย่างเป็นทางการ:
                    </p>

                    {/* Active Certificate Viewer */}
                    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden border border-neonGreen/50 bg-black">
                      <img
                        src={certImages[selectedCertIndex]?.url}
                        alt={certImages[selectedCertIndex]?.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/90 p-3 text-xs font-mono text-neonGreen flex flex-wrap items-center justify-between gap-2 border-t border-neonGreen/30">
                        <div>
                          <span className="font-bold text-white block">📜 {certImages[selectedCertIndex]?.title}</span>
                          <span className="text-gray-400 text-[10px]">ISSUER: {certImages[selectedCertIndex]?.issuer}</span>
                        </div>
                        <span className="text-hotPink font-bold">
                          CERT {selectedCertIndex + 1} / {certImages.length}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Thumbnail Selector */}
                    <div className="flex gap-2 overflow-x-auto pt-1 pb-2">
                      {certImages.map((cert, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedCertIndex(idx)}
                          className={`relative w-24 h-16 rounded overflow-hidden border-2 shrink-0 transition-all ${
                            selectedCertIndex === idx
                              ? 'border-neonGreen shadow-[0_0_12px_#39FF14] scale-105'
                              : 'border-neonCyan/30 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={cert.url} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono text-neonGreen tracking-widest uppercase mb-2">
                    // SYSTEM ARCHITECTURE & TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyberPurple/30 border border-cyberPurple rounded text-xs font-mono text-white shadow-[0_0_8px_rgba(157,0,255,0.4)]"
                      >
                        ⚡ {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-neonCyan/30 bg-[#050510] flex justify-end shrink-0">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-hotPink hover:bg-hotPink/80 text-white font-orbitron text-xs rounded border border-white font-bold transition-all shadow-[0_0_15px_rgba(255,0,128,0.6)]"
                >
                  CLOSE DATABASE FILE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
