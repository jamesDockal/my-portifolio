import React from 'react'

import EmailIcon from '@material-ui/icons/Email'
import '../styles/contact.css'
function Contact () {
  return (
    <div className='contact-container'>
      <div>
        <input />
        <EmailIcon
          style={{
            color: '#D8ED4E',
            fontSize: '5rem',
            marginBottom: 'auto',
            cursor: 'pointer',
            margin: 0
          }}
        />
      </div>
    </div>
  )
}

export default Contact
// height: '50px',
// width: '100px',
