import React from 'react';
import '../About/About.css'; // Ensure the CSS file is properly linked
import teacher from '../../assets/images/portrait_one.jpg'; // Image if needed

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <h1>About Our Department</h1>
      </header>

      {/* Vision and Mission Section */}
      <div className="container my-5">
        <section className="vision-mission">
          <h2 className="section-title">"Our Vision"</h2>
          <p className="vision">
            <em>“To be recognized as a department with a globally competent research environment, 
            empowering computer professionals with a strong sense of service and human values at the core.”</em>
          </p>

          <h2 className="section-title">"Our Mission"</h2>
          <ul className="mission-list">
            <li>To provide a conducive environment to achieve excellence in teaching-learning, research, and development.</li>
            <li>To bridge the gap between industry and academia by framing curricula and syllabi based on industrial and societal needs.</li>
          </ul>
        </section>

        {/* MCA Program Section */}
        <section className="mca-program">
          <h2 className="section-title">About the MCA Program</h2>
          <p>
            The <strong>Master of Computer Applications (MCA)</strong> is a professional postgraduate program designed to 
            prepare students for advanced careers in the field of computer science and application development. 
            <br></br>This program blends theoretical knowledge with practical skills, focusing on:
          </p>

          <ul className="program-list">
            <li><strong>Software Development & Programming Languages</strong></li>
            <li><strong>Web & Mobile Application Development</strong></li>
            <li><strong>Database Management & Networking</strong></li>
            <li><strong>Cybersecurity & System Architecture</strong></li>
          </ul>

          <p>
            The MCA program at <strong>Bharat Ratna Indira Gandhi College of Engineering</strong> offers a holistic 
            education that combines academic excellence, technical expertise, and industry exposure, 
            equipping students with the tools needed to excel in today’s tech-driven world.
          </p>
        </section>
      </div>
    </div>
  );
}
