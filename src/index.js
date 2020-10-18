import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Item from "./Item";
import * as serviceWorker from "./serviceWorker";

const proxyClient = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  cache: new InMemoryCache(),
});

const Routes = () => {
  return (
    <Switch>
        <Route path="/items/:itemNameEn">
          <Item />
        </Route>
        <Route path={"/"} >
          <App />
        </Route>
    </Switch>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={proxyClient}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
