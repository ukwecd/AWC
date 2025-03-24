import React from "react";
import DashBoard from "../DashBoard";

import { Col, Row, Form, Table } from "react-bootstrap";


const StateSchemeReport = () => {
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
                  <h1>All Anganwadi centres List</h1>
                </div>
            <div className="box-container">
              <div>
               
                <div className="awc-form-box">
                  <Row>
                    <Col lg={3} md={3} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="awc-label">
                          District Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="District Name"
                          className="awc-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="awc-label">
                          Project Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Project Name"
                          className="awc-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="awc-label">
                          Upload Documents (PDF)
                        </Form.Label>
                        <Form.Control
                          type="file"
                          placeholder="District Name"
                          className="awc-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="awc-label">Remark</Form.Label>
                        <Form.Control as="textarea" rows={2} />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="awc-table-heading">
                    <h2>View Report Surrender Report</h2>
                  </div>
                <div className="table-responsive-lg table-container-box">
                 
                  <Table className="awc-sub-table">
                    <thead className="awc-thead">
                      <tr>
                        <th>S.No</th>
                        <th>District</th>
                        <th>Project</th>
                        <th>File</th>
                        <th>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Almora</td>
                        <td>Havalabag[040645]</td>
                        <td>Almora[01]</td>
                        <td>5064060101</td>

                       
                       
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

export default StateSchemeReport;
