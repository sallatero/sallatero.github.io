import React from 'react'

const Contact = (props) => {
  
  return (
    <div id='contact'>
      <div className='contact-text'>
        <div className='contact-heading tracking-in-expand'>Here's how you can reach me!</div>
        <ul>
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span>040 574 1164</li>
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span><a href='mailto:salla.tero@gmail.com' rel='noopener noreferrer' target='_blank'>salla.tero@gmail.com</a></li> 
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span><a href='https://www.linkedin.com/in/sallatero/' rel='noopener noreferrer' target='_blank'>linkedin.com/in/sallatero/</a></li>
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span><a href='https://www.facebook.com/salla.tero' rel='noopener noreferrer' target='_blank'>facebook.com/salla.tero</a></li> 
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span><a href='https://github.com/sallatero' rel='noopener noreferrer' target='_blank'>github.com/sallatero</a></li> 
        </ul>
      </div>
    </div>
  )


}

export default Contact