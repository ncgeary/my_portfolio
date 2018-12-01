import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
//import Scrollchor from 'react-scrollchor';

class Navbar extends Component{
  render(){
    return (

    // <Navbar className="navbar-fixed-top">
    //   <Scrollchor to="/" className="nav-link">Home</Scrollchor>
    //
    //   <Scrollchor to="#Skills" className="nav-link">Skills</Scrollchor>
    //
    //   <Scrollchor to="#Project" className="nav-link">Projects</Scrollchor>
    //
    //   <Scrollchor to="#History" className="nav-link">History</Scrollchor>
    //
    //   <Scrollchor to="/Contact" className="nav-link">Contact Me</Scrollchor>
    // </Navbar>

      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <Link className="navbar-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">

            <li className="nav-item active">
              <Link className="nav-link" to="/Project">Projects</Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/Contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>


    );
  }
}

export default Navbar
