import React from 'react'

const Panel = ({cls, st, wth, title, children }) => {
  return (
    <div className= {`panel ${cls}`} style={{width : wth?` ${wth}% `: null, ...st}}>
        <h2>{ title }</h2>
        {children}
    </div>
  )
}

export default Panel
