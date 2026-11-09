import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/lineup">LINEUP</Link>
      <Link to="/">FQ</Link>
      <Link to="/schedule">SCHEDULE</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
}

export default NavBar;