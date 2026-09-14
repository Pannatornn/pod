'use client';

import Image from 'next/image';

type Project = {
 title:string;
 label:string;
 description:string;
 image:string;
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
      <p>{project.description}</p>
      <button>VIEW SYSTEM ↗</button>
    </div>
   </article>)}
  </div>
 </section>
}
