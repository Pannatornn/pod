'use client';

import { projects, skills } from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ArchiveShell from './components/ArchiveShell';
import Image from 'next/image';

export default function Home(){
 return <ArchiveShell><main className="legacy-site">
  <Header />
  <Hero />

  <section id="about" className="legacy-about">
   <div>
    <p className="legacy-kicker">01 / PROFILE</p>
    <h2>Pannatorn<br/>Thongrak.</h2>
    <p>Robotics Engineering Portfolio — นักสร้างสรรค์ด้าน Robotics, Programming, Embedded System และ AI</p>
   </div>
   <div className="profile-panel">
    <strong>ENGINEER PROFILE</strong>
    <p>Arduino IDE · Python · C++ · HTML5 · CSS3 · JavaScript · Flask</p>
   </div>
  </section>

  <section id="projects" className="legacy-section legacy-projects">
   <div className="legacy-heading"><p className="legacy-kicker">02 / PROJECT DATABASE</p><h2>Selected<br/>Projects.</h2></div>
   <div className="legacy-project-list">{projects.map(project=><article key={project.title} className="legacy-project-card"><div className="legacy-project-image"><Image src={project.image} alt={project.title} fill/></div><div><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div>
  </section>

  <Skills skills={skills}/>

  <section id="contact" className="legacy-section contact-box">
    <p className="legacy-kicker">03 / CONTACT</p>
    <h2>Let's build<br/>something.</h2>
    <p>Pannatorn Thongrak · Robotics & Code Engineering</p>
  </section>
 </main></ArchiveShell>;
}
