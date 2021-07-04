import React, { Component } from "react";

function SignupPage() {
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#firstName-signup").value.trim();
    const lastName = document.querySelector("#lastName-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (firstName && lastName && email && password) {
      const response = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/PmDash");
      } else {
        alert(response.statusText);
      }
    }
  };

  return (
    <div>
      <p>This is PMCreate part</p>
      <div className="columns">
        {" "}
        {/* the columns class will make all of the columns inside equal width */}
        <div className="column">
          {/*Property Basic Info Container, still need to work on  */}
          <div className="box prop-info">
            <p>Address</p>
            <p>Support Hours and Phone Number</p>
          </div>
        </div>
        <div className="column">
          <form className="box user-info">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="First Name"
                  id="firstName-signup"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Last name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="last Name"
                  id="lastName-signup"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="********"
                  id="password-signup"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Email Address</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Email Address"
                  id="email-signup"
                />
              </div>
            </div>

            <button class="dashboard-link" onClick={signupFormHandler}>
              Sign up and login
              {/* Link to PM Dashboard page */}
            </button>

            {/* <button class="button is-primary">Sign in</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
