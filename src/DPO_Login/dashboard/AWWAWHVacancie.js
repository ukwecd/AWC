import React from "react";

// import Vector from "../../assets/images/project_area_icon.png";
// import AWCCenters from "../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../assets/images/reported-icon.png";
import "../../assets/css/InnerDashBoard.css";
// import { Col, Pagination, Row, Table } from "react-bootstrap";

import "../assets/css/DPOLeftNav.css";
import Footer from "../../componets/footer/Footer";
import DPODashBoard from "./DPODashBoard";
const AWWAWHVacancie = () => {
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

            {/* <div className="aws-data-container">
              <Row>
                <Col lg={4} md={4} sm={12} className="my-2">
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
            </div> */}
            {/* <div className="awc-table-heading">
                  <h1>Puruskar Application Real time Status 2022-23</h1>
                </div> */}
            {/* <div className="box-container-table">
              <div>
               
               
                <div className="awc-table-data">
                  <div className="table-responsive-lg table-container-box">
                    <Table
                      
                      className="awc-sub-table"
                    >
                      <thead className="awc-thead">
                        <tr>
                          <th>Title</th>
                          <th>In Process</th>
                          <th>Final Submit</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          
                          <td>आंगनवाड़ी कार्यकर्ती पुरस्कार</td>
                          <td>3</td>
                          
                          <td>0 </td>
                          
                        </tr>
                        
                      </tbody>
                    </Table>
                  </div>
                  <Row className="awc-m-t">
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <div className="tech-staff-perviose">
                    <div>Showing 1 to 10 of 105 entries</div>
                  </div>{" "}
                </Col>
                <Col lg={6} md={6} sm={12} className="awc-pading-next">
                  {" "}
                  <div className="tech-staff-table">
                    {" "}
                    <Pagination className="awc-paging">
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                     
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </div>{" "}
                </Col>
              </Row>
                </div>
              </div>
            </div> */}
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWWAWHVacancie;
