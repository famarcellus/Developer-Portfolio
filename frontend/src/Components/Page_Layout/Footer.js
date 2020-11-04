import React from "react";


function Footer() {
    return (
        <footer id="footer-section" class="page-footer grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text" class="title">Contact Me</h5>
                <p class="grey-text text-lighten-4 description">I'm looking for Front End Developer roles that present challenges and offer opportunities for professional growth.</p>
              </div>
              <div class="col l4 offset-l2 s12 contact-methods">
                <ul>
                  <li><h6 class="grey-text text-lighten-3">Email</h6></li>
                  <li><a class="waves-effect waves-light btn blue-grey lighten-4" href="https://github.com/famarcellus"><img src="/images/github.png"></img></a></li>
                  <li><a class="waves-effect waves-light btn blue-grey lighten-4 transparent" href="https://www.linkedin.com/in/fabio-marcellus-a7b324196/"><img src="/images/linkedin.png"></img></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Fabio Marcellus
            </div>
          </div>
        </footer>
    )
}


export default Footer;