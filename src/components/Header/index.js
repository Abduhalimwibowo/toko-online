import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import "./styles.scss";
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="ini hrsnya logo" />
          </Link>
        </div>
        <div className="callToAction">
          <ul>
            <li>
              <Link to="/regsiter">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
