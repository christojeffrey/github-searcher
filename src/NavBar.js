import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";
import logo from "./asset/logo.png";
class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <img src={logo} alt="logo" width="8%"></img>
        <div className="link">
          <Link to="/">HOME</Link>
        </div>
        <div className="link">
          <Link to="/RaQ">RAQ</Link>
        </div>
        <div className="link">
          <Link to="/About">ABOUT</Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
