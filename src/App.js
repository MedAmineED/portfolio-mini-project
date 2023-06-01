import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import OpenContactModal from './contexts/OpenContactModal';
import './styles.css';
import React from 'react';


const App = () => {
  return (
    <div id='App'>
      <OpenContactModal>
          <NavBar />
          <Contact />
      </OpenContactModal>

          <div id="wrapper">
              <section id="main">
                <Header name= 'Essid Mohamed Amine' speciality="MERN-STACK developer"/>
                <div className='flex-container'>
                  <About />
                  <Skills />
                </div>
                <Projects />
              </section>
              <Footer />
          </div>
    </div>
  )
}

export default App
