import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function SocialMedias({ color }) {
  const mediaStyle = {
    color,
    fontSize: "4em",
    cursor: "pointer",
    marginRight: "1rem",
    transition: "0.3s ease",
  };
  return (
    <div>
      <LinkedInIcon style={mediaStyle} />
      <GitHubIcon style={mediaStyle} />
    </div>
  );
}
