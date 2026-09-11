export default function Home() {
  const skills = ["Arduino IDE", "Visual Studio Code", "HTML5", "CSS3", "C++", "Python", "Flask Framework", "JavaScript"];
  const projects = ["Arduino Robot", "Electronic Circuit Design", "Web Application", "Python Flask Project"];

  return (
    <main className="portfolio-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">COMPUTER ENGINEERING PORTFOLIO</p>
          <h1>Pannatorn <span>Thongrak</span></h1>
          <h2>ปัณณธร ทองรักษ์ (ปัน)</h2>
          <p className="hero-description">Creative Coder • Electronics Developer • Robotics Enthusiast</p>
          <div className="hero-actions">
            <button className="button button-primary">View My Work</button>
            <button className="button">Contact</button>
          </div>
        </div>

        <div className="portrait-card">
          <div className="avatar">P</div>
          <h3>Profile</h3>
          <p>เกิด 25 กุมภาพันธ์ 2552</p>
          <p>นักพัฒนาด้าน Coding และวงจรอิเล็กทรอนิกส์</p>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education-card">
          <p>ประถมศึกษา: โรงเรียนพรศิริกุล</p>
          <p>มัธยมศึกษา: โรงเรียนสภาราชินี จังหวัดตรัง</p>
        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="grid">
          {skills.map((item)=>(<div className="card" key={item}>{item}</div>))}
        </div>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((item)=>(
            <div className="card project" key={item}>
              <h3>{item}</h3>
              <p>Innovation project development</p>
              <span>View Details →</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Talent & Interest</h2>
        <div className="card">Coding • ประกอบวงจรอิเล็กทรอนิกส์ • เล่นกีต้าร์</div>
      </section>

      <footer>© 2026 Pannatorn Thongrak Portfolio</footer>
    </main>
  );
}
