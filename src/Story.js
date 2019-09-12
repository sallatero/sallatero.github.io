import React, { useState } from 'react'

const Story = (props) => {
  //const [storyVisible, setStoryVisible] = useState(false)
  const [storyVisible, setStoryVisible] = useState(null)

  /*
  const toggleVisibility = () => {
    const bool = storyVisible
    setStoryVisible(!bool)
  }*/
  /*
  if (storyVisible === null) {
    return (
      <div className='story-invite'>
        <IntroParagraph />
        <div className='button slide-in-top ab-but' onClick={() => setStoryVisible(true)}>Read more</div>
      </div>
    )
  }*/
  console.log('storyVisible: ', storyVisible)

  return (
    <div className='story-container'>
      <div className='story-invite'>
        <IntroParagraph />
        <ToggleButton storyVisible={storyVisible} setStoryVisible={setStoryVisible}/>
      </div>
      {
      storyVisible === true 
      ? 
      <MainParagraphs class='in'/>
      : <div/>
      }
      {
      storyVisible === false
      ?
      <MainParagraphs class='out'/>
      : <div/>
      }
    </div>
  )
}

export const ToggleButton = (props) => {

  if (props.storyVisible) {
    return (
      <div className='button slide-in-top ab-but' onClick={() => props.setStoryVisible(false)}>Read less</div>
    )
  } else {
    return (
      <div className='button slide-in-top ab-but' onClick={() => props.setStoryVisible(true)}>Read more</div>
    )
  }
}


export const MainParagraphs = (props) => {
  let classText = null
  if (props.class === 'out') {
    classText = 'slide-out-top'
  } else if (props.class === 'in') {
    classText = 'slide-in-top ab-p-2'
  }

  return (
    <div className={classText}>
      <p>
        While working as an IT consultant I gained experience in different 
        kinds of IT services projects in a multicultural environment. I got 
        to work with all phases of a client project, from proposals to delivery. 
        I developed my expertise in requirements gathering, process modeling, 
        different software products, as well as in working with different kinds 
        of teams and organizations.
      </p>
      <p>
        Running my own health and fitness coaching business was very inspiring, 
        and I enjoyed the freedom to do things my way. I got to utilize my 
        organizational skills, creative mind and resilience. What drove me forward 
        was the energy and motivation I got from doing something that was very 
        meaningful to me personally. 
      </p>
      <p>
        As a real estate agent I got to work independently, a bit like an entrepreneur. 
        The work offered a lot of freedom and responsibility, which I enjoyed. I got 
        to utilize my analytical thinking and precision with the law aspects as well 
        as my eye for esthetics in home styling and marketing. During the years as a 
        realtor I learned a lot about myself. I came to understand that I am very 
        empathetic and a good listener, and that building trust comes naturally to me. 
      </p>
      <p>
        My winding path has given me clarity of who I am, what drives me, what 
        inspires me, and what my strengths are. The best way I can combine my 
        problem-solving skills, preciseness, creativity, and my esthetic eye, is to 
        continue my path in IT, more specifically in web development. I have great 
        motivation to learn and challenge myself and am ready to work hard for my dream. 
      </p>
    </div>
  )
}
export const IntroParagraph = () => {
  return (
    <div className='slide-in-top ab-p'>
      <p >
        My career path has been quite atypical with lots of different kinds of 
        experiences. Each of them has taught me valuable skills, deepened my 
        self-awareness and broadened my perspective.
      </p>
    </div>
  )  
}

/*
  <div className='button' id={classFor(1)} 
  onClick={() => props.setPage(1)}>
  About me
</div>
*/

/*
I am a multi-talented IT engineer with a versatile experience in project work and customer
service. I have a passion for self developement and I continuously strive to utilise my
potential better. My dream is to make people happier by making their every day life easier.
This I can do with designing and implementing new digital services and applications.
*/

export default Story