import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProductionCalc.css';
import Aux from '../../../hoc/Aux1/Aux1';
//import Scrollchor from 'react-scrollchor';

class ProductionCalc extends Component{
  render(){
    return (
      <Aux>
        <div className="header">
          Daily Production Calculator
        </div>

        <div className="projectDescription">
          <p>Company: Sefar Inc. </p>
          <p>Programs: Excel, Visual Basic Application  </p>
        </div>

        <div className="projectDesc">
          <p></p>

        </div>


      </Aux>
    );
  }
}

export default ProductionCalc
