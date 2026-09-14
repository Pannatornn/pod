'use client';

const achievements = [
  {
    year: '2026',
    title: 'Robotics and AI Frontier Camp',
    detail: 'KMITL robotics, AI, embedded systems and automation experience.'
  },
  {
    year: '2025',
    title: 'Engineering Design Camp',
    detail: 'Collaborative engineering projects, programming and system design.'
  },
  {
    year: '2025',
    title: 'AI & Programming Laboratory',
    detail: 'Python, MicroPython, IoT communication and hardware experiments.'
  }
];

export default function Achievements(){
 return <section id="achievements" className="legacy-section">
  <p className="legacy-kicker">03 / ACHIEVEMENT DATABASE</p>
  <h2>Mission<br/>Timeline.</h2>
  <div className="achievement-grid">
   {achievements.map((item)=>(
    <article key={item.title} className="achievement-card">
      <span>{item.year}</span>
      <h3>{item.title}</h3>
      <p>{item.detail}</p>
    </article>
   ))}
  </div>
 </section>;
}
