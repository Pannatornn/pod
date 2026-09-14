'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Folder, User, Mail, X, Minus } from 'lucide-react';

const Window = ({ title, icon: Icon, children, id, active, setActive, onClose }: any) => (
  <motion.div drag dragMomentum={false} onPointerDown={() => setActive(id)} initial={{scale:.9,opacity:0}} animate={{scale:1,opacity:1}} className={`absolute w-96 bg-[#1a1a1a] window-bevel flex flex-col ${active===id?'z-50':'z-10'}`} style={{left:100+(id*20),top:100+(id*20)}}>
    <div className={`title-bar px-2 py-1 flex justify-between items-center cursor-move ${active!==id?'grayscale':''}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white"><Icon size={14}/>{title}</div>
      <div className="flex gap-1"><button className="bg-gray-700 p-0.5 border border-black"><Minus size={12}/></button><button onClick={()=>onClose(id)} className="bg-gray-700 p-0.5 hover:bg-red-900 border border-black"><X size={12}/></button></div>
    </div>
    <div className="p-4 text-sm font-mono overflow-y-auto max-h-[400px] text-gray-300">{children}</div>
  </motion.div>
);

export default function ArchiveOS(){
 const [booting,setBooting]=useState(true);
 const [openWindows,setOpenWindows]=useState<any[]>([]);
 const [activeWindow,setActiveWindow]=useState<any>(null);
 useEffect(()=>{const t=setTimeout(()=>setBooting(false),3000);return()=>clearTimeout(t)},[]);
 const toggleWindow=(id:number,title:string,icon:any,content:any)=>{if(openWindows.find(w=>w.id===id))setActiveWindow(id);else{setOpenWindows([...openWindows,{id,title,icon,content}]);setActiveWindow(id)}};
 if(booting)return <div className="bg-black h-screen w-screen p-10 flex flex-col font-mono text-xs text-white uppercase leading-relaxed"><p>ARCHIVE_01 BIOS v4.0 (C) 1994</p><p>CPU: DESIGN_ENGINE_CORE_X9</p><p>MEMORY TEST: 128000KB OK</p><p className="mt-4 animate-pulse">Checking for boot media...</p><p>Found System Partition: /dev/DESIGNER_PORTFOLIO</p><p className="text-[#00ff41] mt-2">Loading interface...</p></div>;
 return <div className="h-screen w-screen relative overflow-hidden bg-[#050505]"><div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none"/><div className="dither-overlay"/>
 <div className="p-8 flex flex-col gap-8 w-fit relative z-20"><DesktopIcon icon={Folder} label="Projects" onClick={()=>toggleWindow(1,'C:/WORKS/GALLERY',Folder,<ProjectList/>)}/><DesktopIcon icon={User} label="Identity" onClick={()=>toggleWindow(2,'SYSTEM_PROFILE',User,<AboutSection/>)}/><DesktopIcon icon={Terminal} label="History" onClick={()=>toggleWindow(3,'CMD_LOG',Terminal,<ExperienceLog/>)}/><DesktopIcon icon={Mail} label="Contact" onClick={()=>toggleWindow(4,'OUTBOX',Mail,<ContactForm/>)}/></div>
 <AnimatePresence>{openWindows.map(w=><Window key={w.id} {...w} active={activeWindow} setActive={setActiveWindow} onClose={(id:number)=>setOpenWindows(openWindows.filter(x=>x.id!==id))}/>)}</AnimatePresence>
 <div className="absolute bottom-0 w-full h-10 bg-[#222] border-t-2 border-[#444] flex items-center px-4 gap-4 z-[100]"><div className="bg-[#444] px-3 py-1 font-bold italic text-xs border-r-2 border-b-2 border-white">START</div><div className="text-[10px] text-gray-500 font-mono ml-auto">ARCHIVE_OS v1.0.4 - 21:04 PM</div></div>
 </div>
}

function DesktopIcon({icon:Icon,label,onClick}:any){return <button onClick={onClick} className="flex flex-col items-center gap-1 group w-20"><div className="p-3 group-hover:bg-indigo-900/30 border border-transparent"><Icon size={32} className="text-indigo-400"/></div><span className="text-[10px] uppercase font-bold text-white bg-black/50 px-1">{label}</span></button>}
const ProjectList=()=> <div className="grid grid-cols-2 gap-4">{[1,2,3,4].map(i=><div key={i} className="border border-gray-700 p-2"><div className="aspect-video bg-gray-900 flex items-center justify-center">IMG_0{i}.DAT</div><p className="text-amber-500">PROJECT_0{i}.EXE</p></div>)}</div>;
const AboutSection=()=> <div><h2 className="text-indigo-400 font-bold">ARCHIVE_USER_01</h2><p>DIGITAL DESIGNER & CREATIVE TECHNOLOGIST. SPECIALIZING IN IMMERSIVE SYSTEMS.</p></div>;
const ExperienceLog=()=> <div>2022 - PRESENT: LEAD SYSTEM ARCHITECT<br/>2019 - 2022: INTERFACE DESIGNER</div>;
const ContactForm=()=> <div><textarea className="w-full bg-black border border-gray-700 p-2 h-24" placeholder="ENTER MESSAGE..."/><button className="w-full bg-indigo-600 py-1">Send Transmission</button></div>;
