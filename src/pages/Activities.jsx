import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from '../components/RetroWindow';
import HologramCard from '../components/HologramCard';
import { activitiesData } from '../data/activities';
import { Activity, MapPin, Calendar, Award, FileCheck, X, ZoomIn } from 'lucide-react';

export default function Activities() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <RetroWindow title="ACTIVITIES // FRONTIER CAMPS & TRAINING LOG" id="activities">
      <div className="space-y-6">
        <div className="border-b border-neonCyan/20 pb-4">
          <h2 className="font-orbitron font-bold text-xl text-neonCyan text-glow-cyan flex items-center gap-2">
            <Activity className="w-5 h-5 text-hotPink animate-pulse" /> CAMP ACTIVITIES & WORKSHOPS
          </h2>
          <p className="font-chakra text-xs text-hotPink mt-1">
            RECORD OF ROBOTICS & COMPUTER ENGINEERING CAMPS PARTICIPATION
          </p>
        </div>

        <div className="space-y-8">
          {activitiesData.map((act) => (
            <HologramCard key={act.id} title={act.title} subtitle={`TAG: ${act.tag}`}>
              <div className="space-y-4 font-chakra">
                {/* Location & Date Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neonGreen border-b border-neonCyan/20 pb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-hotPink" /> {act.location}
                  </span>
                  <span className="flex items-center gap-1 text-neonCyan">
                    <Calendar className="w-4 h-4" /> {act.date}
                  </span>
                </div>

                {/* Optional Award Banner */}
                {act.award && (
                  <div className="p-3 rounded bg-hotPink/20 border border-hotPink text-white font-orbitron font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,128,0.4)]">
                    <Award className="w-5 h-5 text-yellow-400 animate-bounce" />
                    <span>{act.award}</span>
                  </div>
                )}

                {/* Uniform Cropped Image Gallery Grid */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-neonCyan flex items-center gap-1">
                    📸 ACTIVITY PHOTO GALLERY (คลิกภาพเพื่อดูขนาดขยาย):
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {act.images.map((imgObj, idx) => {
                      const imgUrl = typeof imgObj === 'string' ? imgObj : imgObj.url;
                      const caption = typeof imgObj === 'string' ? `Image #${idx + 1}` : imgObj.caption;

                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedImage({ url: imgUrl, caption })}
                          className="group relative aspect-[16/10] rounded-lg overflow-hidden border-2 border-neonCyan/40 bg-black cursor-pointer hover:border-hotPink shadow-[0_0_12px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,0,128,0.5)] transition-all"
                        >
                          <img
                            src={imgUrl}
                            alt={caption}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-95 contrast-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                            <span className="text-[10px] font-mono text-neonCyan line-clamp-1 flex items-center gap-1">
                              <ZoomIn className="w-3 h-3 text-hotPink shrink-0" /> {caption}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Official Certificate Proof Card (If available for activity) */}
                {act.certificate && (
                  <div className="p-3.5 rounded-lg bg-[#001524]/90 border border-neonGreen/40 flex flex-col sm:flex-row items-center gap-4">
                    <div
                      onClick={() => setSelectedImage({ url: act.certificate.url, caption: act.certificate.title })}
                      className="relative w-full sm:w-48 aspect-[16/11] rounded overflow-hidden border-2 border-neonGreen shadow-[0_0_15px_#39FF14] cursor-pointer shrink-0 group"
                    >
                      <img src={act.certificate.url} alt={act.certificate.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-neonGreen animate-pulse" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-1 text-xs font-mono">
                      <span className="text-neonGreen font-bold flex items-center gap-1">
                        <FileCheck className="w-4 h-4" /> OFFICIAL CERTIFICATE PROOF
                      </span>
                      <h4 className="text-white font-bold text-sm leading-snug">{act.certificate.title}</h4>
                      <p className="text-gray-400 text-[11px]">ISSUED BY: {act.certificate.issuer}</p>
                    </div>
                  </div>
                )}

                {/* Description Text */}
                <div className="bg-[#0a0518]/90 p-4 rounded-lg border border-neonCyan/30 space-y-2 text-gray-200 text-sm leading-relaxed">
                  {act.description.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </HologramCard>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full retro-glass rounded-xl border-2 border-neonCyan overflow-hidden flex flex-col"
            >
              <div className="bg-[#050510] px-4 py-2 border-b border-neonCyan flex items-center justify-between font-mono text-xs text-neonCyan">
                <span>📸 ENLARGED PHOTO PREVIEW</span>
                <button onClick={() => setSelectedImage(null)} className="p-1 rounded bg-hotPink text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 bg-black max-h-[80vh] flex flex-col items-center justify-center">
                <img src={selectedImage.url} alt="" className="max-h-[70vh] w-auto object-contain rounded border border-neonCyan/30" />
                <p className="mt-3 text-xs md:text-sm font-mono text-neonCyan text-center bg-[#050510] px-4 py-1.5 rounded border border-neonCyan/40">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </RetroWindow>
  );
}
