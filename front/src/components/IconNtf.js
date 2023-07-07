import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const IconNtf = ({ icon, notif }) => {
  return (
    <div className='icon-ntf'>
      <FontAwesomeIcon icon={icon} />
      <div className='badge'>
      {notif}
      </div>
    </div>
  )
}

export default IconNtf

