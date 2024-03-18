import React from 'react';
import CodeSection from './components/CodeSection/CodeSection';

// import ParentComponent from './components/CodeSection/CodeSection';

function App() {
  const someCode = '// This is a code snippet'; // Replace with actual code

  return (
    <div>
      <CodeSection /> {/* Render CodeSection component */}
     
    </div>
  );
}

export default App;

// import CodeSection from './components/CodeSection/CodeSection'
// function App() {

//   return <CodeSection/>
// }

// export default App