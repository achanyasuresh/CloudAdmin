import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import AddEvent from './components/pages/Event/AddEvent';
import StudentList from './components/pages/Event/StudentList';
import ViewSubmissions from './components/pages/Event/ViewSubmissions';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Login page */}
          <Route path="/" element={<Login />} />
          {/* Route for the Home page */}
          <Route path="/home" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/view-submissions" element={<ViewSubmissions />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
