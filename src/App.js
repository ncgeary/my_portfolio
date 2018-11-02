import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/project" component={Project}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
