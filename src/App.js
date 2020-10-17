import React from "react";
import { useQuery, gql } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";

const COUNTERS_QUERY = gql`
  query GetCounters {
    counters {
      data {
        label
        items {
          data {
            nameKr
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(COUNTERS_QUERY);
  console.log("loading: ", loading);
  console.log("data: ", data);
  console.log("errors: ", error);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
