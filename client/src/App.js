import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginForm from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <ProtectedRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
