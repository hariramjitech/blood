
import React, { useState } from 'react';
import './Dalert.css'

const DonorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    contact: '',
    location: '',
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
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register as a Donor</h2>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Blood Type:</label>
        <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} />
        <label>Contact:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
        <button type="submit">Register</button>

      {showAlert && (
        <div className="alert">
          Thank you, {formData.name}! You are so kind.
        </div>
      )}
      </form>
    </>
  );
};

export default DonorRegistration;
