import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="container text-center">
            <h1 className="hero-title">Master of Computer Applications</h1>
            <p className="hero-subtitle">Providing quality education since 1990</p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* News */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-header text-center">Latest News</div>
                <div className="card-body text-center">
                  <p>The new batch of MCA 2024-25 starts on 9th Sep 2024.</p>
                  <Link to="/news" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            {/* Academic Programs */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-header text-center">Academic Programs</div>
                <div className="card-body text-center">
                  <p>Explore our wide range of academic programs and find the right fit for you.</p>
                  <Link to="/programs" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>

            {/* Student Life */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-header text-center">Student Life</div>
                <div className="card-body text-center">
                  <p>Discover the vibrant student life and activities we offer at our college.</p>
                  <Link to="/studentslife" className="btn btn-primary">Explore</Link>
                </div>
              </div>
            </div>

            {/* Admissions */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-header text-center">Admissions</div>
                <div className="card-body text-center">
                  <p>Find out about the admissions process and how to apply to our college.</p>
                  <Link to="/admissions" className="btn btn-primary">Apply Now</Link>
                </div>
              </div>
            </div>

            {/* Faculty */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-header text-center">Faculty</div>
                <div className="card-body text-center">
                  <p>Meet our dedicated and experienced faculty members.</p>
                  <Link to="/faculty" className="btn btn-primary">Meet Our Faculty</Link>
                </div>
              </div>
            </div>

            {/* Alumni */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-header text-center">Alumni</div>
                <div className="card-body text-center">
                  <p>Connect with our alumni network and see their achievements.</p>
                  <Link to="/alumni" className="btn btn-primary">Connect</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
