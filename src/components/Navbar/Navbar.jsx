import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color: "white", textDecoration: "none"}}>
          <span className="logo">bookBay</span>
        </Link>
        <div className="navItems">
          <button className="navButton reg">Register</button>
          <button className="navButton sign">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
