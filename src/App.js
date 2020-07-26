import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Blogs from "./component/Blogs";
import CustomNavbar from "./component/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route path={process.env.PUBLIC_URL + "/blog"} component={Blogs} />
        <Route
          path="/linkedin-route"
          component={() => {
            window.location.href =
              "https://www.linkedin.com/in/akshay-agashe06/";
            return null;
          }}
        />
        <Route
          path="/insta-route"
          component={() => {
            window.location.href = "https://www.instagram.com/i.m.agashe/";
            return null;
          }}
        />
        <Route
          path="/twitter-route"
          component={() => {
            window.location.href = "https://twitter.com/superakki";
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
