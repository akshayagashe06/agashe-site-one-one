import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./component/Home";
import News from "./component/News";
import About from "./component/About";
import CustomNavbar from "./component/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route
          path="/linkedin-route"
          component={() => {
            window.location.href = "https://linkedin.com";
            return null;
          }}
        />
        <Route
          path="/insta-route"
          component={() => {
            window.location.href = "https://instagram.com";
            return null;
          }}
        />
        <Route
          path="/twitter-route"
          component={() => {
            window.location.href = "https://twitter.com";
            return null;
          }}
        />
        <Route
          path="/git-society-route"
          component={() => {
            window.location.href = "https://github.com/akshayagashe06/Society";
            return null;
          }}
        />
        <Route
          path="/git-jobSearch-route"
          component={() => {
            window.location.href =
              "https://github.com/glagarwal/semantic-job-search";
            return null;
          }}
        />
        <Route
          path="/formula1-route"
          component={() => {
            window.location.href = "https://formula1.com";
            return null;
          }}
        />
        <Route
          path="/cricbuzz-route"
          component={() => {
            window.location.href = "https://cricbuzz.com";
            return null;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
