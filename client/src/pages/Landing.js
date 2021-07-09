import React, { Component, useState } from "react";
import API from "../utils/API";

function Landing() {
  const [credentials, setCredentials] = useState({});

  const handleInputChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log(credentials);
  };

  const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace("/PmDash");
      } else {
        alert(response.statusText);
      }
    }
  };

  const signinPageHandler = (event) => {
    event.preventDefault();
    document.location.replace("/PMCreate");
  };

  return (
    <div>
      <div className="field is-grouped is-grouped-centered" id="Landteg">
        <h1>Bleecker Street Apartments</h1>
      </div>
      <div id="userInput">
        <div className="field is-grouped is-grouped-centered">
          <label className="label" htmlFor="email-login">
            <div className="control">
              <input
                className="input"
                style={{ width: "400px" }}
                type="text"
                placeholder="Email address"
                name="email-login"
                id="email-login"
                onChange={handleInputChange}
              />
            </div>
          </label>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <label className="label" htmlFor="password">
            <div className="control">
              <input
                id="password-login"
                className="input"
                style={{ width: "400px" }}
                name="password-login"
                type="password"
                placeholder="password"
                onChange={handleInputChange}
              />
            </div>
          </label>
        </div>
      </div>

      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button class="button is-success" onClick={signinPageHandler}>
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
