'use client';

import { projects, skills } from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Image from 'next/image';

export default function Home(){
 return <main className="legacy-site">
  <Header />
  <Hero />
  <section id="profile" className="legacy-about">
   <div><p className="legacy-kicker">01 / PROFILE</p><h2>Pannatorn<br/>Thongrak.</h2><p>Portfolio แนะนำตัว ประวัติ ความสนใจ และเป้าหมายด้าน Robotics, Programming และ Engineering</p></div>
  </section>
  <section id="project" className="legacy-section legacy-projects">
   <div className="legacy-project-list">{projects.map(project=><article key={project.title} className="legacy-project-card"><div className="legacy-project-image"><Image src={project.image} alt={project.title} fill/></div><div><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div>
  </section>
  <Skills skills={skills}/>
 </main>;
}
