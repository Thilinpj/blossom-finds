// src/components/Navbar.jsx
/* function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <span className="navbar-brand mb-0 h1">BlossomFinds</span>
    </nav>
  );
}
export default Navbar; */

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: '#f8c8dc' }} // 🎀 pastel pink
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-dark" to="/">BlossomFinds</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/Scrunchies">Scrunchies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/Clips">Clips</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/Scarves">Scarves</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category/Pouches">Pouches</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
