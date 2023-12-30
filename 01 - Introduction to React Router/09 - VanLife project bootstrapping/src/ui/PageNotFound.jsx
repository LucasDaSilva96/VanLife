import { useNavigate } from "react-router-dom";
import "../css/PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page-not-found-container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <button onClick={() => navigate("/")}>Return to home</button>
    </div>
  );
}

export default PageNotFound;
