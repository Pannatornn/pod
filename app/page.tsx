export default function Home() {
  const skills = ["Arduino IDE", "Visual Studio Code", "HTML5", "CSS3", "C++", "Python", "Flask Framework", "JavaScript"];
  const projects = ["Arduino Robot", "Electronic Circuit Design", "Web Application", "Python Flask Project"];

  return (
    <main className="portfolio-page">
      <section className="hero">
        <div>
          <p className="tag">COMPUTER ENGINEERING PORTFOLIO</p>
          <h1>Pannatorn Thongrak</h1>
          <h2>ปัณณธร ทองรักษ์ (ปัน)</h2>
          <p>Creative Coder • Electronics Developer • Robotics Enthusiast</p>
          <button>View My Work</button>
        </div>
        <div className="profile-card">
          <div className="avatar">P</div>
          <h3>Profile</h3>
          <p>เกิด 25 กุมภาพันธ์ 2552</p>
          <p>นักพัฒนาด้าน Coding และวงจรอิเล็กทรอนิกส์</p>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <p>ประถมศึกษา: โรงเรียนพรศิริกุล</p>
          <p>มัธยมศึกษา: โรงเรียนสภาราชินี จังหวัดตรัง</p>
        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="grid">
          {skills.map((s)=><div className="card" key={s}>{s}</div>)}
        </div>
      </section>

      <section className="section">
        <h2>My Projects</h2>
        <div className="grid">
          {projects.map((p)=><div className="card project" key={p}>{p}<br/><span>View Details →</span></div>)}
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
