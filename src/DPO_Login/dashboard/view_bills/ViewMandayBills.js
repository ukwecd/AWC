import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
import { Button, Col, Form, Pagination, Row } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";

import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";


const ViewMandayBills = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>View Generated Manday Bills</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="awc-dpo-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
                    <div className="search-container">
                      <form>
                        <input
                          className="search"
                          id="searchleft"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          className="button search-btn-dpo "
                          for="searchleft"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button className="awc-btn-copy">Copy</Button>

                    <Button variant="secondary" className="awc-dpo-btn-prt">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>
              <div className="box-container">
              <div>
                <Form>
                  <Row>
                    <Col lg={6} md={6} sm={12}>
                      <Row>
                        <div className="awc-label-title">
                        Manday Bill View:
                        </div>

                        <Col lg={5} md={5} sm={5}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Month </option>
                              <option value="1">January 2024-25</option>
                              <option value="2">February 2024-25</option>
                              <option value="3">March 2024-25</option>
                              
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={5} md={5} sm={5}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Project Name </option>
                              <option value="1">Chakrata1</option>
                              <option value="1">Chakrata2</option>
                             
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={2} md={2} sm={2} className="biil-submit">
                          <Button className="awc-dop-primary-btn">Submit</Button>
                        </Col>
                      </Row>
                    </Col>
                    
                  </Row>
                </Form>
              </div>
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
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMandayBills;
