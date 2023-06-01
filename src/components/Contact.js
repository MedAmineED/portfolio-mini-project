import React, { useEffect, useState } from 'react'
import Panel from './Panel'
import Button from './Button'
import { useConsumerOpenContact } from '../hooks/hooks';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { setContactIsOpen, contactIsOpen, Toggle, } = useConsumerOpenContact();

    const handleContactClick = ()=> {
        Toggle("close")
        console.log(contactIsOpen)
      }

      useEffect(()=>{})

  return (
    <div 
        style={{
            display : contactIsOpen? "block" : "none"
        }}
        className='contact-section'>
        <Panel cls={'contact-form'} wth={50} title={"CONTACT"}>
           <form>
                <div className='form-input'>
                    <label htmlFor='name'>your name</label>
                    <input id='name' type='text'/>
                </div>
                <div className='form-input'>
                    <label htmlFor='email'>your email</label>
                    <input id='email' type='text'/> 
                </div>
                <div className='form-input'>
                    <label htmlFor='message'>message</label>
                    <textarea id='message' type='text'/>
                </div>
               <div className='form-btns'>
                    <Button onClick={handleContactClick} buttonValue={"cancel"} cls='cancel-btn' />
                    <Button onClick={handleContactClick} buttonValue={"send"} cls='send-btn' />
                </div> 
           </form> 
        </Panel>
    </div>
  )
}

export default Contact
