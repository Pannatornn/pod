import React from 'react';
import RetroWindow from '../components/RetroWindow';
import HologramCard from '../components/HologramCard';
import { transcriptData } from '../data/transcript';
import { FileText, Image as ImageIcon } from 'lucide-react';

export default function Transcript() {
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
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-dashed border-neonCyan/50 group bg-[#0a0518]/90 flex flex-col items-center justify-center p-4">
                  <img
                    src={rec.image}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <ImageIcon className="w-8 h-8 text-hotPink mb-2 animate-bounce" />
                    <span className="font-mono text-xs text-neonCyan font-bold">
                      {rec.placeholderText}
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
    </RetroWindow>
  );
}
