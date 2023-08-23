import React from "react";
import Lottie from "lottie-react";
import contact from "../Lottie/contact.json";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useForm } from "react-hook-form";

// import { useState } from 'react'

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    window.alert(`Thanks for your interest, We will reach you soon `);
  };
  return (
    <section id="contact">
      <div>
        <center>
          <h1>
            <span data-aos="zoom-in" data-aos-duration="900" style={{color:"black"}}>
              Get In Touch
            </span>
          </h1>
        </center>
      </div>

      <div
        className="container-fluid mt-5"
        style={{ margin: "auto", width: "95%" }}
      >
        <div className="row">
          <div className="col-md-4">
            <Lottie
              animationData={contact}
              style={{ width: "90%" }}
              loop={true}
            />
          </div>
          <div
            className="col-md-8"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <form className="form mt-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="row m-2">
                <div className="col-md-6 ">
                  <h4 className="form-label">Name :</h4>
                </div>
                <div className="col-md-6 ">
                  <input
                    size="35"
                    className="form-control bg-dark text-light"

                    placeholder="enter your name"
                    {...register("Name", { required: true })}
                  />
                  {errors.Name && (
                    <span>
                      <h5 className="text-danger mt-2">
                        This field is required
                      </h5>
                    </span>
                  )}
                </div>
              </div>
              <div className="row m-2">
                <div className="col-md-6">
                  <h4>Email :</h4>
                </div>
                <div className="col-md-6">
                  <input
                    size="35"
                    className="form-control bg-dark text-light"

                    placeholder="enter your email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.Email && (
                    <span>
                      <h5 className="text-danger mt-2">Enter Valid Email</h5>
                    </span>
                  )}
                </div>
              </div>

              <div className="row m-2">
                <div className="col-md-6">
                  <h4>Message :</h4>
                </div>
                <div className="col-md-6">
                  <textarea
                                        className=" bg-dark text-light"

                    placeholder="enter your message"
                    {...register("Message", { required: true })}
                  />
                  {errors.Message && (
                    <span>
                      <h5 className="text-danger mt-2">
                        This field is required
                      </h5>
                    </span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <center>
                    <Button
                      variant="contained"
                      className="mt-3"
                      color="success"
                      style={{ fontSize: "18px" }}
                      type="submit"
                      endIcon={<Send />}
                    >
                      Submit
                    </Button>
                  </center>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
