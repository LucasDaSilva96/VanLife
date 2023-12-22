import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <section className="about-page-container">
      <img src="./img/about-hero.png" />
      <div className="about-page-content-box">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
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
    </section>
  );
}

export default About;
