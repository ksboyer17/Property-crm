import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import logo from "../assets/homeicon.jpg";

const Header = () => {
  const logout = async () => {
    const response = await API.logoutUser();
  };

  return (
    <React.Fragment>
      <header className="home navbar is-spaced is-transparent">
        <Link to="/">
          <img src={logo} alt="logo" id="logoimg"></img>
        </Link>
        <Link to="/">
          <button className="button is-success" id="logout" onClick={logout}>
            Logout
          </button>
        </Link>
      </header>
    </React.Fragment>
  );
};

export default Header;
