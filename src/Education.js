import React from 'react'

const Education = (props) => {
  
  return (
    <div id='education'>
      <div className='education-text'>
        <div className='education-heading tracking-in-expand'>Helsinki University </div>
        <div className='education-subheading tracking-in-expand'>Fullstack MOOC, Spring 2019 </div>
        <ul>
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>8 cr course offered by Open University</li>
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>Deep dive into modern Web Application Development </li> 
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>Emphasis on Single Page Apps developed with JavaScript</li></ul>
      </div>
      <div className='eduxation-text'>
        <div className='education-heading tracking-in-expand'>Aalto University </div>
        <div className='education-subheading tracking-in-expand'>Master of Science (Tech.), Graduated April 2010 </div>
        <ul>
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>Major in Media Technology</li>
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>Minor in Data Communications Software </li> 
        </ul>
      </div>
      <div className='education-text'>
        <div className='education-heading tracking-in-expand'>Helsinki School of Economics</div>
        <div className='education-subheading tracking-in-expand'>Information Technology Program (ITP), Summer 2008 </div>
        <ul>
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>24 cr academic summer program in the area of IT Economy</li>
          <li className='slide-in-top edu'><span><i class="fas fa-map-marker"></i></span>Combining business, design and technological perspectives in solving digital business problems in a multidisciplinary team</li> 
        </ul>
      </div>
    </div>
  )


}

export default Education