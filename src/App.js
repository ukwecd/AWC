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
import PendingRemoveRequest from "./componets/dashboard/MandayWorker/PendingRemoveRequest";
import PendingEditRequest from "./componets/dashboard/MandayWorker/PendingEditRequest";
import CreateGroup from "./componets/dashboard/MandayWorker/CreateGroup";
import GenerateBill from "./componets/dashboard/Bills/GenerateBill";
import ActiveVacancies from "./componets/dashboard/Bills/ActiveVacancies";
import ReceivedForms from "./componets/dashboard/Bills/ReceivedForms";
import GuideLine from "./componets/dashboard/GuideLine";
import AdminBanner from "./componets/AdminBanner";
import ContactUs from "./componets/dashboard/ContactUs";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import AllWorker from "./componets/dashboard/MandayWorker/AllWorker";
import RetiredWorker from "./componets/dashboard/MandayWorker/RetiredWorker";
import RequestDelete from "./componets/dashboard/Bills/RequestDelete";
import ViewGeneratedBill from "./componets/dashboard/Bills/ViewGeneratedBill";
import InsuranceBill from "./componets/dashboard/Bills/InsuranceBill";
import InsuranceBillView from "./componets/dashboard/Bills/InsuranceBillView";
import OTPPage from "./componets/login/OTPPage";
import CreatePassword from "./componets/login/CreatePassword";
//DPODasboard
import DPODashBoard from "./DPO_Login/dashboard/DPODashBoard";
import DPOInnerDashBoard from "./DPO_Login/dashboard/DPOInnerDashBoard";
import AllWorkerList from "./DPO_Login/dashboard/MandayWorker/AllWorkerList";
import WorkerAddRequest from "./DPO_Login/dashboard/MandayWorker/WorkerAddRequest";
import WorkerEditRequest from "./DPO_Login/dashboard/MandayWorker/WorkerEditRequest";
import WorkerRemoveRequest from "./DPO_Login/dashboard/MandayWorker/WorkerRemoveRequest";
import MandayBills from "./DPO_Login/dashboard/ForwardBills/MandayBills";
import ProtsahanBills from "./DPO_Login/dashboard/ForwardBills/ProtsahanBills";
import AnganwadiKaryakarti from "./DPO_Login/dashboard/puruskar_application/AnganwadiKaryakarti";
import TeluRoteliPuruskar from "./DPO_Login/dashboard/puruskar_application/TeluRoteliPuruskar";
import AWWAWHVacancie from "./DPO_Login/dashboard/AWWAWHVacancie";
import FinanceSchemeReport from "./DPO_Login/dashboard/Finance/FinanceSchemeReport";
import Project202324 from "./DPO_Login/dashboard/Finance/Project202324";
import District202324 from "./DPO_Login/dashboard/Finance/District202324";
import ViewMandayBills from "./DPO_Login/dashboard/view_bills/ViewMandayBills";
import ViewProtsahanBills from "./DPO_Login/dashboard/view_bills/ViewProtsahanBills";
import DistrictHistory from "./DPO_Login/dashboard/Finance/DistrictHistory";
import WorkerAccountDetails from "./DPO_Login/dashboard/MandayWorker/WorkerAccountDetails";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/InnerDashBoard" element={<InnerDashBoard />} />
        <Route path="/AWCInformation" element={<AWCInformation />} />
        <Route path="/PendingRemoveRequest" element={<PendingRemoveRequest />} />
        <Route path="/PendingEditRequest" element={<PendingEditRequest />} />
        <Route path="/CreateGroup" element={<CreateGroup />} />
        <Route path="/GenerateBill" element={<GenerateBill />} />
        <Route path="/ActiveVacancies" element={<ActiveVacancies />} />
        <Route path="/ReceivedForms" element={<ReceivedForms />} />
        <Route path="/GuideLine" element={<GuideLine />} />
        <Route path="/AdminBanner" element={<AdminBanner />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AllWorker" element={<AllWorker />} />
        <Route path="/RetiredWorker" element={<RetiredWorker />} />
        <Route path="/RequestDelete" element={<RequestDelete />} />
        <Route path="/ViewGeneratedBill" element={<ViewGeneratedBill />} />
        <Route path="/InsuranceBill" element={<InsuranceBill />} />
        <Route path="/InsuranceBillView" element={<InsuranceBillView />} />
        <Route path="/OTPPage" element={<OTPPage />} />
        <Route path="/CreatePassword" element={<CreatePassword />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />

        {/* // DPODasboard */}
        <Route path="/DPODashBoard" element={<DPODashBoard />} />
        <Route path="/DPOInnerDashBoard" element={< DPOInnerDashBoard />} />
        <Route path="/AllWorkerList" element={< AllWorkerList />} />
        <Route path="/WorkerAddRequest" element={< WorkerAddRequest />} />
        <Route path="/WorkerEditRequest" element={< WorkerEditRequest />} />
        <Route path="/WorkerRemoveRequest" element={< WorkerRemoveRequest />} />
        <Route path="/ProtsahanBills" element={< ProtsahanBills />} />
        <Route path="/MandayBills" element={< MandayBills />} />
        <Route path="/AnganwadiKaryakarti" element={< AnganwadiKaryakarti />} />
        <Route path="/TeluRoteliPuruskar" element={< TeluRoteliPuruskar />} />
        <Route path="/AWWAWHVacancie" element={< AWWAWHVacancie />} />
        <Route path="/FinanceSchemeReport" element={<FinanceSchemeReport />} />
        <Route path="/Project202324" element={<Project202324 />} />
        <Route path="/District202324" element={<District202324 />} />
        <Route path="/ViewMandayBills" element={<ViewMandayBills />} />
        <Route path="/ViewProtsahanBills" element={<ViewProtsahanBills />} />
        <Route path="/DistrictHistory" element={<DistrictHistory />} />
        <Route path="/WorkerAccountDetails" element={<WorkerAccountDetails />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;