import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Groups from "./Groups";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Error from "./Error";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={Groups} />
          <Route path="/groups" component={Groups} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/overview" component={Overview} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}
