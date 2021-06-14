
import React from 'react'
import Stars from '../compoenents/Stars'

import '../styles/techs.css'

function Techs () {
  return (

    <div className='techs-container'>
      <Stars />
      <div className='techs'>
        <img src='./images/node.png' />
        <img src='./images/react.png' />
        <img src='./images/blue.png' />
      </div>
    </div>
  )
}

export default Techs
