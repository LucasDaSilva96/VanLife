import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page-container">
      <h1>You got the travel, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #VANLIFE movement. Find the
        perfect van to make your perfect trip.
      </p>
      <Link className="home-cta-button" to="/vans">
        Find your van
      </Link>
    </section>
  );
}

export default Home;
