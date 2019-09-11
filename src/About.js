import React from 'react'
import Story from './Story'

const About = (props) => {
  
  return (
    <div id='about'>
      <div className='lead-text'>
        <div className='lead-text-heading tracking-in-expand'>Multitalented IT engineer with </div>
        <ul>
          <li className='slide-in-top ab'><span><i class="fas fa-map-marker"></i></span>a versatile experience in project work and customer service</li>
          <li className='slide-in-top ab'><span><i class="fas fa-map-marker"></i></span>a passion for self developement. I continuously strive to utilise my potential better. </li> 
          <li className='slide-in-top ab'><span><i class="fas fa-map-marker"></i></span>a dream to make people happier by making their every day life easier. This I can do with 
            designing and implementing new digital services and applications.</li></ul>
      </div>
      <Story />
    </div>
  )
}
export default About