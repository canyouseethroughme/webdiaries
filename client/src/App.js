import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Diaries from "./pages/Diaries";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <Route path="/sign-up" component={Signup} />

      <Route path="/forgot-password" component={ForgotPassword} />

      <Route path="/update-password" component={UpdatePassword} />

      <Route path="/diaries" component={Diaries} />
    </Switch>
  );
};

export default App;
