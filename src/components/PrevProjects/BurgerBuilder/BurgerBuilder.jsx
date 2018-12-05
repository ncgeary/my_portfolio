import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import './BurgerBuilder.css';
import Aux from '../../../hoc/Aux1/Aux1';


class BurgerBuilder extends Component{
  render(){
    return (
      <Aux>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Burger Builder</h5>

            <h6 className="card-subtitle mb-2 text-muted"><strong>Personal Project</strong></h6>
            <h6 className="card-subtitle mb-2 text-muted">Programs: React.js, JavaScript(ES6), HTML5, & CSS3</h6>

            <p className="card-text">...</p>

            <a href="https://github.com/ncgeary/burger_builder" target="_blank" className="card-link">Source Code</a>
            <a href="#" target="_blank" className="card-link">More Information</a>
          </div>
        </div>


      </Aux>
    );
  }
}

export default BurgerBuilder
