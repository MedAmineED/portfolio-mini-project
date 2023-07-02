import React from 'react'
import Panel from './Panel'

const About = ({aboutText}) => {
  return (
    <Panel id = "about-section" title={"ABOUT"}>
        <p>
            {aboutText}
        </p>
    </Panel>
  )
}

export default About
