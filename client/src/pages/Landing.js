import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <p>This is Landing part</p>

        <div className="field is-grouped is-grouped-centered">
          <div class="control">
            <div class="select">
              <select>
                <option>Select User Type</option>
                <option>Resident</option>
                <option>Property Manager</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <label className="label" htmlFor="username">
            Username
          </label>

          <div className="control">
            <input
              className="input"
              style={{ width: "400px" }}
              type="text"
              placeholder="Username"
            />
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <label className="label" htmlFor="password">
            Password
          </label>

          <div className="control">
            <input
              className="input"
              style={{ width: "400px" }}
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <button class="button is-primary" onClick={() => console.log()}>
              Sign Up
            </button>
          </p>
          <p class="control">
            <button class="button is-success">Sign In</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
