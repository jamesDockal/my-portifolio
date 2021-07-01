import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const mediaStyle = {
  color: "#5F82D9",
  fontSize: "5rem",
  cursor: "pointer",
  marginRight: "1rem",
};

export default function SocialMedias() {
  return (
    <div>
      <LinkedInIcon style={mediaStyle} />
      <GitHubIcon style={mediaStyle} />
    </div>
  );
}
