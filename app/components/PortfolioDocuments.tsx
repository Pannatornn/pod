'use client';

const sections = [
  {
    title:"TRANSCRIPT",
    detail:"พื้นที่สำหรับใส่ Transcript หน้าและหลัง"
  },
  {
    title:"STATEMENT OF PURPOSE",
    detail:"พื้นที่สำหรับใส่ SOP / Statement of Purpose"
  },
  {
    title:"PROJECTS",
    detail:"Solar-powered Flood Survey and Victim Search Robot\n\nหุ่นยนต์พลังงานแสงอาทิตย์สำหรับภารกิจสำรวจพื้นที่ และค้นหาผู้ประสบอุทกภัย"
  },
  {
    title:"EXPERIENCES",
    detail:"พื้นที่สำหรับรูปภาพและคำอธิบายประสบการณ์ 3-4 รายการ"
  },
  {
    title:"ACTIVITIES",
    detail:"Robotics and AI Frontier Camp 2026 (KMITL)\n\nLet Me Tired Camp #5 (KU)\n\nIt's All About Computer Engineer Camp 2026 (PSU)"
  },
  {
    title:"CERTIFICATES",
    detail:"พื้นที่สำหรับรูปภาพใบประกาศนียบัตร"
  }
];

export default function PortfolioDocuments(){
  return (
    <section className="legacy-section">
      <p className="legacy-kicker">02 / PORTFOLIO DOCUMENTS</p>
      <div className="legacy-skill-grid">
        {sections.map(item=>(
          <article className="profile-panel" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
