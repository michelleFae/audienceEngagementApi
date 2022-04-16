import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import AddActivity from "./pages/AddActivity";
import client from "./graphql/apollo";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/add" component={AddActivity} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
