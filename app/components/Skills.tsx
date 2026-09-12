export default function Skills({skills}:{skills:string[]}){
 return <section id="skills" className="legacy-section">
  <div className="legacy-heading"><p className="legacy-kicker">02 / TOOLKIT</p><h2>Tools I use<br/><em>to build.</em></h2></div>
  <div className="legacy-skill-grid">{skills.map((skill,index)=><article key={skill}><span>0{index+1}</span><h3>{skill}</h3></article>)}</div>
 </section>;
}
