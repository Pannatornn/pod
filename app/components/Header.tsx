"use client";

import { useState } from "react";

const links = [
  ["เกี่ยวกับผม", "#about"],
  ["โปรเจกต์", "#projects"],
  ["ทักษะ", "#skills"],
  ["ติดต่อ", "#contact"],
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
      </nav>
    </header>
  );
}
