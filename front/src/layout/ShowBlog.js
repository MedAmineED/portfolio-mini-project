import React, { useRef } from 'react'
import Panel from '../components/Panel'
import RvsA from "../images/1652206018cwSg16pOMP.png"
import CustomTextArea from '../components/CustomTextArea'
import Button from '../components/Button'

const ShowBlog = () => {
    const containerRef = useRef(null);
   
  return (
    <div ref={containerRef} className='show-blog' id='showBlog-id'>
       <Panel title={"Front-end"}>
            <div className='arround'>
                <img style={{width : "100%"}} src={RvsA}/>
                <p>
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                njjjjjdc cjnlksc jks
                </p>
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
