// src/components/pages/AddEvent.js
import React, { useState } from 'react';
import './Event.css'
import Navbar from '../../Navbar/Navbar';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleAddEvent = () => {
    // Logic to add event goes here
    console.log(`Event Added: ${eventName}, ${eventDescription}`);
  };

  return (
   <div>
       <Navbar /> 
  
    <div className="admin-page">
      <h1>Add Event</h1>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        className="event-input"
      />
      <textarea
        placeholder="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        className="event-textarea"
      />
      <button onClick={handleAddEvent} className="add-event-button">Add Event</button>
    </div>
    </div>
  );
};

export default AddEvent;
