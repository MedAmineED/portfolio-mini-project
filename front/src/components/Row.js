import React from 'react'

const Row = ({children, id}) => {
  return (
    <div className='flex-container' id={id}>
      {children}
    </div>
  )
}

export default Row
