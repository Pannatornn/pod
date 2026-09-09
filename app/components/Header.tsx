"use client";

import { useState } from "react";
const links = [
  ["เกี่ยวกับผม", "#about"], ["โปรเจกต์", "#projects"], ["ประสบการณ์", "#experience"],
  ["ทักษะ", "#skills"], ["เกียรติบัตร", "#certificates"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="shell navigation" aria-label="เมนูหลัก">
        <a href="#home" className="brand" onClick={() => setOpen(false)} aria-label="Pannatorn — หน้าแรก">
          <span className="brand-mark" aria-hidden="true">p<span>.</span></span><span>PANNATORN<span className="brand-sub">ROBOTS. CODE. CURIOSITY.</span></span>
        </a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "ปิด ✕" : "เมนู ☰"}</button>
        <div id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([title, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{title}</a>)}
          <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>ติดต่อ <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
