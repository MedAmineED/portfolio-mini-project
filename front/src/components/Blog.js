/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Row from '../components/Row'
import RvsA from "../images/1652206018cwSg16pOMP.png"
import Button from './Button'
import Panel from './Panel'
import { Link } from 'react-router-dom'

const Blog = ({textContent, title, index, blogId}) => {
  const handleClick = (e)=> {
    console.log("object")
  }
  return ( 
    <Panel title={title} cls={"blog-container"}>
    {index % 2 === 0?<Row>
                        <div className='text-content'>
                        {textContent.split('\n').map((paragraph, index) =>{
                                                                return index < 2? <p key={index}>{paragraph}</p>
                                                                              : index === 3? <p key={index}>...</p> : null
                                                                
                                                               }
                                                          )}
                            <Button onClick={handleClick} >
                              <Link to={`/blogs/show-blog/${blogId}`}>{"read more"}</Link>
                            </Button>
                        </div>
                        <div className='image-content'>
                            <img src={RvsA} />
                        </div>
                    </Row>
                    :<Row>
                        <div className='image-content'>
                            <img src={RvsA} />
                        </div>
                        <div className='text-content'>
                        {textContent.split('\n').map((paragraph, index) =>{
                                                                return index < 2? <p key={index}>{paragraph}</p>
                                                                              : index === 3? <p key={index}>...</p> : null
                                                                
                                                               }
                                                          )}
                                                                
                                                                
                            <Button onClick={handleClick} >
                              <Link to={`/blogs/show-blog/${blogId}`}>{"read more"}</Link>
                            </Button>
                        </div>
                    </Row>}
</Panel>
  )
}

export default Blog
