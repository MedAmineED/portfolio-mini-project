import React, { useEffect, useState } from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import OpenContactModal from '../contexts/OpenContactModal';
import  axios  from 'axios'



const HomePage = () => {
    const [adminData, setAdminData]= useState({
        adminName : "",
        adminTitle : "",
        aboutText : "",
    })

    useEffect(()=> {
        axios.get("http://localhost:3002/admin", {headers: {
                                                             'Accept': '*/*',
                                                             // Add any other headers you need
                                                            }})
        .then((result)=> {
            const updateAdminData = {adminName : result.data[0].adminName, 
                                     adminTitle : result.data[0].adminTitle,
                                    aboutText : result.data[0].about}
            setAdminData(updateAdminData)
            console.log(result.data[0])
        }).catch((err)=> {
            console.log(err)
        })
    }, [])
  return (
    <div>
      <OpenContactModal>
          <NavBar />
          <Contact />
      </OpenContactModal>

          <div id="wrapper">
              <section id="main">
                <Header   
                    name= {adminData.adminName} 
                    speciality={adminData.adminTitle}/>
                <div className='flex-container'>
                  <About aboutText={adminData.aboutText}/>
                  <Skills />
                </div>
                <Projects />
              </section>
              <Footer />
          </div>
    </div>
  )
}

export default HomePage
