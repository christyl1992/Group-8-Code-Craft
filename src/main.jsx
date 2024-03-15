import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Use createRoot instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
