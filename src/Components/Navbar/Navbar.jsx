import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logosu from '../../assets/logosu.jpg'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    
        <div className="pop">
  <header className="header">
    <div className="logo">
      {" "}
      <img src={logosu} alt="Logo" width="100px" height="90px" />
    </div>
    <input type="checkbox" id="toggle" />
    <label htmlFor="toggle">
      {" "}
     
     
    </label>
    <nav className="navigation">
      <ul className={isMobile? "nav-links-mobile" : "nav-links"}>
        <li>
          <Link to="/" className='home'>Home</Link>
        </li>
        <li>
         <Link to="/About" className='about'>About Us</Link>
        </li>
        <li>
          <Link to="/Services" className='services'>Services</Link>
          
          
          <ul>
            <li>
              <a href="#">Information Technology</a>
              <ul>
                <li>
                  <a href="#">
                    Chatbot Application
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    IT Consulting
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Software Development
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Testing &amp; QA
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Website design
                    <span />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Non-IT</a>
              <ul>
                <li>
                  <a href="#">
                    Automotive
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    CA Analysis
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    E-Mobility
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Prototype Building
                    <span />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Product" className='product'>Product</Link>
          <ul>
            <li>
              <a id='openModal' href="http://auto-canon.in/" target="_blank">
                Auto-Canon
              </a>
              <ul>
                <li>
                  <a href="http://auto-canon.in/" target="_blank">
                    Homologation Support
                    <span />
                  </a>
                </li>
                <li>
                  <a href="http://auto-canon.in/" target="_blank">
                    Plant Accreditiation
                    <span />
                  </a>
                </li>
                <li>
                  <a href="http://auto-canon.in/" target="_blank">
                    WMI Registration
                    <span />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Contact" className='contact'>Contact Us</Link>
        </li>
        <li>
          <Link to="/" className='contact' onClick={{toggleMenu}}>Login</Link>
        </li>
        <div className="sub-menu-wrap" id='sub-menu'>
        <div className="sub-menu">
          <div className="user-info">
            <img src="asset/img/team-1.jpg" alt="" />
            <h4>Employee Login</h4>
          </div>
          <hr/>
         <input type="text" placeholder='Enter your email' /><br/>
         <input type="text" placeholder='Enter your password' /><br/>
         <a className="btn btn-primary rounded-pill py-3 px-5" href="/">
              LOGIN
            </a>
        </div>
      </div>

      </ul>
      

     
      <button className="mobile-menu-icon"
      onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
        <i className="fas fa-times"></i>
       ):(
       <i className="fas fa-bars"></i>
      )}
      </button>
  
    
      
    </nav>
  </header>
  

  <div />
</div>

    
     
  )
}

export default Navbar
