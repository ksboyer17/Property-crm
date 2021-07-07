import React, { Component } from "react";
// import "../style/header.css"; 
export default class Header extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <React.Fragment>
        <header className="home navbar is-spaced is-black">
        
          <nav id="nav-wrap" className= "navbar-menu">
            <ul id="nav" className="navbar-start">
            <h1>Property-CRM!</h1>
              <li className="current">
                <a className="smoothscroll navbar-item has-text-white" href="home">
                  <i class="fas fa-home"></i>
                  Home
                </a>
              </li>

              {/* to be deleted */}
              <li>
                <a className="smoothscroll navbar-item has-text-white" href="PMDash">
                  PMDash
                </a>
              </li> 

              {/* to be deleted */}
              <li>
                <a className="smoothscroll navbar-item has-text-white" href="TenantDash">
                  TenantDash
                </a>
              </li>

              {/* to be deleted */}
              <li>
                <a className="smoothscroll navbar-item has-text-white" href="PMCreate">
                  PMCreate
                </a>
              </li>
              
              {/* to be deleted */}
              <li>
                <a className="smoothscroll navbar-item has-text-white" href="TenantCreate">
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
