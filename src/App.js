import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Country from "./pages/Country";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Switch>
        <Route to exact path="/">
          <Home />
        </Route>
        <Route to exact path="/news">
          <News />
        </Route>
        <Route to exact path="/country">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;