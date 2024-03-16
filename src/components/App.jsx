import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import HomePage from './Home/Home';
import Footer from './Footer/Footer';
import ModulePage from './ModulePage/ModulePage';
import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulePage />} /> {/* Changed path to "/modules" */}
          {/* Add other routes as necessary */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
