import React from "react";
// import { Card, Col, Row } from "react-bootstrap";
import "../../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import PuruskarDashBoard from "../PuruskarDashBoard";
import Footer from "../../../componets/footer/Footer";

const SelectedCandidate202425 = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <PuruskarDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-FSR-title">
              <div class="awc-dpo-head">
                <h1>Display File to CDPO/DPO</h1>
              </div>
            </div>
            <div className="box-container mt-3">
             Selected Candidate 2024-25
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

export default SelectedCandidate202425;
