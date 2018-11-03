import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Projects</Link>
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