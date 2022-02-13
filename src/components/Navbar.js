import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Coding
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-link navbar-item">Home</li>
              <li className="nav-link navbar-item">React</li>
              <li className="nav-link navbar-item">App</li>
              <li className="nav-link navbar-item">Help</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
