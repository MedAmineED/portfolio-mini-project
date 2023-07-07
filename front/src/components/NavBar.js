/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useConsumerOpenContact, useScrollPosition } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import Button from './Button'
import ProfileItem from './ProfileItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons'
import IconNtf from './IconNtf'



library.add(faMessage, faBell)



const NavBar = ({ navLinks, contact, profile }) => {
  const scrollPos = useScrollPosition()
  const [prevScroll, setPrevsroll] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("toTop")
  const {  Toggle } = useConsumerOpenContact();

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
          {
            navLinks.map((link, index)=> {
              return <Link key={link.itemName + index} to={link.link}>{link.itemName}</Link>
            })
          }
        </ul>
          {contact &&  <Button onClick={handleContactClick}>{"Contact"}</Button>}
          {profile && <div className='icon-container'>
                          <IconNtf icon={"fa-solid fa-message"} notif={5} />
                          <IconNtf icon={"fa-solid fa-bell"} notif={10} />
                      </div> }
          {profile && <ProfileItem />}
    </div>
  )
}

export default NavBar
