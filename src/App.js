import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Project from './pages/Projects/Project.jsx';
import Contact from './pages/Contact/Contact.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/project" component={Project}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
