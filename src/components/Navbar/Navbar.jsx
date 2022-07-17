import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Logo color="white" />
        <div className="navItems">
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="navButton reg">Register</button>{" "}
          </Link>
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="navButton sign">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
