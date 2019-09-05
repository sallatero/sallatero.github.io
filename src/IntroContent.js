import React from 'react'
//import IntroPage from './IntroPage'

const IntroContent = (props) => {

  if (props.tabNr === 1) {
    return (
      <div>Tab nr 1</div>
    )
  } else if (props.tabNr === 2) {
    return (
      <div>Tab nr 2</div>
    )
  } else if (props.tabNr === 3) {
    return (
      <div>Tab nr 3</div>
    )
  } else {
    return (
      <div/>
    )
  }

}

export default IntroContent