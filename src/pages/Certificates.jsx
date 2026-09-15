import React from 'react';
import RetroWindow from '../components/RetroWindow';
import CertificateCard from '../components/CertificateCard';
import { certificatesData } from '../data/certificates';
import { Award, Trophy } from 'lucide-react';

export default function Certificates() {
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
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}
