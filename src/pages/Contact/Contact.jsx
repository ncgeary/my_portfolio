import React, {Component} from 'react';
import './Contact.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Jumbotron from '../../components/Jumbotron/Jumbotron.jsx';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <Navbar/>

          <Jumbotron title="Contact Me" subtitle="Let's Talk"/>
          <div className="header">
            <h1>Contact Me</h1>

          </div>


          <section id="contact">

                  <div className="row">
                      <div className="col-lg-12">
                          <form name="sentMessage" id="contactForm" noValidate>

                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <input type="text" className="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name."/>
                                          <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                          <input type="email" className="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address."/>
                                          <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                          <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                          <p className="help-block text-danger"></p>
                                      </div>

                                  </div>

                                  <div className="col-md-6">
                                      <div className="form-group">
                                          <textarea className="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                          <p className="help-block text-danger"></p>
                                      </div>
                                  </div>
                                  <div className="clearfix"></div>
                                  <div className="col-lg-12 text-center">
                                      <div id="success"></div>
                                      <button type="submit" className="btn btn-xl">Send Message</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>


          </section>



          <Footer/>
        </div>
      </div>
    );
  }
}

export default Contact
