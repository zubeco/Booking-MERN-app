import React from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import "./Access.css";

const Access = () => {
  return (
    <div className="access">
      <div className="accessWrapper">
        <h2>Sign in or create an account</h2>
        <label>Email address</label>
        <input type="text" />
        <button>Continue with email</button>
        <div className="accessOptions">
          <div className="line"></div>
          <p>or use one of these options</p>
          <div className="line"></div>
        </div>
        <div className="optionIcons">
          <FaFacebookSquare className="accessIcons" />
          <FaGoogle className="accessIcons " />
          <MdDevices className="accessIcons" />
        </div>
        <div className="accessFooter">
          <div className="longLine"></div>
          <p>
            By signing in or creating an account, you agree with our{" "}
            <span className="terms">Terms & Conditions</span> and{" "}
            <span className="terms">Privacy Statement</span>
          </p>
          <div className="longLine"></div>
          <p>
            <span className="terms">
              Do not sell my personal information – Nigerian residents only
            </span>
          </p>
          <div className="longLine"></div>
        </div>
        <p className="rights">All rights reserved. Copyright (2006-2022)</p>
      </div>
    </div>
  );
};

export default Access;
