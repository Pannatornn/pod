'use client';

import { useEffect, useState } from 'react';

export default function BootSequence(){
 const [done,setDone]=useState(false);
 useEffect(()=>{
  const timer=setTimeout(()=>setDone(true),2200);
  return()=>clearTimeout(timer);
 },[]);
 if(done) return null;
 return <div className="boot-screen">
  <div className="boot-terminal">
   <p>PANNATORN ENGINEERING OS</p>
   <span>INITIALIZING SYSTEM...</span>
   <span>LOADING ROBOTICS DATABASE...</span>
   <span>AI MODULE ONLINE</span>
   <span>PROJECT ARCHIVE READY</span>
   <strong>ENTER SYSTEM_</strong>
  </div>
 </div>;
}
