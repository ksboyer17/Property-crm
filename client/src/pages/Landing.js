import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      
      <div>
        <p>This is Landing part</p>
      

        <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
              <input className="input" name="email" type="email" placeholder="email" required onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <div className="control">
              <input className="input" name="password" type="password" placeholder="password" required onChange={this.handleChange}/>
            </div>
          </div>
      </div>

    );
  }
}

export default Landing;
