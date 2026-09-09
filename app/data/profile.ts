export const profile = {
  name: "ปัณณธร ทองรักษ์",
  englishName: "Pannatorn Thongrak",
  nickname: "ปัน",
  email: "pannatorn252@gmail.com",
  phone: "099-391-1297",
  instagram: "pnn.__.trn",
  line: "@pannatorn15",
  github: "https://github.com/Pannatornn",
  introduction: "ผมปัน สนใจการเขียนโปรแกรม หุ่นยนต์ และวงจรอิเล็กทรอนิกส์ ชอบเรียนรู้ผ่านการลงมือทำ ตั้งแต่เชื่อมต่อเซนเซอร์ เขียนโปรแกรม ไปจนถึงทดสอบระบบที่ใช้งานได้จริง",
};

export type Crop = { x: number; y: number; width: number; height: number };
export const media = {
  profile: "/media/profile.png",
  project: "/media/solar-robot.png",
  camps: "/media/engineering-camps.png",
  achievements: "/media/achievements.png",
};
export const crops = {
  computer: { x: 875, y: 20, width: 520, height: 525 },
  robot: { x: 793, y: 399, width: 608, height: 248 },
  robotDemo: { x: 746, y: 653, width: 646, height: 369 },
  fieldTest: { x: 22, y: 1509, width: 357, height: 261 },
  kmitl: { x: 490, y: 322, width: 445, height: 315 },
  ku: { x: 477, y: 1094, width: 444, height: 312 },
  kmitlCertificate: { x: 949, y: 321, width: 445, height: 313 },
  kuCertificate: { x: 335, y: 1528, width: 261, height: 182 },
  bangmodCertificate: { x: 142, y: 297, width: 491, height: 273 },
  robotCertificate: { x: 827, y: 1147, width: 581, height: 404 },
} satisfies Record<string, Crop>;

export const skills = [
  { label: "Programming", title: "ภาษาและการพัฒนาเว็บ", items: ["Python", "C++", "HTML", "CSS", "JavaScript", "Flask", "MySQL"] },
  { label: "Hardware", title: "หุ่นยนต์และอิเล็กทรอนิกส์", items: ["Arduino", "ESP32", "Raspberry Pi", "GPS", "Water Flow Sensor"] },
  { label: "AI & IoT", title: "ภาพและการเชื่อมต่ออุปกรณ์", items: ["OpenCV", "YOLO", "MicroPython", "MQTT"] },
  { label: "Tools", title: "เครื่องมือที่ได้ใช้งาน", items: ["VS Code", "Arduino IDE", "Thonny", "ABB RobotStudio"] },
];

export const awards = [
  { year: "2024", result: "รองชนะเลิศอันดับ 1 · เหรียญทอง", event: "Mitr Phol Krabyai Ratchaburi Grand Robotics Championship", detail: "โครงงานหัวข้อ “ไฟฟรีจากฟ้า โซล่าเอ็นเนอร์ยี่”" },
  { year: "2025", result: "เหรียญทอง", event: "Mitr Phol Krabyai Ratchaburi Grand Robotics Championship", detail: "โครงงานหัวข้อ “นวัตกรรมเพื่อชุมชน”" },
  { year: "2568", result: "เหรียญทอง", event: "สัปดาห์วิทยาศาสตร์แห่งชาติ", detail: "การประกวดนวัตกรรม IoT" },
  { year: "2025", result: "เหรียญเงิน", event: "มหกรรมวิชาการ 46 ICT", detail: "STEM & Microcontroller Project" },
  { year: "2025", result: "เหรียญเงิน", event: "CHANGE INNOVATION AWARDS", detail: "ผลงานหุ่นยนต์พลังงานแสงอาทิตย์" },
];

export const certificates = [
  { id: "kmitl", category: "ค่ายและการอบรม", title: "Robotics and AI Frontier Camp 2026", issuer: "คณะวิศวกรรมศาสตร์ สจล.", date: "2–3 พฤษภาคม 2569", outcome: "ผ่านการอบรม · Mechatronics Program", src: media.camps, crop: crops.kmitlCertificate },
  { id: "ku", category: "ค่ายและการอบรม", title: "ค่ายลองของ ครั้งที่ 5", issuer: "ภาควิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์", date: "19–21 ธันวาคม 2568", outcome: "เข้าร่วมค่ายวิศวกรรมคอมพิวเตอร์", src: media.camps, crop: crops.kuCertificate },
  { id: "robot", category: "การแข่งขัน", title: "Grand Robotics Championship 2024", issuer: "Mitr Phol Krabyai Ratchaburi", date: "24 พฤศจิกายน 2567", outcome: "รองชนะเลิศอันดับ 1 · เหรียญทอง", src: media.achievements, crop: crops.robotCertificate },
  { id: "bangmod", category: "การแข่งขัน", title: "การแข่งขันเขียนโปรแกรมคอมพิวเตอร์", issuer: "ภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ.", date: "6 ตุลาคม 2567", outcome: "เข้าร่วมการแข่งขันระดับมัธยมศึกษาตอนปลาย", src: media.achievements, crop: crops.bangmodCertificate },
];
