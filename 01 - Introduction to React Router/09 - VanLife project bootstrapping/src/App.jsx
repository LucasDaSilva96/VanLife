import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./ui/Nav";
import React from "react";
import Home from "./ui/Home";
import About from "./ui/About";
import "./css/Header.css";
import "./server/server.js";

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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
