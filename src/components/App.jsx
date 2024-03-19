import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import HomePage from './Home/Home';
import Footer from './Footer/Footer';
import ModulePage from './ModulePage/ModulePage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import HTML from './HTML-course/HTML'
import CheatSheets from './CheatSheets/CheatSheets';
import JavaScript from './JavaScript/JavaScript';
import CodeSection from './CodeSection/CodeSection';
import Quiz from './Quiz/Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './Description.jsx';

function App() {
  return (
    <div>
      <h1>Hello Team!</h1>
      <Router>
        <Routes> 
          <Route path="/html" element={<Description searchTerm="HTML" />} />
          <Route path="/css" element={<Description searchTerm="CSS" />} />
          <Route path="/javascript" element={<Description searchTerm="JavaScript" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
