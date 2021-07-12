import React from "react";

function SignupPage() {
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#firstName-signup").value.trim();
    const lastName = document.querySelector("#lastName-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (firstName && lastName && email && password) {
      let response = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      response = await response.json();

      console.log("******", response);

      if (response.id) {
        document.location.replace("/PmDash");
      } else {
        alert(response.message ? response.message : response.name); //mongo error report and request err report
      }
    }
  };

  return (
    <div className = "PMContainer">
    <div class="PmDash data-box" id="PmDash">
      <h2>Property Manager Account Creation</h2>
      <div className="columns">
        {" "}
        {/* the columns class will make all of the columns inside equal width */}
        <div className="column">
          {/*Property Basic Info Container, still need to work on  */}
          <div className="box prop-info">
            <p className="info-start">Main Office Address: </p>
            <p>43 West 32nd street</p>
            <p className="info-start">Support Hours:</p>
            <p>Mon-Fri 9am - 8pm</p> 
            <p>Sat-Sun 11am - 5pm</p>
            <p><span className="info-start">Phone Number:</span>(123)456-7890</p>
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

            <button class= "button" id="dashboard-link" onClick={signupFormHandler}>
              Sign up and login
              {/* Link to PM Dashboard page */}
            </button>

            {/* <button class="button is-primary">Sign in</button> */}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignupPage;
