/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import BIGCE from "../assets/images/bigcelogo.png";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg py-4 py-lg-0 shadow">
        <div class="container px-4">
          <div className="image">
            <img src={BIGCE} height={(50)} width={(50)} alt="" />
          </div>

          <label className="navbar-brand mt-5" >
            Bharat Ratna Indira Gandhi College of Engineering, Solapur
          </label>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#top-navbar"
            aria-controls="top-navbar"
          >
            <i class="lni lni-grid-alt"></i>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="top-navbar"
            aria-labelledby="top-navbarLabel"
          >
            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#top-navbar"
              aria-controls="top-navbar"
            >
              <div class="d-flex justify-content-between p-3">
                <img src="logo.png" alt="" />
                <i class="lni lni-cross-circle"></i>
              </div>
            </button>
            <ul class="navbar-nav ms-lg-auto p-4 p-lg-0">
              <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item px-3 px-lg-0 py-1 py-lg-4 nav-item">
                <Link className="nav-link" to="/registration">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
