import React from 'react'

const Skills = (props) => {
  
  return (
    <div id='skills'>
      <div className='skills-text'>
        <div className='skills-heading tracking-in-expand'>Project work</div>
        <ul>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Process modelling and design</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Business process automation</li> 
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Requirements gathering</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Testing</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Project management</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Supplier coordination</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>People and culture skills</li>
        </ul>
      </div>
      <div className='skills-text'>
        <div className='skills-heading tracking-in-expand'>IT</div>
        <ul>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>SPA Web Development</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>JavaScript, React, Redux</li> 
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>HTML, CSS, Semantic UI</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Node.js, REST, GraphQL</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>SQL, MongoDB</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Testing (Jest, Cypress)</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Webpack configuration</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Object-oriented programming (Java, C++)</li>
        </ul>
      </div>
      <div className='skills-text'>
        <div className='skills-heading tracking-in-expand'>Languages</div>
        <ul>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Finnish - mother tongue</li>
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>English - fluent</li> 
          <li className='slide-in-top skil'><span><i class="fas fa-map-marker"></i></span>Swedish - conversational</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills