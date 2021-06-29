import React, { Component } from "react";

class PMCreate extends Component {
  render() {
    return (
      <div>
        <p>This is PMCreate part</p>
        <div className = "columns"> {/* the columns class will make all of the columns inside equal width */}
          <div className = "column">
          {/*Property Basic Info Container, still need to work on  */}
            <div className= "box prop-info">
              <p>Address</p>
              <p>Support Hours and Phone Number</p>
            </div>
          </div>
          <div className = "column">

            <form className="box user-info">
              <div class="field">
                <label class="label">First and Last Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="First and Last Name" />
                </div>
              </div>

              <div class="field">
                <label class="label">Username</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Username" />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" placeholder="********" />
                </div>
              </div>

              {/* <button class="button is-primary">Sign in</button> */}
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default PMCreate;
