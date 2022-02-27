import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./utils/bootstrap.min.css";
import NQueens from "./backTrackingAlgorithms/nQueens/nQueens";
import "./App.css";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Route exact path="/" component={NQueens} />
      </div>
    );
  }
}
