import React from 'react';
import classes from './DevSkills.css';


const devSkills = (props) => (
  <div className="container {classes.DSkills}">
    <div className="row">
      <div className="col-sm">
        <strong>FrontEnd</strong>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6)</li>
          </ul>
      </div>
      <div className="col-sm">
        <strong>Frameworks</strong>
        <ul>
          <li>Bootstrap4</li>
          <li>React.js, Redux, and Router</li>
        </ul>
      </div>
      <div className="col-sm">
        <strong>BackEnd</strong>
        <ul>
          <li>Python</li>
          <li>php</li>
          <li>R</li>
        </ul>
      </div>
    </div>
  </div>


);
export default devSkills
