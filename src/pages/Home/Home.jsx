import React, {Component} from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Jumbotron from '../../components/Jumbotron/Jumbotron.jsx';
import Skills from '../../components/Skills/Skills.jsx';
import PrevProjects from '../../components/PrevProjects/PrevProjects.jsx';
import MyHistory from '../../components/History/History.jsx';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <Navbar/>

          <Jumbotron title="Nick Geary" subtitle="Engineer | Developer | Problem Solver"/>

          <Skills id="Skills"/>

          <PrevProjects id="Project"/>

          <MyHistory id="History"/>

          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home
