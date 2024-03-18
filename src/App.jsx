import React from "react";
// import "./styles.css";
import TutorialVideo from "./components/Tutorial/Tutorial";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <TutorialVideo embedId="W6NZfCO5SIk" />
    </div>
  );
}