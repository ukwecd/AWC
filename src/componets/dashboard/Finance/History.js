import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Table } from "react-bootstrap";
import { TfiHandPointDown } from "react-icons/tfi";
import "../../../assets/css/History.css";

const History = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-table-heading">
              <h1>Dasoli PassBook 2024-25</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="nd-staff-mobresp">
                  <Col lg={6} md={6} sm={12}>
                    <div className="awc-heading-tw">
                      <h2>PassBook of Details 2024-25 </h2>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={12} className="nd-staff-print">
                    <div className="awc-view-btn">
                      {/* <span>
                        (view to View history) <FaRegHandPointRight />
                      </span> */}
                      <Button variant="primary" className="awc-btn-passbook">
                        Expendture Page
                      </Button>
                    </div>
                  </Col>
                </div>
              </Row>
              <Row className="mt-3">
                
                  <div>
                    <h3>Fatch Spasific</h3>
                  </div>
                
                <Col lg={2} md={2} sm={12}>
                  <div className="awc-history-data">
                    <Button className="fatch-data">All</Button>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <div className="awc-history-data">
                    <Button className="fatch-data">15 Awc rent | आंगनवाड़ी केंद्र किराया</Button>
                  </div>
                </Col>
                <Col lg={2} md={2} sm={12}>
                  <div className="awc-history-data">
                    <Button className="fatch-data">15 Cooked | मानदेय</Button>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <div className="awc-history-data">
                    <Button className="fatch-data">30 Cooked | मानदेय</Button>
                  </div>
                </Col>
              </Row>
              <div>
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-sub-table">
                    <thead className="awc-thead">
                      <tr>
                        <th>Project</th>
                        <th>Scheme</th>
                        <th>Grant</th>
                        <th>Componet</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Alloted/Spand amount</th>
                        <th>
                          Uploaded File
                          <br />
                          <span className="awc-span">
                            View to Open <TfiHandPointDown />{" "}
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dasoli</td>
                        <td>Uk351</td>
                        <td>15</td>
                        <td>Cooked Food | मानदेय</td>
                        <td>20-may-2024</td>
                        <td>Allotment</td>
                        <td>938400.00</td>
                        <td>Not Applicable</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div>{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
