import React, { Component, useState } from "react";
import API from "../utils/API";

function Landing () {

  const [credentials, setCredentials] = useState({})
  
  const handleInputChange = event => {
    setCredentials({...credentials, [event.target.name]: event.target.value})
    console.log(credentials)
  }

  const loginFormHandler = async (event) => {
    event.preventDefault();
    API.loginUser(credentials)
    .then(response => {
      // handlelogin
    })
  };


    
    return (
      <div>
        <p>This is Landing part</p>

        <div className="field is-grouped is-grouped-centered">
          <div class="control">
            <div class="select">
              <select >
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
              name="username"
              onChange={handleInputChange}
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
              onChange = {handleInputChange}
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <button class="button is-primary" >
              Sign Up
            </button>
          </p>
          <p class="control">
            <button class="button is-success" onClick={loginFormHandler}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    );
  
}

export default Landing;
