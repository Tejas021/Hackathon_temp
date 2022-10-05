import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
