import React from 'react';
import RetroWindow from '../components/RetroWindow';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Cpu } from 'lucide-react';

export default function Projects() {
  return (
    <RetroWindow title="PROJECT ARCHIVE // FUTURISTIC ENGINEERING DATABASE" id="projects">
      <div className="space-y-6">
        <div className="border-b border-neonCyan/20 pb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-orbitron font-bold text-xl text-neonCyan text-glow-cyan flex items-center gap-2">
              <Cpu className="w-5 h-5 text-hotPink animate-pulse" /> ENGINEERING PROJECTS
            </h2>
            <p className="font-chakra text-xs text-hotPink mt-1">
              CLICK ANY CARD TO EXPAND FULL DATABASE SYSTEM FILE & SPECIFICATIONS
            </p>
          </div>
          <span className="font-mono text-xs text-neonGreen px-3 py-1 rounded bg-neonGreen/10 border border-neonGreen/40">
            TOTAL FILES: {projectsData.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </RetroWindow>
  );
}
