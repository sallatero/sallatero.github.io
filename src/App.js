import React, { useState } from 'react'
import MainMenu from './MainMenu'
//import SectionPage from './SectionPage'
import SmallMenu from './SmallMenu'

const App = () => {
  const [page, setPage] = useState(0)
  console.log('page: ', page)
  
  return (
    <div>
    {page === 0
      ? 
      <MainMenu page={page} setPage={setPage}/>
      : 
      <SmallMenu page={page} setPage={setPage}/>
    } 
    </div>
  )
}

export default App