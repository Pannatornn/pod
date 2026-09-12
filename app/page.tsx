import { projects, skills } from "./data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Image from "next/image";

const sections = [
  {id:"profile",title:"PROFILE"},
  {id:"transcript",title:"TRANSCRIPT"},
  {id:"sop",title:"STATEMENT OF PURPOSE"},
  {id:"project",title:"PROJECT"},
  {id:"experience",title:"EXPERIENCE"},
  {id:"activities",title:"ACTIVITIES"},
  {id:"certificates",title:"CERTIFICATES"},
];

export default function Home(){
 return <main className="legacy-site">
  <Header />
  <Hero />

  <section id="profile" className="legacy-about">
   <div><p className="legacy-kicker">01 / PROFILE</p><h2>Pannatorn<br/>Thongrak.</h2><p>Portfolio แนะนำตัว ประวัติ ความสนใจ และเป้าหมายด้าน Robotics, Programming และ Engineering</p></div>
   <div className="legacy-facts"><p><span>NAME</span>ปัณณธร ทองรักษ์</p><p><span>FOCUS</span>Robotics · AI · Embedded Systems</p></div>
  </section>

  <div className="legacy-strip"><span>PORTFOLIO</span>{sections.map(s=><b key={s.id}>{s.title}</b>)}</div>

  <section id="transcript" className="legacy-section"><div className="legacy-heading"><h2>Transcript</h2></div><p>ผลการเรียนและข้อมูลทางการศึกษา</p></section>
  <section id="sop" className="legacy-section"><div className="legacy-heading"><h2>Statement<br/>of Purpose</h2></div><p>แนวคิด แรงบันดาลใจ และเป้าหมายในการพัฒนาตัวเอง</p></section>

  <section id="project" className="legacy-section legacy-projects">
   <div className="legacy-heading"><p className="legacy-kicker">04 / PROJECT</p><h2>Projects &<br/><em>Experiments.</em></h2></div>
   <div className="legacy-project-list">{projects.map((project)=><article key={project.title} className="legacy-project-card"><div className="legacy-project-image"><Image src={project.image} alt={project.title} fill /></div><div className="legacy-project-copy"><span>{project.label}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div>
  </section>

  <section id="experience" className="legacy-section"><div className="legacy-heading"><h2>Experience</h2></div><p>ประสบการณ์ การฝึกฝน และผลงานที่ผ่านมา</p></section>
  <section id="activities" className="legacy-section"><div className="legacy-heading"><h2>Activities</h2></div><p>กิจกรรม ค่าย และการเรียนรู้จากการลงมือทำ</p></section>
  <section id="certificates" className="legacy-section"><div className="legacy-heading"><h2>Certificates</h2></div><p>เกียรติบัตรและผลงานรับรอง</p></section>

  <Skills skills={skills}/>

  <footer id="contact" className="legacy-footer"><div><p className="legacy-kicker">CONTACT</p><h2>Keep learning.<br/>Keep building.</h2></div><a href="mailto:pannatorn252@gmail.com">pannatorn252@gmail.com ↗</a></footer>
 </main>;
}
