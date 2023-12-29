import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../css/HostLayout.css";

function HostLayout() {
  return (
    <React.Fragment>
      <nav className="host-layout-nav-box">
        <NavLink
          to="."
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
          to="vans"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#fca311" : "",
            };
          }}
        >
          Vans
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
