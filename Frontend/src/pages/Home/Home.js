/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
// import student from '../../assets/images/lake-7301021_1280.jpg'
// import student2 from '../../assets/images/sunset-7708222_1280.jpg';
import './Home.css';


const Home = () => {
  return (
    <>

      <section className=''>

        {/* Hero Section */}
        <div className=" backimg jumbotron jumbotron-container text-center mt-n5">
          <div className="container">
            <h1 className="text-white">Master of Computer Applications</h1>
            <p className="text-white">Providing quality education since 1990</p>
          </div>
        </div>

        {/* Modules Section */}
        <div className="container mb-4">
          <div className="row">
            {/* Module 1: News */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Latest News
                </div>
                <div className="card-body">
                  <p className="card-text">The new batch of MCA 2024-25 is started at 9th sep 2024.</p>
                  <Link to="/news" className='btn btn-info' style={{ color: "#393f81" }}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* Module 2: Academic Programs */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Academic Programs
                </div>
                <div className="card-body">
                  <p className="card-text">Explore our wide range of academic programs and find the right fit for you.</p>
                  <Link to="/programs" className='btn btn-dark' style={{ color: "#393f81" }}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            {/* Module 3: Student Life */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Student Life
                </div>
                <div className="card-body">
                  <p className="card-text">Discover the vibrant student life and activities we offer at our college.</p>
                  <Link to="/studentslife" className='btn btn-danger' style={{ color: "#393f81" }}>
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {/* Module 4: Admissions */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Admissions
                </div>
                <div className="card-body">
                  <p className="card-text">Find out about the admissions process and how to apply to our college.</p>
                  <Link to="/admissions" className='btn btn-success' style={{ color: "#393f81" }}>
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
            {/* Module 5: Faculty */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Faculty
                </div>
                <div className="card-body">
                  <p className="card-text">Meet our dedicated and experienced faculty members.</p>
                  <Link className="nav-link" to="/faculty"> <a href="#" className="btn btn-primary">Meet Our Faculty</a></Link>
                </div>
              </div>
            </div>
            {/* Module 6: Alumni */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Alumni
                </div>
                <div className="card-body">
                  <p className="card-text">Connect with our alumni network and see their achievements.</p>
                  <Link to="/alumni" className='btn btn-secondary' style={{ color: "#393f81" }}>
                    Connect
                  </Link>
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
