export default function Skills({skills}:{skills:string[]}){
 return <section id="skills" className="legacy-section">
  <div className="legacy-heading">
   <p className="legacy-kicker">03 / ENGINEERING TOOLKIT</p>
   <h2>Technical<br/><em>Database.</em></h2>
   <p className="legacy-lead">Languages, frameworks and hardware platforms used for robotics development.</p>
  </div>

  <div className="legacy-skill-grid">
   {skills.map((skill,index)=>(
    <article key={skill} className="skill-terminal-card">
      <span className="skill-index">NODE_0{index+1}</span>
      <h3>{skill}</h3>
      <div className="skill-status">● ACTIVE MODULE</div>
    </article>
   ))}
  </div>
 </section>;
}
