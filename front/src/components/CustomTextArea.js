import React from 'react'

const CustomTextArea = ({ value, onChange, name, id, labelText, className, placeHolder }) => {
  return (
    <div className= {`input-block`}>
         <label htmlFor={id}>{labelText}</label>
        <textarea 
                        className= {`${className}`}
                        placeholder={placeHolder}
                        value={value}
                        autoFocus = {false}
                        onChange={(e)=>{onChange(e)}}
                        name={name} 
                        id={id} 
                        type='text'/>
    </div>
      
  )
}

export default CustomTextArea
