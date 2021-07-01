import React from "react";

import SocialMedias from "../compoenents/SocialMedias";

import EmailIcon from "@material-ui/icons/Email";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "../styles/contact.css";

// 5B06A7

const emailStyle = {
  color: "#5B06A7",
  fontSize: "5rem",
  marginBottom: "auto",
  cursor: "pointer",
  margin: 0,
};

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-about">
        <strong>Contact me</strong>
        <p>
          Write your best email
          <br />
          or find me on the the social medias
        </p>
        <SocialMedias />
      </div>
      <div className="form">
        <input required />
        <label>Your Email</label>

        <MailOutlineIcon style={emailStyle} />
      </div>
    </div>
  );
}

export default Contact;
