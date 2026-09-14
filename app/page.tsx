'use client';

import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import {Terminal,Folder,User,Mail,X,Minus} from 'lucide-react';

const Window=({title,icon:Icon,children,id,active,setActive,onClose}:any)=>(
<motion.div drag dragMomentum={false} onPointerDown={()=>setActive(id)} initial={{opacity:0}} animate={{opacity:1}} className={`absolute w-96 bg-[#111] border-2 border-gray-600 text-white ${active===id?'z-50':'z-10'}`} style={{left:100+id*30,top:100+id*30}}>
<div className="title-bar flex justify-between p-2 bg-indigo-700"><span><Icon size={14} className="inline"/> {title}</span><button onClick={()=>onClose(id)}><X size={14}/></button></div>
<div className="p-4 font-mono text-sm">{children}</div>
</motion.div>);

export default function ArchiveOS(){
const [windows,setWindows]=useState<any[]>([]);const [active,setActive]=useState(null);
const open=(id:number,title:string,icon:any,content:any)=>{if(!windows.find(w=>w.id===id))setWindows([...windows,{id,title,icon,content}]);setActive(id)};
return <main className="h-screen bg-black overflow-hidden text-green-400 font-mono">
<div className="p-8 flex gap-8"><IconButton icon={Folder} label="Projects" click={()=>open(1,'PROJECTS',Folder,<Projects/>)}/><IconButton icon={User} label="Identity" click={()=>open(2,'PROFILE',User,<Profile/>)}/><IconButton icon={Terminal} label="History" click={()=>open(3,'EXPERIENCE',Terminal,<History/>)}/><IconButton icon={Mail} label="Contact" click={()=>open(4,'CONTACT',Mail,<Contact/>)}/></div>
<AnimatePresence>{windows.map(w=><Window key={w.id} {...w} active={active} setActive={setActive} onClose={(id:number)=>setWindows(windows.filter(x=>x.id!==id))}/>)}</AnimatePresence>
<div className="absolute bottom-0 w-full p-3 bg-gray-900">ARCHIVE_OS v1.0.5</div></main>}

function IconButton({icon:Icon,label,click}:any){return <button onClick={click} className="text-white flex flex-col items-center"><Icon size={40}/><span>{label}</span></button>}
const Projects=()=> <div><h2>PROJECT ARCHIVE</h2><p>Robotics • AI • Programming • Engineering Projects</p><p>PROJECT_01 DATABASE ONLINE</p><p>PROJECT_02 SYSTEM READY</p></div>;
const Profile=()=> <div><h2>Pannatorn Thongrak</h2><p>Robotics · AI · Embedded Systems</p><p>Digital Portfolio Archive</p></div>;
const History=()=> <div><p>EXPERIENCE LOG</p><p>Engineering Projects</p><p>Creative Technology Development</p></div>;
const Contact=()=> <div><p>Email: pannatorn252@gmail.com</p><textarea className="bg-black border w-full h-20" placeholder="MESSAGE"/></div>;
