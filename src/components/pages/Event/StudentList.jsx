// src/components/pages/StudentList.js
import React from 'react';
import './Event.css'
import Navbar from '../../Navbar/Navbar';


const StudentList = () => {
  return (
    <><div>
          <Navbar />
      </div><div className="admin-page">
              <h1>Student List</h1>
              {/* Logic to display student list will go here */}
          </div></>
  );
};

export default StudentList;
