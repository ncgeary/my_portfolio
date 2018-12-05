import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AIMDashboard.css';
import Aux from '../../../hoc/Aux1/Aux1';


class AIMDashboard extends Component{
  render(){
    return (
      <Aux>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">AIM Coaching Dashboard</h5>

            <h6 className="card-subtitle mb-2 text-muted">Company: HealthNow BlueCross BlueSheild</h6>
            <h6 className="card-subtitle mb-2 text-muted">Programs: Tableau & Excel</h6>

            <p className="card-text">...</p>

            <a href="#" target="_blank" className="card-link">More Information</a>
          </div>
        </div>


      </Aux>
    );
  }
}

export default AIMDashboard
