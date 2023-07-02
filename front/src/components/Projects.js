/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Panel from './Panel'
import Proj1 from '../images/proj1.jpg'
import Proj2 from '../images/proj2.jpg'
import Proj3 from '../images/proj3.jpg'
import Proj4 from '../images/proj4.jpg'
import ImgCarrousel from './ImgCarrousel'



const  carrouselData = [
                            {
                                src : Proj1
                            },
                            {
                                src : Proj2
                            },
                            {
                                src : Proj3
                            },
                            {
                                src : Proj4
                            },
                        ]


const Projects = () => {

  return (
    <Panel id="projects-section" cls={"prj-panel"} title="PROJECTS" wth={100}>
       <ImgCarrousel carrouselEl={carrouselData} />
    </Panel>
  )
}

export default Projects
