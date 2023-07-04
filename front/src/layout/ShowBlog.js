import React, { useEffect, useRef, useState } from 'react'
import Panel from '../components/Panel'
import RvsA from "../images/1652206018cwSg16pOMP.png"
import CustomTextArea from '../components/CustomTextArea'
import Button from '../components/Button'
import { useParams } from 'react-router'
import axios from 'axios'

const ShowBlog = () => {
    const containerRef = useRef(null);
    const [blogContent, setBlogContent] = useState({
                                                    title : "",
                                                    contentText : ""
                                                     })
    const params = useParams()
    const id = params.id

    useEffect(()=> {
        axios.get(`http://localhost:3002/blogs/showBlog/${id}`)
        .then((res) => {
          console.log(res.data);
          setBlogContent({
            title : res.data.title,
            contentText : res.data.content
          })
        })
        .catch((err) => {
          console.log(err.message);
        });
    },[])
   
  return (
    <div ref={containerRef} className='show-blog' id='showBlog-id'>
       <Panel title={blogContent.title}>
            <div className='arround'>
                <img style={{width : "100%"}} src={RvsA}/>
               { blogContent.contentText.split('\n').map((paragraph, index) =>{
                                                                return <p key={index}>{paragraph}</p>
                                                                
                                                               }
                                                          )}
            </div>
       <Panel title={"Comments"} cls={"comments-panel"}>
       <form className='comment-form'>

       <CustomTextArea 
                    id={"comment-id"}
                    labelText={"add comment"}
                    placeHolder={"type comment..."}
                    className={"comment-input"}/>
        <Button cls={"comment-btn"}>comment</Button>
       </form>
       </Panel> 
       </Panel>
    </div>
  )
}

export default ShowBlog
