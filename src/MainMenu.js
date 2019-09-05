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
    <div className='page-root'>
      <div className='main-menu'>
        <h1>Salla Tero-Anandamurthy</h1>
        <div className='main-menu-items'>
          <div className='circle-container'>
            <div className='circle-main' onClick={() => props.setPage(1)}>
              <div className='circle-text-container'>
                <div className='circle-text' id={classFor(1)}>
                  Who <br/>am I?
                </div>
              </div>
            </div>
          </div>
          <div className='circle-container'>
            <div className='circle-main' onClick={() => props.setPage(2)}>
              <div className='circle-text-container'>
                <div className='circle-text' id={classFor(2)}>
                  Where have I been?
                </div>
              </div>
            </div>
          </div>
          <div className='circle-container'>
            <div className='circle-main' onClick={() => props.setPage(3)}>
              <div className='circle-text-container'>
                <div className='circle-text' id={classFor(3)}>
                  Where am I going?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </div>
  )


/*
<div className={classFor(1)} onClick={() => setPage(1)}>
            <p>Who I am</p></div>
          <div className={classFor(2)} onClick={() => setPage(2)}>
            <p>Where have I been</p></div>
          <div className={classFor(3)} onClick={() => setPage(3)}>
            <p>Where I want to go</p></div>
        </div>
  */

}

export default MainMenu