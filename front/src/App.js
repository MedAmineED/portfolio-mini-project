import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './layout/HomePage';
import './styles.css';
import LoginPage from './layout/loginPage/LoginPage';


const App = () => {
  return (
    <div id='App'>
      <Router>
          <Routes>
            <Route path='/' element ={<HomePage />}  />
            <Route path='/loginAdmin' element ={<LoginPage />}  />
          </Routes>
      </Router>

    </div>
  )
}

export default App
