import Logo from "../Logo/Logo";
import {
  FaMapPin,
  FaPhoneAlt,
  FaMailBulk,
  FaLongArrowAltRight,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <div className="fListHeader">
              <Logo color="#001e6c" />
            </div>
            <p className="footerGoals">
              We believe in financial breakthrough with stocks and
              cryptocurrency
            </p>
            <div className="fListAddr">
              <FaMapPin className="footerIcon" />
              <span>10396 SW 209th Ln Cutler Bay,FL 33189 US</span>
            </div>
            <div className="fListAddr">
              <FaPhoneAlt className="footerIcon" />
              <span>+1 (305) 204-5463</span>
            </div>
            <div className="fListAddr">
              <FaMailBulk className="footerIcon" />
              <span> support@bookbay.com</span>
            </div>
          </ul>
          <ul className="fList">
            <div className="fListHeader">Our Services</div>
            <div className="fListAddr">
              <FaLongArrowAltRight className="footerIcon" />
              <span>BUSINESS CONSULTING</span>
            </div>
            <div className="fListAddr">
              <FaLongArrowAltRight className="footerIcon" />
              <span> EXCHANGE</span>
            </div>
            <div className="fListAddr">
              <FaLongArrowAltRight className="footerIcon" />
              <span> ANALYTICS</span>
            </div>
            <div className="fListAddr">
              <FaLongArrowAltRight className="footerIcon" />
              <span>MINING</span>
            </div>
            <div className="fListAddr">
              <FaLongArrowAltRight className="footerIcon" />
              <span> CUSTOMER INSIGHT</span>
            </div>
          </ul>
          <ul className="fList">
            <div className="fListHeader">Contact</div>
            <div className="fListIconWrapper">
              <FaTwitter className="footerSocialsIcon" />
              <FaInstagram className="footerSocialsIcon" />
              <FaMailBulk className="footerSocialsIcon" />
            </div>
          </ul>
        </div>
        <div className="fText">Copyright © 2022 bookBay</div>
      </div>
    </div>
  );
};

export default Footer;
