export const projectsData = [
  {
    id: "PRJ-001",
    name: "Solar-powered Flood Survey and Victim Search Robot",
    nameTH: "หุ่นยนต์พลังงานแสงอาทิตย์สำหรับภารกิจสำรวจพื้นที่ และค้นหาผู้ประสบอุทกภัย",
    year: "2024 - 2025",
    mainImage: "/images/project_poster.jpg",
    overview: "พัฒนาหุ่นยนต์สำรวจพื้นที่ทางน้ำสำหรับภารกิจค้นหาผู้ประสบภัย โดยใช้ Raspberry Pi และ ESP32 ร่วมกับ AI, GPS และ Water Flow Sensor เพื่อส่งภาพและข้อมูลแบบเรียลไทม์ผ่าน Web Dashboard พร้อมใช้พลังงานแสงอาทิตย์ร่วมกับแบตเตอรี่เพื่อยืดเวลาการทำงาน",
    myRoles: [
      "ออกแบบโครงสร้างของหุ่นยนต์",
      "เชื่อมต่อวงจรอิเล็กทรอนิกส์ และเซนเซอร์",
      "พัฒนาโปรแกรมเชื่อมต่อ GPS และ Water Flow Sensor",
      "ทดสอบและปรับปรุงประสิทธิภาพของระบบ",
      "พัฒนา Human Detection ด้วย AI จากภาพ"
    ],
    keyFeatures: [
      "AI Human Detection (Img Processing)",
      "Real-time GPS Tracking",
      "Water Flow Monitoring",
      "Live Web Dashboard",
      "Solar-powered System"
    ],
    achievements: [
      "🏆 1st Runner Up Gold Medal, Mitr Phol Krabyai Ratchaburi Grand Robotics Championship 2024 (โครงงานหัวข้อ \"ไฟฟรีจากฟ้า โซล่าเอ็นเนอร์ยี่\")",
      "🥇 Gold Medal, Mitr Phol Krabyai Ratchaburi Grand Robotics Championship 2025 (โครงงานหัวข้อ “นวัตกรรมเพื่อชุมชน”)",
      "🥇 Gold Medal, สัปดาห์วิทยาศาสตร์แห่งชาติ 2568 มหาวิทยาลัยราชภัฏสุราษฎร์ธานี (การประกวดนวัตกรรม IoT)",
      "🥈 Silver Medal, มหกรรมวิชาการ 46 ict 2025 (Stem & Microcontroller Project)",
      "🥈 Silver Medal, CHANGE INNOVATION AWARDS 2025"
    ],
    techStack: [
      "Python", "OpenCV", "YOLO",
      "Raspberry Pi 3B+", "ESP32", "Arduino IDE",
      "Flask", "MySQL", "GPS NEO-6M", "Water Flow Sensor",
      "HTML5", "CSS3", "JavaScript"
    ],
    gallery: [
      {
        url: "/images/project_poster.jpg",
        caption: "บอร์ดโปสเตอร์นำเสนอโครงงานและตัวหุ่นยนต์พร้อมแท่นควบคุม"
      },
      {
        url: "/images/project_water_test.jpg",
        caption: "การลงพื้นที่ทดสอบหุ่นยนต์ขับเคลื่อนในสระน้ำจริง"
      },
      {
        url: "/images/project_yolo_code.webp",
        caption: "โปรแกรมประมวลผลกล้องตรวจจับมนุษย์ด้วย YOLO (Python/OpenCV)"
      },
      {
        url: "/images/project_web_dashboard.jpg",
        caption: "Live Web Dashboard แสดงแผนที่ GPS Tracking & กล้องเรียลไทม์"
      },
      {
        url: "/images/project_trophy.jpg",
        caption: "ภาพถ่ายรับถ้วยรางวัลและเหรียญรางวัลชนะเลิศการแข่งขัน"
      }
    ],
    certificates: [
      {
        url: "/images/cert_project/cert_mitrphol_2024.jpg",
        title: "1st Runner Up Gold Medal - Mitr Phol Robotics 2024",
        issuer: "ชมรมวิทยาการหุ่นยนต์แห่งประเทศไทย & กลุ่มมิตรผล (ไฟฟรีจากฟ้า โซล่าเอ็นเนอร์ยี่)"
      },
      {
        url: "/images/cert_project/cert_sapharachinee_winner.jpg",
        title: "รางวัลชนะเลิศ การพัฒนานวัตกรรมและนำเสนอยอดเยี่ยม",
        issuer: "โรงเรียนสภาราชินี จังหวัดตรัง & มทร.ศรีวิชัย"
      },
      {
        url: "/images/cert_project/cert_mitrphol_2025.jpg",
        title: "Gold Medal - Mitr Phol Robotics 2025",
        issuer: "กลุ่มมิตรผล & ชมรมครูหุ่นยนต์ไทย (นวัตกรรมเพื่อชุมชน)"
      },
      {
        url: "/images/cert_project/cert_surat_gold.jpg",
        title: "Gold Medal - IoT Innovation (สัปดาห์วิทยาศาสตร์แห่งชาติ 2568)",
        issuer: "มหาวิทยาลัยราชภัฏสุราษฎร์ธานี"
      },
      {
        url: "/images/cert_project/cert_46ict_silver.jpg",
        title: "Silver Medal - STEM & Microcontroller Project (46ICT 2025)",
        issuer: "สพฐ. กระทรวงศึกษาธิการ กลุ่มโรงเรียน 46ICT"
      },
      {
        url: "/images/cert_project/cert_cia_silver.png",
        title: "Silver Medal - CHANGE INNOVATION AWARDS 2025 (CIA)",
        issuer: "CHANGE INNOVATION AWARDS 2025"
      }
    ]
  },
  {
    id: "PRJ-002",
    name: "Autonomous Smart Traffic & Passenger Tracking System",
    nameTH: "ระบบติดตามความหนาแน่นผู้โดยสารและจองตั๋วรถไฟฟ้าอัจฉริยะ (Hackathon Project)",
    year: "2025",
    mainImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    overview: "ระบบติดตามความหนาแน่นของผู้โดยสารบนโบกี้รถไฟฟ้า BTS & MRT แบบเรียลไทม์ โดยใช้ Weight Sensor ประมวลผลร่วมกับ ESP32 และส่งข้อมูลผ่าน MQTT ไปยังแอปพลิเคชันจองตั๋วและแจ้งเตือนตู้โดยสารที่ว่าง",
    myRoles: [
      "ออกแบบสถาปัตยกรรมระบบ (System Design 5W1H)",
      "เขียนโค้ด MicroPython บน ESP32 เชื่อมต่อ Wi-Fi & MQTT",
      "พัฒนาเซนเซอร์วัดน้ำหนัก (Weight Sensor) ตรวจจับความหนาแน่น"
    ],
    keyFeatures: [
      "ESP32 MicroPython Control",
      "MQTT Real-time Protocol",
      "Weight Sensor Occupancy Detector",
      "5W1H System Architecture Design"
    ],
    achievements: [
      "🎉 รางวัลชมเชยการออกแบบ System Design ในงาน Hackathon ค่ายลองของครั้งที่ 5"
    ],
    techStack: [
      "ESP32", "MicroPython", "MQTT Protocol", "Weight Sensor", "Wi-Fi", "System Design 5W1H"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        caption: "การต่อวงจรอิเล็กทรอนิกส์ทดสอบ ESP32"
      }
    ]
  }
];
