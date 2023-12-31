import { NavLink, useLocation } from "react-router-dom";
import "../css/Nav.css";

function NavBar() {
  const { pathname } = useLocation();
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
            <img src="/img/logog.png" />
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
            to="about"
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
            to="vans"
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

        <li>
          <NavLink to="login">
            <img
              className="userIcon"
              src="/img/user_yellow_icon.png"
              style={{
                borderColor: pathname === "/login" ? "#fca311" : "transparent",
              }}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
