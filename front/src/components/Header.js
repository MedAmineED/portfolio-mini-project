import React from 'react'

import ImagePic from "../images/IMG_20211204_135632.jpg"


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
