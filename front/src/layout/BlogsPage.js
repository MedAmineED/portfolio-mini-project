import React, { useEffect, useState } from 'react'
import Panel from '../components/Panel'
import Blog from '../components/Blog'
import axios from 'axios'

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/blogs')
    .then((result)=>{
      setBlogs([...result.data])
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [])
  return (
            <div className='blogs-page'>
                <Panel title={"Welcome in my blogs page"} >
                    <div className='row'>
                        <p>
                            Thank you for joining us today. 
                            I would like to extend a warm welcome to our web development blog, 
                            where we delve into the fascinating world of web development. 
                            Throughout this journey, we will explore a diverse range of subjects, 
                            providing valuable insights into both frontend and backend aspects 
                            of web development.
                        </p>
                    </div>
                </Panel>
                {
                  blogs.map((blog, index)=> {
                    return  <Blog  key={blog.title + index}
                                title={blog.title}
                                index={index}
                                textContent={blog.content}/>
            
                  })
                }
                </div>
  )
}

export default BlogsPage
