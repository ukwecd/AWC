import React from "react";
// import { Col, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import FinanceDashBoard from "../FinanceDashBoard";

const ProjectSurrender = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
       <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-title">
              <div>
                <h1>Dashboard-DPO login</h1>
                <p>
                 District Date
                </p>
              </div>
            </div>

            <div className="dpo-data-container">
             District
            </div>

           
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSurrender;
