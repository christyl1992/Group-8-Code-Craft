import React from 'react';
import TutorialVideo from "./components/Tutorial/Tutorial";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1>Youtube Tutorials</h1>
      <div className="row">
        <div className="col-md-4">
          <TutorialVideo embedId="W6NZfCO5SIk" />
        </div>
        <div className="col-md-4">
          <TutorialVideo embedId="ieTHC78giGQ" />
        </div>
        <div className="col-md-4">
          <TutorialVideo embedId="qz0aGYrrlhU" />
        </div>
      </div>
    </div>
  );
}

export default App;