import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  HashRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./Components/Home/Home";
import Header from "./Components/Header";
import Results from "./Components/Results/Results";
import "./App.css";
import DraftInput from "./DraftInput"
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const routerHistory = createBrowserHistory();
    // history={routerHistroy}
    return (
      <BrowserRouter history={routerHistory}>
        <div className="mainDiv">
          <Header />
          <Switch>
            <Route path="/results">
              <Results />
            </Route>
            <Route path = "/draft">
              <DraftInput />
            </Route>
            <Route path="/">
              {this.props.redirectToResults ? <Redirect to="/results" /> : ""}
              <Home />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  redirectToResults: state.page.showResults,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
