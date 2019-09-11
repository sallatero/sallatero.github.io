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
        I have a technical background and started my career in IT consultancy. I gained experience in 
        working with different kinds of client projects in a multicultural environment. I designed new 
        services and processes, coordinated system deployments, configured software products and conducted 
        user testing. After some years I wanted to try something else, since I felt that there was something missing.
      </p>
      <p>
        As I was very interested in health and personal development at the time, I decided to study 
        and become a health coach. Running my own business was exciting and I enjoyed the freedom and 
        responsibility. I had found something valuable. However, building a business from scratch was 
        difficult. I knew I wanted to be in charge of my own work, but I needed more support and structure.
        So when I had the possibility to try real estate, I jumped at the chance. 
      </p>
      <p>
        Life as a real estate agent was fun! I met a lot of people and enjoyed helping them to buy or sell 
        their home. I loved building my expertise in the applicable laws, home styling, marketing, and sales. 
        I got more insight into what makes me unique, what my strengths are and how I can utilise them best. 
        It turned out real estate was mostly about sales and landing new clients. There was not enough time 
        to focus on taking care of the existing client assignments, which was my place to shine.
      </p>
      <p>
        Different kinds of experiences and my years of self-examination have given me clarity of who I am, 
        what drives me, what inspires me, and what my strengths are. I have come to understand that
        my future is in IT. Since I am excited about new apps and services and love coding, I am now looking 
        for a place to grow my expertise in web development, especially frontend. I have great motivation to
        learn and challenge myself and am ready to work hard for my dream.
      </p>
    </div>
  )
}
export const IntroParagraph = () => {
  return (
    <div className='slide-in-top ab-p'>
      <p >
        My career path has been exciting and quite atypical, with lot's of different kinds of challenges and experiences 
        that have made me who I am today.
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