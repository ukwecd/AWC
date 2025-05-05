import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import "../../../Directorate_Login/assets/css/DuplicateAccountNo.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Accordion, Col, Pagination, Row, Table } from "react-bootstrap";



const DuplicateAccountNo = () => {
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
              <h1>Manday Employee</h1>
            </div>
            <div className="awc-after-fillter mt-2">
              <Row> <h2>Project Wise Employee List</h2></Row>
              <div className="awc-after-fillter mt-3">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="aws-accor-bg">
                      <div className="w-100 aws-accordion ">
                        <Col lg={5} md={5} sm={5}>Almora</Col>
                        <Col lg={7} md={7} sm={7} className="text-end">3034/0</Col>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="table-responsive-lg">
                        <Table className="awc-sub-table" striped bordered hover>
                          <thead className="Direct-thead th">
                            <tr>
                              <th>S.No</th>
                              <th>	Aadhar No.</th>
                              <th>Worker Name</th>
                              <th>Worker Type</th>
                              <th>AWC Name</th>
                              <th>	Project</th>
                              <th>	District</th>
                              <th>A/C No.</th>
                              <th>	IFSC Code</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
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
                            <Pagination className="Directorate-paging">
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mt-3">
                    <Accordion.Header className="aws-accor-bg">
                      <div className="w-100 aws-accordion ">
                        <Col lg={5} md={5} sm={5}>Bageshwar</Col>
                        <Col lg={7} md={7} sm={7} className="text-end">383/0</Col>
                      </div></Accordion.Header>
                    <Accordion.Body>
                      <div className="table-responsive-lg">
                        <Table className="awc-sub-table" striped bordered hover>
                          <thead className="Direct-thead th">
                            <tr>
                              <th>S.No</th>
                              <th>	Aadhar No.</th>
                              <th>Worker Name</th>
                              <th>Worker Type</th>
                              <th>AWC Name</th>
                              <th>	Project</th>
                              <th>	District</th>
                              <th>A/C No.</th>
                              <th>	IFSC Code</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <Row>
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
                            <Pagination className="Directorate-paging">
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
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

export default DuplicateAccountNo;
