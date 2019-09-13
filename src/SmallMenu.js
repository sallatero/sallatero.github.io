import React from 'react'
import MenuItems from './MenuItems'
import SectionPage from './SectionPage'

const SmallMenu = (props) => {
  
  return (
    <div className='canvas'>
      <div className='canvas-text-area'>
        <div className='content-page-text'>
          <div className='heading-text-small' onClick={() => props.setPage(0)}>
            <h1><span>Salla</span> Tero-Anandamurthy</h1>
          </div>
          <MenuItems page={props.page} setPage={props.setPage}/>
          <SectionPage page={props.page}/>
        </div>
      </div>
    </div>
  )
}

export default SmallMenu