import React from 'react'

const Skills = (props) => {
  
  return (
    <div id='skills'>
      <div className='skills-container'>
        <div className='skills-text big'>
          <div className='skills-heading tracking-in-expand'>Competences</div>
          <ul>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Business Process Management (BPM)</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Process modelling and design</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Business process automation</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Requirements gathering</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>User Testing</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Project management</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Vendor management</li>
          </ul>
        </div>
        <div className='skills-text small'>
          <div className='skills-heading tracking-in-expand'>Personal</div>
          <ul>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Multicultural skills</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Active listening</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Building trust</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Presentation skills</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Troubleshooting</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Problem-solving</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Analytical thinking</li> 
          </ul>
        </div>
        <div className='skills-text big'>
          <div className='skills-heading tracking-in-expand'>Technical</div>
          <ul>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>SPA Web Development</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>JavaScript, React, Redux</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>HTML, CSS, Semantic UI</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Node.js, REST, GraphQL</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>SQL, MongoDB</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Testing (Jest, Cypress)</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Webpack configuration</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Git, Heroku, VS Code</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Object-oriented (Java, C++)</li>
          </ul>
        </div>
        <div className='skills-text small'> 
          <div className='skills-heading tracking-in-expand'>Languages</div>
          <ul>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Finnish - mother tongue</li>
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>English - fluent</li> 
            <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Swedish - conversational</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills