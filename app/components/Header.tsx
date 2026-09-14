"use client";

import { useState } from "react";

const links = [
  ["Profile", "#profile"],
  ["Projects", "#project"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="site-brand" href="#home">
        <span>PANNATORN</span>
        <small>ROBOTICS • CODE • ENGINEERING</small>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="toggle menu"
      >
        {open ? "×" : "☰"}
      </button>

      <nav className={open ? "nav-open" : ""}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
