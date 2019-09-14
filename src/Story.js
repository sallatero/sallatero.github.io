import React, { useState } from 'react'

const Story = (props) => {
  const [storyVisible, setStoryVisible] = useState(null)

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
        While working as an IT consultant I gained experience in different kinds of IT 
        services projects in a multicultural environment. I got to work with all phases 
        of a client project, from proposals to delivery. I developed my expertise in 
        requirements gathering, process modeling, different software products, as well 
        as in working with different kinds of teams and organizations. My skills in 
        problem-solving, analytical thinking and team work grew considerably.
      </p>
      <p>
        After a few years my personal interests led me to a more entrepreneurial path. 
        I ran my own health coaching business and later on worked in real estate. During 
        this phase I got to utilize my organizational skills, creative mind and resilience. 
        I learned to value the ability to utilize my strengths and the freedom of doing things my way.
        I enjoyed being able to immerse myself totally in my work, to create a state of flow. 
        What didn't suit me, however, was the heavy emphasis on new customer acquisition. I would have 
        wanted to focus on taking care of the current client assignments. So there was again need for change.
      </p>
      <p>
        I asked myself what are my biggest strengths, what drives and inspires me and 
        what kind of environment allows me to shine. I understood that I need to be able 
        to utilize my problem-solving skills, preciseness, creativity, and my esthetic eye. 
        I need to be able to get into the flow once in a while and get frequent feedback 
        and feelings of success. In addition, I need an open and supportive working 
        environment that supports my professional development. Considering all of this, 
        I believe my sweet spot is in IT, building digital services and applications.
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