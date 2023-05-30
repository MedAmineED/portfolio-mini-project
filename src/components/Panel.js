import React from 'react'

const Panel = ({wth, title, children }) => {
  return (
    <div className='panel' style={{width : wth?` ${wth}% `: null}}>
        <h2>{ title }</h2>
        {children}
    </div>
  )
}

export default Panel
