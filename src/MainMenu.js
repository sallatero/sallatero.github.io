import React from 'react'

const MainMenu = (props) => {
  
  const classFor = (pageNr) => {
    if (props.page === pageNr) {
      return 'active-item'
    } else {
      return 'item'
    }
  }

  return (
    <div className='canvas'>
      <div className='canvas-text-area'>
        <div className='landing-page-text'>
          <div className='heading-text'>
            <h1>Salla Tero-Anandamurthy</h1>
            <p>Web developer / coding enthusiast</p>
          </div>
          <div className='menu-items'>
            <div className='button' id={classFor(1)} 
              onClick={() => props.setPage(1)}>
              About me
            </div>
            <div className='button' id={classFor(2)} 
              onClick={() => props.setPage(2)}>
              Portfolio
            </div>
            <div className='button' id={classFor(3)} 
              onClick={() => props.setPage(3)}>
              Experience
            </div>
            <div className='button' id={classFor(4)} 
              onClick={() => props.setPage(4)}>
              Skills
            </div>
            <div className='button' id={classFor(5)} 
              onClick={() => props.setPage(5)}>
              Education
            </div>
            <div className='button' id={classFor(6)} 
              onClick={() => props.setPage(6)}>
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default MainMenu