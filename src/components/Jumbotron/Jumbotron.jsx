import React, {Component} from 'react';
import './Jumbotron.css';

class Jumbotron extends Component{
  render(){
    return(
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Nick Geary</h1>
          <p className="lead">Engineer | Developer | Problem Solver</p>
          <div className="social">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/nicholasgeary/" rel='noreferrer noopener' target="_blank"><i className="fab fa-linkedin-in"></i>  Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/ncgeary" rel='noreferrer noopener' target="_blank"><i className="fab fa-github"></i>  Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Jumbotron
