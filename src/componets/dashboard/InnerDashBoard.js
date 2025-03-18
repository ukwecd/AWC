import React from "react";
import DashBoard from "./DashBoard";
import Vector from "../../assets/images/project_area_icon.png";
import AWCCenters from "../../assets/images/awc-centers-icon.png";
import ReportIcon from "../../assets/images/reported-icon.png";
import "../../assets/css/InnerDashBoard.css";
import { Col, Row } from "react-bootstrap";
const InnerDashBoard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dashboard-title">
              <div>
                <h1>DashBoard</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures.
                </p>
              </div>
            </div>

            <div className="aws-data-container">
              <Row>
                <Col lg={4} md={4} sm={12} className="my-2 ">
                  <div className="aws-data">
                    <div>
                      <h2>Project Bageshwar</h2>
                    </div>
                    <div className="awc-data-body">
                      <div className="">
                        {" "}
                        <i className="awc-project-icon">
                          <img src={Vector} alt="project"></img>
                        </i>
                      </div>
                      <div>
                        <p>District</p>
                        <h3>Bageshwar</h3>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="aws-data">
                    <div>
                      <h2>AWC Centers</h2>
                    </div>
                    <div className="awc-data-body">
                      <div className="">
                        {" "}
                        <i className="awc-project-icon">
                          <img src={AWCCenters} alt="AWC Centers"></img>
                        </i>
                      </div>
                      <div>
                        <p>Total Registered:</p>
                        <h3>325</h3>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="aws-data">
                    <div>
                      <h2>Beneficiaries Reported</h2>
                    </div>
                    <div className="awc-data-body">
                      <div className="">
                        {" "}
                        <i className="awc-project-icon">
                          <img src={ReportIcon} alt="Report"></img>
                        </i>
                      </div>
                      <div>
                        <p>Total Reported:</p>
                        <h3>518</h3>
                      </div>
                    </div>
                  </div>
                </Col>

              </Row>
            </div>

            <div className="box-container">DashBoard</div>
            <div>{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerDashBoard;
