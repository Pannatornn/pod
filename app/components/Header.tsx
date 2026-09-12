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
    <>
      <style jsx>{`
        .legacy-header {
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .menu-toggle {
          display: none;
          border: 0;
          background: transparent;
          font-size: 22px;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .menu-toggle {
            display: block;
          }
          .legacy-header nav {
            position: absolute;
            top: 62px;
            right: 0;
            display: ${open ? "flex" : "none"};
            flex-direction: column;
            gap: 18px;
            padding: 20px;
            background: #f2efe4;
            border: 1px solid #241713;
            z-index: 200;
          }
        }
      `}</style>
      <header className={`legacy-header ${open ? "menu-open" : ""}`}>
        <a className="legacy-brand" href="#home" onClick={() => setOpen(false)}>
          Pannatorn Thongrak
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="เปิดเมนู"
        >
          {open ? "ปิด ✕" : "☰"}
        </button>

        <nav aria-label="เมนูหลัก">
          {links.map(([title, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {title}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
