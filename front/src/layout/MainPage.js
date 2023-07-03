import React from 'react'
import OpenContactModal from '../contexts/OpenContactModal'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Container from '../components/Container'

const MainPage = () => {
  
  return (
    <div>
      <OpenContactModal>
          <NavBar />
          <Contact />
      </OpenContactModal>
      <Container>
      <Outlet />
      <Footer />
      </Container>
    </div>
  )
}

export default MainPage
