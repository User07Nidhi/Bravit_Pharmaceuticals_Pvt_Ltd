import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    'Software Engineer',
    'Marketing Specialist',
    'Graphic Designer',
    'Product Manager',
    'Sales Executive',
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: jobOpenings[0],
    resume: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    console.log(formData);
  };

  return (
    <div className="careers-container">
      <h1>Careers</h1>
      <p>Join our team and shape the future with us!</p>

      <form className="career-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Position:</label>
        <select name="position" value={formData.position} onChange={handleChange}>
          {jobOpenings.map((job, index) => (
            <option key={index} value={job}>{job}</option>
          ))}
        </select>

        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleFileChange} required />

        <label>Why do you want to join us?</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>

        <button type="submit" className="apply-button">Submit Application</button>
      </form>
    </div>
  );
};

export default Careers;
