import { projects, skills } from "./data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Image from "next/image";

const sections = [
 {id:"transcript",title:"TRANSCRIPT",desc:"ผลการเรียน ประวัติการศึกษา และข้อมูลทางวิชาการ"},
 {id:"sop",title:"SOP",desc:"Statement of Purpose แรงบันดาลใจ แนวคิด และเป้าหมายในอนาคต"},
 {id:"experience",title:"EXPERIENCE",desc:"ประสบการณ์ การฝึกฝน การทำงานร่วมกับทีม และการแก้ปัญหาจริง"},
 {id:"activities",title:"ACTIVITIES",desc:"กิจกรรม ค่าย การแข่งขัน และการเรียนรู้จากการลงมือทำ"},
 {id:"certificates",title:"CERTIFICATES",desc:"เกียรติบัตร รางวัล และหลักฐานความสามารถ"},
];

function ContentSection({item}:{item:{id:string;title:string;desc:string}}){
 return <section id={item.id} className="legacy-section portfolio-card"><div className="legacy-heading"><p className="legacy-kicker">PORTFOLIO</p><h2>{item.title}</h2></div><p>{item.desc}</p></section>;
}

export default function Home(){
 return <main className="legacy-site">
  <Header />
  <Hero />

  <section id="profile" className="legacy-about">
   <div><p className="legacy-kicker">01 / PROFILE</p><h2>Pannatorn<br/>Thongrak.</h2><p>Portfolio แนะนำตัว ประวัติ ความสนใจ และเป้าหมายด้าน Robotics, Programming และ Engineering</p></div>
   <div className="legacy-facts"><p><span>NAME</span>ปัณณธร ทองรักษ์</p><p><span>FOCUS</span>Robotics · AI · Embedded Systems</p></div>
  </section>

  <div className="legacy-strip"><span>SECTIONS</span><b>PROFILE</b><b>TRANSCRIPT</b><b>SOP</b><b>PROJECT</b><b>EXPERIENCE</b><b>ACTIVITIES</b><b>CERTIFICATES</b></div>

  {sections.slice(0,2).map(item=><ContentSection key={item.id} item={item}/>)}

  <section id="project" className="legacy-section legacy-projects">
   <div className="legacy-heading"><p className="legacy-kicker">04 / PROJECT</p><h2>Projects &<br/><em>Experiments.</em></h2></div>
   <div className="legacy-project-list">{projects.map(project=><article key={project.title} className="legacy-project-card"><div className="legacy-project-image"><Image src={project.image} alt={project.title} fill/></div><div className="legacy-project-copy"><span>{project.label}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div>
  </section>

  {sections.slice(2).map(item=><ContentSection key={item.id} item={item}/>)}

  <Skills skills={skills}/>

  <footer id="contact" className="legacy-footer"><div><p className="legacy-kicker">CONTACT</p><h2>Keep learning.<br/>Keep building.</h2></div><a href="mailto:pannatorn252@gmail.com">pannatorn252@gmail.com ↗</a></footer>
 </main>;
}
