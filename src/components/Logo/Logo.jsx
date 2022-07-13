import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = ({ color }) => {
  return (
    <div>
      <Link to="/" style={{ color , textDecoration: "none"}}>
        <span className="logo">bookBay</span>
      </Link>
    </div>
  );
};

export default Logo;
