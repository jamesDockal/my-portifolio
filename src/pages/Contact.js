import React, { useState } from "react";

import SocialMedias from "../compoenents/SocialMedias";

import EmailIcon from "@material-ui/icons/Email";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "../styles/contact.css";

// 5B06A7

function Contact() {
  const [toggleInput, settoggleInput] = useState(false);

  const emailStyle = {
    color: `${toggleInput ? "#5b06a7" : "#5f82d9"}`,
    transition: "0.3s all ease",
    fontSize: "5rem",
    marginBottom: "auto",
    cursor: "pointer",
  };
  // 5b06a7
  // 5f82d9
  function handleToggle() {
    settoggleInput(!toggleInput);
    console.log(toggleInput);
  }

  return (
    <div className="contact-container">
      <div className="contact-about">
        <strong
          style={{
            color: `${toggleInput ? "#5b06a7" : "#5f82d9"}`,
          }}
        >
          Contact me
        </strong>
        <p>
          Write your best email
          <br />
          or find me on the the social medias
        </p>
        <SocialMedias />
      </div>
      <div className="form">
        <input
          onFocus={() => handleToggle()}
          onBlur={() => handleToggle()}
          onInvalid={() => handleToggle()}
          // onFocusOut={() => console.log("out")}
          required
        />
        <label>Your Email</label>

        <MailOutlineIcon style={emailStyle} />
      </div>
    </div>
  );
}

export default Contact;
