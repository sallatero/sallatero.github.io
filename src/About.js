import React from 'react'
import Story from './Story'

const About = (props) => {
  
  return (
    <div id='about'>
      <div className='lead-text'>
        <div className='lead-text-heading tracking-in-expand'>Multitalented IT professional with </div>
        <ul>
          <li className='slide-in-top ab'><span><i className="fas fa-map-marker"></i></span>strong technical background, creative and curious mindset, and desire for excellence</li>
          <li className='slide-in-top ab'><span><i className="fas fa-map-marker"></i></span>experience in consulting, client work and customer service from different industries </li> 
          <li className='slide-in-top ab'><span><i className="fas fa-map-marker"></i></span>ambition to develop innovative digital services (through programming)</li>
        </ul>
      </div>
      <Story />
    </div>
  )
}
export default About