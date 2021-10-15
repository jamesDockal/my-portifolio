import React, { useState, useEffect } from "react";

import "./styles.css";

function Psyche() {
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
    console.log(offSetY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <img
        alt="16-Psyche"
        className="psysche"
        src="./images/asteroid.png"
        style={{
          transform: `translate(${offSetY * 0.5}px, ${offSetY * 1.2}px)`,
        }}
      />
    </div>
  );
}

export default Psyche;
