/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useConsumerOpenContact, useScrollPosition } from '../hooks/hooks'
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
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
        <Button onClick={handleContactClick} buttonValue={"Contact"}/>
    </div>
  )
}

export default NavBar
