export const regionalContests = [
  {
    id: "srivijaya-open-house-2026",
    title: "Srivijaya Fair Open House 2026",
    date: "26 สิงหาคม 2569",
    dateISO: "2026-08-26",
    champion: true,
    award: "รางวัลชนะเลิศ",
    description: "การแข่งขันทักษะออกแบบและติดตั้งโซล่าเซลล์ (โซล่าเซลล์สำหรับโหลดแสงสว่าง) ในงานนิทรรศการวิชาการ ราชมงคลศรีวิชัยแฟร์ 2026 ภายใต้แนวคิด UNLOCK+ @ Srivijaya Fair Open House",
    organization: "คณะวิศวกรรมศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตตรัง",
    images: [
      { file: "srivijaya-solar-competition.png", caption: "การแข่งขันออกแบบและติดตั้งระบบโซล่าเซลล์" },
      { file: "srivijaya-award-photo.png", caption: "ภาพร่วมกับคณะกรรมการและผู้เข้าร่วมการแข่งขัน" },
      { file: "srivijaya-winner-certificate.png", caption: "เกียรติบัตรรางวัลชนะเลิศ" }
    ]
  },
  {
    id: "bit-tech-challenge-2026",
    title: "BIT Tech Challenge 2026",
    date: "7 สิงหาคม 2569",
    dateISO: "2026-08-07",
    champion: false,
    award: "รางวัลระดับเหรียญทอง ลำดับที่ 8",
    description: "การแข่งขันตอบปัญหาทางเทคโนโลยีสารสนเทศระดับภาคใต้ PSU Trang Tech Challenge: ประลองความรู้ไอที ประจำปี 2569",
    organization: "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตตรัง",
    images: [
      { file: "bit-tech-competition.png", caption: "บรรยากาศการแข่งขันตอบปัญหาทางเทคโนโลยีสารสนเทศ" },
      { file: "bit-tech-certificate.png", caption: "เกียรติบัตรรางวัลระดับเหรียญทอง ลำดับที่ 8" }
    ]
  }
];

export const innovationContests = [
  {
    id: "cia-2025",
    title: "CHANGE Innovation Awards 2025 (CIA)",
    dateLabel: "หนังสือรับรองวันที่",
    date: "15 สิงหาคม 2568",
    dateISO: "2025-08-15",
    award: "ได้รับการรับรองมาตรฐาน CEIN STANDARD",
    description: "โครงงานหุ่นยนต์กู้ภัยทางน้ำพลังงานแสงอาทิตย์เพื่อค้นหาและช่วยเหลือผู้ประสบอุทกภัย (Solar-powered Search and Victim Emergency Rescue Vessel) โดยทีม Human Commando Wave รหัส CIA25ENG049 นำเสนอแนวคิดการใช้พลังงานแสงอาทิตย์ ระบบควบคุมระยะไกล กล้อง และ GPS สำหรับงานค้นหาและช่วยเหลือผู้ประสบภัย",
    organization: "CHANGE Education • โครงการประกวดแนวคิดนวัตกรรม ประจำปี 2568",
    posterLayout: true,
    images: [
      { file: "cia-2025-poster-portrait.webp", caption: "โปสเตอร์โครงงาน: บทคัดย่อ วัตถุประสงค์ และการออกแบบระบบ", portrait: true },
      { file: "cia-2025-poster-landscape.webp", caption: "โปสเตอร์สรุปแนวคิดและขั้นตอนการดำเนินงาน" },
      { file: "cia-2025-cein-certificate.webp", caption: "หนังสือรับรองมาตรฐาน CEIN STANDARD • ทีม CIA25ENG049" }
    ]
  }
];

export const experienceData = [
  {
    missionId: "MISSION 001",
    organization: "Robotics & AI Frontier Lab (RAI KMITL)",
    role: "Mechatronics & Vision System Developer",
    duration: "MAY 2026",
    objective: "การประมวลผลกล้อง AI ตรวจจับวัตถุร่วมกับบอร์ดไมโครคอนโทรลเลอร์ และระบบควบคุม Mechatronics / PLC Industrial Automation ณ ภาควิชาหุ่นยนต์และปัญญาประดิษฐ์ สจล.",
    achievement: "สำเร็จการอบรม Mechatronics Program, การพัฒนา Vision AI และ PLC Control System ได้อย่างสมบูรณ์",
    status: "COMPLETED",
    icon: "Cpu"
  },
  {
    missionId: "MISSION 002",
    organization: "Computer Engineering Kasetsart University",
    role: "Embedded Systems & IoT Engineer",
    duration: "DEC 2025",
    objective: "พัฒนาโปรโตคอล MQTT บน ESP32 เพื่อสร้างระบบสื่อสาร Real-time IoT และออกแบบสถาปัตยกรรมแอปพลิเคชันระบบขนส่ง",
    achievement: "พัฒนาแชทสื่อสารและควบคุมอุปกรณ์ LED ผ่าน Wi-Fi พร้อมผ่านการแข่งขัน Hackathon System Design 5W1H",
    status: "COMPLETED",
    icon: "Wifi"
  },
  {
    missionId: "MISSION 003",
    organization: "Computer Engineering PSU",
    role: "Robotics Operator & Programmer",
    duration: "APR 2026",
    objective: "เขียนโปรแกรมควบคุม DJI RoboMaster EP ติดตั้งอัลตราโซนิกเซนเซอร์ คีมจับกระป๋อง และกล้องตรวจจับสัญลักษณ์",
    achievement: "คว้ารางวัลรองชนะเลิศอันดับ 1 ในการแข่งขัน Easy Robot Challenge (จากทั้งหมด 5 ทีม)",
    status: "COMPLETED",
    icon: "Trophy"
  },
  {
    missionId: "MISSION 004",
    organization: "Self-Driven Embedded Research & Development",
    role: "Independent Hardware Developer",
    duration: "2024 - PRESENT",
    objective: "สร้างและทดสอบโครงงานหุ่นยนต์ ระบบอัตโนมัติ การออกแบบแผงวงจร และศึกษาด้านปัญญาประดิษฐ์",
    achievement: "พัฒนาโครงงานหุ่นยนต์พลังงานแสงอาทิตย์และระบบไมโครคอนโทรลเลอร์หลายรูปแบบ",
    status: "ACTIVE",
    icon: "Activity"
  }
];
