import React from 'react';
import './Faculty.css';
import HOD from '../../assets/images/HOD.jpeg';
import Prof from '../../assets/images/AP.jpeg';
import Prof1 from '../../assets/images/JP.jpeg';
import Prof2 from '../../assets/images/Kishor.jpeg';

export default function Faculty() {
  const facultyMembers = [
    { img: HOD, name: "Somshekhar Aland", position: "Head of the Department" },
    { img: Prof, name: "Aarti Patel", position: "Asst. Professor" },
    { img: Prof1, name: "Jagdish Patil", position: "Asst. Professor" },
    { img: Prof2, name: "Kishor Chavan", position: "Asst. Professor" }
  ];

  return (
    <section id="faculty" className="faculty-section">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Faculty</h2>
          <div className="underline"></div>
          <p>Highly qualified professionals dedicated to excellence in education.</p>
        </div>

        <div className="faculty-grid">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <img src={faculty.img} alt={faculty.name} className="faculty-img" />
              <div className="faculty-info">
                <h4>{faculty.name}</h4>
                <span>{faculty.position}</span>
                <p>Passionate about delivering quality education and mentoring students.</p>
                <div className="social-icons">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-whatsapp"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
