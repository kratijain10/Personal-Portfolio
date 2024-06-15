import React, { useRef } from "react";
import "./contact.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_89wc158",
        "template_1xnu1ib",
        form.current,
        "5a6P0C5XSmPHZiJS0"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="contactPageTitle"> Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any opportunities.
      </span>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />

        <textarea
          className="msg"
          name="mesaage"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/kratijain10/" target="_blank">
            <img src={linkedin} alt="linkedin" className="link" />
          </a>
          <a href="https://github.com/kratijain10" target="_blank">
            
          <img src={github} alt="github" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
