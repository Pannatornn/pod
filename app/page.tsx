export default function Home() {
  const skills=["Arduino IDE","Visual Studio Code","HTML5","CSS3","C++","Python","Flask Framework","JavaScript"];
  const projects=["Arduino Robot","Electronic Circuit Design","Web Application","Python Flask Project"];
  return <main className="portfolio-page">
    <nav className="top-nav"><div className="logo">PANNATORN</div><div className="nav-menu"><a>About</a><a>Skills</a><a>Projects</a><a>Contact</a></div></nav>
    <section className="hero wix-hero">
      <div className="hero-content"><p className="eyebrow">COMPUTER ENGINEERING PORTFOLIO</p><h1>Pannatorn<br/><span>Thongrak</span></h1><h2>ปัณณธร ทองรักษ์ (ปัน)</h2><p className="hero-description">นักเรียนสาย Computer Engineering<br/>สนใจ Coding, Robotics และ Electronics</p><button className="button button-primary">View My Work</button></div>
      <div className="portrait-card"><div className="photo-box">PROFILE PHOTO</div><h3>Profile</h3><p>Birthday : 25 February 2009</p></div>
    </section>
    <section className="section"><h2>About Me</h2><div className="card"><p>Pannatorn Thongrak (Pun)</p><p>Creative coder and electronics developer.</p></div></section>
    <section className="section"><h2>Education</h2><div className="card"><p>โรงเรียนพรศิริกุล - ระดับประถมศึกษา</p><p>โรงเรียนสภาราชินี จังหวัดตรัง - ระดับมัธยมศึกษา</p></div></section>
    <section className="section"><h2>Technical Skills</h2><div className="grid">{skills.map(s=><div className="card" key={s}>{s}</div>)}</div></section>
    <section className="section"><h2>Projects</h2><div className="grid">{projects.map(p=><div className="card project" key={p}><h3>{p}</h3><span>View Details →</span></div>)}</div></section>
    <section className="section"><h2>Talent & Interest</h2><div className="card">Coding • ประกอบวงจรอิเล็กทรอนิกส์ • เล่นกีต้าร์</div></section>
    <footer>© 2026 Pannatorn Thongrak</footer>
  </main>;
}
