import React, { Component } from "react";
export default class Header extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <React.Fragment>
        <header className="home navbar is-spaced is-success is-transparent">
          <nav id="nav-wrap" className="navbar-menu">
            <ul id="nav" className="navbar-start">
              <img src="../assets/homeicon.jpg" alt="logo"></img>
              <h1>Bleecker Street Residence</h1>
              <li className="current">
                <a
                  className="smoothscroll navbar-item has-text-white"
                  href="home"
                >
                  <i class="fas fa-home"></i>
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
