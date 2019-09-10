import React from 'react'
import MenuItems from './MenuItems'

const MainMenu = (props) => {

  return (
    <div className='canvas'>
      <div className='canvas-text-area'>
        <div className='landing-page-text'>
          <div className='heading-text'>
            <h1><span>Salla</span> Tero-Anandamurthy</h1>
            <p className='typewriter'>Web developer / coding enthusiast</p>
          </div>
          <MenuItems setPage={props.setPage}/>
        </div>
      </div>
    </div>
  )

}

export default MainMenu