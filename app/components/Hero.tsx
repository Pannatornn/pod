import Image from "next/image";

export default function Hero(){
  return (
    <section id="home" className="legacy-hero">
      <div className="legacy-hero-copy">
        <div className="status-chip">● SYSTEM ONLINE / ROBOTICS ENGINEER</div>
        <p className="legacy-kicker">01 / ENGINEER PROFILE</p>
        <h1>
          Build.<br/>
          Code.<br/>
          <span>Create Future.</span>
        </h1>
        <p className="legacy-name">ปัณณธร ทองรักษ์ <small>Pannatorn Thongrak</small></p>
        <p className="legacy-lead">
          นักพัฒนาด้าน Robotics, Programming และ AI
          ผู้สร้างระบบจริงจากโค้ด อิเล็กทรอนิกส์ และนวัตกรรม
        </p>
        <div className="legacy-actions">
          <a className="legacy-primary" href="#project">View Projects ↗</a>
          <a href="#skills">Technical Skills ↓</a>
        </div>
      </div>

      <div className="legacy-collage engineer-terminal">
        <Image
          className="legacy-main-image"
          src="/media/solar-robot.png"
          alt="Robotics Project"
          fill
          priority
        />
        <div className="terminal-card">
          <span>ENGINEERING DATABASE</span>
          <strong>PANNATORN.EXE</strong>
          <p>Robotics / AI / Embedded System</p>
        </div>
        <div className="legacy-project-caption">
          <span>SELECTED PROJECT</span>
          <strong>Solar Rescue Robot</strong>
        </div>
      </div>
    </section>
  );
}
