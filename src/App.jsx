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
import IT from './Components/IT/IT'
import Others from './Components/Others/Others'
import Cons from './Components/Cons/Cons'
import Homo from './Components/Homo/Homo'
import Non from './Components/Non/Non'







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
      <Route path='/IT' element={<IT/>}/>
      <Route path='/Others' element={<Others/>}/>
      <Route path='/Cons' element={<Cons/>}/>
      <Route path='/Homo' element={<Homo/>}/>
      <Route path='/Non' element={<Non/>}/>
     </Routes>
     <Footer/>
     
    </div>
  )
}

export default App
