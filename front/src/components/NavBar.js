/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useConsumerOpenContact, useScrollPosition } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
  const scrollPos = useScrollPosition()
  const [prevScroll, setPrevsroll] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("toTop")
  const {  Toggle, } = useConsumerOpenContact();

  useEffect(()=> {
    if(scrollPos > 80 && scrollPos - prevScroll > 0){
      setPrevsroll(scrollPos)
      setScrollDirection("toBottom")
    }
    else {
      setPrevsroll(scrollPos)
      setScrollDirection("toTop")
    }
  }, [scrollPos])

  const handleContactClick = ()=> {
    Toggle("open")
  }

  return (
    <div 
      className='navbar'
      style={{
        transform: `translateY(${scrollDirection === "toBottom"? -100 : 0}%)`,
      }}>
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/#about-section"}>About</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to = {"/projects"}>Projects</Link>
        </ul>
        <Button onClick={handleContactClick}>{"Contact"}</Button>
    </div>
  )
}

export default NavBar
