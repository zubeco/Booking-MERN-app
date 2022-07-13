import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Logo color="white" />
        <div className="navItems">
          <button className="navButton reg">Register</button>
          <button className="navButton sign">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
