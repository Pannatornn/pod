import Image from "next/image";

export default function Hero(){
  return <section id="home" className="legacy-hero">
    <div className="legacy-hero-copy">
      <p className="legacy-kicker">ROBOTICS · CODE · ENGINEERING</p>
      <h1>Build. Code.<br/><span>Make it real.</span></h1>
      <p className="legacy-name">ปัณณธร ทองรักษ์ <small>/ ปัน</small></p>
      <p className="legacy-lead">เชื่อมโลกของโค้ดเข้ากับสิ่งที่จับต้องได้ ผ่านหุ่นยนต์ อิเล็กทรอนิกส์ AI และการลงมือสร้างจริง</p>
      <div className="legacy-actions"><a className="legacy-primary" href="#projects">Explore work ↗</a><a href="#about">About me ↓</a></div>
    </div>
    <div className="legacy-collage">
      <Image className="legacy-main-image" src="/media/solar-robot.png" alt="ผลงานหุ่นยนต์" fill priority/>
      <div className="legacy-profile-shot"><Image src="/media/profile.png" alt="ปัณณธร" fill/></div>
      <div className="legacy-sticker">IDEAS<br/>IN ACTION</div>
      <div className="legacy-project-caption"><span>SELECTED WORK / 01</span><strong>Solar Rescue Robot</strong></div>
    </div>
  </section>;
}
