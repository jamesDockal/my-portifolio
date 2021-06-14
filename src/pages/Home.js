
import React from 'react'

import '../styles/home.css'

function Home () {
  return (
    <div className='home-container'>
      <div className='about'>
        <h1>OH, Hello There!</h1>
        <span>I'm <span id='my-name' className='my-name'>James D. Dockal</span></span>
        <p>Fullstack Developer</p>
      </div>
    </div>
  )
}

export default Home
