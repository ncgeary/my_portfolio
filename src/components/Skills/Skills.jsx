import React, {Component} from 'react';
import EngSkills from './EngSkills/EngSkills';
import DevSkills from './DevSkills/DevSkills';
import Aux from '../../hoc/Aux1/Aux1';


class Skills extends Component{

  render(){
    return(
      <Aux>
        <h1>
          Skills
        </h1>

        <p>
          <a className="btn btn-primary" data-toggle="collapse" href="#DevSkills" role="button" aria-expanded="false" aria-controls="collapseExample">
            DevSkills
          </a>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#EngSkills" aria-expanded="true" aria-controls="collapseExample">
            EngSkills
          </button>
        </p>

        <div className="collapse" id="EngSkills">
          <div className="card card-body">
            <EngSkills/>
          </div>
        </div>

        <div  id="DevSkills">
          <div className="card card-body">
            <DevSkills/>
          </div>
        </div>



      </Aux>

    );
  }

}

export default Skills
