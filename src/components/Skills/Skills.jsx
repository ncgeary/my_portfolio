import React, {Component} from 'react';
import EngSkills from './EngSkills/EngSkills';
import DevSkills from './DevSkills/DevSkills';
import Aux from '../../hoc/Aux1/Aux1';


class Skills extends Component{
  render(){
    return(
      <Aux>
        <EngSkills/>
        <DevSkills/>
      </Aux>

    );
  }

}

export default Skills
