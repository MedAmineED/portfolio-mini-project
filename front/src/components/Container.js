import React from 'react'

const Container = ({children, cls}) => {
  return (
    <div className= {`container ${cls}`}>
      {children}
    </div>
  )
}

export default Container
