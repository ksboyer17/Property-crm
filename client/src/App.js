import React, { Component } from "react";
import PageRouter from "./pages";
import { AuthProvider } from "./utils/AuthContext";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <PageRouter />
      </AuthProvider>
    );
  }
}

export default App;
