import React from "react";
import resume from '../Lottie/Krishna_Patel_CV.pdf'
export default function About() {
  return (
    <section className="py-5"   id="about">
      <div className="py-2">
        <center>
          <h1>
            <span id="title" data-aos="zoom-in" data-aos-duration="900" style={{color:"black" }}>About Me</span>
          </h1>
        </center>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ margin: "auto", width: "80%"}}
      >
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-sm-12 col-xs-12"  data-aos="fade-left" data-aos-duration="900">
            <ul className="text-left" style={{ listStyle: "none" }}>
              <li>
                <h5>
                  I'm currently a CSE 4<sup>th</sup> year student at RK University, Rajkot.
                </h5>
              </li>
              <li>
                <h5> I'm currently learning Node and IOS. </h5>
              </li>
              <li>
                <h5>Ask me about FrontEnd Development and FullStack Develpment</h5>
              </li>
              <li>
                <h5>Familer With : C,C#, ASP.NET CORE, ASP.NET MVC</h5>
              </li>
              <li>
                <h5>
                  Expertise In : HTML5, CSS, Javascript, React.js, Node.js,
                  Express.js
                </h5>
              </li>
            
              <li>
                <h5>Databases: MySQL, MongoDB, </h5>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12" data-aos="fade-left" data-aos-duration="900">
            <ul className="text-left" style={{ listStyle: "none" }}>
              <li><h5>Name : Krishna Patel</h5></li>
              <li><h5>Contact : 9081535806</h5></li>
              <li><h5>Email : patelkrishna0311@gmail.com, kpatel581@rku.ac.in </h5></li>
              <li><h5>Resume : <a target="_blank" style={{textDecoration:"none",color:"#fe6928"}} href={resume} rel="noreferrer">Click Me !!</a> </h5></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
