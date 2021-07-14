import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import logo from "../assets/homeicon.jpg";
import { useAuthContext } from "../utils/AuthContext";

const Header = () => {
  const { logout } = useAuthContext();
  const handleLogout = async () => {
    const response = await API.logoutUser();
    logout();
  };

  return (
    <React.Fragment>
      <header className="home navbar is-spaced is-transparent">
        <Link to="/">
          <img src={logo} alt="logo" id="logoimg"></img>
        </Link>
        <Link to="/" className="button" id="logout" onClick={handleLogout}>
          Logout
        </Link>
      </header>
    </React.Fragment>
  );
};

export default Header;
