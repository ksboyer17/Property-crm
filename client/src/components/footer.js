import React from "react";

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
          <a href="#">
            <i className="fab fa-facebook-square fa-3x"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="#">
            <i className="fab fa-github-square fa-3x"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-3x"></i>
          </a>
        </div>
      </div>
      <p className="copyright">Bleecker Street © 2021</p>
      <ul className="contributors">
        <li>Contributors:</li>
        <li>Dwayne Piao</li>
        <li>Taylor Leong</li>
        <li>Louis Falla</li>
        <li>Kenneth Boyer </li>
      </ul>
    </footer>
  );
}

export default Footer;
