import { Link } from "react-router-dom";
import "../css/Nav.css";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">#VANLIFE</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/vans">Vans</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
