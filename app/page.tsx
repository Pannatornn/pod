export default function Home() {
  const skills=["Arduino IDE","VS Code","HTML5/CSS3","C++","Python","Flask","JavaScript","Robotics"];
  const projects=["Arduino Robot","Electronic Circuit Design","Web Application","Python Flask Project"];

  return <main className="portfolio-page">
    <nav className="top-nav">
      <div className="logo">PANNATORN</div>
      <div className="nav-menu"><a>About</a><a>Skills</a><a>Projects</a><a>Contact</a></div>
    </nav>

    <section className="hero wix-style">
      <div className="hero-content">
        <p className="eyebrow">COMPUTER ENGINEERING PORTFOLIO</p>
        <h1>The Voice of<br/><span>Creative Coding</span></h1>
        <h2>Pannatorn Thongrak (Pun)</h2>
        <p className="hero-description">นักเรียนสาย Computer Engineering<br/>สร้างสรรค์งาน Coding, Robotics และ Electronics</p>
        <button className="button button-primary">View My Work</button>
      </div>
      <div className="hero-image-area">
        <div className="photo-box">PROFILE PHOTO</div>
        <div className="floating-card">Robotics<br/>Developer</div>
      </div>
    </section>

    <section className="section"><h2>About Me</h2><div className="card"><p>Creative coder and electronics developer.</p><p>สนใจการพัฒนาโปรแกรม หุ่นยนต์ และระบบ IoT</p></div></section>
    <section className="section"><h2>Education</h2><div className="card"><p>โรงเรียนพรศิริกุล - ระดับประถมศึกษา</p><p>โรงเรียนสภาราชินี จังหวัดตรัง - ระดับมัธยมศึกษา</p></div></section>

    <section className="section"><h2>Technical Skills</h2><div className="grid">{skills.map(s=><div className="card" key={s}>{s}</div>)}</div></section>

    <section className="section project-section"><h2>Projects</h2><div className="grid">{projects.map(p=><div className="card project" key={p}><h3>{p}</h3><span>View Details →</span></div>)}</div></section>

    <section className="section"><h2>Talent & Interest</h2><div className="card">Coding • Electronics • Robotics • Guitar</div></section>

    <footer>© 2026 Pannatorn Thongrak</footer>
  </main>;
}
