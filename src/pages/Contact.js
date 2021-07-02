import React, { useState } from "react";

import SocialMedias from "../compoenents/SocialMedias";

import EmailIcon from "@material-ui/icons/Email";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "../styles/contact.css";

// 5B06A7

function Contact() {
  const [email, setemail] = useState("");
  const [toggleInput, settoggleInput] = useState(false);

  const emailStyle = {
    color: `${toggleInput ? "#ff4365" : "#5b06a7"}`,
    transition: "0.3s all ease",
    fontSize: "5em",
    cursor: "pointer",
  };
  // 5b06a7
  // 5f82d9
  function handleToggle() {
    if (!email) {
      settoggleInput(!toggleInput);
    }
    console.log(toggleInput);
  }
  //  5b06a7
  // ff4365
  return (
    <div className="contact-container">
      <div className="teste">
        <div className="contact-about">
          <strong
            style={{
              color: `${toggleInput ? "#5b06a7" : "#ff4365"}`,
            }}
          >
            Contact me
          </strong>
          <p>
            Find me on the the social medias
            <br />
            or Write your best email
          </p>
          <SocialMedias color={`${toggleInput ? "#5b06a7" : "#ff4365"}`} />
        </div>
        <div className="form">
          <input
            onFocus={() => handleToggle()}
            onBlur={() => handleToggle()}
            onInvalid={() => handleToggle()}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label>Your Email</label>

          <MailOutlineIcon style={emailStyle} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
