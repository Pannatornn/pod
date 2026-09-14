'use client';

import { projects, skills } from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import EngineerStats from './components/EngineerStats';
import ProjectDatabase from './components/ProjectDatabase';
import BootSequence from './components/BootSequence';
import MotionReveal from './components/MotionReveal';
import CyberCursor from './components/CyberCursor';
import ArchiveShell from './components/ArchiveShell';

export default function Home(){
 return <ArchiveShell><BootSequence/><CyberCursor/><main className="legacy-site">
  <Header />
  <MotionReveal><Hero /></MotionReveal>

  <MotionReveal><section id="about" className="legacy-about">
   <div>
    <p className="legacy-kicker">01 / PROFILE</p>
    <h2>Pannatorn<br/>Thongrak.</h2>
    <p>Robotics Engineering Portfolio — นักสร้างสรรค์ด้าน Robotics, Programming, Embedded System และ AI</p>
   </div>
   <div className="profile-panel">
    <strong>ENGINEER PROFILE</strong>
    <p>Arduino IDE · Python · C++ · HTML5 · CSS3 · JavaScript · Flask</p>
   </div>
  </section></MotionReveal>

  <MotionReveal><ProjectDatabase projects={projects} /></MotionReveal>
  <MotionReveal><Skills skills={skills}/></MotionReveal>
  <MotionReveal><Achievements /></MotionReveal>
  <MotionReveal><EngineerStats /></MotionReveal>

  <MotionReveal><section id="contact" className="legacy-section contact-box">
    <p className="legacy-kicker">06 / CONTACT</p>
    <h2>Let's build<br/>something.</h2>
    <p>Pannatorn Thongrak · Robotics & Code Engineering</p>
  </section></MotionReveal>
 </main></ArchiveShell>;
}
