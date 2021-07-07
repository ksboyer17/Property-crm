import React, { Component } from "react";
// import "../style/header.css"; 
export default class Header extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <React.Fragment>
        <header id="home navbar is-fixed-top is-spaced ">
        <h1>Welcome to Property-CRM!</h1>
          <nav id="nav-wrap" className= "navbar-menu">
            <ul id="nav" className="navbar-start">
              <li className="current">
                
                <a className="smoothscroll navbar-item" href="home">
                <i class="fas fa-home"></i>
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll navbar-item" href="PMDash">
                  PMDash
                </a>
              </li>
              <li>
                <a className="smoothscroll navbar-item" href="TenantDash">
                  TenantDash
                </a>
              </li>
              <li>
                <a className="smoothscroll navbar-item" href="PMCreate">
                  PMCreate
                </a>
              </li>
              <li>
                <a className="smoothscroll navbar-item" href="TenantCreate">
                  TenantCreate
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
