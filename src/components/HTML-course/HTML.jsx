import React from "react"; // Importing React library to use JSX
// import { ProjectList } from "./"; // Importing ProjectList from a file
import ProjectItem from "./ProjectItem"; // Importing ProjectItem component
import "./HTML.css"; // Importing CSS styles for the Projects component

function HtmlApp() { // Defining a functional component called Projects
  return (
    <div className="project"> {/* Creating a div element with class name 'project' */}
      <h1 className="projectTitle">My projects</h1> {/* Creating an h1 element with class name 'projectTitle' */}
      <div className="projectList"> {/* Creating a div element with class name 'projectList' */}
        {ProjectList.map((projectItem, key) => { // Mapping through ProjectList array
          return (
            <ProjectItem
              key={key} // Assigning a unique key to each ProjectItem component
              image={projectItem.image} // Passing image prop to ProjectItem component
              name={projectItem.name} // Passing name prop to ProjectItem component
              description={projectItem.price} // Passing description prop to ProjectItem component
            />
          );
        })}
      </div>
    </div>
  );
}

export default HtmlApp; // Exporting the Projects component as default
