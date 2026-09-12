export default function Home() {
  return (
    <main className="site">
      <header className="header">
        <div className="logo">PANNATORN<span>.</span></div>
        <nav><a>Home</a><a>About</a><a>Skills</a><a>Projects</a><a>Contact</a></nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">COMPUTER ENGINEERING PORTFOLIO</p>
          <h1>The Voice of<br/><span>Creative Coding</span></h1>
          <h2>Pannatorn Thongrak (Pun)</h2>
          <p>นักเรียนสาย Computer Engineering ที่สนใจ Coding, Robotics, Electronics และการสร้างเทคโนโลยีใหม่ ๆ</p>
          <button>View My Work</button>
        </div>
        <div className="profile-card">
          <div className="photo">PROFILE PHOTO</div>
          <div className="badge">Robotics<br/>Developer</div>
        </div>
      </section>

      <section className="cards">
        <article><h3>About Me</h3><p>Creative coder และ electronics developer ผู้รักการสร้างโปรเจกต์ด้วยซอฟต์แวร์และฮาร์ดแวร์</p></article>
        <article><h3>Education</h3><p>โรงเรียนพรศิริกุล<br/>โรงเรียนสภาราชินี จังหวัดตรัง</p></article>
      </section>

      <section className="section"><h2>Technical Skills</h2><div className="grid">{['Arduino IDE','Python','C++','HTML/CSS','JavaScript','Flask','Robotics','IoT'].map(x=><div className="item" key={x}>{x}</div>)}</div></section>

      <section className="section"><h2>Projects</h2><div className="grid"><div className="item">Arduino Robot</div><div className="item">Electronic Circuit Design</div><div className="item">Web Application</div><div className="item">Python Flask Project</div></div></section>

      <footer>© 2026 Pannatorn Thongrak</footer>
    </main>
  );
}
