"use client";

import { useState } from "react";
import { certificates } from "../data/profile";
import { MediaButton } from "./Media";

const filters = ["ทั้งหมด", "ค่ายและการอบรม", "การแข่งขัน"];
export default function Certificates() {
  const [filter, setFilter] = useState("ทั้งหมด");
  const visible = certificates.filter(item => filter === "ทั้งหมด" || item.category === filter);
  return (
    <section id="certificates" className="section shell">
      <div className="section-heading" data-reveal><p className="eyebrow">05 / CERTIFICATES</p><h2>ทุกก้าวของ<span className="accent">การเรียนรู้</span></h2><p>เกียรติบัตรจากค่าย การอบรม และการแข่งขัน กดที่ภาพเพื่อดูรายละเอียด</p></div>
      <div className="certificate-controls"><div className="filter-buttons" role="group" aria-label="กรองเกียรติบัตร">{filters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><p className="result-count" aria-live="polite">{visible.length} รายการ</p></div>
      <div className="certificate-grid">{visible.map(item => (
        <article className="certificate-card" key={item.id}>
          <MediaButton src={item.src} crop={item.crop} alt={item.title} label="ดูเกียรติบัตร" />
          <div className="certificate-copy"><p className="small-label">{item.date}</p><h3>{item.title}</h3><p className="muted">{item.issuer}</p><span className="certificate-outcome">{item.outcome}</span></div>
        </article>
      ))}</div>
    </section>
  );
}
