import React from 'react'

const demoProjects = [
  {id:1, title: 'Project One', description: 'A brief description of project one.'},
  {id:2, title: 'Project Two', description: 'A brief description of project two.'},
  {id:3, title: 'Project Three', description: 'A brief description of project three.'},
]

export default function Projects() {
  return (
    <section id="projects" style={{padding: '36px 24px'}}>
      <div style={{maxWidth: 960, margin: '0 auto'}}>
        <h3>Projects</h3>
        <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap:16}}>
          {demoProjects.map(p => (
            <article key={p.id} style={{padding:16, border:'1px solid #eee', borderRadius:6}}>
              <h4 style={{marginTop:0}}>{p.title}</h4>
              <p style={{margin:0, color:'#444'}}>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
