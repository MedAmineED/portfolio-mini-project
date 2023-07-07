import React from 'react'

const Row = ({children, id, className}) => {
  return (
    <div className= {`flex-container ${className}`} id={id}>
      {children}
    </div>
  )
}

export default Row
