import { NavLink } from "react-router-dom";
import "../css/Nav.css";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fca311" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            #VANLIFE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/host"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fca311" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fca311" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vans"
            style={({ isActive }) => {
              return {
                color: isActive ? "#fca311" : "",
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Vans
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
