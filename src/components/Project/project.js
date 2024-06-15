import React from "react";
import "./project.css"; // Import the CSS file
import travel from "../../assets/travel2.jpeg";
import weather from "../../assets/weather.jpg";
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
            <h5 className="card-title">Weather-App</h5>
            <a href="#" className="card-link">
              View
            </a>
          </div>
        </div>
        <div className="card">
          <img src={travel} className="card-img-top" alt="Project 2" />
          <div className="card-body">
            <h5 className="card-title">Travel and Tour website</h5>
            <a href="#" className="card-link">
              View
            </a>
          </div>
        </div>
        <div className="card">
          <img src="" className="card-img-top" alt="Project 3" />
          <div className="card-body">
            <h5 className="card-title">Student data Management System</h5>
            <a href="#" className="card-link">
              View
            </a>
          </div>
        </div>
      </div>
      <div className="skillBox">
        {/* <div className="skill">
          <img src={html} alt="" className="logo" />

          <img src={css} alt="" className="logo" />

          <img src={js} alt="" className="logo" />
          <img src={bootstrap} alt="" className="logo" />
        </div>
        <div className="skill">
          <img src={react} alt="" className="logo" />
          <img src={cpp} alt="" className="logo" />
          <img src={sql} alt="" className="logo" />
          <img src={os} alt="" className="logo" />
        </div> */}
        <div className="skill">
            <img src={html } className="logo"/>
            <p className=" logoname"> HTML</p>

        </div>
        <div className="skill">
            <img src={css } className="logo"/>
            <p className=" logoname"> css</p>

        </div>
        <div className="skill">
            <img src={js } className="logo"/>
            <p className=" logoname"> js</p>

        </div>
        <div className="skill">
            <img src={react} className="logo"/>
            <p className=" logoname"> react</p>

        </div>
        <div className="skill">
            <img src={cpp} className="logo"/>
            <p className=" logoname"> C++</p>

        </div>
        <div className="skill">
            <img src={bootstrap } className="logo"/>
            <p className=" logoname"> Bootstrap</p>

        </div>
        <div className="skill">
            <img src={sql} className="logo"/>
            <p className=" logoname"> SQL</p>

        </div>
        <div className="skill">
            <img src={os} className="logo"/>
            <p className=" logoname"> OS</p>

        </div>
      </div>
    </div>
  );
};

export default Project;
