import React, { useEffect, useState } from 'react'
import SkillsBar from './SkillsBar'
import Panel from './Panel'
import axios from 'axios'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:3002/skills")
    .then((res)=> {
        console.log(res.data)
        setSkills(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  return (
    <Panel id="skills-section" title={"SKILLS"} >
    <div className='skills'>
    {/* <Panel wth={100}> */}
      {
        skills.map((skill, index)=> {
          return <SkillsBar key={skill.skillName + index} pgLabel = {skill.skillName} pgValue = {parseInt(skill.progress)} />
        })
      }
        
    {/* </Panel> */}
    </div>
    </Panel>
    
  )
}

export default Skills
