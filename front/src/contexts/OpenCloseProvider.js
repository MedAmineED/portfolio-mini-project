import React, { useState } from 'react'
import { OpenClose } from './contexts'




const OpenCloseProvider = ({ children }) => {
    
  const [open, setOpen] = useState(true)

  const Toggle = ()=> {
    setOpen(!open)
  }

  return (
    <OpenClose.Provider value={{ open, 
                                    setOpen, 
                                    Toggle }}>
        { children }
    </OpenClose.Provider>
  )
}

export default OpenCloseProvider
