import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Footer from "../../componets/footer/Footer";
import "../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../Puruskar_Login/assets/css/PurskarDashBoard.css";

import DirectorateDashBoard from "./DirectorateDashBoard";
import "../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import { BsBuildingAdd } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";

const DirectInnerDash = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DirectorateDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>Dashboard-Directorate login</h1>
            </div>

            <Row>
              <div className="mt-2">
                <Row>
                  <Col lg={6} xl={4} md={6} sm={12} className="my-2 d-flex">
                    <Card className="awc-card-data flex-fill" >
                      <Card.Body>
                        <Card.Title><h2>केंद्रों का विवरण</h2></Card.Title>

                        <Card.Text>
                          <Row className="d-flex align-items-stretch">
                            <div className="col-auto finance-m-top">
                              <i className="awc-directorate-icon">
                                {/* <img src={AWCCenters} alt="AWC Centers"></img> */}
                                <BsBuildingAdd className="finace-icon-clr" />
                              </i>
                            </div>
                            <Col lg={8} md={8} sm={8} className="">
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data dash-mob">
                                <div className="d-flex align-items-center">
                                  <span className="">कुल पूर्ण आँगनवाड़ी केंद्र :</span>
                                </div>
                                <div className="">20077</div>
                              </div>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                                <div className="d-flex align-items-center">
                                  <span className="">कुल मिनी आंगनवाड़ी केंद्र :</span>
                                </div>
                                <div className="">0</div>
                              </div>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                                <div className="d-flex align-items-center">
                                  <span className="">कुल केंद्र :</span>
                                </div>
                                <div className="">20077</div>
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
                              <i className="awc-directorate-icon">
                                {/* <img src={AWCCenters} alt="AWC Centers"></img> */}
                                < FaUsers className="finace-icon-clr" />
                              </i>
                            </div>
                            <Col lg={8} md={8} sm={8}>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data dash-mob">
                                <div className="d-flex align-items-center">
                                  <span className="">केंद्रों में कुल कार्यरत कार्यकर्त्रियां :</span>
                                </div>
                                <div className="">19126</div>
                              </div>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                                <div className="d-flex align-items-center">
                                  <span className="">कुल कार्यरत सहायिकाएं :</span>
                                </div>
                                <div className="">12808</div>
                              </div>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                                <div className="d-flex align-items-center">
                                  <span className="">मिनी केंद्रों में कुल कार्यरत कार्यकर्त्रियां :</span>
                                </div>
                                <div className="">1</div>
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
                        <Card.Title><h2>रिक्त पद का विवरण</h2></Card.Title>

                        <Card.Text>
                          <Row>
                            <div className="col-auto finance-m-top">
                              <i className="awc-directorate-icon">
                                {/* <img src={ReportIcon} alt="Report"></img> */}
                                <GrWorkshop className="finace-icon-clr" />
                              </i>
                            </div>
                            <Col lg={8} md={8} sm={8}>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data dash-mob">
                                <div className="d-flex align-items-center">
                                  <span className="">आंगनबाड़ी कार्यकर्त्रियां के रिक्त पद :</span>
                                </div>
                                <div className="">373</div>
                              </div>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data ">
                                <div className="d-flex align-items-center">
                                  <span className="">मिनी आंगनबाड़ी कार्यकर्त्रियां के रिक्त पद :</span>
                                </div>
                                <div className="">157</div>
                              </div>
                              <div className="d-flex justify-content-between mb-1 awc-dashbord-data">
                                <div className="d-flex align-items-center">
                                  <span className="">सहायिकाओं के रिक्त पद :</span>
                                </div>
                                <div className="">612</div>
                              </div>

                            </Col>
                          </Row>
                        </Card.Text>

                      </Card.Body>
                    </Card>




                  </Col>
                </Row>

              </div>
            </Row>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectInnerDash;
