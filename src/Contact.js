import React from 'react'

const Contact = (props) => {
  
  return (
    <div id='contact'>
      <div className='contact-text'>
        <div className='contact-heading tracking-in-expand'>Here's how you can reach me!</div>
        <ul>
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span>040 574 1164</li>
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span>salla.tero@gmail.com</li> 
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span>linkedin.com/in/sallatero/</li>
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span>facebook.com/salla.tero</li> 
          <li className='slide-in-top cont'><span><i class="fas fa-map-marker"></i></span>github.com/sallatero</li> 
        </ul>
      </div>
    </div>
  )


}

export default Contact