'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const assets = { profile: 'assets/profile-original.png', project: 'assets/education-original.png', activities: 'assets/project-original.png', certificates: 'assets/experience-original.png' };
const escapeHTML = (text) => String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function crop(source, box, alt, className = '') {
  const [x, y, width, height] = box;
  return `<div class="crop ${className}" style="--iw:${1414 / width * 100}%;--ix:${-x / width * 100}%;--iy:${-y / height * 100}%;aspect-ratio:${width}/${height}"><img src="${source}" width="1414" height="2000" alt="${escapeHTML(alt)}"></div>`;
}
const chips = (items) => `<div class="tech-tags">${items.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</div>`;
const projectTitle = 'Solar-powered Flood Survey and Victim Search Robot';
const projectNav = (active) => `<div class="modal-navigation" aria-label="หัวข้อรายละเอียดโครงงาน">${[['overview', 'ภาพรวม'], ['role', 'บทบาทของผม'], ['vision', 'AI'], ['electronics', 'Hardware'], ['dashboard', 'Dashboard'], ['awards', 'รางวัล']].map(([key, label]) => `<button data-project="${key}" aria-pressed="${key === active}">${label}</button>`).join('')}</div>`;
const awards = [
  ['2024', 'รองชนะเลิศอันดับ 1 · เหรียญทอง', 'Mitr Phol Krabyai Ratchaburi Grand Robotics Championship — โครงงานหัวข้อ “ไฟฟรีจากฟ้า โซล่าเอ็นเนอร์ยี่”'],
  ['2025', 'เหรียญทอง', 'Mitr Phol Krabyai Ratchaburi Grand Robotics Championship — โครงงานหัวข้อ “นวัตกรรมเพื่อชุมชน”'],
  ['2568', 'เหรียญทอง', 'สัปดาห์วิทยาศาสตร์แห่งชาติ — การประกวดนวัตกรรม IoT'],
  ['2025', 'เหรียญเงิน', 'มหกรรมวิชาการ 46 ICT — STEM & Microcontroller Project'],
  ['2025', 'เหรียญเงิน', 'CHANGE INNOVATION AWARDS']
];
const projectViews = {
  overview: {
    title: projectTitle,
    body: `<p>หุ่นยนต์พลังงานแสงอาทิตย์สำหรับภารกิจสำรวจพื้นที่และค้นหาผู้ประสบอุทกภัย พัฒนาขึ้นเพื่อสำรวจพื้นที่ทางน้ำและส่งภาพพร้อมข้อมูลแบบเรียลไทม์ผ่านเว็บแดชบอร์ด</p>${crop(assets.project, [796, 407, 608, 223], 'หุ่นยนต์สำรวจน้ำท่วมติดแผงโซลาร์เซลล์')}<h3>องค์ประกอบที่ทำงานร่วมกัน</h3><ul><li><strong>AI Human Detection:</strong> ตรวจจับบุคคลจากภาพด้วย OpenCV และ YOLO</li><li><strong>Real-time GPS Tracking:</strong> ติดตามพิกัดผ่าน GPS NEO-6M</li><li><strong>Water Flow Monitoring:</strong> อ่านค่าการไหลของน้ำจากเซนเซอร์</li><li><strong>Live Web Dashboard:</strong> แสดงภาพและข้อมูลจากระบบ</li><li><strong>Solar-powered System:</strong> ใช้พลังงานแสงอาทิตย์ร่วมกับแบตเตอรี่</li></ul>${chips(['Python', 'OpenCV', 'YOLO', 'Raspberry Pi 3B+', 'ESP32', 'Arduino IDE', 'HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL'])}`
  },
  role: {
    title: 'บทบาทของผมในโครงงาน',
    body: `<p>ผมมีส่วนร่วมตั้งแต่การสร้างตัวหุ่นยนต์จนถึงการทดสอบและปรับปรุงระบบ โดยทำงานร่วมกับทีมในโครงงาน Solar-powered Flood Survey and Victim Search Robot</p><ul><li>ออกแบบโครงสร้างของหุ่นยนต์</li><li>เชื่อมต่อวงจรอิเล็กทรอนิกส์และเซนเซอร์</li><li>พัฒนาโปรแกรมเชื่อมต่อ GPS และ Water Flow Sensor</li><li>ทดสอบและปรับปรุงประสิทธิภาพของระบบ</li><li>พัฒนา Human Detection ด้วย AI จากภาพ</li></ul>${crop(assets.project, [23, 1509, 358, 266], 'ทดสอบหุ่นยนต์สำรวจน้ำท่วมในแหล่งน้ำจริง')}<p class="dialog-image-note">ภาพและบทบาทอ้างอิงจากหน้าโครงงานที่แนบมา</p>`
  },
  vision: {
    title: 'Computer vision / ตรวจจับบุคคลจากภาพ',
    body: `<p>ใช้ Python ร่วมกับ OpenCV และ YOLO ในการพัฒนาการตรวจจับบุคคลจากภาพ เพื่อสนับสนุนภารกิจค้นหาผู้ประสบภัยของหุ่นยนต์สำรวจน้ำท่วม</p>${chips(['Python', 'OpenCV', 'YOLO', 'Human Detection'])}${crop(assets.project, [745, 652, 649, 384], 'ภาพโปรแกรมตรวจจับบุคคลด้วย YOLO จากหน้าโครงงาน')}<p class="dialog-image-note">ภาพผลการทำงานจากโครงงานที่แนบมา ไม่ใช่กล้องหรือข้อมูลสดของเว็บไซต์นี้</p>`
  },
  electronics: {
    title: 'Connected hardware / วงจรและเซนเซอร์',
    body: `<p>เชื่อม Raspberry Pi 3B+ และ ESP32 เข้ากับ GPS NEO-6M และ Water Flow Sensor พร้อมใช้พลังงานจากแผงโซลาร์เซลล์ร่วมกับแบตเตอรี่สำหรับตัวหุ่นยนต์</p><p>บทบาทของผมครอบคลุมการออกแบบโครงสร้าง เชื่อมต่อวงจรและเซนเซอร์ รวมถึงเขียนโปรแกรมเชื่อมต่อข้อมูลและทดสอบการทำงาน</p>${chips(['Raspberry Pi 3B+', 'ESP32', 'GPS NEO-6M', 'Water Flow Sensor', 'Solar Power'])}${crop(assets.project, [393, 1509, 312, 265], 'แผนผังวงจรอิเล็กทรอนิกส์จากหน้าโครงงาน')}<p class="dialog-image-note">ภาพวงจรจากต้นฉบับ ความคมชัดขึ้นอยู่กับไฟล์ที่แนบมา</p>`
  },
  dashboard: {
    title: 'Web dashboard / ภาพและข้อมูลจากหุ่นยนต์',
    body: `<p>เว็บแดชบอร์ดของโครงงานแสดงภาพกล้อง พิกัด GPS และข้อมูลการไหลของน้ำ โดยใช้ HTML, CSS, JavaScript, Flask และ MySQL เป็นส่วนหนึ่งของเทคโนโลยีที่ระบุในโครงงาน</p>${chips(['HTML / CSS / JavaScript', 'Flask', 'MySQL', 'GPS Tracking'])}${crop(assets.project, [21, 1164, 684, 329], 'ภาพหน้าจอ Solar Rescue System Dashboard จากผลงานจริง')}<p class="dialog-image-note">ภาพหน้าจอจากโครงงานที่แนบมา ยังไม่มีลิงก์เดโมหรือซอร์สโค้ดแนบมาด้วย</p>`
  },
  awards: {
    title: 'รางวัลของโครงงาน',
    body: `<p>รายการรางวัลที่ระบุในหน้าโครงงานหุ่นยนต์สำรวจพื้นที่และค้นหาผู้ประสบอุทกภัย</p><ul class="award-list">${awards.map(([year, title, description]) => `<li><span class="award-year">${year}</span><div><strong>${escapeHTML(title)}</strong><p>${escapeHTML(description)}</p></div></li>`).join('')}</ul><p class="dialog-image-note">รายการทั้งห้ามาจากข้อความในหน้าโครงงาน ส่วนเกียรติบัตรที่แนบมาสำหรับการแข่งขันนี้ยืนยันรางวัลรองชนะเลิศอันดับ 1 ปี 2024</p><button class="button primary" data-certificate="robotics">ดูเกียรติบัตรปี 2024 <span>↗</span></button>`
  }
};
const activities = {
  kmitl: {
    title: 'Robotics and AI Frontier Camp 2026',
    kicker: '02–03 MAY 2026 / KMITL',
    body: `<p>เข้าร่วมโครงการอบรมพัฒนาศักยภาพด้านหุ่นยนต์และปัญญาประดิษฐ์ ณ ภาควิชาหุ่นยนต์และปัญญาประดิษฐ์ คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง วันที่ 2–3 พฤษภาคม 2569 โดยเลือกเรียน Mechatronics program</p>${crop(assets.activities, [489, 322, 446, 315], 'ภาพผู้เข้าร่วมค่าย Mechatronics program')}<h3>สิ่งที่ได้เรียนรู้</h3><ul><li>การใช้ AI ร่วมกับบอร์ด Arduino Q และ Arduino App Lab</li><li>การใช้งาน ABB RobotStudio และควบคุมแขนกล ABB</li><li>Industrial Automation + PLC และการตรวจจับสีหรือวัตถุด้วย AI</li><li>การแลกเปลี่ยนความรู้และทำงานร่วมกับเพื่อนในค่าย</li></ul>${chips(['Arduino', 'AI', 'ABB RobotStudio', 'PLC', 'Teamwork'])}<button class="button primary" data-certificate="kmitl">ดูเกียรติบัตร <span>↗</span></button>`
  },
  ku: {
    title: 'ค่ายลองของ ครั้งที่ 5',
    kicker: '19–21 DEC 2025 / KASETSART UNIVERSITY',
    body: `<p>เข้าร่วมค่ายของภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วันที่ 19–21 ธันวาคม 2568</p>${crop(assets.activities, [477, 1093, 445, 315], 'ทีมค่ายลองของครั้งที่ 5 นำเสนองานออกแบบระบบ')}<h3>จากเขียนโปรแกรมสู่การออกแบบระบบ</h3><ul><li>เขียน MicroPython เพื่อควบคุมบอร์ด ESP32 ผ่าน Wi-Fi</li><li>ส่งและรับข้อมูลผ่าน MQTT เพื่อสร้างระบบแชตและสั่งงาน LED</li><li>ทำกิจกรรม Hackathon โดยใช้ 5W1H ในการคิดและออกแบบระบบ</li><li>ออกแบบแนวคิดแอปพลิเคชันรถไฟฟ้า BTS/MRT ที่มี Tracking, Booking และ Weight Sensor สำหรับตรวจจับความหนาแน่นผู้โดยสาร</li></ul><p class="dialog-image-note">ระบบรถไฟฟ้าเป็นผลงานแนวคิดในกิจกรรมออกแบบระบบ ไม่ได้ระบุว่าเปิดให้บริการจริง</p><button class="button primary" data-certificate="ku">ดูเกียรติบัตร <span>↗</span></button>`
  },
  competition: {
    title: 'เรียนรู้ผ่านการแข่งขันและการนำเสนอผลงาน',
    kicker: 'COMPETITIONS / TEAMWORK',
    body: `${crop(assets.certificates, [220, 570, 806, 521], 'คณะครูและนักเรียนกับรางวัล ณ โรงเรียนสภาราชินี จังหวัดตรัง')}<h3>การแข่งขันเขียนโปรแกรม</h3><p>เข้าร่วมการแข่งขันแก้ปัญหาด้วยการเขียนโปรแกรมคอมพิวเตอร์ ระดับมัธยมศึกษาตอนปลาย ปีการศึกษา 2567 ครั้งที่ 2 ของภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ในนามทีม “โรงเรียนชื่อดังย่าน Clock Tower”</p><h3>การแข่งขันหุ่นยนต์</h3><p>นำเสนอผลงานหุ่นยนต์สำรวจน้ำท่วมในการแข่งขัน Mitr Phol Krabyai Ratchaburi Grand Robotics Championship และเวทีประกวดโครงงานอื่นที่ระบุในแฟ้มผลงาน</p><div class="modal-navigation"><button data-certificate="coding">เกียรติบัตรเขียนโปรแกรม ↗</button><button data-project="awards">รางวัลโครงงานหุ่นยนต์ ↗</button></div>`
  }
};
const certificates = {
  kmitl: {title: 'Robotics and AI Frontier Camp 2026', issuer: 'KMITL / SCHOOL OF ENGINEERING', description: 'Pannatorn Thongrak · Mechatronics program · อบรมแบบ onsite วันที่ 2–3 พฤษภาคม 2569', source: assets.activities, box: [948, 322, 446, 315], document: 'activities'},
  ku: {title: 'ค่ายลองของ ครั้งที่ 5', issuer: 'KASETSART UNIVERSITY / COMPUTER ENGINEERING', description: 'ปัณณธร ทองรักษ์ · เข้าร่วมค่าย วันที่ 19–21 ธันวาคม 2568', source: assets.activities, box: [334, 1525, 263, 185], document: 'activities'},
  robotics: {title: 'รองชนะเลิศอันดับ 1 / Robotics Championship 2024', issuer: 'MITR PHOL KRABYAI RATCHABURI', description: 'ปัณณธร ทองรักษ์ · โรงเรียนสภาราชินี จังหวัดตรัง · เกียรติบัตรลงวันที่ 24 พฤศจิกายน 2567', source: assets.certificates, box: [820, 1142, 594, 417], document: 'certificates'},
  coding: {title: 'เข้าร่วมการแข่งขันเขียนโปรแกรมคอมพิวเตอร์', issuer: 'KMUTT / COMPUTER ENGINEERING', description: 'นายปัณณธร ทองรักษ์ · ทีม “โรงเรียนชื่อดังย่าน Clock Tower” · เกียรติบัตรลงวันที่ 6 ตุลาคม 2567', source: assets.certificates, box: [142, 297, 491, 347], document: 'certificates', note: 'ส่วนล่างของเกียรติบัตรถูกภาพอื่นซ้อนทับในต้นฉบับ จึงแสดงได้เท่าที่มองเห็นจากไฟล์แนบ'}
};

const dialog = $('#detail-dialog');
const dialogContent = $('#dialog-content');
let originalOpener = null;
let currentCertificate = null;
function showDialog(kicker, title, body) {
  if (!dialog.open) originalOpener = document.activeElement;
  $('#dialog-kicker').textContent = kicker;
  dialogContent.innerHTML = `<div class="dialog-main"><h2 id="dialog-title" tabindex="-1">${escapeHTML(title)}</h2>${body}</div>`;
  document.body.classList.add('dialog-open');
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  $('#dialog-title').focus({preventScroll: true});
}
function showProject(key) {
  const item = projectViews[key];
  if (!item) return;
  currentCertificate = null;
  showDialog('PROJECT / SOLAR RESCUE ROBOT', item.title, projectNav(key) + item.body + '<button class="text-link source-link" data-document="project">ดูหน้าโครงงานต้นฉบับ ↗</button>');
}
function showCertificate(key) {
  const certificate = certificates[key];
  if (!certificate) return;
  currentCertificate = key;
  const keys = Object.keys(certificates);
  const index = keys.indexOf(key);
  showDialog(certificate.issuer, certificate.title, `<p>${escapeHTML(certificate.description)}</p><div class="dialog-certificate">${crop(certificate.source, certificate.box, certificate.title)}</div><p class="dialog-image-note">${escapeHTML(certificate.note || 'เกียรติบัตรจากภาพต้นฉบับที่แนบมา ความคมชัดขึ้นอยู่กับความละเอียดของเอกสารต้นฉบับ')}</p><div class="modal-navigation" aria-label="เลื่อนดูเกียรติบัตร"><button data-certificate="${keys[(index - 1 + keys.length) % keys.length]}">← ก่อนหน้า</button><button data-certificate="${keys[(index + 1) % keys.length]}">ถัดไป →</button><button data-document="${certificate.document}">ดูต้นฉบับเต็ม ↗</button></div>`);
}
function showDocument(key) {
  if (!assets[key]) return;
  currentCertificate = null;
  const titles = {profile: 'ประวัติส่วนตัวและการศึกษา', project: 'โครงงานหุ่นยนต์สำรวจน้ำท่วม', activities: 'กิจกรรมค่ายและเกียรติบัตร', certificates: 'กิจกรรมและหลักฐานเกียรติบัตร'};
  showDialog('ORIGINAL PORTFOLIO PAGE', titles[key], `<p>ภาพต้นฉบับที่ใช้ประกอบข้อมูลในเว็บไซต์</p><img class="document-original" src="${assets[key]}" alt="${titles[key]} — ภาพต้นฉบับ" width="1414" height="2000"><a class="button primary" href="${assets[key]}" download="pan-${key}.png">ดาวน์โหลดภาพต้นฉบับ <span>↓</span></a>`);
}
document.addEventListener('click', (event) => {
  const control = event.target.closest('[data-project],[data-activity],[data-certificate],[data-document]');
  if (!control) return;
  if (control.dataset.project) showProject(control.dataset.project);
  else if (control.dataset.activity) {
    currentCertificate = null;
    const item = activities[control.dataset.activity];
    if (item) showDialog(item.kicker, item.title, item.body);
  } else if (control.dataset.certificate) showCertificate(control.dataset.certificate);
  else showDocument(control.dataset.document);
});
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  currentCertificate = null;
  if (originalOpener?.isConnected) originalOpener.focus({preventScroll: true});
});
dialog.addEventListener('keydown', (event) => {
  if (!currentCertificate || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const keys = Object.keys(certificates);
  const step = event.key === 'ArrowRight' ? 1 : -1;
  const next = (keys.indexOf(currentCertificate) + step + keys.length) % keys.length;
  event.preventDefault();
  showCertificate(keys[next]);
});

const mobileMenu = $('.menu-toggle');
const navigation = $('#main-nav');
function closeMenu() {
  mobileMenu.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-label', 'เปิดเมนู');
  navigation.classList.remove('open');
}
mobileMenu.addEventListener('click', () => {
  const isOpen = mobileMenu.getAttribute('aria-expanded') === 'true';
  mobileMenu.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.setAttribute('aria-label', isOpen ? 'เปิดเมนู' : 'ปิดเมนู');
  navigation.classList.toggle('open', !isOpen);
});
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', (event) => { if (!event.target.closest('.header')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); mobileMenu.focus(); } });

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let customMotion = null;
try { customMotion = localStorage.getItem('pan-motion'); } catch { /* Device preferences are optional. */ }
let paused = customMotion === 'paused' || (customMotion !== 'enabled' && motionQuery.matches);
const motionControl = $('.motion-toggle');
function applyMotion() {
  document.body.classList.toggle('motion-paused', paused);
  document.documentElement.classList.toggle('motion-paused', paused);
  motionControl.setAttribute('aria-pressed', String(paused));
  const label = paused ? 'เปิดแอนิเมชัน' : 'หยุดแอนิเมชัน';
  motionControl.setAttribute('aria-label', label);
  motionControl.title = label;
  $('.motion-symbol').textContent = paused ? '▷' : 'Ⅱ';
}
applyMotion();
motionControl.addEventListener('click', () => {
  paused = !paused;
  customMotion = paused ? 'paused' : 'enabled';
  try { localStorage.setItem('pan-motion', customMotion); } catch { /* Continue without persistence. */ }
  applyMotion();
});
motionQuery.addEventListener('change', (event) => { if (!customMotion) { paused = event.matches; applyMotion(); } });

window.initializePortfolioContent?.({ crop, escapeHTML, chips, showDialog, showCertificate });

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  }, {threshold: 0.08, rootMargin: '0px 0px -24px 0px'});
  $$('.reveal').forEach((element) => revealObserver.observe(element));
  document.body.classList.add('js-motion');
}
const sectionLinks = $$('#main-nav a');
const sections = $$('main > section[id]');
let scrollQueued = false;
function refreshScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $('.reading-progress').style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  let current = sections[0].id;
  for (const section of sections) if (section.offsetTop <= y + 160) current = section.id;
  if (max > 0 && y >= max - 5) current = sections[sections.length - 1].id;
  for (const link of sectionLinks) {
    const active = link.hash === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scrollQueued = false;
}
window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(refreshScroll); } }, {passive:true});
window.addEventListener('resize', refreshScroll, {passive:true});
window.addEventListener('load', refreshScroll);
refreshScroll();

const tiltCard = $('[data-tilt]');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let tiltFrame = null;
  tiltCard.addEventListener('pointermove', (event) => {
    if (paused || motionQuery.matches) return;
    if (tiltFrame) cancelAnimationFrame(tiltFrame);
    tiltFrame = requestAnimationFrame(() => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      tiltCard.style.transform = `perspective(1300px) rotateX(${-y * 6}deg) rotateY(${x * 7}deg)`;
      tiltFrame = null;
    });
  });
  tiltCard.addEventListener('pointerleave', () => {
    if (tiltFrame) cancelAnimationFrame(tiltFrame);
    tiltFrame = null;
    tiltCard.style.transform = '';
  });
}
