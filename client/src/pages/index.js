import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
//import Home from "./Home";
//import Saved from "./Saved";
import Landing from "./Landing";
import PmDash from "./PmDash";
import TenantDash from "./TenantDash";
import PMCreate from "./PMCreate";
import TenantCreate from "./TenantCreate";
import Header from "../components/header";
import Footer from "../components/footer";
import { useAuthContext } from "../utils/AuthContext";
import { DashboardProvider } from "../utils/DashboardContext";

const PageRouter = () => {
  const { user } = useAuthContext();
  return (
    <Router>
      <Header />
      <div>
        {!user ? (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={PMCreate} />
            <Redirect from="*" to="/" />
          </Switch>
        ) : (
          <Switch>
            <DashboardProvider>
              <Route exact path="/" component={PmDash} />
            </DashboardProvider>
            <Redirect from="*" to="/" />
          </Switch>
        )}
      </div>
      <Footer />
    </Router>
  );
};

export default PageRouter;
