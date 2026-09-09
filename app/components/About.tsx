import { profile, skills } from "../data/profile";

export default function About() {
  return (
      <section id="about" className="section shell">
        <div className="section-heading" data-reveal><p className="eyebrow">01 / ABOUT ME</p><h2>รู้จักผม<span className="accent">อีกนิด</span></h2></div>
        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p className="large-copy">{profile.introduction}</p>
            <p className="muted">ผมสนใจการนำ Robotics & Automation, Artificial Intelligence และ Embedded Systems มาใช้ร่วมกัน เพื่อพัฒนาโปรเจกต์ที่ตอบโจทย์ปัญหารอบตัว</p>
            <div className="personal-note"><span aria-hidden="true">♫</span><p>นอกเวลาที่อยู่กับโค้ดและวงจร<br /><strong>ผมชอบเล่นกีตาร์ครับ</strong></p></div>
          </div>
          <div className="education-card" data-reveal>
            <p className="eyebrow">EDUCATION</p><h3>เส้นทางการเรียนรู้</h3>
            <ol className="education-list">
              <li><span className="education-dot" /><p className="small-label">มัธยมศึกษาตอนปลาย</p><h4>โรงเรียนสภาราชินี</h4><p className="muted">จังหวัดตรัง</p></li>
              <li><span className="education-dot" /><p className="small-label">มัธยมศึกษาตอนต้น</p><h4>โรงเรียนสภาราชินี</h4><p className="muted">จังหวัดตรัง</p></li>
              <li><span className="education-dot" /><p className="small-label">ประถมศึกษา</p><h4>โรงเรียนพรศิริกุล</h4></li>
            </ol>
          </div>
        </div>
      </section>
  );
}

export function Skills() {
  return (
      <section id="skills" className="section skills-section">
        <div className="shell">
          <div className="section-heading" data-reveal><p className="eyebrow">04 / TOOLKIT</p><h2>เครื่องมือที่ใช้<span className="accent">ลงมือทำ</span></h2><p>ทักษะและเทคโนโลยีที่ได้ใช้งานผ่านโปรเจกต์และกิจกรรม</p></div>
          <div className="skills-grid">{skills.map((group, index) => (
            <article key={group.label} className="skill-card" data-reveal>
              <span className="skill-number">0{index + 1}</span><p className="eyebrow">{group.label}</p><h3>{group.title}</h3>
              <div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          ))}</div>
        </div>
      </section>
  );
}
