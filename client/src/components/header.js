import React, { Component } from "react";
export default class Header extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="PMDash">
                  PMDash
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="TenantDash">
                  TenantDash
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="PMCreate">
                  PMCreate
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="TenantCreate">
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
