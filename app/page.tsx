'use client';
import {projects,skills} from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Image from 'next/image';

export default function Home(){
return <main className="legacy-site min-h-screen bg-black text-green-400 font-mono">
<div className="p-3 border-b border-green-500">ARCHIVE_OS v1.0.6 // PORTFOLIO ONLINE</div>
<Header/><Hero/>
<section className="p-8"><h2 className="text-2xl mb-5">PROJECT ARCHIVE</h2><div className="grid md:grid-cols-2 gap-5">{projects.map((p:any)=><article key={p.title} className="border border-green-700 p-4"><div className="relative h-48"><Image src={p.image} alt={p.title} fill className="object-cover"/></div><h3 className="mt-3">{p.title}</h3><p>{p.description}</p></article>)}</div></section>
<Skills skills={skills}/>
<footer className="p-8 border-t border-green-700">SYSTEM END</footer>
</main>}
