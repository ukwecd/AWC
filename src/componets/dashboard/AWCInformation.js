import React from "react";
import DashBoard from "./DashBoard";
import { Button, Table, Form, Row, Col, Pagination } from "react-bootstrap";
import "../../assets/css/AWCInformation.css";
import { GrUpdate } from "react-icons/gr";
import Footer from "../footer/Footer";

const AWCInformation = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-table-head">
              <h1>All Anganwadi Center List</h1>
            </div>
            <div className="box-container-table">
              <div>
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-sub-table">
                    <thead className="awc-thead">
                      <tr>
                        <th>S.No</th>
                        <th>District</th>
                        <th>Project</th>
                        <th>Sector</th>
                        <th>AWC Code</th>
                        <th>AWC Type</th>
                        <th>Grant</th>
                        <th>Pin Code</th>
                        <th>AWC Name</th>
                        <th>आँगनवाड़ी केंद्र का नाम हिंदी में दर्ज करें</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Almora</td>
                        <td>Havalabag[040645]</td>
                        <td>Almora[01]</td>
                        <td>5064060101</td>
                        <td>AWC </td>
                        <td>GEN_15</td>
                        <td>263601</td>

                        <td>
                          <Form.Control
                            type="text"
                            placeholder="CHANA"
                            className="awc-control-inp"
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            placeholder="आँगनवाड़ी केंद्र का नाम"
                            className="awc-control-inp"
                          />
                        </td>
                        <td>
                          <div className="td-p">
                            <Button className="awc-update-btn">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                Update AWC Name{" "}
                                <GrUpdate className="awc-update-icon" />
                              </span>
                            </Button>
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
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWCInformation;
