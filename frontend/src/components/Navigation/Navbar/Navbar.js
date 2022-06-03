import React, { useState } from "react";
import instagram from "../../../assets/images/ChristabossGRLogo-rembg.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
/*import { faBars } from "@fortawesome/free-solid-svg-icons";*/
/*import { FaTimes } from "@fortawesome/free-solid-svg-icons";*/

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="Navbar-content">
        <nav className="navbar navbar-expand-lg navbar bg-white">
          <div className="navbar-brand">
            <img src={instagram} alt="" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? <FaBars /> : <FaTimes />} />
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  <FontAwesomeIcon icon={faHome} /> HOME
                </Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link" to="/services">
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}







export default Navbar;
