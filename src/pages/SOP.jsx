import React from 'react';
import RetroWindow from '../components/RetroWindow';
import HologramCard from '../components/HologramCard';
import { sopData } from '../data/sop';
import { ScrollText, Terminal } from 'lucide-react';

export default function SOP() {
  return (
    <RetroWindow title="STATEMENT OF PURPOSE // MISSION MANIFESTO" id="sop">
      <div className="space-y-6">
        <HologramCard title={sopData.title} subtitle={sopData.subtitle}>
          <div className="space-y-4 font-chakra text-sm md:text-base leading-relaxed text-gray-200">
            <div className="p-4 rounded-lg bg-[#0a0518]/90 border border-cyberPurple/50 space-y-4">
              <div className="flex items-center gap-2 text-hotPink font-mono text-xs border-b border-cyberPurple/40 pb-2">
                <Terminal className="w-4 h-4 animate-pulse" />
                <span>DECLARATION_FILE // INTENT_AND_ASPIRATIONS</span>
              </div>
              
              {sopData.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-gray-200 indent-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-neonCyan pt-2 border-t border-neonCyan/20">
              <span className="flex items-center gap-1.5 text-neonGreen">
                <ScrollText className="w-4 h-4" /> AUTHENTICATED STATEMENT
              </span>
              <span className="text-hotPink">PANNATORN THONGRAK</span>
            </div>
          </div>
        </HologramCard>
      </div>
    </RetroWindow>
  );
}
