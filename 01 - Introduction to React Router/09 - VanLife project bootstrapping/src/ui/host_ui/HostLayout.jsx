import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../css/HostLayout.css";

function HostLayout() {
  return (
    <React.Fragment>
      <h1>HostLayout</h1>
      <nav className="host-layout-nav-box">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#fca311" : "",
            };
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#fca311" : "",
            };
          }}
        >
          Income
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#fca311" : "",
            };
          }}
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </React.Fragment>
  );
}

export default HostLayout;
