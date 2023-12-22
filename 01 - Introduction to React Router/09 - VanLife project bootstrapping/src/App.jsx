import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./ui/Nav";
import React from "react";
import Home from "./ui/Home";
import About from "./ui/About";
import "./css/Header.css";
import Vans from "./ui/Vans.jsx";
import "./server/server.js";
import VanDetails from "./ui/VanDetails.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <header className="header">
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
        <footer>Ⓒ 2022 #VANLIFE</footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
