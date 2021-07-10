import React, { Component } from "react";

function Footer() {
  //let residentData = this.props.residentData;
  return (
    <footer className="footer">
      {/* <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div> */}
      <div className="footer-icon">
        <div className="social">
          <a href="https://www.facebook.com/"  target="_blank">
            <i class="fab fa-facebook-square fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/" target= "_blank">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://www.github.com/" target= "_blank">
            <i class="fab fa-github-square fa-3x"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i class="fab fa-twitter fa-3x"></i>
          </a>
        </div>
      </div>
      <p class="copyright">Gardner Property Manager © 2021</p>
      <ul class="contributors">
        <li>Contributors:</li>
        <li><a href="#">Dwayne Piao</a></li>
        <li><a href="#">Taylor Leong</a></li>
        <li><a href="#">Louis Falla</a></li>
        <li><a href="#">Kenneth Boyer</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
