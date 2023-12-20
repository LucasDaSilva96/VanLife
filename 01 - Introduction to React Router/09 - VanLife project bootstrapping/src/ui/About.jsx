import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <div className="about-page-container">
      <img src="./img/about-hero.png" />
      <div className="about-page-content-box">
        <h1>Don't squeeze in a sedan when you could relax in a van</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="about-page-cta-box">
          <h2>
            Your destination is waiting. <br />
            Your van is ready
          </h2>
          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
