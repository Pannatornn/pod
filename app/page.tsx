const skills=['Arduino IDE','Python','C++','HTML/CSS','JavaScript','Flask','Robotics','IoT'];
const projects=[
 {name:'Arduino Robot',desc:'Robotics project combining hardware and programming.'},
 {name:'Electronic Circuit Design',desc:'Designing electronic systems and prototypes.'},
 {name:'Web Application',desc:'Modern web development with interactive UI.'},
 {name:'Python Flask Project',desc:'Backend and API development.'}
];

export default function Home(){
return <main className="site">
<header className="header">
<div className="logo">PANNATORN<span>.</span></div>
<nav><a>Home</a><a>About</a><a>Skills</a><a>Projects</a><a>Contact</a></nav>
</header>

<section className="hero">
<div className="hero-text">
<p className="tag">COMPUTER ENGINEERING PORTFOLIO</p>
<h1>The Voice of<br/><span>Creative Coding</span></h1>
<h2>Pannatorn Thongrak (Pun)</h2>
<p>นักเรียน Computer Engineering ผู้สร้างสรรค์ผลงานด้าน Coding, Robotics, Electronics และเทคโนโลยี IoT</p>
<button>View My Work</button>
</div>
<div className="profile-card"><div className="photo">PROFILE PHOTO</div><div className="badge">Robotics<br/>Developer</div></div>
</section>

<section className="cards">
<article><h3>About Me</h3><p>Creative developer ที่ชอบสร้างสิ่งใหม่จาก Software และ Hardware พร้อมเรียนรู้เทคโนโลยีใหม่อยู่เสมอ</p></article>
<article><h3>Education</h3><p>โรงเรียนพรศิริกุล<br/>โรงเรียนสภาราชินี จังหวัดตรัง</p></article>
</section>

<section className="section">
<h2>My Skills</h2>
<div className="grid">{skills.map(s=><div className="item" key={s}>{s}</div>)}</div>
</section>

<section className="section">
<h2>Featured Projects</h2>
<div className="project-list">{projects.map(p=><article className="project-card" key={p.name}><h3>{p.name}</h3><p>{p.desc}</p><span>View Details →</span></article>)}</div>
</section>

<section className="section contact">
<h2>Contact</h2>
<div className="item">Let's create something amazing together 🚀</div>
</section>

<footer>© 2026 Pannatorn Thongrak</footer>
</main>
}
