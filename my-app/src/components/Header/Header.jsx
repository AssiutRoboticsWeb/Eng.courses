import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid"> 
          <a className="navbar-brand" href="#">
            Eng-Learning
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/courses"} className="nav-link" href="#">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/my-courses"} className="nav-link" href="#">
                  My Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Langegage
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      EN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AR
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
