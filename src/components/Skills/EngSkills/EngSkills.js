import React from 'react';
import './EngSkills.css';
import Aux from '../../../hoc/Aux1/Aux1';


const EngSkills = (props) => (
<Aux>
  <h3>
    Engineering Skills
  </h3>
  <div className="container">
      <div className="row">
        <div className="col-sm">

          <h5><strong>Design</strong></h5>

            <ul className="skills">
              <li>AutoCAD (2D & Inventor)</li>
              <li>Creo Parametric / Pro-E,</li>
              <li>Solidworks</li>
            </ul>

        </div>
        <div className="col-sm">

          <h5><strong>Data Analysis</strong></h5>

          <ul className="skills">
            <li>Microsoft Excel (VBA Macros & Pivot Table)</li>
            <li>Tableau</li>
            <li>MiniTab</li>
            <li>Python</li>
            <li>R (programing language)</li>
          </ul>

        </div>
        <div className="col-sm">

          <h5><strong>Other Programs</strong></h5>

          <ul className="skills">
            <li>Rockwell Areana</li>
            <li>Microsoft Visio</li>
          </ul>

        </div>
      </div>
    </div>
</Aux>



);
export default EngSkills
