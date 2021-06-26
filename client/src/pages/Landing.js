import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
      <div>
        <p>This is Landing part</p>
      </div>

      <div className="field">
      <p className="control">
        <span className="select">
          <select>
            <option>Select User Type</option>
            <option>Resident</option>
            <option>Management</option>
          </select>
        </span>
      </p>
    </div>
    
      <div className="field">
      <div className="control">
        <input className="input" type="text" placeholder="Username" />
        <input className="input" type="text" placeholder="Password" />
      </div>
    </div>
    
    
    
    <div className="buttons">
      <a className="button is-link">Sign Up</a>
      <a className="button is-link">Sign In</a>
    </div>
    </div>
    );
  }
}

export default Landing;
