import { profile } from "../data/profile";
export default function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="shell">
        <div className="contact-top" data-reveal><div><p className="eyebrow">06 / LET’S CONNECT</p><h2>มีเรื่องน่าสนใจ<br /><span className="accent">มาคุยกันครับ</span></h2><p>เรื่องโค้ด หุ่นยนต์ หรือโอกาสในการเรียนรู้และทำโปรเจกต์ร่วมกัน</p></div><a className="contact-mail" href={`mailto:${profile.email}`}><span>EMAIL ME</span><strong>{profile.email}</strong><span className="mail-arrow" aria-hidden="true">↗</span></a></div>
        <div className="contact-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={`https://www.instagram.com/${profile.instagram}/`} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="tel:+66993911297">{profile.phone}</a><span>LINE: {profile.line}</span></div>
        <div className="footer-bottom"><a href="#home" className="footer-name">PANNATORN<span className="accent">.</span></a><span>© {new Date().getFullYear()} {profile.englishName}</span><a href="#home">กลับขึ้นด้านบน ↑</a></div>
      </div>
    </footer>
  );
}
