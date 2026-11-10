
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/lineup">ARTISTS</Link>
        <Link to="/schedule">SCHEDULE</Link>
      </div>

      <Link to="/" className="nav-logo">FQ</Link>

      <div className="nav-right">
        <Link to="/about">ABOUT</Link>
        <Link to="/tickets">TICKETS</Link>
      </div>
    </nav>
  );
}

export default NavBar;
