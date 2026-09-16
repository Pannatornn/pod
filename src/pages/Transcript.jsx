import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RetroWindow from '../components/RetroWindow';
import HologramCard from '../components/HologramCard';
import { transcriptData } from '../data/transcript';
import { FileText, ZoomIn, X } from 'lucide-react';

export default function Transcript() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <RetroWindow title="TRANSCRIPT // ACADEMIC RECORDS DATABASE" id="transcript">
      <div className="space-y-6">
        <div className="border-b border-neonCyan/20 pb-4">
          <h2 className="font-orbitron font-bold text-xl text-neonCyan text-glow-cyan">
            {transcriptData.title}
          </h2>
          <p className="font-chakra text-xs text-hotPink mt-1">
            {transcriptData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transcriptData.records.map((rec) => (
            <HologramCard key={rec.id} title={rec.title} subtitle={`RECORD ID: ${rec.id}`}>
              <div className="space-y-4">
                <div
                  onClick={() => setSelectedImage({ url: rec.image, caption: rec.title })}
                  className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-neonCyan/50 group bg-[#0a0518]/90 flex flex-col items-center justify-center p-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:border-hotPink hover:shadow-[0_0_25px_rgba(255,0,128,0.4)] transition-all"
                >
                  <img
                    src={rec.image}
                    alt={rec.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                    <ZoomIn className="w-9 h-9 text-hotPink mb-2 animate-bounce" />
                    <span className="font-mono text-xs text-neonCyan font-bold bg-[#050510]/90 px-3 py-1.5 rounded border border-neonCyan/40 flex items-center gap-1.5">
                      คลิกเพื่อดูภาพขยาย (Click to Zoom)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-neonCyan">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4 text-hotPink" /> VERIFIED ACADEMIC FILE
                  </span>
                  <span className="text-neonGreen">STATUS: ATTACHED</span>
                </div>
              </div>
            </HologramCard>
          ))}
        </div>
      </div>

      {/* Enlarged Transcript Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full retro-glass rounded-xl border-2 border-neonCyan overflow-hidden flex flex-col"
            >
              <div className="bg-[#050510] px-4 py-2.5 border-b border-neonCyan flex items-center justify-between font-mono text-xs text-neonCyan">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-hotPink" /> ENLARGED ACADEMIC TRANSCRIPT PREVIEW
                </span>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1 rounded bg-hotPink text-white hover:opacity-80 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 bg-black max-h-[85vh] flex flex-col items-center justify-center overflow-y-auto">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="max-h-[75vh] w-auto object-contain rounded border border-neonCyan/30 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                />
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
