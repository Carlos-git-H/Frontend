import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import V_Client from './Views/V_Client'
import V_Employee from './Views/V_Employee'
import V_Login from './Views/V_Login/V_Login'
import V_Register from './Views/V_Register/V_Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cliente/*" element={<V_Client/>} />
        <Route path="/empleado/*" element={<V_Employee/>} />
        <Route path="/login" element={<V_Login />} />
        <Route path="/register" element={<V_Register />} />
      </Routes>
    </Router>
  )
}

export default App
