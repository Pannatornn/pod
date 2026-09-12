"use client";

import { useState } from "react";

const links = [
  ["เกี่ยวกับผม", "#about"],
  ["โปรเจกต์", "#projects"],
  ["ประสบการณ์", "#experience"],
  ["ทักษะ", "#skills"],
  ["เกียรติบัตร", "#certificates"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="legacy-header">
      <a className="legacy-brand" href="#home" onClick={() => setOpen(false)}>
        Pannatorn Thongrak
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "ปิด ✕" : "☰"}
      </button>

      <nav className={open ? "open" : ""} aria-label="เมนูหลัก">
        {links.map(([title, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {title}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>ติดต่อ ↗</a>
      </nav>
    </header>
  );
}
