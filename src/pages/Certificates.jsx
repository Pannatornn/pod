import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from '../components/RetroWindow';
import CertificateCard from '../components/CertificateCard';
import { certificatesData } from '../data/certificates';
import { Award, Trophy, X } from 'lucide-react';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <RetroWindow title="CERTIFICATES // ACHIEVEMENT UNLOCK SYSTEM" id="certificates">
      <div className="space-y-6">
        <div className="border-b border-neonCyan/20 pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-orbitron font-bold text-xl text-neonCyan text-glow-cyan flex items-center gap-2">
              <Trophy className="w-5 h-5 text-hotPink animate-pulse" /> UNLOCKED ACHIEVEMENTS & CERTIFICATES
            </h2>
            <p className="font-chakra text-xs text-hotPink mt-1">
              GAME-STYLE UNLOCKED TROPHIES & CERTIFICATION BADGES
            </p>
          </div>
          <span className="font-mono text-xs text-neonGreen px-3 py-1 rounded bg-neonGreen/10 border border-neonGreen/40 font-bold">
            UNLOCKED: {certificatesData.length} / {certificatesData.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onPreview={cert.image ? () => setSelectedImage({ url: cert.image, caption: cert.title }) : null}
            />
          ))}
        </div>
      </div>

      {/* Enlarged Certificate Preview Modal */}
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
                <span>🏆 ENLARGED CERTIFICATE PREVIEW</span>
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
