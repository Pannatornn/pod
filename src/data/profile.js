export const profileData = {
  systemId: "SYS-PAN-20090225",
  nameTH: "ปัณณธร ทองรักษ์",
  nameEN: "Pannatorn Thongrak",
  nickname: "ปัน (Pan)",
  dob: "25 กุมภาพันธ์ 2552 (February 25, 2009)",
  title: "Robotics & Artificial Intelligence Engineering Student",
  avatar: `${import.meta.env.BASE_URL}images/profile.png`,
  education: [
    {
      level: "ระดับมัธยมศึกษาตอนปลาย",
      school: "โรงเรียนสภาราชินี จังหวัดตรัง",
      status: "Currently Enrolled"
    },
    {
      level: "ระดับมัธยมศึกษาตอนต้น",
      school: "โรงเรียนสภาราชินี จังหวัดตรัง",
      status: "Graduated"
    },
    {
      level: "ระดับประถมศึกษา",
      school: "โรงเรียนพรศิริกุล",
      status: "Graduated"
    }
  ],
  skills: [
    { name: "C / C++" },
    { name: "Python" },
    { name: "Arduino IDE" },
    { name: "Flask (Python Framework)" },
    { name: "HTML5 & CSS3" },
    { name: "JavaScript (ES5+)" },
    { name: "Visual Studio Code" }
  ],
  talents: [
    { icon: "Code", title: "Coding & Software Engineering", desc: "การเขียนโปรแกรมพัฒนาอัลกอริทึมและระบบควบคุม" },
    { icon: "Cpu", title: "Electronic Circuit Assembly", desc: "การต่อและประกอบวงจรอิเล็กทรอนิกส์และ Embedded Systems" },
    { icon: "Music", title: "Guitar Player", desc: "ทักษะด้านดนตรี เล่นกีต้าร์โปร่งและกีต้าร์ไฟฟ้า" }
  ],
  interests: [
    { icon: "Bot", title: "Robotics and Automation", desc: "ระบบหุ่นยนต์ แขนกล และอุตสาหกรรมอัตโนมัติ" },
    { icon: "BrainCircuit", title: "Programming and Artificial Intelligence", desc: "การพัฒนาโมเดล AI และคอมพิวเตอร์วิทัศน์ (Computer Vision)" },
    { icon: "Zap", title: "Electronics & Embedded Systems Development", desc: "ไมโครคอนโทรลเลอร์ สัญญาณ และระบบควบคุมไมโครโปรเซสเซอร์" }
  ]
};
