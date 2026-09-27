import React from 'react';
import RetroWindow from '../components/RetroWindow';
import Timeline from '../components/Timeline';
import ContestGallery from '../components/ContestGallery';
import { experienceData, innovationContests, roboticsContests } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <RetroWindow title="EXPERIENCES" id="experiences">
      <div className="space-y-8">
        <ContestGallery
          contests={roboticsContests}
          id="robotics-contests"
          title="MITR PHOL ROBOTICS CHAMPIONSHIP"
          subtitle="MITR PHOL KRABYAI RATCHABURI GRAND ROBOTICS CHAMPIONSHIP 2024 ชิงถ้วยพระราชทาน สมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี และMITR PHOL KRABYAI RATCHABURI GRAND ROBOTICS CHAMPIONSHIP 2025 X TO BE NUMBER ONE ROBOT 2025 ชิงถ้วยพระราชทาน"
          grouped
        />
        <ContestGallery
          contests={innovationContests}
          id="innovation-contests"
          title="INNOVATION AWARDS"
          subtitle="ผลงานการแข่งขันนวัตกรรม"
        />
        <ContestGallery />

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
