import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";

const ProjectSurrenderSummary = () => {
 
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>All Project Surrender Summary 2024-25</h1>
            </div>
            <div className="box-container">
             
              <div className="box-container1">
                <div>
                  <Form>
                    <Row>
                      <Col lg={12} md={12} sm={12}>
                        <Row>
                          <Col lg={4} md={4} sm={12}>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="finace-label">
                                Grant/Component :
                              </Form.Label>

                              <Form.Select className="mb-2">
                                <option>Choose Grant|Component </option>
                                <option value="1">January 2024-25</option>
                                <option value="2">February 2024-25</option>
                                <option value="3">March 2024-25</option>
                              </Form.Select>
                              <div className="awc-dpo-alert">
                        <p>
                         Only those Component will be visible Which have Surrender entry 
                        </p>
                      </div>
                            </Form.Group>
                          </Col>
                        
                        </Row>
                      </Col>
                      <div className="biil-submit1">
                        <Button className="awc-dop-primary-btn">
                          Fillter Report
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="awc-after-fillter mt-3">
                <div class="awc-table-head">
                  <h1>Surrender Summary 2024-25 | All</h1>
                </div>
                <div className="table-responsive-lg">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th>ID</th>
                        <th>District</th>
                        <th>Project</th>
                        <th>Scheme</th>
                        <th>Grant</th>
                        <th>Component</th>
                        <th>Date</th>
                        <th>Letter No</th>
                        <th>Current Balance</th>
                        <th>Amount</th>
                        <th>Remark</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                     </tr>
                    </tbody>
                  </Table>
                </div>
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

export default ProjectSurrenderSummary;
