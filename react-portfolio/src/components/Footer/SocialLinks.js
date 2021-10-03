import React from "react";
import "./footer.css";
function SocialLinks() {
  return (
    <div
      className="icons-container"
      style={{
        fontSize: "2rem",
      }}
    >
      <a
        target="-blank"
        href="https://www.linkedin.com/in/syed-nahid-728509193/"
      >
        <i className={`fab fa-linkedin`}></i>
      </a>
      <a target="-blank" href="https://github.com/Syedm-hub">
        <i className={`fab fa-github`}></i>
      </a>

      <a target="-blank" href="https://www.instagram.com/syed.nahid/">
        <i className={`fab fa-instagram`}></i>
      </a>
    </div>
  );
}

export default SocialLinks;
