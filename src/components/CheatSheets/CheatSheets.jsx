import './CheatSheet.css';

const CheatSheets = () => {
  return (
    <div className="cs-container">
      <h1>Cheat Sheets</h1>
      <h3>Download CheatSheet:</h3>
      <a href="html.pdf" target="_blank" rel="noopener noreferrer">HTML</a>
      <a href="css.pdf" target="_blank" rel="noopener noreferrer">CSS</a>
      <a href="javascript.pdf" target="_blank" rel="noopener noreferrer">JS</a>
    </div>
  );
};

export default CheatSheets;