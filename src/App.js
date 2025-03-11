import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../../AWC/AWC/src/custom/style.css";
import NavBar from "./componets/topnav/NavBar";
import Home from "./componets/Home";

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