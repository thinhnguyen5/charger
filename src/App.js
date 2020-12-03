import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExampleProtectedView from './components/ExampleProtectedView';
import ProtectedRoute from './components/ProtectedRoute';
import constants from './constants.json';
import ShowCharger from './ShowCharger';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }  

  render() {

    return (
      <Router>
        <p>
            <ShowCharger />
        </p>
        
        
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/example" exact render={
            (routeProps) =>
              <ExampleProtectedView
                loadProtectedData={ this.loadProtectedData }
                someData={ this.state.someData }
                />
          }>          
        </ProtectedRoute>
      </Router>
    )
  }
}