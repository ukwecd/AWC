import React from "react";
// import { Col, Pagination, Row, Table } from "react-bootstrap";
import "../../Finance_Login/assets/css/DisplayFile.css";
import "../../DPO_Login/assets/css/FinanceSchemeReport.css";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import FinanceDashBoard from "./FinanceDashBoard";
import Footer from "../../componets/footer/Footer";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
const DisplayCDPOfile = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-FSR-title">
              <div class="awc-dpo-head">
                <h1>Display File to CDPO/DPO</h1>
              </div>
            </div>
            <div className="box-container mt-3">
              <div class="awc-display-head">
                <h1>1. Add new PDF to display</h1>

                <Row className="awc-display-box">
                  <div className="awc-dpo-label-title">
                    Heading to Display :
                  </div>
                  <Col lg={12} md={12} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control type="text" placeholder="" />
                    </Form.Group>
                  </Col>
                  <Col lg={12} md={12} sm={12}>
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label className="awc-dpo-label-title">
                        Upload Document{" "}
                        <span className="note-text">
                          {" "}
                          &nbsp; (PDF Format Only)
                        </span>
                        :
                      </Form.Label>
                      <Form.Control
                        type="file"
                        size="sm"
                        className="awc-control  form-control custom-file-input"
                      />
                      <span className="finance-pdf">
                        Upload Size Upto 10KB to 100KB
                      </span>
                    </Form.Group>
                  </Col>

                  <Col lg={12} md={12} sm={12} className="display-btn">
                    <Button className="awc-dop-primary-btn">
                      Add File to Display
                    </Button>
                  </Col>
                </Row>
              </div>
              <div class="awc-table-head">
                <h1>2. View added PDF to Display</h1>
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-Finance-tables">
                    <thead className="finance-thead">
                      <tr>
                        <th>S.No</th>
                        <th>Heading for File</th>
                        <th>View File</th>
                        <th>Status</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>almora</td>
                        <td>
                          <div>
                            <Button className="awc-btn-money">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn awc-view-file">
                                <HiMiniViewfinderCircle className="awc-dpo-add-icon" />{" "}
                                View File
                              </span>
                            </Button>
                          </div>
                        </td>
                        <td>show</td>
                        <td className="awc-dele-icon">
                          <MdOutlinePublishedWithChanges />{" "}
                        </td>
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

export default DisplayCDPOfile;
