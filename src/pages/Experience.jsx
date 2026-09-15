import React from 'react';
import RetroWindow from '../components/RetroWindow';
import Timeline from '../components/Timeline';
import { experienceData } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <RetroWindow title="EXPERIENCES // VIDEO GAME MISSION LOG" id="experiences">
      <div className="space-y-6">
        <div className="border-b border-neonCyan/20 pb-4">
          <h2 className="font-orbitron font-bold text-xl text-neonCyan text-glow-cyan flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-hotPink animate-pulse" /> MISSION HISTORY LOGS
          </h2>
          <p className="font-chakra text-xs text-hotPink mt-1">
            CHRONOLOGICAL TIMELINE OF ENGINEERING MISSIONS & RESPONSIBILITIES
          </p>
        </div>

        <Timeline experiences={experienceData} />
      </div>
    </RetroWindow>
  );
}
