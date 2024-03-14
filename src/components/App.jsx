import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import HomePage from './Home/Home';
import Projects from './Project/Projects';
import Footer from './Footer/Footer';
import '../App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Assuming you have a component named Home */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> {/* Assuming you have a component named Project */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;