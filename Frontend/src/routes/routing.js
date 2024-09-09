import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Footer from "../components/Footer";
import Faculty from "../pages/Faculty/Faculty";

export default function Routing() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/faculty" element={<Faculty />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
