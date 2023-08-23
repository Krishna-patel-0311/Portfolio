import React from "react";
import { Card } from "react-bootstrap";
import Lottie from "lottie-react";
import education from "../Lottie/education.json";
import "../Lottie/animation.css";
export default function Education() {
  return (
    <section id="education" className="bg-light" style={{ marginTop: "5%" }}>
      <div>
        <center>
          <h1>
            <span data-aos="zoom-in" data-aos-duration="900" style={{color:"black" }}>
              Education
            </span>
          </h1>
        </center>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ width: "99%", margin: "auto" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className="row p-2">
              <div className="col mt-2">
                <Card
                  className="bg-ligh shadow  p-3 "
                  data-aos="fade-down"
                  data-aos-duration="700"
                  style={{ borderRadius: "5px" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3>B.Tech Information Technology</h3>
                    </Card.Title>
                    <h5>
                      <Card.Text>
                        RK University,Rajkot.
                        <br />
                        2020 - Persuing
                        <br />I am a 4<sup>th</sup> year CSE student. Passionate
                        about learning new skills and put that knowledge to
                        slove realtime problems
                      </Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row p-2">
              <div className="col mt-2">
                <Card
                  className="bg-ligh shadow  p-3 "

                  data-aos="fade-down"
                  data-aos-duration="900"
                  style={{ borderRadius: "5px" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3>Higher Secondary Studies </h3>
                    </Card.Title>
                    <h5>
                      <Card.Text>
                      Upasana Lions EnglishMedium School,Vapi.
                        <br />
                        2020
                        <br />
                        Secured  54% in State Board

                      </Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row p-2">
              <div className="col mt-2">
                <Card
                                    className="bg-ligh shadow  p-3 "

                  data-aos="fade-down"
                  data-aos-duration="1100"
                  style={{ borderRadius: "5px" }}
                >
                  <Card.Body>
                    <Card.Title>
                      <h3>Secondary Studies</h3>
                    </Card.Title>
                    <h5>
                      <Card.Text>
                      Upasana Lions EnglishMedium School,Vapi.
                        <br />
                        2018
                        <br />
                        Secured  73% in State Board
                        <br />
                      </Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-6 md-6 sm-12">
            <center>
              <Lottie
                animationData={education}
                style={{ width: "60%" }}
                loop={true}
              />
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
