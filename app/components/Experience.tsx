import { crops, media } from "../data/profile";
import { MediaButton } from "./Media";

const experiences = [
  { id: "kmitl-camp", date: "2–3 พ.ค. 2569", label: "ROBOTICS & AI", title: "Robotics and AI Frontier Camp 2026", place: "ภาควิชาหุ่นยนต์และปัญญาประดิษฐ์ · คณะวิศวกรรมศาสตร์ สจล.", description: "เข้าร่วม Mechatronics Program เรียนรู้การเขียนโปรแกรม การใช้งาน AI ร่วมกับบอร์ด Arduino Q และการจำลองแขนกล ABB พร้อมฝึกทำงานร่วมกับเพื่อนในค่าย", learning: ["ABB RobotStudio", "Arduino App Lab", "Industrial Automation / PLC", "AI ตรวจจับสีและวัตถุ"], src: media.camps, crop: crops.kmitl },
  { id: "ku-camp", date: "19–21 ธ.ค. 2568", label: "COMPUTER ENGINEERING", title: "ค่ายลองของ ครั้งที่ 5", place: "ภาควิชาวิศวกรรมคอมพิวเตอร์ · มหาวิทยาลัยเกษตรศาสตร์", description: "เขียน MicroPython ควบคุม ESP32 ให้เชื่อมต่อ Wi-Fi และรับส่งข้อมูลผ่าน MQTT ร่วมกับทีมสร้างระบบแจ้งเตือนทางแชตและสั่งงานหลอด LED พร้อมฝึกออกแบบระบบในกิจกรรม Hackathon", learning: ["MicroPython / ESP32", "MQTT", "System Design", "5W1H / Teamwork"], src: media.camps, crop: crops.ku },
];
export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <div className="section-heading" data-reveal><p className="eyebrow">03 / EXPERIENCES</p><h2>เรียนรู้จาก<span className="accent">ประสบการณ์</span></h2><p>ออกไปพบโจทย์ใหม่ ลงมือทำ และเรียนรู้ไปกับคนที่สนใจสิ่งเดียวกัน</p></div>
      <div className="experience-list">{experiences.map((item, index) => (
        <article className="experience-card" key={item.id} data-reveal>
          <div className="experience-photo"><MediaButton src={item.src} crop={item.crop} alt={item.title} label="ดูภาพกิจกรรม" /></div>
          <div className="experience-copy"><div className="experience-meta"><span>{item.label}</span><time>{item.date}</time></div><h3>{item.title}</h3><p className="experience-place">{item.place}</p><p>{item.description}</p><div className="tag-list">{item.learning.map(skill => <span key={skill}>{skill}</span>)}</div><span className="experience-index" aria-hidden="true">0{index + 1}</span></div>
        </article>
      ))}</div>
      <article className="competition-strip" data-reveal><span className="code-symbol" aria-hidden="true">&lt;/&gt;</span><div><p className="eyebrow">6 ตุลาคม 2567 · มจธ.</p><h3>การแข่งขันแก้ปัญหาด้วยการเขียนโปรแกรมคอมพิวเตอร์</h3><p>เข้าร่วมการแข่งขันระดับมัธยมศึกษาตอนปลาย จัดโดยภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p></div><a className="text-link" href="#certificates">ดูเกียรติบัตร ↗</a></article>
    </section>
  );
}
