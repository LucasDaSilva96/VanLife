import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Outlet />
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </div>
  );
}

export default Layout;
