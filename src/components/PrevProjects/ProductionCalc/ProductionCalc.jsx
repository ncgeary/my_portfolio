import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProductionCalc.css';
import Aux from '../../../hoc/Aux1/Aux1';


class ProductionCalc extends Component{
  render(){
    return (
      <Aux>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Daily Production Calculator</h5>

            <h6 className="card-subtitle mb-2 text-muted"><strong>Company: Sefar Inc.</strong></h6>
            <h6 className="card-subtitle mb-2 text-muted">Programs: Excel, Visual Basic Application</h6>

            <p className="card-text">...</p>

            <a href="/" target="_blank" className="card-link">More Information</a>
          </div>
        </div>



      </Aux>
    );
  }
}

export default ProductionCalc
