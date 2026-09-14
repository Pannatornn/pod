'use client';

export default function Loading(){
  return (
    <div className="boot-screen">
      <div className="boot-terminal">
        <p className="boot-title">PANNATORN ENGINEERING OS</p>
        <span>LOADING PORTFOLIO DATABASE...</span>
        <span>INITIALIZING ROBOTICS MODULE...</span>
        <strong className="boot-cursor">READY_</strong>
      </div>
    </div>
  );
}
