import React, {Component} from 'react';
import './Jumbotron.css';
import './bgc.js';

class Jumbotron extends Component{
  render(){
    return(

        <div className="container">
          {/*<h1 className="display-4">Nick Geary</h1>
          <p className="lead">Engineer | Developer | Problem Solver</p>
          <div className="social">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/nicholasgeary/" rel='noreferrer noopener' target="_blank"><i className="fab fa-linkedin-in"></i>  Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/ncgeary" rel='noreferrer noopener' target="_blank"><i className="fab fa-github"></i>  Github</a>
              </li>
            </ul>*/}
          <div id="gradient" />
          <div className="header">
            <h1><span>Nicholas Geary Portfolio</span></h1>
            <h5>Engineer | Developer | Problem Solver</h5>



            <div className="social">

                <a href="https://www.linkedin.com/in/nicholasgeary/" rel='noreferrer noopener' target="_blank"><i className="fab fa-linkedin-in"></i>  Linkedin |</a>

                <a href="https://github.com/ncgeary" rel='noreferrer noopener' target="_blank"> <i className="fab fa-github"></i>  Github |</a>

                <a href="https://codepen.io/NickGearyEng/" rel='noreferrer noopener' target="_blank"> <i className="fab fa-codepen"></i>  Codepen</a>

            </div>

          </div>



          </div>


    );
  }

}

export default Jumbotron
