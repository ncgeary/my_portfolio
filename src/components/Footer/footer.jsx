import React, {Component} from 'react';

import './footer.css';

class Footer extends Component{
  render(){
    return(

      <footer className="footer text-muted">

          <span>
            {new Date().getFullYear()} Nicholas Geary Portfolio
          </span>

          <br />

          <span>
            Created using <i className="fab fa-react"></i> ReactJS & Bootstrap4
          </span>

          <br />

          <span>
            Find the Source Code for this project and other projects on my   <a href="https://github.com/ncgeary/my_portfolio" rel='noreferrer noopener' target="_blank">Github <i className="fab fa-github"></i></a>
          </span>


    </footer>



    );
  }
}

export default Footer
