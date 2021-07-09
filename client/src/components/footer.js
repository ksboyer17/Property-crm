import React, { Component } from "react";
function Footer() {
  
    //let residentData = this.props.residentData;
    return (
      <footer className = "footer">
        {/* <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div> */}
        <div className="social columns">
          <a href="#" class="column"><i class="fab fa-facebook-square fa-3x fa-fw"></i></a>
          <a href="#" class="column"><i class="fab fa-linkedin fa-3x"></i></a></div>
          <a href="#" class="column"><i class="fab fa-github-square fa-3x"></i></a>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                {/* <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li> */}
            </ul>
            <p class="copyright">Property-CRM © 2021</p>
            <ul class="contributors"></ul>
                <li>Dwayne Piao</li>
                <li>Taylor Leong</li>
                <li>Louis Falla</li>
                <li>Kenneth Boyer </li>
      </footer>
    );
  
}

export default Footer; 