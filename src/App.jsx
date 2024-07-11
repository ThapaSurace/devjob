import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Register from './pages/Register'
import Login from './pages/Login'
import SingleJobPage from './pages/SingleJobPage'
import AddJob from './pages/AddJob'

const App = () => {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/job/:id' element={<SingleJobPage />} />
      <Route path='/addjob' element={<AddJob />} />
    </Routes>
   </>
  )
}

export default App