
import React from 'react'

import Stars from '../compoenents/Stars'
import '../styles/home.css'

function Home () {
  return (
    <div className='home-container'>
      <Stars />
      <div className='about'>
        <div className='hello'>
          <h1>Oh, </h1>
          <h2> Hello There! </h2>
        </div>
        <span>I'm <span id='my-name' className='my-name'>James D. Dockal</span></span>
        <p>Fullstack Developer</p>
      </div>
    </div>
  )
}

export default Home
