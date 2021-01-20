import React, { useState } from "react";
import instagram from "./ChristabossGRLogo-rembg.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaBars  } from 'react-icons/fa'
/*import { faBars } from "@fortawesome/free-solid-svg-icons";*/
/*import { faTimes } from "@fortawesome/free-solid-svg-icons";*/

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <div className="Navbar-content" data-spy="affix" data-offset-top="197">
        <nav className="navbar navbar-expand-lg navbar bg-white">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={instagram} alt="" />
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <i
                className={
                  click ? (
                    < FaBars />
                  ) : (
                    <FontAwesomeIcon icon={faHome} />
                  )
                }
              />
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
