import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useAuthContext } from "../utils/AuthContext";

function Signup() {
  const { login } = useAuthContext();
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#firstName-signup").value.trim();
    const lastName = document.querySelector("#lastName-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (firstName && lastName && email && password) {
      try {
        const res = await API.signupUser({firstName, lastName, email, password});
        login(res.data)
        window.location.replace("/")
      } catch (err) {
        alert("Unable to create account. Please try again."); //mongo error report and request err report
      }
    }
  };

  return (
    <section className="pageContainer">
      <div className="PMContainer">
        <div class="PmDash data-box-create" id="PmDash">
          <div className="columns">
            {" "}
            {/* the columns class will make all of the columns inside equal width */}
            <div className="column">
              <div className=" prop-info">
                <p className="info-start">Main Office Address: </p>
                <p>43 West 32nd street</p>
                <p className="info-start">Support Hours:</p>
                <p>Mon-Fri 9am - 8pm</p>
                <p>Sat-Sun 11am - 5pm</p>
                <p>
                  <span className="info-start">Phone Number:</span>(123)456-7890
                </p>
              </div>
            </div>
            <div className="column">
              <form className=" prop-info">
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
                  <label class="label">Last Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Last Name"
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
                <Link to="/"
                    class="button"
                    id="dashboard-link"
                    onClick={signupFormHandler}
                  >
                    Sign up and login
                    {/* Link to PM Dashboard page */}
                </Link>
                {/* <button class="button is-primary">Sign in</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
