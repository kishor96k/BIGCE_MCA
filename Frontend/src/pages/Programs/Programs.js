import React, { useState } from 'react';
import './Programs.css';
import groupphoto from '../../assets/freshersparty/Groupphoto.jpeg';
import guestphoto from '../../assets/freshersparty/Guestphoto.jpeg';
import technowinner from '../../assets/technofest/technowinner.png';
import technowguest from '../../assets/technofest/technoguest.png';
import projectshow from '../../assets/technofest/prjshowcase.png';
import showcaseone from '../../assets/technofest/showcaseone.jpg';

const Programs = () => {
  const [activeEvent, setActiveEvent] = useState('freshers');

  const freshersEvents = [
    {
      title: "MCA Freshers' Party - Grand Welcome",
      date: "September 19, 2023",
      description:
        "The event kicked off with a warm welcome speech, setting the tone for an exciting evening.",
      image: guestphoto,
    },
    {
      title: "Fun Games & Activities",
      date: "September 19, 2023",
      description:
        "Students participated in engaging games and activities, fostering a spirit of teamwork and friendship.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Mr. Fresher & Miss Fresher",
      date: "September 19, 2023",
      description:
        "The most awaited moment of the event – crowning Mr. Fresher and Miss Fresher, recognizing outstanding newcomers.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Group Photo & Memories",
      date: "September 19, 2023",
      description:
        "The event ended with a group photo session, capturing memories to cherish forever.",
      image: groupphoto,
    },
  ];

  const technofestEvents = [
    {
      title: "Technofest 2024-2025 - Poster Presentation",
      date: "February 28, 2025",
      description:
        "Students showcased their innovative ideas through poster presentations, demonstrating technical excellence.",
      image: showcaseone,
    },
    {
      title: "Tech Talks & Guest Lectures",
      date: "February 28, 2025",
      description:
        "Industry experts delivered insightful talks, guiding students on future technology trends.",
      image: technowguest,
    },
    {
      title: "Project Showcase",
      date: "February 28, 2025",
      description:
        "Participants displayed their projects, showcasing real-world applications of technology.",
      image: projectshow,
    },
    {
      title: "Prize Distribution & Closing Ceremony",
      date: "February 28, 2025",
      description:
        "The event concluded with prize distribution, appreciating the best presentations and innovations.",
      image: technowinner,
    },
  ];

  const selectedEvents = activeEvent === 'freshers' ? freshersEvents : technofestEvents;

  return (
    <div className="container mt-5 mb-5 p-4 border rounded shadow-sm">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-uppercase text-primary border-bottom pb-2">
          {activeEvent === 'freshers' ? "MCA I Freshers' Party 2023-2024" : "Technofest 2024-2025"}
        </h1>
        <div className="mt-3">
          <button
            className={`btn ${activeEvent === 'freshers' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
            onClick={() => setActiveEvent('freshers')}
          >
            Freshers' Party
          </button>
          <button
            className={`btn ${activeEvent === 'technofest' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveEvent('technofest')}
          >
            Technofest 2024-2025
          </button>
        </div>
      </div>

      <div className="row mt-4">
        {selectedEvents.map((event, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm mb-4">
              <img src={event.image} className="card-img-top fixed-image" alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text text-muted">{event.date}</p>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
