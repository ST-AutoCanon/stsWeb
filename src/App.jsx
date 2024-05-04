import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import { Route,Routes } from 'react-router-dom'
import Services from './Components/Services/Services'
import Product from './Components/Product/Product'
import Contact from './Components/Contact/Contact'
import Enginerring from './Components/Enginerring/Enginerring'

const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/Enginerring' element={<Enginerring/>}/>
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default App
