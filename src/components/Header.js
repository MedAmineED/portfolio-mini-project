import React from 'react'

import ImagePic from "../images/IMG_20211204_135632.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(faNodeJs, faReact)

const Header = ({ name, speciality }) => {
  return (
    <header className='main-header'>
        <span className="avatar"><img src= {ImagePic} alt="" /></span>
        <h1>{ name }</h1>
        <p>{ speciality }</p>
    </header>
  )
}

export default Header
