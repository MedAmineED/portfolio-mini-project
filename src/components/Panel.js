import React from 'react'

const Panel = ({cls, wth, title, children }) => {
  return (
    <div className= {`panel ${cls}`} style={{width : wth?` ${wth}% `: null}}>
        <h2>{ title }</h2>
        {children}
    </div>
  )
}

export default Panel
