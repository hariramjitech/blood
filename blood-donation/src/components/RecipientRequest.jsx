import React, { useState } from 'react';
import './Ralert.css'

const RecipientRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    contact: '',
    location: '',
    requestDate: '',
  });

  const [showAlert, setShowAlert] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Blood</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Blood Type Needed:</label>
      <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} />
      <label>Contact:</label>
      <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} />
      <label>Date of Request:</label>
      <input type="date" name="requestDate" value={formData.requestDate} onChange={handleChange} />
      <button type="submit">Request</button>

      {showAlert && (
        <div className="alert">
          Request submitted by {formData.name}
        </div>
      )}
    </form>
  );
};

export default RecipientRequest;
