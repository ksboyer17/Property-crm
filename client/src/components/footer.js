import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    //let residentData = this.props.residentData;
    return (
      <footer>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer>
    );
  }
}
