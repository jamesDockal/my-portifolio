import React from "react";
import Stars from "../compoenents/Stars";

import "../styles/techs.css";

function Techs() {
  return (
    <div className="techs-container">
      <Stars />
      <div className="frontend">
        <img src="./images/react.png" />
        <img src="./images/next3.png" />
      </div>
      <div className="backend">
        <img src="./images/node2.png" />
        <img src="./images/firebase.png" />
      </div>
    </div>
  );
}

export default Techs;
