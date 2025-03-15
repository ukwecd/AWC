import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "./componets/topnav/NavBar";
import "../../awc/src/custom/style.css";
import Home from "./componets/Home";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;