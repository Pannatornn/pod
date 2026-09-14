'use client';

export default function Error({reset}:{reset:()=>void}){
 return (
  <main className="error-screen">
   <section className="error-terminal">
    <p>SYSTEM ERROR</p>
    <h1>PORTFOLIO DATABASE OFFLINE</h1>
    <span>Unexpected runtime issue detected.</span>
    <button onClick={reset}>RESTART SYSTEM ↻</button>
   </section>
  </main>
 );
}
