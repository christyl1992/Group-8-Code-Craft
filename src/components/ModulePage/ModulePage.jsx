import React from 'react';
import Progress from '../Progress/Progress';
import Tutorial from '../Tutorial/Tutorial';
import Quiz from '../Quiz/Quiz';
import CheatSheets from '../CheatSheets/CheatSheets';
import CodeSection from '../CodeSection/CodeSection';
import Description from '../Description/Description';
import HTML from '../HTML-course/HTML';
import CssCourse from '../CssCourse/CssCourse';
import JavaScript from '../JavaScript/JavaScript';

const ModulePage = () => {
  return (
    <div>
      {/* Include your imported components here */}
      <Progress />
      <Tutorial />
      <Quiz />
      <CheatSheets />
      <CodeSection />
      <Description />
      <HTML />
      <CssCourse />
      <JavaScript />
    </div>
  );
};

export default ModulePage;
