import React from "react";

// import { Col, Pagination, Row, Table } from "react-bootstrap";

import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";

const Project202324 = () => {
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
                <h1>WorkerRemoveRequest</h1>
              </div>
            </div>
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project202324;
