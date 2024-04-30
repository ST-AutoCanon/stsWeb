import React from 'react'

const About = () => {
  return (
    
    <>
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
          About Us
        </h1>
        
      </div>
    </div>
    {/* Page Header End */}
    {/* Facts Start */}
    {/* Facts End */}
    {/* About Start */}
    <div className="container-xxl py-5" style={{marginTop:-50}}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="img-border">
              <div className='jds'>
              <img className="img-fluid" src="asset/img/sukacover.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h4 className="section-title bg-white text-start text-primary pe-3" style={{marginTop:40}}>
                About Us
              </h4>
              <p className='asl' style={{marginTop:10}}>
                
                  “Sukalpa Tech” started in 2018-19 with the philosophy of
                  Support, Succeed &amp; Grow Stronger Together.<br/>Delighting the
                  customers by uncompromisingly dynamic, technological
                  developments &amp; modernization that becomes vital to stay
                  ahead of their competition at reasonable cost.<br/> To be a top most
                  engineering services company in India by 2025-26 to offer
                  services with most trusted, reliable &amp; innovative
                  solutions,so SukalpaTech abide to its meaning by utilizing
                  advance technologies &amp;  well connected industry
                expert consultants
                
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Feature Start */}
    <div
      className="text-center mx-auto mb-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: 600 }}
    >
      <b>
        <h4 className="section-title bg-white text-center text-primary px-3">
          CONNECTED NETWORK
        </h4>
      </b>
    </div>
    <div className="mkl">
      <ul>
        <div className="ms-4">
          <li>
            <h className="mb-1" >Industry Experts</h>
          </li>
        </div>
        <div className="ms-4">
          <li>
            <h className="mb-1">Experienced Consultants</h>
          </li>
        </div>
        <div className="ms-4">
          <li>
            <h className="mb-1">Overseas Partners</h>
          </li>
        </div>
        <div className="ms-4">
          <li>
            <h className="mb-1">Service Partners</h>
          </li>
        </div>
      </ul>
    </div>
    <div className="skl">
      <ul>
        <div className="ms-4">
          <li>
            <h className="mb-1">Technical Colleges &amp; Institutions</h>
          </li>
        </div>
        <div className="ms-4">
          <li>
            <h className="mb-1">Testing Labs</h>
          </li>
        </div>
        <div className="ms-4">
          <li>
            <h className="mb-1">Certification Agencies</h>
          </li>
        </div>
      </ul>
    </div>
    <br/>
<div className='bjp'>
    <h4 className="section-title bg-white text-center text-primary px-3" style={{marginLeft:400,marginTop:50}}>
          MAJOR SERVICES PROVIDED AS FALLOWS
        </h4>
        <div className='pop' style={{marginLeft:500}}>
        <ul>
          <li>Styling</li>
          <li>Product Design & Development</li>
          <li>CAE Analysis</li>
          <li>Prototyping</li>
          <li>Tooling,jigs & Fixture Design & Development</li>
          <li>Sourcing Support</li>
          <li>Homologation</li>
          <li>Export Homologation</li>
          <li>Plant layout</li>
          <li>IT Related Projects</li>

        </ul>
        </div>
        </div>
    <h4 className="section-title bg-white text-center text-primary px-3" style={{marginTop:50}}>
          MAJOR PROJECTS EXECUTED
        </h4>
        <ul>
        <b><li>Tricycle</li></b>
          <p>Product design & development & CAE Analysis</p>
        <b><li>E-Bus</li></b>
          <p>Product Design & Development,Sourcing,CAE Analysis,Testing & Validation & Certification </p>
         
         
         <b><li>Electric Tractor</li></b>
          <p>Product design & development,Sourcing,CAE Analysis,Testing & Validation Homologation</p>
         <b><li>Electric 2 Wheeler & 3 Wheeler</li></b>
          <p>Styling,Product Design & Development,Sourcing,Proto Development,Coordinationwith testing agencies,Vehicle Testing & Validation,CMVR Certification.</p>
         
         
        </ul>
     
  </>
  

    
  )
}

export default About
