import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactimg from "../../assets/contact.png";
import { Link, Element } from "react-scroll";
function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logoImage" />
      <div className="Options">
        <Link className="item">Home</Link>
        <Link className="item">About</Link>
        <Link className="item">Portfolio</Link>
        <Link className="item">Client</Link>
      </div>
      <button className="nav_btn">
        <img className="nav_btn_img" src={contactimg} alt="" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
