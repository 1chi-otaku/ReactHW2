import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import AboutMe from './components/AboutMe/AboutMe';
import Cityf from './components/Functions/cityf';
import Bookf from './components/Functions/bookf';

import Navigation from './components/Navigation/Navigation';

function App() {
  return (

    <Router>
      <header>
        <div className='container'>
          <Navigation></Navigation>
        </div>
      </header>

      <main>
        <div className='routeContainer'>
          <Routes>
            <Route path='/AboutMe' element={<AboutMe/>} />
            <Route path='/City' element={<Cityf/>} />
            <Route path='/Book' element={<Bookf/>} />
          </Routes>
        </div>
      </main>

    </Router>
  
    
  )
}

export default App
