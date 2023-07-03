import React from 'react'

const Button = ({ cls, onClick, buttonValue, bg, children }) => {
    const style = {
        backgroundColor : bg,
    }
    const handleClick = (e, clFunc)=> {
        e.preventDefault();
        clFunc()
    }
  return (
    <button 
        className={`btn-button ${cls}`}
        onClick={(e)=> {handleClick(e, onClick)}}
        style = {style}>
        {children}
    </button>
  )
}

export default Button
