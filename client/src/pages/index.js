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
import Properties from "./Properties";
import PropertyDetails from "./PropertyDetails";
import PropertyForm from "./PropertyForm";
import UnitDetails from "./UnitDetails";
import UnitForm from "./UnitForm";
import Signup from "./Signup";
import Header from "../components/header";
import Footer from "../components/footer";
import { useAuthContext } from "../utils/AuthContext";
import { DashboardProvider } from "../utils/DashboardContext";

const PageRouter = () => {
  const { user } = useAuthContext();
  return (
    <Router>
      <Header />
      <main>
        {!user ? (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Redirect from="*" to="/" />
          </Switch>
        ) : (
          <Switch>
            <DashboardProvider>
              <Route exact path="/" component={Properties} />
              <Route exact path="/property/:id/details" component={PropertyDetails}/>
              <Route exact path="/property/new" component={PropertyForm} />
              <Route exact path="/property/:id/edit" component={PropertyForm} />
              <Route exact path="/unit/:id/details" component={UnitDetails} />
              <Route exact path="/unit/new" component={UnitForm} />
              <Route exact path="/unit/:id/edit" component={UnitForm} />
            </DashboardProvider>
          </Switch>
        )}
      </main>
      <Footer />
    </Router>
  );
};

export default PageRouter;
