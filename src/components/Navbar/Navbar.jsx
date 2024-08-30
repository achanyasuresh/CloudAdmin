// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/add-event">Add Event</Link>
        <Link to="/view-submissions">View Submissions</Link>
        <Link to="/student-list">Student List</Link>
      </div>
     
    </nav>
  );
};

export default Navbar;
