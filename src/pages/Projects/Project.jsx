import React, {Component} from 'react';
import './Project.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Jumbotron from '../../components/Jumbotron/Jumbotron.jsx';

class Project extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar/>

          <Jumbotron title="Projects" subtitle=""/>





          <Footer/>
        </div>
      </div>
    );
  }
}

export default Project
