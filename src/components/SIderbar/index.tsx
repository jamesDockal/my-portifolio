import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-scroll";

import "./styles.css";
import iconsStyles from "./icons";

function Siderbar() {
  return (
    <div className="siderbar-container">
      <Link to="home-container" smooth="true">
        <PersonIcon className="icon" style={iconsStyles} />
      </Link>

      <Link to="techs-container" smooth="true">
        <CodeIcon className="icon" style={iconsStyles} />
      </Link>

      <Link to="contact-container" smooth="true">
        <MailOutlineIcon className="icon" style={iconsStyles} />
      </Link>
    </div>
  );
}

export default Siderbar;
