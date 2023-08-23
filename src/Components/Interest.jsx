import React from 'react'

export default function Interest() {
  return (
    <section id="Interest" style={{ backgroundColor: "#fff" }}>
      <div>
        <center><h1 ><span data-aos="zoom-in" data-aos-duration="900" style={{color:"black" }}>Area of Interest</span></h1></center>
      </div>
      <div className='container-fluid mt-5' style={{ width: "90%", margin: "auto" }}>
        <div className='row'>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-11 mb-4"  >
            <div className="media p-4 h-100"  data-aos="fade-down" data-aos-duration="700"  style={{ border: "3px solid black", borderRadius: "4px",margin:"2px" }}>
              <div className="media-object media-left" >
                <i className="bi bi-code-slash fa-4x text-info"></i>
              </div>
              <div className="media-body">
                <h2 className="media-heading">Web Development</h2>
                <h5>Web development wizard who excels in building dynamic and user-friendly applications with MERN and ASP.NET Core technologies.</h5>
              </div>
            </div>
          </div>
       
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-11 mb-4 " >
            <div className="media p-4 h-100" data-aos="fade-down" data-aos-duration="1100" style={{ border: "3px solid black", borderRadius: "4px",margin:"2px" }}>
              <div className="media-object media-left">
                <i className="bi bi-pencil-square fa-4x text-danger" ></i>
              </div>
              <div className="media-body">
                <h2 className="media-heading">UI & UX Design</h2>
                <h5>UI/UX wizard who creates stunning and intuitive designs using Figma and Adobe XD, always putting the user experience first.</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-11 mb-4 " >
            <div className="media p-4 h-100"  data-aos="fade-down" data-aos-duration="900" style={{ border: "3px solid black", borderRadius: "4px",margin:"2px" }}>
              <div className="media-object media-left">
                <i className="bi bi-shield-shaded fa-4x text-"  ></i>
              </div>
              <div className="media-body">
                <h2 className="media-heading">Problem Solving</h2>
                <h5>Problem solver extraordinaire with a sharp mind and a passion for finding creative and efficient solutions to even the toughest challenges.</h5>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </section>
  )
}
