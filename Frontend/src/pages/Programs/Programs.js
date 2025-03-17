import React from 'react';
import './Programs.css';

const Programs = () => {
  const events = [
    {
      title: "MCA Freshers' Party - Grand Welcome",
      date: "March 15, 2024",
      description:
        "The event kicked off with a warm welcome speech, setting the tone for an exciting evening.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Fun Games & Activities",
      date: "March 15, 2024",
      description:
        "Students participated in engaging games and activities, fostering a spirit of teamwork and friendship.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Mr. Fresher & Miss Fresher",
      date: "March 15, 2024",
      description:
        "The most awaited moment of the event – crowning Mr. Fresher and Miss Fresher, recognizing outstanding newcomers.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Senior-Junior Interaction",
      date: "March 15, 2024",
      description:
        "A special session where seniors shared their experiences and guided the newcomers.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Dinner & DJ Night",
      date: "March 15, 2024",
      description:
        "The evening concluded with a delicious dinner followed by a lively DJ night, making it a night to remember!",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
    {
      title: "Group Photo & Memories",
      date: "March 15, 2024",
      description:
        "The event ended with a group photo session, capturing memories to cherish forever.",
      image: "https://via.placeholder.com/400", // Replace with actual image URL
    },
  ];

  return (
    <div className="container mt-5">
      <h4 className="text-center btn btn-primary">Programs</h4>
      <div className="row mt-4">
        {events.map((event, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm mb-4">
              <img src={event.image} className="card-img-top" alt={event.title} />
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
