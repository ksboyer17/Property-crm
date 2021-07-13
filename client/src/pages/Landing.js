import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useAuthContext } from "../utils/AuthContext";

function Landing() {
  const { login } = useAuthContext();

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
      try {
        const response = await API.loginUser({ email, password });
        login(response.data);
      } catch (err) {
        alert("Invalid credentials!");
        console.log("login error", err);
      }
    }
  };

  return (
    <section className="pageContainer">
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
                placeholder="Password"
                onChange={handleInputChange}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <Link to="/signup">
            <button className="button">Sign Up</button>
          </Link>
        </p>
        <p className="control">
          <button className="button" onClick={loginFormHandler}>
            Sign In
          </button>
        </p>
      </div>
    </section>
  );
}

export default Landing;
