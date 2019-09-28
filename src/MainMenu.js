import React from 'react'
import MenuItems from './MenuItems'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MainMenu = (props) => {

  return (
    <Container>
      <Row>
        <Col>
          <h1><span>Salla</span> Tero-Anandamurthy</h1>
          <p className='typewriter'>Web developer / coding enthusiast</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <MenuItems setPage={props.setPage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default MainMenu