import React, { useState } from 'react'

const LOG = () => {
  const[popupStyle,showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"),3000)
  }
  return (
    <div>
        <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-4 text-white animated slideInDown mb-3">
        EMPLOYEE LOGIN
      </h1>
      
    </div>
  </div>
        <div  className='cover'>
        <h1>Employee Login</h1>
        <input type='text' placeholder='Your Email'/>
        <input type='password' placeholder='Your Password'/>

        <div className="login-btn" onClick={popup}>Login</div>
    
        <div className={popupStyle}>
        <h1>Login Failed</h1>
        <p>Username or password incorrect</p>
      </div>
      </div>
      
    </div>
    
  )
}

export default LOG
