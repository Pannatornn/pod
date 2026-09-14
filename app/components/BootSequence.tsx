'use client';

import { useEffect, useState } from 'react';

const logs = [
 'INITIALIZING SYSTEM...',
 'LOADING ROBOTICS DATABASE...',
 'AI MODULE ONLINE',
 'PROJECT ARCHIVE READY',
];

export default function BootSequence(){
 const [done,setDone]=useState(false);
 const [visible,setVisible]=useState(0);

 useEffect(()=>{
  const interval=setInterval(()=>setVisible(v=>Math.min(v+1,logs.length)),450);
  const timer=setTimeout(()=>setDone(true),3000);
  return()=>{clearInterval(interval);clearTimeout(timer)};
 },[]);

 if(done) return null;

 return <div className="boot-screen">
  <div className="boot-terminal">
   <p className="boot-title">PANNATORN ENGINEERING OS</p>
   {logs.slice(0,visible).map(log=><span key={log}>{log}</span>)}
   <strong className="boot-cursor">ENTER SYSTEM_</strong>
  </div>
 </div>;
}
