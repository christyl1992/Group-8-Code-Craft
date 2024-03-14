import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import CssCourse from './CssCourse/CssCourse';
import HomePage from './Home/Home';
// import Projects from './Project/Projects';
import Footer from './Footer/Footer';
import '../App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Uncomment the following lines if you have components for About and Projects */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
