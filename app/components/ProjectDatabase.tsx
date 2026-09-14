'use client';

import Image from 'next/image';

type Project = {
 title:string;
 label:string;
 description:string;
 image:string;
 tech?:string[];
 status?:string;
 github?:string;
};

export default function ProjectDatabase({projects}:{projects:Project[]}){
 return <section className="legacy-section project-database">
  <div className="legacy-heading">
   <p className="legacy-kicker">02 / PROJECT DATABASE</p>
   <h2>Robotics<br/>Laboratory.</h2>
  </div>
  <div className="project-lab-grid">
   {projects.map((project,index)=><article className="project-lab-card" key={project.title}>
    <div className="project-number">LAB_{String(index+1).padStart(2,'0')}</div>
    <div className="project-lab-image"><Image src={project.image} alt={project.title} fill /></div>
    <div className="project-info">
      <span>{project.label}</span>
      <h3>{project.title}</h3>
      <div className="project-status">STATUS: {project.status ?? 'ACTIVE'}</div>
      <p>{project.description}</p>
      <div className="tech-stack">
       {(project.tech ?? []).map(item=><span key={item}>{item}</span>)}
      </div>
      <div className="project-actions">
       <button>VIEW SYSTEM ↗</button>
       {project.github && <a href={project.github} target="_blank">GITHUB ↗</a>}
      </div>
    </div>
   </article>)}
  </div>
 </section>
}
