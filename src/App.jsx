import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import First from './First'
import Contact from './Contact'
import About from './About'
function App() {
  

  return (
    <>
 <BrowserRouter>
 <Routes>
<Route path='/' element={<First/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />

 </Routes>
 
 
 </BrowserRouter>

    </>
  )
}

export default App
