import { projects, skills } from "./data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Image from "next/image";

export default function Home() {
 return <main className="legacy-site">
  <Header />
  <Hero />
  <div className="legacy-strip"><span>MY TOOLKIT</span>{skills.slice(0,5).map((item)=><b key={item}>{item}</b>)}</div>
  <section id="about" className="legacy-about"><div><p className="legacy-kicker">01 / PROFILE</p><h2>Curiosity,<br/>Code & Craft.</h2><p>ผมสนใจการเขียนโปรแกรม หุ่นยนต์ และวงจรอิเล็กทรอนิกส์ ชอบเรียนรู้ผ่านการลงมือทำและสร้างระบบที่ใช้งานได้จริง</p></div><div className="legacy-facts"><p><span>NAME</span>ปัณณธร ทองรักษ์</p><p><span>FOCUS</span>Robotics · AI · Embedded Systems</p></div></section>
  <Skills skills={skills}/>
  <section id="projects" className="legacy-section legacy-projects"><div className="legacy-heading"><p className="legacy-kicker">03 / PROJECTS</p><h2>Projects &<br/><em>experiments.</em></h2></div><div className="legacy-project-list">{projects.map((project)=><article key={project.title} className="legacy-project-card"><div className="legacy-project-image"><Image src={project.image} alt={project.title} fill/></div><div className="legacy-project-copy"><span>{project.label}</span><h3>{project.title}</h3><p>{project.description}</p></div></article>)}</div></section>
  <footer id="contact" className="legacy-footer"><div><p className="legacy-kicker">04 / LET&apos;S CONNECT</p><h2>Keep learning.<br/>Keep building.</h2></div><a href="mailto:pannatorn252@gmail.com">pannatorn252@gmail.com ↗</a></footer>
 </main>;
}
