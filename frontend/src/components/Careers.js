import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Software Engineer',
      location: 'Remote',
      description: 'Develop and maintain web applications using modern frameworks.',
    },
    {
      title: 'Marketing Specialist',
      location: 'New York, NY',
      description: 'Plan and execute marketing campaigns to enhance brand awareness.',
    },
    {
      title: 'Graphic Designer',
      location: 'Los Angeles, CA',
      description: 'Design creative assets for both digital and print media.',
    },
  ];

  return (
    <div className="careers-container">
      <h1>Careers</h1>
      <p>Join our team and make a difference!</p>
      <div className="job-list">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
