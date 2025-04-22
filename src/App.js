import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./componets/topnav/NavBar";
import "../../awc/src/custom/style.css";
import Home from "./componets/Home";
import "font-awesome/css/font-awesome.min.css";
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
// import ProjectOverview from "./Finance_Login/Finance_dashboard/FinancialYear202324/ProjectOverview1";

/* // FinanceDasboard */

import FinanceDashBoard from "./Finance_Login/Finance_dashboard/FinanceDashBoard";
import FinanceInnerDashboard from "./Finance_Login/Finance_dashboard/FinanceInnerDashboard";
import DisplayCDPOfile from "./Finance_Login/Finance_dashboard/DisplayCDPOfile";
import District202425 from "./Finance_Login/Finance_dashboard/AllotBudget2024-25/District202425";
import Project202425 from "./Finance_Login/Finance_dashboard/AllotBudget2024-25/Project202425";
import DistrictDatewise from "./Finance_Login/Finance_dashboard/CustomReports/DistrictDatewise";
import ProjectDatewise from "./Finance_Login/Finance_dashboard/CustomReports/ProjectDatewise";
import DistrictSummary from "./Finance_Login/Finance_dashboard/ExpenditureSummary/DistrictSummary";
import ProjectSummary from "./Finance_Login/Finance_dashboard/ExpenditureSummary/ProjectSummary";
import AllotProjectSummary from "./Finance_Login/Finance_dashboard/AllotmentSummary/AllotProjectSummary";
import AllotDistrictSummary from "./Finance_Login/Finance_dashboard/AllotmentSummary/AllotDistrictSummary";
import StateSchemeReport from "./Finance_Login/Finance_dashboard/DemandSummary/StateSchemeReport";
import ProjectSurrenderSummary from "./Finance_Login/Finance_dashboard/DemandSummary/ProjectSurrenderSummary";
import ProjectDemandSummary from "./Finance_Login/Finance_dashboard/DemandSummary/ProjectDemandSummary";
import DistrictOverview from "./Finance_Login/Finance_dashboard/FinancialYear202324/DistrictOverview";
import ProjectReport202324 from "./Finance_Login/Finance_dashboard/FinancialYear202324/ProjectReport202324";
import DistrictReport202324 from "./Finance_Login/Finance_dashboard/FinancialYear202324/DistrictReport202324";
import FinanceProjectOverview from "./Finance_Login/Finance_dashboard/FinancialYear202223/FinanceProjectOverview";
import FinanceDistrictOverview from "./Finance_Login/Finance_dashboard/FinancialYear202223/FinanceDistrictOverview";
import DistrictReport202223 from "./Finance_Login/Finance_dashboard/FinancialYear202223/DistrictReport202223";
import ProjectReport202223 from "./Finance_Login/Finance_dashboard/FinancialYear202223/ProjectReport202223";
import BulkBugetAllotment from "./Finance_Login/Finance_dashboard/AllotBudget2024-25/BulkBugetAllotment";
import ProjectBudgetAllotment from "./Finance_Login/Finance_dashboard/AllotBudget2024-25/ProjectBudgetAllotment";
import ProjectPassbookFinancial from "./Finance_Login/Finance_dashboard/AllotBudget2024-25/ProjectPassbookFinancial";
import ProjectPassbookFinancialYear from "./Finance_Login/Finance_dashboard/AllotBudget2024-25/ProjectPassbookFinancialYear";
import ProjectExpenditureReport from "./Finance_Login/Finance_dashboard/ExpenditureSummary/ProjectExpenditureReport";
import ProjectCurrentBalance from "./Finance_Login/Finance_dashboard/AllotmentSummary/ProjectCurrentBalance";
import DistrictCurrentBalance from "./Finance_Login/Finance_dashboard/AllotmentSummary/DistrictCurrentBalance";
import ProjectOverview1 from "./Finance_Login/Finance_dashboard/FinancialYear202324/ProjectOverview1";
import PassbookOverview from "./Finance_Login/Finance_dashboard/FinancialYear202324/PassbookOverview";
import ProjectPassbookFinancial202223 from "./Finance_Login/Finance_dashboard/FinancialYear202223/ProjectPassbookFinancial202223";
import TeluSelectedCandidate202425 from "./Puruskar_Login/Puruskar_dashboard/TeluRoteli_Award/TeluSelectedCandidate202425";

/* // PurskarDasboard */

import PuruskarDashBoard from "./Puruskar_Login/Puruskar_dashboard/PuruskarDashBoard";
import PuraskarInnerDashBoard from "./Puruskar_Login/Puruskar_dashboard/PuraskarInnerDashBoard";
import AllEntry202425 from "./Puruskar_Login/Puruskar_dashboard/Ang_Karyakarti/AllEntry202425";
import SelectedCandidate202425 from "./Puruskar_Login/Puruskar_dashboard/Ang_Karyakarti/SelectedCandidate202425";
import AllEntry202324 from "./Puruskar_Login/Puruskar_dashboard/Ang_Karyakarti/AllEntry202324";
import ApprovedEntry202324 from "./Puruskar_Login/Puruskar_dashboard/Ang_Karyakarti/ApprovedEntry202324";
import AllEntry202223 from "./Puruskar_Login/Puruskar_dashboard/Ang_Karyakarti/AllEntry202223";
import ApprovedEntry202223 from "./Puruskar_Login/Puruskar_dashboard/Ang_Karyakarti/ApprovedEntry202223";
import TeluAllEntry202425 from "./Puruskar_Login/Puruskar_dashboard/TeluRoteli_Award/TeluAllEntry202425";
import TeluAllEntry202324 from "./Puruskar_Login/Puruskar_dashboard/TeluRoteli_Award/TeluAllEntry202324";
import TeluSelectedCandidate202324 from "./Puruskar_Login/Puruskar_dashboard/TeluRoteli_Award/TeluSelectedCandidate202324";
import TeluAllEntry202223 from "./Puruskar_Login/Puruskar_dashboard/TeluRoteli_Award/TeluAllEntry202223";
import TeluSelectedCandidate202223 from "./Puruskar_Login/Puruskar_dashboard/TeluRoteli_Award/TeluSelectedCandidate202223";

/* // Directorate DashBoard */
import DirectorateDashBoard from "./Directorate_Login/Directorate_DashBoard/DirectorateDashBoard";
import DirectInnerDash from "./Directorate_Login/Directorate_DashBoard/DirectInnerDash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/InnerDashBoard" element={<InnerDashBoard />} />
        <Route path="/AWCInformation" element={<AWCInformation />} />
        <Route
          path="/PendingRemoveRequest"
          element={<PendingRemoveRequest />}
        />
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
        <Route path="/DPOInnerDashBoard" element={<DPOInnerDashBoard />} />
        <Route path="/AllWorkerList" element={<AllWorkerList />} />
        <Route path="/WorkerAddRequest" element={<WorkerAddRequest />} />
        <Route path="/WorkerEditRequest" element={<WorkerEditRequest />} />
        <Route path="/WorkerRemoveRequest" element={<WorkerRemoveRequest />} />
        <Route path="/ProtsahanBills" element={<ProtsahanBills />} />
        <Route path="/MandayBills" element={<MandayBills />} />
        <Route path="/AnganwadiKaryakarti" element={<AnganwadiKaryakarti />} />
        <Route path="/TeluRoteliPuruskar" element={<TeluRoteliPuruskar />} />
        <Route path="/AWWAWHVacancie" element={<AWWAWHVacancie />} />
        <Route path="/FinanceSchemeReport" element={<FinanceSchemeReport />} />
        <Route path="/Project202324" element={<Project202324 />} />
        <Route path="/District202324" element={<District202324 />} />
        <Route path="/ViewMandayBills" element={<ViewMandayBills />} />
        <Route path="/ViewProtsahanBills" element={<ViewProtsahanBills />} />
        <Route path="/DistrictHistory" element={<DistrictHistory />} />
        <Route
          path="/WorkerAccountDetails"
          element={<WorkerAccountDetails />}
        />

        {/* // FinanceDasboard */}
        <Route path="/FinanceDashBoard" element={<FinanceDashBoard />} />
        <Route path="/FinanceInnerDashboard" element={<FinanceInnerDashboard />} />
        <Route path="/DisplayCDPOfile" element={<DisplayCDPOfile />} />
        <Route path="/District202425" element={<District202425 />} />
        <Route path="/Project202425" element={<Project202425 />} />
        <Route path="/DistrictDatewise" element={<DistrictDatewise />} />
        <Route path="/ProjectDatewise" element={<ProjectDatewise />} />
        <Route path="/DistrictSummary" element={<DistrictSummary />} />
        <Route path="/ProjectSummary" element={<ProjectSummary />} />
        <Route path="/AllotDistrictSummary" element={<AllotDistrictSummary />} />
        <Route path="/AllotProjectSummary" element={<AllotProjectSummary />} />

        <Route path="/StateSchemeReport" element={<StateSchemeReport />} />
        <Route path="/ProjectSurrenderSummary" element={<ProjectSurrenderSummary />} />
        <Route path="/ProjectDemandSummary" element={<ProjectDemandSummary />} />
        <Route path="/DistrictOverview" element={<DistrictOverview />} />
        <Route path="/ProjectReport202324" element={<ProjectReport202324 />} />
        <Route path="/DistrictReport202324" element={<DistrictReport202324 />} />
        <Route path="/FinanceProjectOverview" element={<FinanceProjectOverview />} />
        <Route path="/FinanceDistrictOverview" element={<FinanceDistrictOverview />} />
        <Route path="/DistrictReport202223" element={<DistrictReport202223 />} />
        <Route path="/ProjectReport202223" element={<ProjectReport202223 />} />
        <Route path="/BulkBugetAllotment" element={<BulkBugetAllotment />} />
        <Route path="/ProjectBudgetAllotment" element={<ProjectBudgetAllotment />} />
        <Route path="/ProjectPassbookFinancial" element={<ProjectPassbookFinancial />} />
        <Route path="/ProjectPassbookFinancialYear" element={<ProjectPassbookFinancialYear />} />
        <Route path="/ProjectExpenditureReport" element={<ProjectExpenditureReport />} />
        <Route path="/ProjectCurrentBalance" element={<ProjectCurrentBalance />} />
        <Route path="/DistrictCurrentBalance" element={<DistrictCurrentBalance />} />
        <Route path="/ProjectOverview1" element={<ProjectOverview1 />} />
        <Route path="/PassbookOverview" element={<PassbookOverview />} />
        <Route path="/ProjectPassbookFinancial202223" element={<ProjectPassbookFinancial202223 />} />
        {/* // PurskarDasboard */}
        <Route path="/PuruskarDashBoard" element={<PuruskarDashBoard />} />
        <Route path="/PuraskarInnerDashBoard" element={<PuraskarInnerDashBoard />} />
        <Route path="/AllEntry202425" element={<AllEntry202425 />} />
        <Route path="/SelectedCandidate202425" element={<SelectedCandidate202425 />} />
        <Route path="/AllEntry202324" element={<AllEntry202324 />} />
        <Route path="/ApprovedEntry202324" element={<ApprovedEntry202324 />} />
        <Route path="/AllEntry202223" element={<AllEntry202223 />} />
        <Route path="/ApprovedEntry202223" element={<ApprovedEntry202223 />} />
        <Route path="/TeluAllEntry202425" element={<TeluAllEntry202425 />} />
        <Route path="/TeluAllEntry202324" element={<TeluAllEntry202324 />} />
        <Route path="/TeluSelectedCandidate202324" element={<TeluSelectedCandidate202324 />} />
        <Route path="/TeluAllEntry202223" element={<TeluAllEntry202223 />} />
        <Route path="/TeluSelectedCandidate202223" element={<TeluSelectedCandidate202223 />} />
        <Route path="/TeluSelectedCandidate202425" element={<TeluSelectedCandidate202425 />} />

          {/* // DirectorateDasboard */}

          <Route path="/DirectorateDashBoard" element={<DirectorateDashBoard />} />
          <Route path="/DirectInnerDash" element={<DirectInnerDash />} />


      </Routes>
    </Router>
  );
}

export default App;
