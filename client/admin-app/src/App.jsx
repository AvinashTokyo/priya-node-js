import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Role from "./components/Role";

const App = () => (
  <div className="container my-5">
    <Router>
      <Routes>
        <Route path='/' element={<Role />} />
      </Routes>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
