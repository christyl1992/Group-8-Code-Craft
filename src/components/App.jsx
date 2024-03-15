import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import CssCourse from './CssCourse/CssCourse'; // Import CssCourse component
import HomePage from './Home/Home';
import Footer from './Footer/Footer';
import Quiz from '../components/Quiz';
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
          <Route path="/css" element={<CssCourse />} />
          <Route path="/html" element={<Quiz />} />
          <Route path="/description" element={<Description />} /> {/* Example route for Description component */}
          <Route path="/progress" element={<Progress />} /> {/* Example route for Progress component */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
