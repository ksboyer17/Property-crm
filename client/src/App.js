import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./pages/Home";
//import Saved from "./pages/Saved";
import Landing from "./pages/Landing";
import PMDash from "./pages/PMDash";
import TenantDash from "./pages/TenantDash";
import PMCreate from "./pages/PMCreate";
import TenantCreate from "./pages/TenantCreate";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/PMDash" component={PMDash} />
            <Route exact path="/TenantDash" component={TenantDash} />
            <Route exact path="/PMCreate" component={PMCreate} />
            <Route exact path="/TenantCreate" component={TenantCreate} />
            {/* <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
