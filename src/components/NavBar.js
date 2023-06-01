import React, { useEffect, useState } from 'react'
import { useScrollPosition } from '../hooks/hooks'

const NavBar = () => {
  const scrollPos = useScrollPosition()
  const [prevScroll, setPrevsroll] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("toTop")

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
        <button className='contact'>Contact</button>
    </div>
  )
}

export default NavBar
