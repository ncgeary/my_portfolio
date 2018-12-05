import React, {Component} from 'react';
import ProductionCalc from './ProductionCalc/ProductionCalc';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import AIMDashboard from './AIMDashboard/AIMDashboard';
import Tasklist from './TaskList/Tasklist';
import Aux from '../../hoc/Aux1/Aux1';


class PrevProjects extends Component{
  render(){
    return(
      <Aux>
        <h1>
          Projects
        </h1>

        <div className="row">
          <div className="col-sm">
            <ProductionCalc/>

          </div>
          <div className="col-sm">
            <BurgerBuilder/>

          </div>
          <div className="col-sm">
            <AIMDashboard/>

          </div>

          <div className="col-sm">
            <Tasklist/>

          </div>


        </div>

      </Aux>
    );
  }

}

export default PrevProjects
