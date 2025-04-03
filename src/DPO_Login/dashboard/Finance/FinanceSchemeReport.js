import React from "react";

// import { Col, Pagination, Row, Table } from "react-bootstrap";

import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import "../../../DPO_Login/assets/css/FinanceSchemeReport.css";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
const FinanceSchemeReport = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-FSR-title">
              <div class="awc-dpo-head"><h1>Surrender Report 2023-24</h1></div>
            </div>
            <div className="box-container mt-3">
              <div class="awc-table-head"><h1>1. Budget Surrender Form 2023-24</h1>

                <Row className="awc-bills-box1">
                  <div className="awc-dpo-label-title">District Name :</div>
                  <Col lg={12} md={12} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        type="text"
                        placeholder="almora"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label className="awc-dpo-label-title">Upload Document :</Form.Label>
                      <Form.Control type="file" size="sm" className="awc-control  form-control custom-file-input" />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="awc-dpo-label-title">Example textarea :</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Col>
                  <Col lg={12} md={12} sm={12}>
                    <Button className="awc-dop-primary-btn">Submit</Button>
                  </Col>
                </Row>

              </div>
              <div class="awc-table-head"><h1>2. View added Surrender Report</h1>
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-Finance-tables">
                    <thead className="dpo-thead">
                      <tr>
                        <th>S.No</th>
                        <th>District</th>
                        <th>File</th>
                        <th>Change</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>almora</td>
                        <td> View File </td>
                        <td>show</td>
                        <td className="awc-dele-icon">< RiDeleteBin6Line /> </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>


              </div>

            </div>

            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceSchemeReport;
