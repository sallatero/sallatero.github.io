import React from 'react'

const Experience = (props) => {
  
  return (
    <div id='experience'>
      <div className='experience-text'>
        <div className='experience-heading tracking-in-expand'>Real Estate Agent, Partner, LKV </div>
        <div className='experience-subheading tracking-in-expand'>Kahdeksas päivä Oy, Jan 2015 - Oct 2018 </div>
        <ul>
          <li className='slide-in-top exp line1'><span><i class="fas fa-map-marker"></i></span>Responsible for profitability, sales, and client satisfaction</li>
          <li className='slide-in-top exp line2'><span><i class="fas fa-map-marker"></i></span>Independent work tailoring my services to different clients </li> 
          <li className='slide-in-top exp line3'><span><i class="fas fa-map-marker"></i></span>Digital and social marketing</li></ul>
      </div>
      <div className='experience-text'>
        <div className='experience-heading tracking-in-expand'>Application Consultant </div>
        <div className='experience-subheading tracking-in-expand'>IBM Finland, Nov 2009 - June 2013 </div>
        <ul>
          <li className='slide-in-top exp line1'><span><i class="fas fa-map-marker"></i></span>Several client projects implementing new processes and IT solutions</li>
          <li className='slide-in-top exp line2'><span><i class="fas fa-map-marker"></i></span>Configuring software products, modelling processes, gathering requirements </li> 
          <li className='slide-in-top exp line3'><span><i class="fas fa-map-marker"></i></span>Managing small projects and overseeing provider work in client-facing role</li></ul>
      </div>
      <div className='experience-text'>
        <div className='experience-heading tracking-in-expand'>Self employed </div>
        <div className='experience-subheading tracking-in-expand'>Wellness and Group Fitness Coach, Feb 2006 - Dec 2014 </div>
        <ul>
          <li className='slide-in-top exp line1'><span><i class="fas fa-map-marker"></i></span>Designing and instructing group fitness classes</li>
          <li className='slide-in-top exp line2'><span><i class="fas fa-map-marker"></i></span>Quality assessment for group fitness certificate instructors</li> 
          <li className='slide-in-top exp line3'><span><i class="fas fa-map-marker"></i></span>Individual and group coaching, workshops and lectures</li></ul>
      </div>
    </div>
  )
}

export default Experience