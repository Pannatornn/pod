import Image from "next/image";

const skills = ["Python", "C++", "Arduino", "ESP32", "Raspberry Pi", "OpenCV / YOLO", "Flask", "HTML / CSS / JS"];

const projects = [
  {
    title: "Solar Rescue Robot",
    label: "ROBOTICS · AI · IoT",
    description: "หุ่นยนต์พลังงานแสงอาทิตย์สำหรับสำรวจพื้นที่และค้นหาผู้ประสบอุทกภัย เชื่อม AI, GPS, ESP32 และเว็บแดชบอร์ดแบบเรียลไทม์",
    image: "/media/solar-robot.png",
  },
  {
    title: "Engineering Camps & Experiments",
    label: "LEARNING BY BUILDING",
    description: "ประสบการณ์จากค่ายวิศวกรรม การเขียน MicroPython, MQTT, Robotics, Automation และการออกแบบระบบร่วมกับทีม",
    image: "/media/engineering-camps.png",
  },
];

export default function Home() {
  return (
    <main className="legacy-site">
      <header className="legacy-header">
        <a className="legacy-brand" href="#home">Pannatorn Thongrak</a>
        <nav aria-label="เมนูหลัก">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="legacy-hero">
        <div className="legacy-hero-copy">
          <p className="legacy-kicker">ROBOTICS · CODE · ENGINEERING</p>
          <h1>Build. Code.<br /><span>Make it real.</span></h1>
          <p className="legacy-name">ปัณณธร ทองรักษ์ <small>/ ปัน</small></p>
          <p className="legacy-lead">เชื่อมโลกของโค้ดเข้ากับสิ่งที่จับต้องได้ ผ่านหุ่นยนต์ อิเล็กทรอนิกส์ AI และการลงมือสร้างจริง</p>
          <div className="legacy-actions"><a className="legacy-primary" href="#projects">Explore work ↗</a><a href="#about">About me ↓</a></div>
        </div>
        <div className="legacy-collage">
          <Image className="legacy-main-image" src="/media/solar-robot.png" alt="ผลงานหุ่นยนต์และวิศวกรรม" fill priority sizes="(max-width: 900px) 100vw, 53vw" />
          <div className="legacy-profile-shot"><Image src="/media/profile.png" alt="ปัณณธร ทองรักษ์" fill sizes="220px" /></div>
          <div className="legacy-sticker">IDEAS<br />IN ACTION</div>
          <div className="legacy-project-caption"><span>SELECTED WORK / 01</span><strong>Solar Rescue Robot</strong></div>
        </div>
      </section>

      <div className="legacy-strip"><span>MY TOOLKIT</span>{["Python", "Arduino", "C++", "Flask", "ESP32"].map((item) => <b key={item}>{item}</b>)}</div>

      <section id="about" className="legacy-about">
        <div><p className="legacy-kicker">01 / PROFILE</p><h2>Curiosity,<br />Code & Craft.</h2><p>ผมสนใจการเขียนโปรแกรม หุ่นยนต์ และวงจรอิเล็กทรอนิกส์ ชอบเรียนรู้ผ่านการลงมือทำ ตั้งแต่เชื่อมต่อเซนเซอร์ไปจนถึงทดสอบระบบที่ใช้งานได้จริง</p></div>
        <div className="legacy-facts"><p><span>NAME</span>ปัณณธร ทองรักษ์</p><p><span>EDUCATION</span>โรงเรียนสภาราชินี จังหวัดตรัง</p><p><span>FOCUS</span>Robotics · AI · Embedded Systems</p></div>
      </section>

      <section id="skills" className="legacy-section">
        <div className="legacy-heading"><p className="legacy-kicker">02 / TOOLKIT</p><h2>Tools I use<br /><em>to build.</em></h2></div>
        <div className="legacy-skill-grid">{skills.map((skill, index) => <article key={skill}><span>0{index + 1}</span><h3>{skill}</h3></article>)}</div>
      </section>

      <section id="projects" className="legacy-section legacy-projects">
        <div className="legacy-heading"><p className="legacy-kicker">03 / PROJECTS</p><h2>Projects &<br /><em>experiments.</em></h2></div>
        <div className="legacy-project-list">{projects.map((project, index) => <article key={project.title} className="legacy-project-card">
          <div className="legacy-project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
          <div className="legacy-project-copy"><span>{project.label} · 0{index + 1}</span><h3>{project.title}</h3><p>{project.description}</p></div>
        </article>)}</div>
      </section>

      <footer id="contact" className="legacy-footer">
        <div><p className="legacy-kicker">04 / LET&apos;S CONNECT</p><h2>Keep learning.<br />Keep building.</h2></div>
        <a href="mailto:pannatorn252@gmail.com">pannatorn252@gmail.com ↗</a>
        <p className="legacy-copyright">© 2026 Pannatorn Thongrak</p>
      </footer>
    </main>
  );
}
