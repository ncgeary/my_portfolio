import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron title="About Me" subtitle=""/>

          <Navbar/>



          <Footer/>
        </div>
      </div>
    );
  }
}

export default About
