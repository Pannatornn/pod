import { media, crops, awards } from "../data/profile";
import { MediaButton } from "./Media";

export default function Projects() {
  return (
    <section id="projects" className="section project-section">
      <div className="shell">
        <div className="section-heading heading-with-aside" data-reveal>
          <div><p className="eyebrow">02 / FEATURED PROJECT</p><h2>เปลี่ยนไอเดีย<span className="accent">ให้ทำงานได้จริง</span></h2></div>
          <span className="section-aside">ROBOTICS × AI × CLEAN ENERGY</span>
        </div>
        <article className="featured-project" id="project-solar" data-reveal>
          <div className="project-image-area">
            <div className="project-kicker"><span className="status-dot" /> SOLAR-POWERED ROBOT<span>01</span></div>
            <MediaButton src={media.project} crop={crops.robot} alt="หุ่นยนต์พลังงานแสงอาทิตย์สำหรับสำรวจพื้นที่และค้นหาผู้ประสบอุทกภัย" label="ดูตัวหุ่นยนต์" />
            <div className="project-image-caption"><span>พลังงานแสงอาทิตย์ + แบตเตอรี่</span><span>Raspberry Pi / ESP32</span></div>
          </div>
          <div className="project-intro">
            <p className="eyebrow">Solar-powered Flood Survey and Victim Search Robot</p>
            <h3>หุ่นยนต์สำรวจพื้นที่<br />และค้นหาผู้ประสบอุทกภัย</h3>
            <p>พัฒนาหุ่นยนต์สำรวจพื้นที่ทางน้ำ โดยใช้ Raspberry Pi และ ESP32 ร่วมกับ AI, GPS และ Water Flow Sensor เพื่อส่งภาพและข้อมูลแบบเรียลไทม์ผ่าน Web Dashboard ใช้พลังงานแสงอาทิตย์ร่วมกับแบตเตอรี่เพื่อยืดเวลาการทำงาน</p>
            <div className="tag-list"><span>Python</span><span>OpenCV / YOLO</span><span>Flask</span><span>MySQL</span><span>GPS NEO-6M</span></div>
          </div>
          <div className="project-details">
            <div><h4><span className="accent">01</span> สิ่งที่ระบบทำได้</h4><ul className="feature-list">
              <li>ตรวจจับคนจากภาพด้วย AI</li><li>ติดตามตำแหน่ง GPS แบบเรียลไทม์</li><li>ตรวจวัดอัตราการไหลของน้ำ</li><li>แสดงภาพและข้อมูลผ่าน Web Dashboard</li><li>ใช้ระบบพลังงานแสงอาทิตย์ร่วมกับแบตเตอรี่</li>
            </ul></div>
            <div><h4><span className="accent">02</span> ส่วนที่ผมรับผิดชอบ</h4><ul className="feature-list">
              <li>ออกแบบโครงสร้างหุ่นยนต์</li><li>เชื่อมต่อวงจรอิเล็กทรอนิกส์และเซนเซอร์</li><li>เขียนโปรแกรมเชื่อมต่อ GPS และ Water Flow Sensor</li><li>พัฒนา Human Detection ด้วย AI จากภาพ</li><li>ทดสอบและปรับปรุงประสิทธิภาพของระบบ</li>
            </ul></div>
          </div>
          <div className="project-gallery">
            <MediaButton src={media.project} crop={crops.robotDemo} alt="การทดลองตรวจจับคนจากภาพด้วย YOLO" label="ดูการทดสอบ AI" />
            <MediaButton src={media.project} crop={crops.fieldTest} alt="การนำหุ่นยนต์ไปทดสอบในพื้นที่ทางน้ำ" label="ดูการทดสอบภาคสนาม" />
          </div>
          <details className="award-details"><summary><span>รางวัลจากโปรเจกต์นี้ <span className="count-badge">{awards.length}</span></span><span className="details-indicator" aria-hidden="true">+</span></summary>
            <div className="award-list">{awards.map((award, index) => <div className="award-row" key={index}><span className="award-year">{award.year}</span><div><h4>{award.result}</h4><p>{award.event}</p><span className="muted">{award.detail}</span></div><span className="award-icon" aria-hidden="true">✧</span></div>)}</div>
          </details>
        </article>
      </div>
    </section>
  );
}
