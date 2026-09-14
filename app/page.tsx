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

import PortfolioProfile from './components/PortfolioProfile';
import PortfolioDocuments from './components/PortfolioDocuments';


export default function Home(){

 return (
  <ArchiveShell>

   <BootSequence />

   <CyberCursor />

   <main className="legacy-site">

    <Header />


    {/* HERO */}
    <MotionReveal>
      <Hero />
    </MotionReveal>



    {/* PROFILE DATABASE */}
    <MotionReveal>
      <PortfolioProfile />
    </MotionReveal>



    {/* PROJECT DATABASE */}
    <MotionReveal>
      <ProjectDatabase projects={projects} />
    </MotionReveal>



    {/* PORTFOLIO DOCUMENTS */}
    <MotionReveal>
      <PortfolioDocuments />
    </MotionReveal>



    {/* TECHNICAL SKILLS */}
    <MotionReveal>
      <Skills skills={skills}/>
    </MotionReveal>



    {/* ACHIEVEMENTS */}
    <MotionReveal>
      <Achievements />
    </MotionReveal>



    {/* ENGINEER STATUS */}
    <MotionReveal>
      <EngineerStats />
    </MotionReveal>



    {/* CONTACT */}
    <MotionReveal>

      <section 
        id="contact" 
        className="legacy-section contact-box"
      >

        <p className="legacy-kicker">
          06 / CONTACT
        </p>

        <h2>
          Let's build
          <br/>
          something.
        </h2>

        <p>
          Pannatorn Thongrak · Robotics & Code Engineering
        </p>

      </section>

    </MotionReveal>


   </main>

  </ArchiveShell>
 );

}
