import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="work">
        <div className="logoAndSpan">
          <div className="logo">
            <img src="./icon/Vector.png" />
          </div>
          <div className="spanLogo">
            <NavLink to="/">
              <span className="log">DevCamper</span>
            </NavLink>
            <span></span>
          </div>
        </div>

        <div className="icon">
          <img className="marginIcon" src="./icon/Vector (3).png" />
          <img src="./icon/Vector (4).png" />
          <NavLink to="/Login">
            <span className="log" activeClassName="active">
              Login
            </span>
          </NavLink>
          <img src="./icon/Vector (2).png" />
          <NavLink to="/Register">
            <span className="log" activeClassName="active">
              Register
            </span>
          </NavLink>
          <div className="line"></div>
          <span activeClassName="active">Browse Bootcamps</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
