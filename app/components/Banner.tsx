import { profile, media, crops } from "../data/profile";
import { ImageFrame } from "./Media";

export default function Banner() {
  return (
    <section id="home" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> LEARNING BY BUILDING</p>
        <p className="hero-hello">สวัสดีครับ ผมปัน</p>
        <h1>ปัณณธร<br /><span>ทองรักษ์<span className="name-dot">.</span></span></h1>
        <p className="hero-english">{profile.englishName}</p>
        <p className="hero-description">จากความสงสัย สู่การลงมือสร้าง<br />โปรเจกต์ด้านหุ่นยนต์ การเขียนโปรแกรม และระบบอัจฉริยะ</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">สำรวจผลงาน <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#about">รู้จักผมมากขึ้น <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-visual" aria-label="ภาพแนะนำตัวปัน">
        <div className="visual-orbit orbit-one" aria-hidden="true" /><div className="visual-orbit orbit-two" aria-hidden="true" />
        <div className="floating-tag tag-code"><span aria-hidden="true">&lt;/&gt;</span> Programming</div>
        <div className="portrait-card">
          <div className="window-bar"><span className="window-dots" aria-hidden="true">● ● ●</span><span>hello_world.exe</span><span aria-hidden="true">↗</span></div>
          <div className="portrait-image"><ImageFrame src={media.profile} crop={crops.computer} alt="รูปแนะนำตัวปันในกรอบคอมพิวเตอร์จากแฟ้มผลงาน" priority /></div>
          <div className="portrait-footer"><span>Curious mind.<br /><strong>Hands-on maker.</strong></span><span className="pixel-star" aria-hidden="true">✳</span></div>
        </div>
        <div className="floating-tag tag-robot"><span aria-hidden="true">⚙</span> Robotics & AI</div>
        <p className="visual-note">เริ่มจากเรียนรู้ · เติบโตจากลงมือทำ</p>
      </div>
      <div className="hero-bottom"><span>TECHNOLOGY / ENGINEERING / ROBOTICS</span><a href="#about">เลื่อนเพื่อสำรวจ <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
