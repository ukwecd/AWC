import React from "react";
import Vector from "../../assets/images/project_area_icon.png";
import AWCCenters from "../../assets/images/awc-centers-icon.png";
import ReportIcon from "../../assets/images/reported-icon.png";
import "../../assets/css/InnerDashBoard.css";
import { Col, Pagination, Row, Table } from "react-bootstrap";

import "../assets/css/DPOLeftNav.css";
import Footer from "../../componets/footer/Footer";
import DPODashBoard from "./DPODashBoard";
import "../../DPO_Login/assets/css/DPODashboard.css";

const DPOInnerDashBoard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-title">
              <div>
                <h1>Dashboard-DPO login</h1>
                <p>
                  समस्त डीपीओ/ सीडीपीओ कृपया अवगत कराना है माह February 2025 में
                  कार्यरत आंगनवाड़ी कार्यकर्ती/सहायिकाओं की केन्द्र/राज्य मानदेय
                  धनराशि की मांग नियमानुसार मानदेय पोर्टल पर तैयार कर आज ही
                  प्रमाण पत्र निदेशालय को प्रेषित किया जाना है। अतः उक्त कार्य
                  को प्राथमिकता देते हुए आज ही मानदेय धनराशि की मांग प्रेषित
                  करें। इसमें किसी भी प्रकार की लापरवाही क्षम्य नहीं होगी। आज्ञा
                  से , निर्देशक महोदय
                </p>
              </div>
            </div>

            <div className="dpo-data-container">
              <Row>
                <Col lg={4} md={4} sm={12} className="my-2">
                  <div className="dpo-data">
                    <div>
                      <h2>AWC Center</h2>
                    </div>
                    <div className="awc-dpo-body">
                      <div className="">
                        {" "}
                        <i className="awc-dpo-icon">
                          <img src={Vector} alt="project"></img>
                        </i>
                      </div>
                      <div>
                        <p>Total Registerd</p>
                        <h3>1860</h3>
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

            <div className="box-container-table">
              {/* <div>
               
                <div className="awc-table-data">
                  <div className="table-responsive-lg table-container-box">
                    <Table
                      
                      className="awc-sub-table"
                    >
                      <thead className="dpo-thead">
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
              </div> */}

              <Row>
                <Col lg={6} md={6} sm={12} className="mb-3">
                  <div className="awc-dpo-heading">
                    <h1>Tilu Rauteli Application Real time Status 2023-24</h1>
                  </div>
                  <div className="awc-table-data">
                    <div className="table-responsive-lg table-container-box">
                      <Table className="awc-sub-table">
                        <thead className="dpo-thead">
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
                      <Col lg={6} md={12} sm={12}>
                        {" "}
                        <div className="tech-staff-perviose">
                          <div>Showing 1 to 10 of 105 entries</div>
                        </div>{" "}
                      </Col>
                      <Col lg={6} md={12} sm={12} className="awc-pading-next">
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
                </Col>

                <Col lg={6} md={6} sm={12} className="mb-3">
                  <div className="awc-dpo-heading">
                    <h1>Puruskar Application Real time Status 2022-23</h1>
                  </div>
                  <div className="awc-table-data">
                    <div className="table-responsive-lg table-container-box">
                      <Table className="awc-sub-table">
                        <thead className="dpo-thead">
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
                      <Col lg={6} md={12} sm={12}>
                        {" "}
                        <div className="tech-staff-perviose">
                          <div>Showing 1 to 10 of 105 entries</div>
                        </div>{" "}
                      </Col>
                      <Col lg={6} md={12} sm={12} className="awc-pading-next">
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

export default DPOInnerDashBoard;
