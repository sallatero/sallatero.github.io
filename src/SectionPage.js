import React from 'react'
import IntroPage from './IntroPage'

const SectionPage = (props) => {

  if (props.page === 1) {
    return (
      <IntroPage />
    )
  } else if (props.page === 2) {
    return (
      <div>Page 2</div>
    )
  } else if (props.page === 3) {
    return (
      <div>Page 3</div>
    )
  } else {
    return (
      <div/>
    )
  }

}

export default SectionPage