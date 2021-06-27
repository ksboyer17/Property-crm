import React, { Component } from "react";

class PMCreate extends Component {
  render() {
    return (
      <div>
        <p>This is PMCreate part</p>
        <div className = "columns">
          <div className = "column">

            <form className="box user-info">
              <div class="field">
                <label class="label">First and Last Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="First and Last Name" />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" placeholder="********" />
                </div>
              </div>

              <button class="button is-primary">Sign in</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default PMCreate;
