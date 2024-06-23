import React from "react";
import "./project.css"; 
import wardrobe from "../../assets/wardrobe.jpg";
import weather from "../../assets/weather.jpg";
import student from "../../assets/student.jpeg";
import html from "../../assets/html.png";
import css from "../../assets/css.jpeg";
import js from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import cpp from "../../assets/cpp.png";
import sql from "../../assets/sql.png";
import os from "../../assets/os.png";

const Project = () => {
  return (
    <div id="projectSection">
      <span className="projectTitle">Projects & Skills</span>
      <div className="cardBox">
        <div className="card">
          <img src={weather} className="card-img-top" alt="Project 1" />
          <div className="card-body">
            <h5 className="card-title">Weather-App Website</h5>
            <a href="https://weather-app-krati.vercel.app/" className="card-link">
              View
            </a>
          </div>
        </div>
        <div className="card">
          <img src={wardrobe} className="card-img-top" alt="Project 2" />
          <div className="card-body">
            <h5 className="card-title">E Commerce Website</h5>
            <a href="https://e-commerce-krati.vercel.app/" className="card-link">
              View
            </a>
          </div>
        </div>
        <div className="card">
          <img src={student} className="card-img-top" alt="Project 3" />
          <div className="card-body">
            <h5 className="card-title">Student data Management System</h5>
            <a href="https://github.com/kratijain10/Student-Management-System" className="card-link">
              View
            </a>
          </div>
        </div>
      </div>
      <div className="skillBox">
      <marquee behavior="scroll" direction="right" className="marquee-box">
        <div className="skill">
          <img src={html} width="100" height="80" className="logo" alt="HTML" />
          <p className="logoname">HTML</p>
        </div>
        <div className="skill">
          <img src={css} width="100" height="80" className="logo" alt="CSS" />
          <p className="logoname">CSS</p>
        </div>
        <div className="skill">
          <img src={js} width="100" height="80" className="logo" alt="JavaScript" />
          <p className="logoname">JavaScript</p>
        </div>
        <div className="skill">
          <img src={react} width="100" height="80" className="logo" alt="React" />
          <p className="logoname">React</p>
        </div>
        <div className="skill">
          <img src={cpp} width="100" height="80" className="logo" alt="C++" />
          <p className="logoname">C++</p>
        </div>
        <div className="skill">
          <img src={bootstrap} width="100" height="80" className="logo" alt="Bootstrap" />
          <p className="logoname">Bootstrap</p>
        </div>
        <div className="skill">
          <img src={sql} width="100" height="80" className="logo" alt="SQL" />
          <p className="logoname">SQL</p>
        </div>
        <div className="skill">
          <img src={os} width="100" height="70" className="logo" alt="OS" />
          <p className="logoname">OS</p>
        </div>
      </marquee>
    </div>
    </div>
  );
};

export default Project;
