import React, { useState } from 'react'
import MainMenu from './MainMenu'
import SectionPage from './SectionPage'

const App = () => {
  const [page, setPage] = useState(0)
  console.log('page: ', page)
  
  return (
    <div>
    <MainMenu page={page} setPage={setPage}/>
    {page === 0
      ? 
      <div/>
      : 
      <SectionPage page={page}/>
    } 
    </div>
  )
}

export default App