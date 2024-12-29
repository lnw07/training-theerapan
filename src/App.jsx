import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import './App.css'
import NotFound from './Pages/NotFound'
const App = () => {
  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Course" element={<Course/>}/>
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="*" element={<NotFound/>}/>
     </Routes>
     </BrowserRouter>
  )
}

export default App