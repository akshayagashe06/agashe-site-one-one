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
      </div>
    </Router>
  );
}

export default App;
