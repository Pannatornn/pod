'use client';

const stats = [
  ['ROBOTICS CORE','90%'],
  ['PYTHON SYSTEM','85%'],
  ['AI / COMPUTER VISION','75%'],
  ['EMBEDDED HARDWARE','88%'],
];

export default function EngineerStats(){
 return <section className="legacy-section engineer-stats">
  <p className="legacy-kicker">05 / ENGINEER STATUS</p>
  <h2>System<br/>Capability.</h2>
  <div className="stats-grid">
   {stats.map(([name,value],i)=><article className="stat-card" key={name}>
    <span>MODULE_0{i+1}</span>
    <h3>{name}</h3>
    <div className="stat-bar"><div style={{width:value}} /></div>
    <strong>{value}</strong>
   </article>)}
  </div>
 </section>;
}
