"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import type { Crop } from "../data/profile";

type FrameProps = { src: string; alt: string; crop?: Crop; priority?: boolean };

export function ImageFrame({ src, alt, crop, priority = false }: FrameProps) {
  return (
    <span className="image-frame" style={{ aspectRatio: crop ? `${crop.width} / ${crop.height}` : "1414 / 2000" }}>
      <Image src={src} alt={alt} width={1414} height={2000} unoptimized priority={priority}
        style={crop ? {
          position: "absolute", maxWidth: "none",
          width: `${1414 / crop.width * 100}%`,
          height: `${2000 / crop.height * 100}%`,
          left: `${-crop.x / crop.width * 100}%`,
          top: `${-crop.y / crop.height * 100}%`,
        } : { width: "100%", height: "auto" }}
      />
    </span>
  );
}

export function MediaButton({ src, alt, crop, label = "ขยายภาพ", className = "" }: FrameProps & { label?: string; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const titleId = useId();
  function open() {
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <button className={`media-button ${className}`} onClick={open} aria-label={`${label}: ${alt}`}>
        <ImageFrame src={src} alt={alt} crop={crop} />
        <span className="media-caption">{label}<span aria-hidden="true">↗</span></span>
      </button>
      <dialog ref={dialog} className="image-dialog" aria-labelledby={titleId}
        onClose={() => { document.body.style.overflow = previousOverflow.current; }}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="dialog-toolbar">
          <p id={titleId}>{alt}</p>
          <button type="button" className="close-button" onClick={() => dialog.current?.close()} aria-label="ปิดภาพ">✕</button>
        </div>
        <div className="dialog-image"><ImageFrame src={src} alt={alt} crop={crop} /></div>
        <a className="dialog-source" href={src} target="_blank" rel="noopener noreferrer">เปิดภาพต้นฉบับเต็มหน้า ↗</a>
      </dialog>
    </>
  );
}
