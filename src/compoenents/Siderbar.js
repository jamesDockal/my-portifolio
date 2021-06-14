
import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import CodeIcon from '@material-ui/icons/Code'

import '../styles/siderbar.css'
import iconsStyles from '../styles/icons'

function Siderbar () {
  return (
    <div className='siderbar-container'>
      <PersonIcon
        style={iconsStyles}
      />
      <CodeIcon
        style={iconsStyles}
      />
    </div>
  )
}

export default Siderbar
