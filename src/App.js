import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "./componets/topnav/NavBar";
import "../../awc/src/custom/style.css";
import Home from "./componets/Home";
import 'font-awesome/css/font-awesome.min.css';
import DashBoard from "./componets/dashboard/DashBoard";
import InnerDashBoard from "./componets/dashboard/InnerDashBoard";
import AWCInformation from "./componets/dashboard/AWCInformation";
import StateSchemeReport from "./componets/dashboard/Finance/StateSchemeReport";
import BalanceExpenditure from "./componets/dashboard/Finance/BalanceExpenditure";
import History from "./componets/dashboard/Finance/History";
import AddVacancies from "./componets/dashboard/Vacancies/AddVacancies";
import ActiveVacancies from "./componets/dashboard/Vacancies/ActiveVacancies";
import ReceivedForms from "./componets/dashboard/Vacancies/ReceivedForms";
import GuideLine from "./componets/dashboard/GuideLine";
import AdminBanner from "./componets/AdminBanner";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/InnerDashBoard" element={<InnerDashBoard />} />
        <Route path="/AWCInformation" element={<AWCInformation />} />
        <Route path="/StateSchemeReport" element={<StateSchemeReport />} />
        <Route path="/BalanceExpenditure" element={<BalanceExpenditure />} />
        <Route path="/History" element={<History />} />
        <Route path="/AddVacancies" element={<AddVacancies />} />
        <Route path="/ActiveVacancies" element={<ActiveVacancies />} />
        <Route path="/ReceivedForms" element={<ReceivedForms />} />
        <Route path="/GuideLine" element={<GuideLine />} />
        <Route path="/AdminBanner" element={<AdminBanner />} />
        <Route path="/Header" element={<Header />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;