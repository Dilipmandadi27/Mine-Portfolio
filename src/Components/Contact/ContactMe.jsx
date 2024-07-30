import React from "react";
import mail_img from "../../../src/assets/email.png";
import linkedin_img from "../../../src/assets/linkedin.png";
// import slider from "../../../assets/arrow.png"
import "../../App.css";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="Contact-us">
      <div className="headings">
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
      </div>

      <div className="Contact-us-contents">
        <div className="img_container">
          <img src={mail_img} alt="mail_img" />
          <a
            href="mailto:dilipmandadi143@gmail.com
            &subject=Mail from Portfolio >> Hiring Process"
          >
            dilipmandadi143@gmail.com
          </a>
        </div>

        <div className="img2">
          <img src={linkedin_img} alt="linkedin_img" />
          <a href="">LinkedIn</a>
        </div>
      </div>

    </section>
  );
};

export default ContactMe;
