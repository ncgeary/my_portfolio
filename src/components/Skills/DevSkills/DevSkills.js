import React from 'react';
import './DevSkills.css';
import Aux from '../../../hoc/Aux1/Aux1';


const devSkills = (props) => (
<Aux>
  <h3>
    Developer Skills
  </h3>

  <div className="container {classes.DSkills}">
    <div className="row">
      <div className="col-sm">

        <h5><strong>FrontEnd</strong></h5>

          <ul className="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6)</li>
          </ul>
      </div>

      <div className="col-sm">

        <h5><strong>Frameworks/Library</strong></h5>

        <ul className="skills">
          <li>Bootstrap4</li>
          <li>React.js & Router</li>
          <li>NumPy & Pandas</li>
        </ul>
      </div>

      <div className="col-sm">

        <h5><strong>BackEnd</strong></h5>

        <ul className="skills">
          <li>Python</li>
          <li>php</li>
          <li>R</li>
          <li>Firebase</li>
        </ul>

      </div>
    </div>
  </div>


</Aux>



);
export default devSkills
