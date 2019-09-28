import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
//import './custom.scss'

const MenuItems = (props) => {

  const isActive = (pageNr) => {
    if (props.page === pageNr) {
      return true
    } else {
      return false
    }
  }


  return (
    <ButtonToolbar>
        <Button variant='outline-dark' active={isActive(1)}
          onClick={() => props.setPage(1)}>
          About me
        </Button>
        <Button variant='outline-dark' active={isActive(2)}
          onClick={() => props.setPage(2)}>
          Portfolio
        </Button>
        <Button variant='outline-dark' active={isActive(3)}
          onClick={() => props.setPage(3)}>
          Experience
        </Button>
        <Button variant='outline-dark' active={isActive(4)}
          onClick={() => props.setPage(4)}>
          Skills
        </Button>
        <Button variant='outline-dark' active={isActive(5)}
          onClick={() => props.setPage(5)}>
          Education
        </Button>
        <Button variant='outline-dark' active={isActive(6)}
          onClick={() => props.setPage(6)}>
          Contact
        </Button>
    </ButtonToolbar>
  )
}

export default MenuItems