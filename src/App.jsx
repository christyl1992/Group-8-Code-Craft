import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Quiz from './components/Quiz/Quiz'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import HtmlApp from './components/HTML-course/HTML';
import HomePage from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Make sure to define the Home component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} /> 
         
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
