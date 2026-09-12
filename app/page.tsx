import { projects, skills } from "./data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Image from "next/image";

const portfolioSections = [
  "PROFILE",
  "TRANSCRIPT",
  "SOP",
  "PROJECT",
  "EXPERIENCE",
  "ACTIVITIES",
  "CERTIFICATES",
];

function InfoSection({ id, title, text }: { id:string; title:string; text:string }) {
  return (
    <section id={id} className="legacy-section">
      <div className="legacy-heading">
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </section>
  );
}

export default function Home() {
  return (
    <main className="legacy-site">
      <Header />
      <Hero />

      <div className="legacy-strip">
        <span>PORTFOLIO</span>
        {portfolioSections.map((item) => <b key={item}>{item}</b>)}
      </div>

      <section id="profile" className="legacy-about">
        <div>
          <p className="legacy-kicker">01 / PROFILE</p>
          <h2>Pannatorn<br />Thongrak.</h2>
          <p>Portfolio แนะนำตัว ประวัติ ความสนใจ และเป้าหมายด้าน Robotics, Programming และ Engineering</p>
        </div>
        <div className="legacy-facts">
          <p><span>NAME</span>ปัณณธร ทองรักษ์</p>
          <p><span>FOCUS</span>Robotics · AI · Embedded Systems</p>
        </div>
      </section>

      <InfoSection id="transcript" title="Transcript" text="ผลการเรียน ประวัติการศึกษา และข้อมูลทางวิชาการ" />
      <InfoSection id="sop" title="Statement of Purpose" text="แรงบันดาลใจ แนวคิด และเป้าหมายในการพัฒนาตัวเอง" />

      <section id="project" className="legacy-section legacy-projects">
        <div className="legacy-heading">
          <p className="legacy-kicker">04 / PROJECT</p>
          <h2>Projects &<br /><em>Experiments.</em></h2>
        </div>
        <div className="legacy-project-list">
          {projects.map((project) => (
            <article key={project.title} className="legacy-project-card">
              <div className="legacy-project-image"><Image src={project.image} alt={project.title} fill /></div>
              <div className="legacy-project-copy">
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <InfoSection id="experience" title="Experience" text="ประสบการณ์ การฝึกฝน และการทำงานจริง" />
      <InfoSection id="activities" title="Activities" text="กิจกรรม ค่าย การแข่งขัน และการเรียนรู้จากการลงมือทำ" />
      <InfoSection id="certificates" title="Certificates" text="เกียรติบัตร รางวัล และผลงานรับรอง" />

      <Skills skills={skills} />

      <footer id="contact" className="legacy-footer">
        <div><p className="legacy-kicker">CONTACT</p><h2>Keep learning.<br />Keep building.</h2></div>
        <a href="mailto:pannatorn252@gmail.com">pannatorn252@gmail.com ↗</a>
      </footer>
    </main>
  );
}
