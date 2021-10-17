import React from "react";
import { Link } from "react-router-dom";
import logo from "./asset/logosmall.png";
class NavBar extends React.Component {
  render() {
    return (
      <div className="flex justify-between">
        <a href="https://github.com">
          <img className="m-6" src={logo} alt="logo" width="40%"></img>
        </a>
        <div className="flex p-6">
          <Link className="p-4" to="/">
            HOME
          </Link>
          <Link className="p-4" to="/About">
            ABOUT
          </Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
