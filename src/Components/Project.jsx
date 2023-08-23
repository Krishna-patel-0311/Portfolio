import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { GitHub, Language } from "@mui/icons-material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const projects = [
  {
    image: require("../Lottie/logo13.png"),
    title: "WinterStore Shopping",
    description: [
      " MERN Ecommerce Site: Developed a fast and responsive ecommerce platform using MongoDB, Express.js, React.js, and Node.js.",
      "User-Centric Features: Personalized sections (Male, Female, Kids), MyOrders, MyProfile, and Add to Cart functionality.",
      "Admin Capabilities: Efficient product management and customer tracking in the Admin section.",
      "Secure Transactions: Integrated Razorpay payment gateway ensures safe and reliable transactions.",
      "Improved Performance: Implemented caching mechanism for faster website loading, enhancing user experience.",
    ],
    link: "https://github.com/Krishna-patel-0311/Winterstore-Shopping",
    visit: "https://winterstore-shopping.web.app/",
  },
  {
    image: require("../Lottie/LMA.png"),
    title: "Learning Management System",
    description: [
      "Learning Management System (LMS): Developed a comprehensive learning management project consisting of two APK files: LMS-Teacher for teachers and LMS-Student for students.",
      "LMS-Teacher: Faculties can register and login to manage students, including adding, updating, and deleting student details, as well as managing course materials and time-tables for specific classes.",
      "LMS-Student: Students can log in using their credentials provided by their respective faculties to access their details, view courses, download materials shared by subject faculties, and check their class time-tables.",
      "Prototype: Created interactive prototypes for LMS-Teacher and LMS-Student using Figma, allowing stakeholders to visualize the application's interface and functionality.",
    ],
    link: "https://github.com/Krishna-patel-0311/Learning-Management",
    visit: "",
  },

  {
    image: require("../Lottie/ws.png"),
    title: "Cafe-Shop",
    description: [
      "Successfully developed a CafeShop project using ASP.NET, showcasing expertise in web development with the Microsoft technology stack.",
      "Created an engaging and user-friendly interface for an online store, allowing customers to browse and purchase cafe products.",
      "Implemented key features such as product categorization, search functionality, shopping cart management, and order processing, providing a seamless shopping experience for users.",
      "Utilized ASP.NET's powerful server-side capabilities and database integration to handle data storage, retrieval, and management, ensuring efficient product inventory management and order tracking.",
      "Demonstrated proficiency in ASP.NET development principles, including model-view-controller (MVC) architecture and secure user authentication, delivering a robust and secure online shopping platform for customers.",
    ],
    link: "hhttps://github.com/Krishna-patel-0311/Cafe-Shop",
    visit: "",
  },
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setOpen(true);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-light py-5" id="Project">
      <div className="mt-5 py-3">
        <center>
          <h1>
            <span
              data-aos="zoom-in"
              data-aos-duration="900"
              style={{ color: "black" }}
            >
              Projects
            </span>
          </h1>
        </center>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ width: "95%", margin: "auto" }}
      >
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 md-4 sm-12" key={index}>
              <Card
                className="w-75 mb-5 m-auto"
                data-aos="zoom-in-right"
                onClick={() => handleOpen(project)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={project.image}
                    height={140}
                    alt="project"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {project.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography
              variant="h3"
              style={{ color: "black" }}
              component="h4"
              align="center"
              gutterBottom
            >
              {selectedProject.title}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              className="text-dark text-left"
            >
              <ul>
                {selectedProject.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Typography>

            <Button
              variant="contained"
              size="medium"
              target="_blank"
              href={selectedProject.link}
              className="me-4 bg-dark m-auto text-light"
              style={{ textDecoration: "none", width: "150px" }}
              startIcon={<GitHub />}
            >
              Github
            </Button>
            {selectedProject.visit && (
              <Button
                variant="contained"
                size="medium"
                target="_blank"
                href={selectedProject.visit}
                className="bg-dark m-auto text-light"
                style={{ textDecoration: "none", width: "150px" }}
                startIcon={<Language />}
              >
                Visit
              </Button>
            )}
          </Box>
        </Modal>
      )}
    </section>
  );
};

export default Project;
