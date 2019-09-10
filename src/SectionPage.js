import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'

const SectionPage = (props) => {

  if (props.page === 1) {
    return (
      <div className='page-content-area'>
        <About />
      </div>
    )
  } else if (props.page === 2) {
    return (
      <div className='page-content-area'>
        <Portfolio />
      </div>
    )
  } else if (props.page === 3) {
    return (
      <div className='page-content-area'>
        <Experience />
      </div>
    )
  } else if (props.page === 4){
    return (
      <div className='page-content-area'>
        <Skills />
      </div>
    )
  } else if (props.page === 5){
    return (
      <div className='page-content-area'>
        <Education />
      </div>
    )
  } else if (props.page === 6){
    return (
      <div className='page-content-area'>
        <Contact />
      </div>
    )
  } else {
    return (
      <div/>
    )
  }
}

export default SectionPage