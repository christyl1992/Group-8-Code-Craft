// import React from "react";
// import "./Tutorial.css";
// import TutorialVideo from "./Tutorial";


// function App() {

//   return <h1>Hello Team!</h1>;
//   <TutorialVideo/>

// }

// export default App

import React from "react";
import "./styles.css";
import TutorialVideo from "./Tutorial.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <TutorialVideo embedId="W6NZfCO5SIk" />
    </div>
  );
}