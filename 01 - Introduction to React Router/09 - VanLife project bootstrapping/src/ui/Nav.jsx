import { NavLink, useLocation } from "react-router-dom";
import "../css/Nav.css";
import { getUserLoggedStatus } from "../auth/utils";

function NavBar() {
  const { pathname } = useLocation();
  const isLoggedIn = getUserLoggedStatus() === "true";
  console.log(isLoggedIn);
  return (
    <nav className="nav">
      <aside>
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
      </aside>
      <div className="toggle-hambuger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
      </div>
      <ul className="ul">
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

        {!isLoggedIn ? (
          <li>
            <NavLink to="login">
              <img
                className="userIcon"
                src="/img/user_yellow_icon.png"
                style={{
                  borderColor:
                    pathname === "/login" ? "#fca311" : "transparent",
                }}
              />
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="login"
              onClick={() => {
                localStorage.setItem("loggedIn", false);
              }}
            >
              <img
                className="userIcon"
                src="/img/exit_to_icon.png"
                style={{
                  borderColor: pathname === "/login" ? "#000" : "transparent",
                }}
              />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
