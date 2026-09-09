// Content-driven sections. Loaded before app.js; initialized after dialog helpers exist.
window.initializePortfolioContent = function (helpers) {
  const { crop, escapeHTML, chips, showDialog, showCertificate } = helpers;
  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;
  const $ = (selector) => document.querySelector(selector);
  const media = new Map();
  let mediaSequence = 0;
  const paragraphs = (value) => String(value || '').split(/\n\s*\n/).filter(Boolean).map((p) => `<p>${escapeHTML(p)}</p>`).join('');
  function safeSource(source) {
    if (!source || typeof source !== 'string') return '';
    try { const url = new URL(source, window.location.href); return ['http:', 'https:'].includes(url.protocol) ? source : ''; } catch { return ''; }
  }
  function slot(image, label, variant = '') {
    const src = safeSource(image?.src);
    if (!src) return `<div class="media-slot ${variant}"><span class="slot-symbol" aria-hidden="true">+</span><strong>${escapeHTML(label)}</strong><span>พื้นที่สำหรับเพิ่มภาพ</span></div>`;
    const key = `photo-${mediaSequence++}`;
    media.set(key, {...image, src});
    const picture = image.box ? crop(src, image.box, image.alt || label) : `<img src="${escapeHTML(src)}" alt="${escapeHTML(image.alt || label)}" loading="lazy">`;
    return `<button class="gallery-photo ${variant}" data-gallery-photo="${key}" aria-label="ขยาย ${escapeHTML(image.alt || label)}">${picture}<span class="photo-expand" aria-hidden="true">↗</span></button>`;
  }
  function gallery(images, label, variant = '') { return `<div class="editable-gallery ${variant}">${(images || []).map((image, i) => slot(image, image.alt || `${label} ${i + 1}`)).join('')}</div>`; }
  function fullImage(image) {
    return image.box ? crop(image.src, image.box, image.alt || '') : `<img class="document-original" src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt || '')}">`;
  }
  const profile = content.profile;
  $('.person-name').innerHTML = `${escapeHTML(profile.nameTH)} <span> / ${escapeHTML(profile.nickname)}</span>`;
  $('.person-english').textContent = profile.nameEN;
  $('#profile-facts').innerHTML = `<div><dt>ชื่อ–สกุล</dt><dd>${escapeHTML(profile.nameTH)}<span>${escapeHTML(profile.nameEN)}</span></dd></div><div><dt>ชื่อเล่น</dt><dd>${escapeHTML(profile.nickname)}</dd></div><div><dt>วันเกิด</dt><dd>${escapeHTML(profile.birthDate)}</dd></div>`;
  $('#profile-education').innerHTML = profile.education.map((item, index) => `<div class="education-row"><span class="education-no">0${index + 1}</span><div><span class="small-label">${escapeHTML(item.level)}</span><h4>${escapeHTML(item.school)}</h4></div></div>`).join('');
  $('#profile-skills').innerHTML = profile.skills.map((skill) => `<span>${escapeHTML(skill)}</span>`).join('');
  $('#profile-talents').innerHTML = profile.talents.map((value) => `<li>${escapeHTML(value)}</li>`).join('');
  $('#profile-interests').innerHTML = profile.interests.map((value) => `<li>${escapeHTML(value)}</li>`).join('');
  $('#transcript-slots').innerHTML = content.transcript.map((image, index) => `<div class="transcript-frame"><div class="transcript-top"><span>TRANSCRIPT / 0${index + 1}</span><span>ACADEMIC RECORD</span></div>${slot(image, `ใบแสดงผลการเรียน ภาพที่ ${index + 1}`, 'transcript-image')}</div>`).join('');
  $('#sop-content').innerHTML = content.sop.trim() ? `<div class="sop-copy">${paragraphs(content.sop)}</div>` : '<div class="sop-empty"><span class="small-label">STATEMENT OF PURPOSE</span><span class="sop-placeholder-mark" aria-hidden="true">“</span><h3>พื้นที่สำหรับข้อความ SOP</h3><p>ยังไม่มีเนื้อหา</p></div>';
  const first = content.projects[0];
  $('.project-copy h3').textContent = first.title;
  $('.project-copy > p').textContent = first.subtitle;
  $('#project-gallery').innerHTML = `<div class="gallery-heading"><span class="small-label">PROJECT GALLERY</span><span>ภาพโครงงานและการทดลอง</span></div>${gallery(first.images, 'ภาพโครงงาน')}${first.additionalDescription ? `<div class="additional-description">${paragraphs(first.additionalDescription)}</div>` : '<p class="content-placeholder">พื้นที่สำหรับรายละเอียดโครงงานเพิ่มเติม</p>'}`;
  const second = content.projects[1];
  $('#second-project').innerHTML = `<div class="second-project-top"><div><span class="small-label">PROJECT / 02</span><h3>${escapeHTML(second.title || 'โครงงานที่ 2')}</h3><p>${escapeHTML(second.subtitle || 'รอเพิ่มชื่อโครงงานและคำอธิบาย')}</p></div><span class="outline-label">${second.title ? 'PROJECT' : 'TO BE ADDED'}</span></div>${gallery(second.images, 'ภาพโครงงานที่ 2')}${second.additionalDescription ? `<div class="additional-description">${paragraphs(second.additionalDescription)}</div>` : '<p class="content-placeholder">พื้นที่สำหรับอธิบายแนวคิด เทคโนโลยี บทบาท และผลลัพธ์ของโครงงาน</p>'}`;
  $('#experience-slots').innerHTML = content.experiences.map((item, index) => `<article class="experience-slot"><div class="experience-slot-top"><span class="small-label">EXPERIENCE / 0${index + 1}</span>${item.date ? `<time>${escapeHTML(item.date)}</time>` : ''}</div>${gallery(item.images, `ภาพประสบการณ์ที่ ${index + 1}`)}<div class="experience-slot-copy"><h3>${escapeHTML(item.title || `ประสบการณ์ที่ ${index + 1}`)}</h3>${item.description ? paragraphs(item.description) : '<p class="content-placeholder">พื้นที่สำหรับหัวข้อ บทบาท สิ่งที่ได้ทำ และสิ่งที่ได้เรียนรู้</p>'}</div></article>`).join('');
  $('#camp-list').innerHTML = content.camps.map((camp, index) => `<article class="camp-article" id="camp-${escapeHTML(camp.id)}"><div class="camp-top"><span class="camp-index">0${index + 1}</span><div class="camp-heading"><span class="small-label">${escapeHTML(camp.institution)} · ${escapeHTML(camp.date)}</span><h3>${escapeHTML(camp.title)}</h3><p class="camp-subtitle">${escapeHTML(camp.subtitle)}</p><p class="camp-location">${escapeHTML(camp.location)}</p></div></div><div class="camp-content"><div class="camp-description"><p>${escapeHTML(camp.summary)}</p>${chips(camp.tags)}${camp.award ? `<div class="camp-award"><span aria-hidden="true">✳</span>${escapeHTML(camp.award)}</div>` : ''}<details class="camp-details"><summary>อ่านประสบการณ์ในค่าย <span aria-hidden="true">+</span></summary><div>${paragraphs(camp.description)}</div></details>${camp.certificate ? `<button class="text-link" data-certificate="${escapeHTML(camp.certificate)}">ดูเกียรติบัตร <span>↗</span></button>` : ''}</div><div class="camp-gallery">${gallery(camp.images, `ภาพ ${camp.institution}`)}</div></div></article>`).join('');
  $('#workshop-list').innerHTML = content.workshops.map((item, index) => `<article class="workshop-slot"><div><span class="small-label">WORKSHOP / 0${index + 1}</span><h3>${escapeHTML(item.title || 'กิจกรรมอบรมเพิ่มเติม')}</h3>${item.organizer || item.date ? `<p>${escapeHTML([item.organizer, item.date].filter(Boolean).join(' · '))}</p>` : ''}${item.description ? paragraphs(item.description) : '<p class="content-placeholder">พื้นที่สำหรับชื่อกิจกรรม ผู้จัด วันเวลา และสิ่งที่ได้เรียนรู้</p>'}</div>${gallery(item.images, 'ภาพกิจกรรมอบรม')}</article>`).join('');
  const extraCertificates = $('#additional-certificates');
  if (extraCertificates) extraCertificates.innerHTML = content.extraCertificates.map((certificate) => `<article class="extra-certificate">${slot(certificate.image, certificate.image.alt || 'เกียรติบัตรเพิ่มเติม')}<div class="certificate-body"><span class="small-label">${escapeHTML(certificate.issuer || 'CERTIFICATE')}</span><h3>${escapeHTML(certificate.title || 'เกียรติบัตรเพิ่มเติม')}</h3><p>${escapeHTML(certificate.date || 'พื้นที่สำหรับเพิ่มรายละเอียด')}</p></div></article>`).join('');
  let selectedPhoto = null;
  function showPhoto(key) {
    const image = media.get(key);
    if (!image) return;
    selectedPhoto = key;
    const keys = [...media.keys()];
    const index = keys.indexOf(key);
    showDialog(`PHOTO ${index + 1} / ${keys.length}`, image.alt || 'ภาพผลงาน', fullImage(image) + `<div class="modal-navigation"><button data-gallery-photo="${keys[(index - 1 + keys.length) % keys.length]}">← ภาพก่อนหน้า</button><button data-gallery-photo="${keys[(index + 1) % keys.length]}">ภาพถัดไป →</button></div>`);
  }
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-gallery-photo]');
    if (button) showPhoto(button.dataset.galleryPhoto);
    else if (event.target.closest('[data-project],[data-activity],[data-certificate],[data-document]')) selectedPhoto = null;
  });
  $('#detail-dialog').addEventListener('close', () => { selectedPhoto = null; });
  $('#detail-dialog').addEventListener('keydown', (event) => {
    if (!selectedPhoto || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const keys = [...media.keys()];
    const step = event.key === 'ArrowRight' ? 1 : -1;
    event.preventDefault();
    showPhoto(keys[(keys.indexOf(selectedPhoto) + step + keys.length) % keys.length]);
  });
  // Missing user-added files display an honest empty state rather than a broken image.
  document.addEventListener('error', (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;
    const button = image.closest('.gallery-photo');
    if (button) {
      const placeholder = document.createElement('div');
      placeholder.className = 'media-slot';
      placeholder.innerHTML = '<strong>ไม่พบภาพ</strong><span>ตรวจสอบไฟล์ภาพที่เพิ่ม</span>';
      button.replaceWith(placeholder);
    }
  }, true);
};
