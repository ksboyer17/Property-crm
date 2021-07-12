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
          <a href="https://www.facebook.com/"  target="_blank">
            <i className="fab fa-facebook-square fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/" target= "_blank">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://www.github.com/" target= "_blank">
            <i className="fab fa-github-square fa-3x"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <i className="fab fa-twitter fa-3x"></i>
          </a>
        </div>
      </div>
      <p className="copyright">Gardner Property Manager © 2021 All Rights Reserved.</p>
      <ul className="contributors">
        <li>Contributors:</li>
        <li><a href="https://github.com/sj212131" target= "_blank">Dwayne Piao</a></li>
        <li><a href="https://github.com/tjl2125" target= "_blank">Taylor Leong</a></li>
        <li><a href="https://github.com/chronoslou" target= "_blank">Louis Falla</a></li>
        <li><a href="https://github.com/ksboyer17" target= "_blank">Kenneth Boyer</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
