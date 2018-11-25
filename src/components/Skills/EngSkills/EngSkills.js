import React from 'react';
import classes from './EngSkills.css';


const EngSkills = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-sm">
        <strong>Design</strong>
          <ul>
            <li>AutoCAD (2D & Inventor)</li>
            <li>Creo Parametric / Pro-E,</li>
            <li>Solidworks</li>
          </ul>
      </div>
      <div className="col-sm">
        <strong>Data Analysis</strong>
        <ul>
          <li>Microsoft Excel (VBA Macros & Pivot Table)</li>
          <li>Tableau</li>
          <li>MiniTab</li>
          <li>Python</li>
          <li>R (programing language)</li>
        </ul>
      </div>
      <div className="col-sm">
        <strong>Other Programs</strong>
        <ul>
          <li>Rockwell Areana</li>
          <li>Microsoft Visio</li>
        </ul>
      </div>
    </div>
  </div>


);
export default EngSkills
