import React from "react";
import AWCCenters from "../../assets/images/awc-centers-icon.png";
import ReportIcon from "../../assets/images/reported-icon.png";
import { Col, Row } from "react-bootstrap";
import "../assets/css/FinaceLeftNav.css"
import Footer from "../../componets/footer/Footer";
import "../../DPO_Login/assets/css/DPODashboard.css";
import FinanceDashBoard from "./FinanceDashBoard";
import "../../Finance_Login/assets/css/FinanceInnerDashBoard.css";

const DemandSchemereport = () => {
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
                <h1>Dashboard Finance Login</h1>
                <p>
                New Financial year i.e 2024-25 option added now!!
                </p>
              </div>
            </div>

            <div className="dpo-data-container">
              
            </div>

            <div className="box-container-table mt-3">
            <Row>
            <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="dpo-data">
                    <div>
                      <h2>Beneficiaries Reported</h2>
                    </div>
                    <div className="awc-finance-body">
                    <div className="">
                        {" "}
                        <i className="awc-dpo-icon">
                          <img src={AWCCenters} alt="AWC Centers"></img>
                        </i>
                      </div>
                      <div className="finance-data">
                      <div>
                        Total Registered:
                        
                      </div>
                      <div>7685</div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="dpo-data">
                    <div>
                      <h2>Beneficiaries Reported</h2>
                    </div>
                    <div className="awc-dpo-body">
                      <div className="">
                        {" "}
                        <i className="awc-dpo-icon">
                          <img src={AWCCenters} alt="AWC Centers"></img>
                        </i>
                      </div>
                      <div>
                        <p>Total Registered:</p>
                        <h3>2862</h3>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="dpo-data">
                    <div>
                      <h2>Total Projects</h2>
                    </div>
                    <div className="awc-dpo-body">
                      <div className="">
                        {" "}
                        <i className="awc-dpo-icon">
                          <img src={ReportIcon} alt="Report"></img>
                        </i>
                      </div>
                      <div>
                        <p>Total Reported:</p>
                        <h3>11</h3>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            
             
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

export default DemandSchemereport;
