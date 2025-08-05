import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactimg from "../../assets/contact.png";
import { Link, Element } from "react-scroll";
import menu from '../../assets/menu.png'
function Navbar() {
  const[showMenu , setShowMenu] = useState(false)

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logoImage" />
      <div className="Options">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="item"
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="ContactPage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          Client
        </Link>
      </div>
      <button
        className="nav_btn"
        onClick={() => {
          // console.log("Clicked")
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img className="nav_btn_img" src={contactimg} alt="" />
        Contact Me
      </button>

      <img src={menu}  className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display:showMenu ?'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="Listitem"
          onClick={()=>setShowMenu(false)}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="Listitem"
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="Listitem"
          onClick={()=>setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="ContactPage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="Listitem"
          onClick={()=>setShowMenu(false)}
        >
          Client
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="Listitem"
          onClick={()=>setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
