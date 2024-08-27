import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Login page */}
          <Route path="/" element={<Login />} />
          {/* Route for the Home page */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
