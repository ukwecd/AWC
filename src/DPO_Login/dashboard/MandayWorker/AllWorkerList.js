import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
// import { Col, Pagination, Row, Table } from "react-bootstrap";


import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";

const AllWorkerList = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dashboard-title">
              <div>
                <h1>AllWorkerList</h1>
                
              </div>
            </div>
          
           
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWorkerList;
