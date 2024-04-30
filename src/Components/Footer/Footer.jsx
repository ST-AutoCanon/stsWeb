import React from 'react'

const Footer = () => {
  return (
    
    <div
    className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div
      className="container py-5"
      style={{ marginBottom: 0, marginTop: "-75px" }}
    >
      <div className="row g-5" style={{ height: 250 }}>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-light mb-4">Address 1</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            Sukalpa Tech,Solutions pvt ltd,D.D Nagar,Belgaum–590019
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +91 7892859968
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@sukalpatech.com
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-0"
              href="https://sukalpatechacademy.in/" target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6" style={{ marginLeft: 210 }}>
          <div className='sts'>
          <h5 className="text-light mb-4">Quick Links</h5>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        </div>
       
        <div className="col-lg-3 col-md-6" style={{ marginLeft: 80 }}>
          <div className='sts'>
          <h5 className="text-light mb-4">Address 2</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            SukalpaTech, D–group layout Bengaluru-
            560091
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +91 7892859968
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@sukalpatech.com
          </p>
          <div className="d-flex pt-2">
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-1"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-outline-secondary rounded-circle me-0"
              href="https://sukalpatechacademy.in/" target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        </div>
      </div>
      
    </div>
    <div className='bow'>
    <div className="container-fluid copyright">
      <div className="container">
        <div className="row">
         
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a href="">
              {" "}
              SukalpaTech solutions Pvt Ltd
            </a>
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Designed By <a href="" > SukalpaTech solutions Pvt Ltd</a>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
 
  
  )
}

export default Footer
