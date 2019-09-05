import React, { useState } from 'react'
import IntroContent from './IntroContent'

const IntroPage = () => {
  const [tabNr, setTabNr] = useState(0)

  return (
    <div className='section-page' id='intro-page'>
      <div className='lead-text'>Olen monessa liemessä keitetty diplomi-insinööri, jonka sisällä asuu
        intohimoinen koodarintaimi. Unelmani on helpottaa ihmisten arkea koodauksen keinoin.
        Etsin inspiroivaa työpaikkaa, jossa pääsen kehittämään taitojani sekä haastamaan itseni.
      </div>
      <div className='intro-content-container'>
        <div className='picture'>
          <img src='logo192.png' alt='me'></img>
        </div>
        <div className='intro-content'>
          <IntroContent tabNr={tabNr} setTabNr={setTabNr}/>
        </div>
      </div>
      
    </div>
  )
}

export default IntroPage