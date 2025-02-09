/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Login, Home, Signup } from './pages/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
