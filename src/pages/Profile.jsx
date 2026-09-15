import React from 'react';
import RetroWindow from '../components/RetroWindow';
import HologramCard from '../components/HologramCard';
import SkillBar from '../components/SkillBar';
import { profileData } from '../data/profile';
import { GraduationCap, Code, Cpu, Music, Bot, BrainCircuit, Zap, ShieldCheck } from 'lucide-react';

const talentIcons = { Code, Cpu, Music };
const interestIcons = { Bot, BrainCircuit, Zap };

export default function Profile() {
  return (
    <RetroWindow title="PROFILE // USER RPG CHARACTER SHEET" id="profile">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Character Avatar & Quick System Badge */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-xl overflow-hidden border-2 border-hotPink shadow-[0_0_25px_rgba(255,0,128,0.4)] bg-[#0c051a]">
            <img
              src={profileData.avatarPlaceholder}
              alt={profileData.nameEN}
              className="w-full h-64 md:h-72 object-cover filter brightness-95 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-neonGreen px-2 py-0.5 rounded bg-neonGreen/10 border border-neonGreen/40 font-bold">
                SYSTEM OPERATOR ID: {profileData.systemId}
              </span>
              <h2 className="text-xl md:text-2xl font-orbitron font-bold text-white mt-1 text-glow-cyan">
                {profileData.nameTH}
              </h2>
              <p className="text-xs text-hotPink font-mono font-semibold">
                {profileData.nameEN} (Nickname: {profileData.nickname})
              </p>
            </div>
          </div>

          {/* System Integrity & Hardware Spec Box */}
          <HologramCard title="SYSTEM INTEGRITY" subtitle="OPERATOR HARDWARE SPEC">
            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="flex justify-between items-center border-b border-neonCyan/20 pb-2">
                <span className="text-neonCyan flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-neonGreen" /> OPERATOR:
                </span>
                <span className="text-white font-bold">PAN (ปัน)</span>
              </div>
              <div className="flex justify-between items-center border-b border-neonCyan/20 pb-2">
                <span className="text-neonCyan">CORE FOCUS:</span>
                <span className="text-hotPink font-bold">ROBOTICS & AI</span>
              </div>
              <div className="flex justify-between items-center border-b border-neonCyan/20 pb-2">
                <span className="text-neonCyan">PRIMARY LANG:</span>
                <span className="text-neonGreen font-bold">C++ / PYTHON</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neonCyan">SYSTEM STATUS:</span>
                <span className="text-retroOrange font-bold animate-pulse">100% OPERATIONAL</span>
              </div>
            </div>
          </HologramCard>
        </div>

        {/* RIGHT: RPG Stats, Education, Skills, Talents */}
        <div className="lg:col-span-7 space-y-6">
          {/* General Info Card */}
          <HologramCard title="CHARACTER BIOGRAPHY" subtitle="BASIC STATS & DOB">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-chakra">
              <div>
                <span className="text-xs text-gray-400 font-mono block">NAME:</span>
                <span className="text-neonCyan font-bold">{profileData.nameTH}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-mono block">DATE OF BIRTH:</span>
                <span className="text-hotPink font-bold">{profileData.dob}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs text-gray-400 font-mono block">CURRENT SPECIALIZATION:</span>
                <span className="text-neonGreen font-bold">{profileData.title}</span>
              </div>
            </div>
          </HologramCard>

          {/* Education */}
          <HologramCard title="EDUCATION CHRONICLE" subtitle="SCHOOL LOGS">
            <div className="space-y-3 font-chakra">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded bg-[#0a0518]/70 border border-neonCyan/20">
                  <GraduationCap className="w-5 h-5 text-hotPink shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-neonCyan font-bold">{edu.level}</span>
                      <span className="text-[10px] font-mono text-neonGreen px-1.5 py-0.5 rounded bg-neonGreen/10">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-white mt-0.5">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </HologramCard>

          {/* Animated Skills */}
          <HologramCard title="TECHNICAL SKILL METRICS" subtitle="ANIMATES ON VISIBLE">
            <div className="space-y-3">
              {profileData.skills.map((skill, idx) => (
                <SkillBar
                  key={idx}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                />
              ))}
            </div>
          </HologramCard>

          {/* Talents & Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Talents */}
            <div className="p-4 rounded-lg bg-[#0a0518]/80 border border-hotPink/40 space-y-3">
              <h4 className="font-orbitron font-bold text-xs text-hotPink tracking-wider">
                ⚡ SPECIAL TALENTS
              </h4>
              {profileData.talents.map((t, idx) => {
                const IconComponent = talentIcons[t.icon] || Code;
                return (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-chakra">
                    <IconComponent className="w-4 h-4 text-neonCyan shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{t.title}</span>
                      <span className="text-gray-400 text-[11px]">{t.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interests */}
            <div className="p-4 rounded-lg bg-[#001524]/80 border border-neonCyan/40 space-y-3">
              <h4 className="font-orbitron font-bold text-xs text-neonCyan tracking-wider">
                🤖 CORE INTERESTS
              </h4>
              {profileData.interests.map((i, idx) => {
                const IconComponent = interestIcons[i.icon] || Bot;
                return (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-chakra">
                    <IconComponent className="w-4 h-4 text-hotPink shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{i.title}</span>
                      <span className="text-gray-400 text-[11px]">{i.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
}
