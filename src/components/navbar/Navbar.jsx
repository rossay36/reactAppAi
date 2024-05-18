import React, { useState } from "react";
import Contact from "../contact/Contact";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <h1>ROSSAY</h1>
        </div>
        <ul className={click ? "navbar__lists active" : "navbar__lists"}>
          <li>
            <Link className="navbar__list" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__list" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="navbar__list" to="/artical">
              Article
            </Link>
          </li>
          <li>
            <Link className="navbar__list" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar__list" to="/product">
              Product
            </Link>
          </li>
        </ul>
        <button className="navbar__hamburger" onClick={handleClick}>
          {click ? (
            <div className="span">
              <span></span> <span></span>
              <span></span>{" "}
            </div>
          ) : (
            <>
              {" "}
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
