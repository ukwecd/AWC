import React from "react";
// import Vector from "../../../assets/images/project_area_icon.png";
// import AWCCenters from "../../../assets/images/awc-centers-icon.png";
// import ReportIcon from "../../../assets/images/reported-icon.png";
import { Button, Col, Form, Pagination, Row } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";

const ViewProtsahanBills = () => {
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
              <h1>View Generated Protsahan Bills</h1>
            </div>
            <div className="box-container">
            <div class="awc-table-head">
                <h1> Protsahan Bill View:</h1>
                </div>
            <div className="box-container">
              <div>
                <Form>
                  <Row className="mt-3">
                    <Col lg={6} md={6} sm={12}>
                      <Row>
                        

                        <Col lg={5} md={5} sm={5}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Month </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
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

export default ViewProtsahanBills;
