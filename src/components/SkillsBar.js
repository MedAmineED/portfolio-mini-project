import React from 'react'

const SkillsBar = ({ pgLabel, pgValue }) => {
    const style = {
        width: `${pgValue}%`,
    }
  return (
      <div className='skills-bar' style={style}>
            <div className='progress-label'>
              <h2 style={{ color : `rgb(120, 150, ${(pgValue * 2.55)})` }}>{pgLabel}</h2>
              <h2 style={{ color : `rgb(120, 20, ${(pgValue * 2.55)})` }}>{`${pgValue}%`}</h2>
            </div>
            <div className='progress-bar' style={{ background : `rgb(120, 20, ${(pgValue * 2.55)})` }}></div>
    </div>
  )
}

export default SkillsBar
