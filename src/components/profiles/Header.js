import React from "react";

const Header = () => {
  return (
    <div className="container">
      <nav className="menu">
        <ul className="main-menu">
          <li className="active">
            <i className="fa fa-home"></i>Home
          </li>
          <li className="with-submenu">
            <i className="fa fa-briefcase"></i>Projects{" "}
            <i className="fa fa-caret-down"></i>
            <ul className="submenu">
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Animation</li>
            </ul>
          </li>
          <li>
            <i className="fa fa-user"></i>Professions
          </li>
          <li>
            <i className="fa fa-search"></i>Bio
          </li>
          <li>
            <i className="fa fa-search"></i>Contact 
          
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;