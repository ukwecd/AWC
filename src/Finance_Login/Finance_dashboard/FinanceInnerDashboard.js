import React from "react";
import { Card, Col, Row } from "react-bootstrap";
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

            <div className="mt-2">
              <Row>
                <Col lg={6} xl={4} md={6} sm={12} className="my-2 d-flex">
                  <Card className="awc-card-data flex-fill" >
                    <Card.Body>
                      <Card.Title><h2>केंद्रों का विवरण</h2></Card.Title>

                      <Card.Text>
                        <Row className="d-flex align-items-stretch">
                          <div className="col-auto finance-m-top">
                            <i className="awc-dpo-icon-finace">
                              {/* <img src={AWCCenters} alt="AWC Centers"></img> */}
                              <BsBuildingAdd className="finace-icon-clr" />
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
                      </Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6} xl={4} md={6} sm={12} className="my-2 d-flex">

                  <Card className="awc-card-data flex-fill" >
                    <Card.Body>
                      <Card.Title><h2>कार्यरत कार्यकर्त्रियां का विवरण</h2></Card.Title>

                      <Card.Text>
                        <Row>
                          <div className="col-auto finance-m-top">
                            <i className="awc-dpo-icon-finace">
                              {/* <img src={AWCCenters} alt="AWC Centers"></img> */}
                              < FaUsers className="finace-icon-clr" />
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
                            <div className="d-flex justify-content-between mb-1 awc-dashbord-data awc-amount">
                              <div className="d-flex align-items-center">
                                <span className="">Total</span>
                              </div>
                              <div className="">33884</div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Text>

                    </Card.Body>
                  </Card>




                </Col>
                <Col lg={6} xl={4} md={6} sm={12} className="my-2 d-flex">

                  <Card className="awc-card-data flex-fill">
                    <Card.Body>
                      <Card.Title><h2>पुरुस्कार आवेदन का विवरण<span className="awc-amount">(new)</span></h2></Card.Title>

                      <Card.Text>
                        <Row>
                          <div className="col-auto finance-m-top">
                            <i className="awc-dpo-icon-finace">
                              {/* <img src={ReportIcon} alt="Report"></img> */}
                              <FaAward className="finace-icon-clr" />
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
                      </Card.Text>

                    </Card.Body>
                  </Card>




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
