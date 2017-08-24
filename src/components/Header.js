import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    {/*<NavLink exact to="/"><span className="icn-logo"><i>NF</i></span></NavLink>*/}
    <ul className="main-nav">
      <li className="noselect"><NavLink exact to="/">Nick Falcone</NavLink></li>
      {/*<li><NavLink to="/about">About</NavLink></li>*/}
      <li className="noselect"><NavLink to="/projects">Projects</NavLink></li>
      {/* <li className="noselect"><NavLink to="/skills">Skills</NavLink></li> */}
      <li><a href={"https://www.linkedin.com/in/nicholasfalcone"} target={"_blank"}><img className="linkedin" src={"img/linkedin.png"} alt="linkedin" /></a></li>
      <li><a href={"https://github.com/nickFalcone"} target={"_blank"}><img className="GitHub" src={"img/GitHub.png"} alt="linkedin" /></a></li>
      <li></li>
    </ul>    
  </header>
);

export default Header;