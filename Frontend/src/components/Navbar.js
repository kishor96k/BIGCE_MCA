/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import BIGCE from "../assets/images/bigcelogo.png";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 shadow-lg custom-navbar">
      <div className="container px-4">
        <div className="d-flex align-items-center">
          <img src={BIGCE} height={60} width={60} alt="BIGCE Logo" className="me-3" />
          <span className="navbar-brand mb-0 h1 text-uppercase fw-bold text-light">
            Bharat Ratna Indira Gandhi College of Engineering, Solapur
          </span>
        </div>

        <button
          className="navbar-toggler border-0 text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="lni lni-menu text-light fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/" onClick={() => closeNavbar()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/about" onClick={() => closeNavbar()}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/contact" onClick={() => closeNavbar()}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/blog" onClick={() => closeNavbar()}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/studentcorner" onClick={() => closeNavbar()}>
                Student Corner
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Function to close navbar on link click (for mobile)
const closeNavbar = () => {
  const navbar = document.getElementById("navbarNav");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};
