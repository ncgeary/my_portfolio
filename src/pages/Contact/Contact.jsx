import React, {Component} from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Jumbotron from '../../components/Jumbotron/Jumbotron.jsx';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactMain from '../../components/ContactMain/ContactMain.jsx';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <Navbar/>

          <Jumbotron title="Contact Me" subtitle="Let's Talk"/>


          <ContactMain/>

          <ContactForm/>



          <Footer/>
        </div>
      </div>
    );
  }
}

export default Contact
