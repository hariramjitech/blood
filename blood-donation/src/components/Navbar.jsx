import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <div className="logo">Blood Donation</div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register as Donor</Link></li>
        <li><Link to="/request">Request Blood</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;

