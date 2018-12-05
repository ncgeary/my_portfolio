import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import './Tasklist.css';
import Aux from '../../../hoc/Aux1/Aux1';


class Tasklist extends Component{
  render(){
    return (
      <Aux>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Task List Creater</h5>

            <h6 className="card-subtitle mb-2 text-muted">Programs: HTML5, Bootstrap4, CSS3, and JavaScript</h6>

            <p className="card-text">...</p>

            <a href="/" className="card-link" target="_blank">More Information</a>
            <a href="https://github.com/ncgeary/TaskList" target="_blank" className="card-link">Source Code</a>
            <a href="https://ncgeary.github.io/TaskList/" target="_blank" className="card-link">Live Demo</a>
          </div>
        </div>



      </Aux>
    );
  }
}

export default Tasklist
