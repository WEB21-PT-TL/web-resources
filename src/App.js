import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import AdminView from "./components/AdminView";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route exact path="/admin/7255613851" component={AdminView} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
