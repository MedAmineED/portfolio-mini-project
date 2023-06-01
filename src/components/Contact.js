/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Panel from './Panel'
import Button from './Button'
import { useConsumerOpenContact } from '../hooks/hooks';

const Contact = () => {
    const [isOpen, setIsOpen] = useState({ 
                                            blur : 0,
                                            opacity : 0
                                        })
    const [inputValues, setInputValues] = useState({
                                                    userName : "",
                                                    email : "",
                                                    message : ""    
                                                    })
    const { contactIsOpen, Toggle, } = useConsumerOpenContact();

    const handleContactClick = ()=> {
        Toggle("close")
      }



    const handleChange = (e)=> {
        const inputName = e.target.name;
        const currentValue = e.target.value
        let newValues = {}

        switch (inputName) {
            case "userName":
                newValues = {...inputValues, userName : currentValue}
                break;
            case "email":
                newValues = {...inputValues, email : currentValue}
                break;
            case "message":
                newValues = {...inputValues, message : currentValue}
                break;
        
            default:
                newValues = {...inputValues}
                break;
        }
        setInputValues(newValues)
    }
    
    

      useEffect(()=>{
            const showContactTime = setTimeout(()=>{
                setIsOpen(()=>{
                    const newState = {...isOpen, 
                                        blur : contactIsOpen? 3 : 0,
                                        opacity : contactIsOpen? 1 : 0}

                    return newState
                })
            }, 50)
            return () => clearTimeout(showContactTime);
      }, [contactIsOpen])

  return (
    <div 
        style={{
            transform : `translateY(${contactIsOpen? 0 : -100}%)`,
            backdropFilter: `blur(${isOpen.blur}px)`,
            display : `${contactIsOpen? 'flex' : 'none'}`,
        }}
        className='contact-section'>
        <Panel 
            st={{opacity : isOpen.opacity}} 
            cls={'contact-form'} 
            wth={50} 
            title={"CONTACT"}>
           <form>
                <div className='form-input'>
                    <label htmlFor='name'>your name</label>
                    <input 
                        value={inputValues.userName}
                        onChange={(e)=>{handleChange(e)}}
                        name='userName' 
                        id='name' 
                        type='text'/>
                </div>
                <div className='form-input'>
                    <label htmlFor='email'>your email</label>
                    <input 
                        value={inputValues.email}
                        onChange={(e)=>{handleChange(e)}}
                        name='email' 
                        id='email' 
                        type='email'/> 
                </div>
                <div className='form-input'>
                    <label htmlFor='message'>message</label>
                    <textarea 
                        value={inputValues.message}
                        onChange={(e)=>{handleChange(e)}}
                        name='message' 
                        id='message' 
                        type='text'/>
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
