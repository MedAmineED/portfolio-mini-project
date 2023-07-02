import React from 'react'

const Button = ({ cls, onClick, buttonValue, bg }) => {
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
        {buttonValue}
    </button>
  )
}

export default Button
