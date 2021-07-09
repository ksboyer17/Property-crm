import React, { Component } from "react";
import logo from "../assets/homeicon.jpg";

export default class Header extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <React.Fragment>
        <header className="home navbar is-spaced is-success is-transparent">
          <img src={logo} alt="logo" id="logoimg"></img>
          <nav id="nav-wrap" className="navbar-menu ">
            <ul id="nav" className="navbar-end ">
              <li className="current">
                <a className="smoothscroll navbar-item nav-text" href="home">
                  <i class="fas fa-home home-icon"></i>
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
