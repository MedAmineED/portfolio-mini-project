import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './layout/HomePage';
import './styles.css';
import LoginPage from './layout/loginPage/LoginPage';
import MainPage from './layout/MainPage';
import BlogsPage from './layout/BlogsPage';
import ShowBlog from './layout/ShowBlog';
import DashboardHome from './dashboard/DashboardHome';


const App = () => {
  return (
    <div id='App'>
      <Router>
          <Routes>
            <Route path='/' element ={<MainPage />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/blogs' element= {<BlogsPage />}/>
              <Route path='/blogs/show-blog/:id' element= {<ShowBlog />}/>
            </Route>
            <Route path='/loginAdmin' element ={<LoginPage />}  />
            <Route path='/dashboard' element ={<DashboardHome />}  />
          </Routes>
      </Router>

    </div>
  )
}

export default App
