"use client";

import { useEffect } from "react";
export default function Motion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    items.forEach(item => {
      if (item.getBoundingClientRect().top > window.innerHeight) item.classList.add("reveal-pending");
      observer.observe(item);
    });
    const revealAll = () => { items.forEach(item => item.classList.remove("reveal-pending")); observer.disconnect(); };
    preference.addEventListener("change", revealAll);
    return () => { revealAll(); preference.removeEventListener("change", revealAll); };
  }, []);
  return null;
}
