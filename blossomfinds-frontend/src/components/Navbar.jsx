import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f8c8dc' }}>
      <div className="container">
        {/* Left corner: Logo / Brand */}
        <Link className="navbar-brand text-dark fw-bold" to="/" style={{ fontSize: '1.5rem' }}>
          🌸 BlossomFinds
        </Link>

        {/* Centered category links */}
        <div className="mx-auto">
          <ul className="navbar-nav gap-4 justify-content-center">
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
