import React from 'react'

const Services = () => {
  return (
    <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-4 text-white animated slideInDown mb-3">
          Services
        </h1>
       
      </div>
    </div>
    {/* Page Header End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h4 className="section-title bg-white text-center text-primary px-3">
          Services
        </h4>
        <h4 style={{marginTop:10}}>
          We Focuse On Making The Best In All Sectors
        </h4>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <img className="img-fluid rounded mb-4" src="asset/img/engser.jpg" style={{height:210}} />
            <h4 className="mb-0">Engineering Services</h4>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <img className="img-fluid rounded mb-4" src="asset/img/itnetd.jpg" style={{height:210}}/>
            <h4 className="mb-0">IT &amp; Networking Services</h4>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <img className="img-fluid rounded mb-4" src="asset/img/conso.jpg" style={{height:210}}/>
            <h4 className="mb-0">Other Services</h4>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <img className="img-fluid rounded mb-4" src="asset/img/consq.jpg" />
            <h4 className="mb-0">
              Consulting Services
            </h4>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <img className="img-fluid rounded mb-4" src="asset/img/homoa.jpg" style={{height:210}}/>
            <h4 className="mb-0">Homologation Support</h4>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <a
            className="service-item d-block rounded text-center h-100 p-4"
            href=""
          >
            <img className="img-fluid rounded mb-4" src="asset/img/nond.jpg" />
            <h4 className="mb-0">Non-IT Services</h4>
          </a>
        </div>
      </div>
    </div>
  </div>
  </>
  

  )
}

export default Services
