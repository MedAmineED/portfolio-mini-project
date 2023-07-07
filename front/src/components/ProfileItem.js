import React from 'react'
import Avatar from './Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


library.add(faChevronDown)

const ProfileItem = () => {
  return (
    <div className='profile-item'>
    <Avatar />
    <p>Med amine essid</p>
    <FontAwesomeIcon className='profile-item-menu' icon="fa-solid fa-chevron-down" />
    </div>
  )
}

export default ProfileItem
