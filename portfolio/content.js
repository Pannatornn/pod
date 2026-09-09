/* แก้เนื้อหาและรูปในไฟล์นี้ แล้ว push ขึ้น GitHub เพื่ออัปเดตเว็บไซต์
 * src: ใช้เส้นทาง เช่น assets/transcript-1.jpg หรือ URL รูปแบบ https://
 * box: ตำแหน่งตัดภาพ [x,y,width,height] ใช้เฉพาะภาพเอกสารเดิม 1414 × 2000
 * รูปใหม่ทั่วไปไม่ต้องใส่ box
 * ช่องที่ยังไม่มีข้อมูลให้คง "" ไว้ เว็บไซต์จะแสดงพื้นที่ว่างพร้อมคำอธิบาย
 */
window.PORTFOLIO_CONTENT = {
  profile: {
    nameTH: 'ปัณณธร ทองรักษ์',
    nameEN: 'Pannatorn Thongrak',
    nickname: 'ปัน',
    birthDate: '25 กุมภาพันธ์ 2552',
    education: [
      { level: 'ระดับประถมศึกษา', school: 'โรงเรียนพรศิริกุล' },
      { level: 'ระดับมัธยมศึกษาตอนต้น', school: 'โรงเรียนสภาราชินี จังหวัดตรัง' },
      { level: 'ระดับมัธยมศึกษาตอนปลาย', school: 'โรงเรียนสภาราชินี จังหวัดตรัง' }
    ],
    skills: ['Arduino IDE', 'Visual Studio Code', 'HTML5', 'CSS3', 'C++', 'Flask · Python framework', 'Python', 'JavaScript'],
    talents: ['Coding · การเขียนโปรแกรม', 'การประกอบวงจรอิเล็กทรอนิกส์', 'การเล่นกีตาร์'],
    interests: ['Robotics & Automation', 'Programming & Artificial Intelligence', 'Electronics & Embedded Systems Development']
  },
  transcript: [
    { src: '', alt: 'ใบแสดงผลการเรียน ภาพที่ 1' },
    { src: '', alt: 'ใบแสดงผลการเรียน ภาพที่ 2' }
  ],
  // ใส่ข้อความจริงได้ภายหลัง ใช้ \n\n เพื่อแบ่งย่อหน้า
  sop: '',
  projects: [
    {
      id: 'solar-robot',
      title: 'Solar-powered Flood Survey and Victim Search Robot',
      subtitle: 'หุ่นยนต์พลังงานแสงอาทิตย์สำหรับภารกิจสำรวจพื้นที่ และค้นหาผู้ประสบอุทกภัย',
      additionalDescription: '',
      images: [
        { src: 'assets/education-original.png', box: [796, 407, 608, 223], alt: 'หุ่นยนต์สำรวจน้ำท่วมพลังงานแสงอาทิตย์' },
        { src: 'assets/education-original.png', box: [23, 1509, 358, 266], alt: 'การทดสอบหุ่นยนต์ในแหล่งน้ำ' },
        { src: '', alt: 'ภาพโครงงานเพิ่มเติม 1' },
        { src: '', alt: 'ภาพโครงงานเพิ่มเติม 2' }
      ]
    },
    { id: 'project-02', title: '', subtitle: '', additionalDescription: '', images: [
      { src: '', alt: 'โครงงานที่ 2 ภาพที่ 1' }, { src: '', alt: 'โครงงานที่ 2 ภาพที่ 2' }, { src: '', alt: 'โครงงานที่ 2 ภาพที่ 3' }
    ] }
  ],
  experiences: [
    { title: '', date: '', description: '', images: [{ src: '', alt: 'ภาพประสบการณ์ที่ 1' }] },
    { title: '', date: '', description: '', images: [{ src: '', alt: 'ภาพประสบการณ์ที่ 2' }] },
    { title: '', date: '', description: '', images: [{ src: '', alt: 'ภาพประสบการณ์ที่ 3' }] },
    { title: '', date: '', description: '', images: [{ src: '', alt: 'ภาพประสบการณ์ที่ 4' }] }
  ],
  camps: [
    {
      id: 'kmitl',
      title: 'Robotics and AI Frontier Camp 2026',
      subtitle: 'โครงการอบรมพัฒนาศักยภาพด้านหุ่นยนต์และปัญญาประดิษฐ์ 2569',
      date: '2–3 พฤษภาคม 2569',
      institution: 'KMITL',
      location: 'ภาควิชาหุ่นยนต์และปัญญาประดิษฐ์ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
      summary: 'เรียนรู้ AI บนบอร์ด Arduino Q พร้อมเปิดประสบการณ์ด้าน Mechatronics และระบบอัตโนมัติในอุตสาหกรรม',
      description: 'ในค่ายนี้ ผมได้เรียนรู้การเขียนโปรแกรมและการใช้ AI ร่วมกับบอร์ด Arduino Q ผ่าน Arduino App Lab รวมถึงการใช้โมดูลกล้องตรวจจับสีและวัตถุด้วยเทคโนโลยี AI\n\nผมเลือกเข้าร่วม Mechatronics Program จึงได้เปิดประสบการณ์การใช้ ABB RobotStudio เพื่อควบคุมแขนกล ABB ตลอดจนเรียนรู้ Industrial Automation และ PLC\n\nนอกจากความรู้ด้านเทคนิค ผมยังได้รู้จักเพื่อนใหม่ แลกเปลี่ยนความรู้และประสบการณ์ และฝึกใช้ทักษะการทำงานร่วมกันเป็นทีม',
      tags: ['Arduino Q', 'Arduino App Lab', 'AI Vision', 'ABB RobotStudio', 'PLC'],
      images: [
        { src: 'assets/project-original.png', box: [489, 322, 446, 315], alt: 'ภาพกลุ่มผู้เข้าร่วมค่าย KMITL' },
        { src: 'assets/project-original.png', box: [20, 322, 451, 315], alt: 'ภาพรวมผู้เข้าร่วมค่ายหุ่นยนต์และ AI' },
        { src: '', alt: 'ภาพกิจกรรม KMITL เพิ่มเติม 1' },
        { src: '', alt: 'ภาพกิจกรรม KMITL เพิ่มเติม 2' }
      ],
      certificate: 'kmitl'
    },
    {
      id: 'ku',
      title: 'Let Me Tired Camp #5',
      subtitle: 'ค่ายลองของครั้งที่ 5',
      date: '19–21 ธันวาคม 2568',
      institution: 'KASETSART UNIVERSITY',
      location: 'ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์',
      summary: 'ลงมือสร้างระบบ IoT ด้วย MicroPython และ ESP32 พร้อมฝึกออกแบบระบบในกิจกรรม Hackathon',
      description: 'ในค่ายคอมพิวเตอร์ครั้งนี้ ผมได้เขียน MicroPython ร่วมกับเพื่อน ๆ เพื่อควบคุมบอร์ด ESP32 ให้เชื่อมต่อ Wi-Fi และรับส่งข้อมูลผ่านโปรโตคอล MQTT จนสามารถสร้างระบบส่งข้อความแชตและสั่งงานหลอดไฟ LED ได้สำเร็จ โปรเจกต์นี้ช่วยพัฒนาทักษะการเขียน Python ของผมไปอีกขั้น\n\nนอกจากนี้ ผมยังได้ร่วมกิจกรรม Hackathon โดยใช้หลัก 5W1H ออกแบบ System Design ของแอปพลิเคชันสำหรับรถไฟฟ้า BTS และ MRT ซึ่งเสนอแนวคิด Tracking, Booking และการใช้ Weight Sensor เพื่อตรวจจับความหนาแน่นของผู้โดยสาร\n\nประสบการณ์นี้ทำให้ผมได้ฝึกทั้งฮาร์ดแวร์ ซอฟต์แวร์ กระบวนการคิดแก้ปัญหา และการทำงานร่วมกับผู้อื่นเป็นทีม',
      tags: ['MicroPython', 'ESP32', 'MQTT', '5W1H', 'System Design'],
      images: [
        { src: 'assets/project-original.png', box: [477, 1093, 445, 315], alt: 'ทีมค่ายลองของนำเสนองานออกแบบระบบ' },
        { src: 'assets/project-original.png', box: [946, 1093, 448, 315], alt: 'ลงมือเขียนโปรแกรมในค่ายลองของ' },
        { src: '', alt: 'ภาพกิจกรรมค่ายลองของเพิ่มเติม 1' },
        { src: '', alt: 'ภาพกิจกรรมค่ายลองของเพิ่มเติม 2' }
      ],
      certificate: 'ku'
    },
    {
      id: 'psu',
      title: 'It’s All About Computer Engineer Camp 2026',
      subtitle: 'Easy Robot · DJI RoboMaster EP',
      date: '20–24 เมษายน 2569',
      institution: 'PRINCE OF SONGKLA UNIVERSITY',
      location: 'ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
      summary: 'เรียนรู้ DJI RoboMaster EP และร่วมแข่งขันภารกิจในสาขา Easy Robot จนทีมได้รับรางวัลรองชนะเลิศอันดับ 1',
      description: 'ผมเลือกเข้าร่วมสาขา Easy Robot ซึ่งเป็นครั้งแรกที่ได้เรียนรู้และใช้งานหุ่นยนต์ DJI RoboMaster EP พร้อมอุปกรณ์คีบจับสิ่งของสำหรับคีบกระป๋อง เซนเซอร์อัลตราโซนิกสำหรับตรวจจับระยะ และกล้องสำหรับตรวจจับป้ายสีและสัญลักษณ์\n\nผมได้นำความรู้มาใช้ในการแข่งขันทำภารกิจสะสมคะแนนร่วมกับทีม โดยทีมของผมได้รับรางวัลรองชนะเลิศอันดับ 1 จากทั้งหมด 5 ทีม\n\nประสบการณ์นี้ทำให้ผมได้ฝึกวิเคราะห์โจทย์ วางแผนการทำงาน และเขียนโปรแกรมเพื่อให้หุ่นยนต์ทำภารกิจสำเร็จ',
      award: 'รองชนะเลิศอันดับ 1 จากทั้งหมด 5 ทีม',
      tags: ['DJI RoboMaster EP', 'Easy Robot', 'Sensors', 'Mission Planning'],
      images: [
        { src: '', alt: 'ค่าย Easy Robot ภาพที่ 1' }, { src: '', alt: 'ค่าย Easy Robot ภาพที่ 2' },
        { src: '', alt: 'ค่าย Easy Robot ภาพที่ 3' }, { src: '', alt: 'ค่าย Easy Robot ภาพที่ 4' }
      ]
    }
  ],
  workshops: [
    { title: '', organizer: '', date: '', description: '', images: [{ src: '', alt: 'ภาพกิจกรรมอบรมเพิ่มเติม 1' }, { src: '', alt: 'ภาพกิจกรรมอบรมเพิ่มเติม 2' }] }
  ],
  // เกียรติบัตรเดิมทั้ง 4 รายการยังคงแสดงอยู่ สามารถเพิ่มรายการใหม่ด้านล่าง
  extraCertificates: [
    { title: '', issuer: '', date: '', image: { src: '', alt: 'เกียรติบัตรเพิ่มเติม' } }
  ]
};
