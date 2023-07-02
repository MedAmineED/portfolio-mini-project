import React, { useState } from 'react'
import { OpenContactPage } from './contexts'

const OpenContactModal = ({children}) => {
    
const [contactIsOpen, setContactIsOpen] = useState(false)

const Toggle = (action)=> {
    if(action === "open"){
        setContactIsOpen(true)
    }else {
        setContactIsOpen(false)
    }
  }

  return (
    <OpenContactPage.Provider value={
        {
            setContactIsOpen,
            contactIsOpen,
            Toggle

        }
    }>
        { children }
    </OpenContactPage.Provider>
  )
}

export default OpenContactModal
