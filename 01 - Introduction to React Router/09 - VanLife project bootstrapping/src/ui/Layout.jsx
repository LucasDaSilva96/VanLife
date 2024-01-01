import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  const year = new Date().getFullYear();
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Outlet />
      <footer>Ⓒ {year} #VANLIFE || Lucas Da Silva</footer>
    </div>
  );
}

export default Layout;
