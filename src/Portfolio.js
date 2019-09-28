import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import small_1 from './images/01-small-b.jpg'
import small_2 from './images/02-small-b.jpg'
import small_3 from './images/03-small-b.jpg'
import small_4 from './images/04-small.jpg'
import small_5 from './images/05-small.jpg'
import small_6 from './images/Finn_UI.jpg'

const libraryUrl = 'https://github.com/sallatero/Full-Stack/tree/master/library-frontend'
const bloglistUrl = 'https://github.com/sallatero/Ultimate-webpack-bloglist-frontend'
const puhelinUrl = 'https://github.com/sallatero/Full-Stack/tree/master/osa2/puhelinluettelo'
const resumeUrl = 'https://github.com/sallatero/sallatero.github.io'
const finnUrl = 'https://github.com/sallatero/Finn-the-Tutor_Frontend'
const fullstackUrl = 'https://github.com/sallatero/Full-Stack'
const linkedinUrl = 'https://www.linkedin.com/in/sallatero/'
const facebookUrl = 'https://www.facebook.com/salla.tero'

const Portfolio = (props) => {
  
  return (
    <Container>
      <Row>
        <Col>
          <div className='portfolio-heading tracking-in-expand'>Modern Web Development</div>
          <p className='slide-in-top port'>Here are some of my apps that I have built with modern web technologies. 
            Clicking an app takes you to the respective Github repository, where you can 
            see the code as well as get the link to the live app. </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='slide-in-top port-img hover-item'>
            <div className='hover-text'>
              <h4>Online Resume</h4>
              <p className='hover-text-p'>React, HTML, CSS</p>
            </div>
            <a href={resumeUrl} className='portfolio-image'
              rel='noopener noreferrer' target='_blank'>
              <img src={small_5} className='image-responsive' alt='Online resume app' /> 
            </a>
          </div>
        </Col>
        <Col>
          <div className='slide-in-top port-img hover-item'>
            <div className='hover-text'>
              <h4>Finn the Tutor</h4>
              <p className='hover-text-p'>Under construction</p>
            </div>
            <a href={finnUrl} className='portfolio-image'
              rel='noopener noreferrer' target='_blank'>
              <img src={small_6} className='image-responsive' alt='Finn the Tutor -sovellus' /> 
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='slide-in-top port-img hover-item'>
            <div className='hover-text'>
              <h4>Library app</h4>
              <p className='hover-text-p'>React, Node.js,</p>
              <p className='hover-text-p'> GraphQL, Apollo, MongoDB</p>
            </div>
            <a href={libraryUrl} className='portfolio-image'
              rel='noopener noreferrer' target='_blank'>
              <img src={small_1} className='image-responsive' alt='Library app' /> 
            </a>
          </div>
        </Col>
        <Col>
          <div className='slide-in-top port-img hover-item'>
            <div className='hover-text'>
                <h4>Bloglist app</h4>
                <p className='hover-text-p'>React, Node.js, Express</p>
                <p className='hover-text-p'>Redux, Webpack, Semantic UI</p>
              </div>
              <a href={bloglistUrl} className='portfolio-image'
                rel='noopener noreferrer' target='_blank'>
                <img src={small_2} className='image-responsive' alt='Bloglist app' />   
              </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='slide-in-top port-img hover-item'>
            <div className='hover-text'>
              <h4>Puhelinluettelo</h4>
              <p className='hover-text-p'>React, Node.js, JavaScript</p>
              <p className='hover-text-p'> Axios, Semantic UI React</p>
            </div>
            <a href={puhelinUrl} className='portfolio-image'
              rel='noopener noreferrer' target='_blank'>
              <img src={small_3} className='image-responsive' alt='Puhelinluettelo-sovellus' /> 
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )


}

export default Portfolio