import React from 'react'
import Contacts from './components/Contacts'
import Home from './components/Home'
import { Route, Link, Routes, NavLink } from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default App