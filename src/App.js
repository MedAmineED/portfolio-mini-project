import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import './styles.css';
import React from 'react';


const App = () => {
  return (
    <div id='App'>
          <NavBar />
          <div id="wrapper">
              <section id="main">
                <Header name= 'Essid Mohamed Amine' speciality="MERN-STACK developer"/>
                <div className='flex-container'>
                  <About />
                  <Skills />
                </div>
              </section>
              <Footer />
          </div>
    </div>
  )
}

export default App
