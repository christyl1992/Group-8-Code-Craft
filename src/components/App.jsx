import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import CssCourse from './CssCourse/CssCourse'; // Import CssCourse component
import HomePage from './Home/Home';
// import Projects from './Project/Projects';
import Footer from './Footer/Footer';
import Quiz from '../components/Quiz'
import Description from './Description/Description';
import Progress from './Progress/Progress';
import '../App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/css" element={<CssCourse />} /> {/* Define route for CssCourse */}
          {/* Uncomment the following lines if you have components for About and Projects */}
          <Route path="/html" element={<Quiz />} /> 
          <Route path="/" element={<Description />} />
          <Route path="/" element={<Progress />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
