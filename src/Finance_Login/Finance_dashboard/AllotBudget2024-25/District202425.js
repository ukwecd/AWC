import React from "react";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import FinanceDashBoard from "../FinanceDashBoard";
import { Link } from "react-router-dom";

import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import HistoryBudget from "./HistoryBudget";
import AllotingBudget from "./AllotingBudget";
const District202425 = () => {
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
              <h1>All District Current Balance Financial Year 2024-25</h1>
            </div>
            <div className="box-container">
              <div className="awc-allot-heading">
                <h2>Amount Allotment Details</h2>
                <span className="awc-note-data">Note:</span>
                <ol>
                  <li>
                    For Bulk Budget Allotment{" "}
                    <Link to="/BulkBugetAllotment">
                      <button className="clc-bnn">Click Here !</button>
                    </Link>
                  </li>
                  <li>To Allot Specific Budget Click on Amount.</li>
                  <li>To View Passbook Click on District.</li>
                </ol>
              </div>
              <div className="table-responsive-lg table-container-box mt-1">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="finance-thead">
                    <tr>
                      <th rowSpan="2">S.No</th>
                      <th rowSpan="2">District</th>

                      <th colSpan="6" className="text-center">
                        Grant 15
                      </th>
                    </tr>
                    <tr>
                      <th>TA</th>
                      <th>Medical</th>
                      <th>Petrol</th>
                      <th>Saree Suit</th>
                      <th>Pre School Kit</th>
                      <th>Medicine kit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>

                      <td>
                        <div className="dpo-p">

                          {" "}
                          <HistoryBudget />

                        </div>
                      </td>

                      <td>
                        <div className="dpo-p">

                          {" "}
                          <AllotingBudget />

                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                00
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                00
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                00
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                00
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                                00
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </td>
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
                    <Pagination className="finance-paging">
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

export default District202425;
