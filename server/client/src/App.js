import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import NewSurvey from "./components/Survey/NewSurvey";

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Container maxWidth="md">
            <Route path="/" component={Landing} exact />
            <Route path="/surveys" component={Dashboard} exact />
            <Route path="/surveys/new" component={NewSurvey} exact />
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
