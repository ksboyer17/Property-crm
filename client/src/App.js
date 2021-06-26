import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./pages/Home";
//import Saved from "./pages/Saved";
import Landing from "./pages/Landing";
import PmDash from "./pages/PmDash";
import TenantDash from "./pages/TenantDash";
import PMCreate from "./pages/PMCreate";
import TenantCreate from "./pages/TenantCreate";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Home" component={Landing} />
            <Route exact path="/PmDash" component={PmDash} />
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
