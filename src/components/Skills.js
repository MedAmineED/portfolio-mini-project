import React from 'react'
import SkillsBar from './SkillsBar'
import Panel from './Panel'

const Skills = () => {
  return (
    <Panel id="skills-section" title={"SKILLS"} >
    <div className='skills'>
    {/* <Panel wth={100}> */}
        <SkillsBar pgLabel = {"REACT.JS"} pgValue = {80} />
        <SkillsBar pgLabel = {"JAVASCRIPT"} pgValue = {82} />
        <SkillsBar pgLabel = {"CSS"} pgValue = {85} />
        <SkillsBar pgLabel = {"HTML"} pgValue = {95} />
        <SkillsBar pgLabel = {"EXPRESS.JS"} pgValue = {60} />
        <SkillsBar pgLabel = {"NODE.JS"} pgValue = {65} />
        <SkillsBar pgLabel = {"MONGO-DB"} pgValue = {60} />
        <SkillsBar pgLabel = {"SQL"} pgValue = {50} />
    {/* </Panel> */}
    </div>
    </Panel>
    
  )
}

export default Skills
