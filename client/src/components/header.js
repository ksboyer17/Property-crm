import React, { Component } from "react";
export default class Header extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  option1
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  option2
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  option3
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  option4
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
