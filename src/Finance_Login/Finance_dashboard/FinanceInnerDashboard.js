import React from "react";
// import AWCCenters from "../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../assets/images/reported-icon.png";
import { Col, Row } from "react-bootstrap";
import "../assets/css/FinaceLeftNav.css";
import Footer from "../../componets/footer/Footer";

import FinanceDashBoard from "./FinanceDashBoard";
import "../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { BsBuildingAdd } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

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
            <div className="awc-finance-title">
              <div>
                <h1>Dashboard Finance Login</h1>
                <p>New Financial year i.e 2024-25 option added now!!</p>
              </div>
            </div>

            <div className="dpo-data-container"></div>

            <div className="mt-3">
              <Row>
                <Col lg={6} xl={4} md={6} sm={12} className="my-2">
                  <div className="dpo-data dpo-data1">
                    <div>
                      <h2>केंद्रों का विवरण</h2>
                    </div>
                    <div className="awc-finance-body">
                      <Row className="d-flex align-items-stretch">
                        <div className="col-auto finance-m-top">
                          <i className="awc-dpo-icon-finace">
                            {/* <img src={AWCCenters} alt="AWC Centers"></img> */} 
                            <BsBuildingAdd className="finace-icon-clr"/>
                          </i>
                        </div>
                        <Col lg={8} md={8} sm={8}>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">कुल स्वीकृत आँगनवाड़ी केंद्र</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">कुल संचालित आंगनवाड़ी केंद्र</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">कुल पूर्ण केंद्र</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>

                <Col lg={6} xl={4} md={6} sm={12} className="my-2">
                  <div className="dpo-data dpo-data1">
                    <div>
                      <h2>कार्यरत कार्यकर्त्रियां का विवरण</h2>
                    </div>
                    <div className="awc-finance-body">
                      <Row>
                        <div className="col-auto finance-m-top">
                        <i className="awc-dpo-icon-finace">
                          {/* <img src={AWCCenters} alt="AWC Centers"></img> */}
                         < FaUsers className="finace-icon-clr"/>
                        </i>
                        </div>
                        <Col lg={8} md={8} sm={8}>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">पूर्ण केंद्रों में कुल कार्यरत कार्यकर्त्रियां</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">कुल कार्यरत सहायिकाएं</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">मिनी केंद्रों में कुल कार्यरत कार्यकर्त्रियां</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">Total</span>
                            </div>
                            <div className="">33884</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>

                
                <Col lg={6} xl={4} md={6} sm={12}className="my-2">
                  <div className="dpo-data dpo-data1">
                    <div>
                      <h2>पुरुस्कार आवेदन का विवरण(new)</h2>
                    </div>
                    <div className="awc-finance-body">
                      <Row>
                        <div className="col-auto finance-m-top">
                        <i className="awc-dpo-icon-finace">
                          {/* <img src={ReportIcon} alt="Report"></img> */}
                          <FaAward  className="finace-icon-clr"/>
                        </i>
                        </div>
                        <Col lg={8} md={8} sm={8}>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">आंगनबाड़ी कार्यकर्त्रियां पुरुस्कार :</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                          <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                            <div className="d-flex align-items-center">
                              <span className="">राज्य स्त्री शक्ति तीलू रौतेली पुरुस्कार :</span>
                            </div>
                            <div className="">20067</div>
                          </div>
                         
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                {/* <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="dpo-data">
                    <div>
                      <h2>Total Projects</h2>
                    </div>
                    <div className="awc-dpo-body">
                      <div className="">
                        {" "}
                        <i className="awc-dpo-icon-finace">
                          <img src={ReportIcon} alt="Report"></img>
                        </i>
                      </div>
                      <div>
                        <p>Total Reported:</p>
                        <h3>11</h3>
                      </div>
                    </div>
                  </div>
                </Col> */}
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
