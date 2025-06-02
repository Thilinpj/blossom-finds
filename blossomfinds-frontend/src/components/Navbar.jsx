import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

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

        {/* Right side: login/logout/admin */}
        <div className="d-flex align-items-center gap-3">
          {user ? (
            <>
              <span className="text-dark">Hi, {user.username}</span>
              {user.role === 'Admin' && (
                <Link className="btn btn-outline-dark btn-sm" to="/admin">Admin</Link>
              )}
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link className="btn btn-outline-primary btn-sm" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
