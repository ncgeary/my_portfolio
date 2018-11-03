import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Jumbotron from '../../components/Jumbotron/Jumbotron.jsx';

class Project extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron title="Projects" subtitle=""/>

          <Navbar/>



          <Footer/>
        </div>
      </div>
    );
  }
}

export default Project
