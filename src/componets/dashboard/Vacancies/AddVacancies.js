import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Table,Form } from "react-bootstrap";
import { TfiHandPointDown } from "react-icons/tfi";

const AddVacancies = () => {
  
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
              <Row>
                <div className="nd-staff-mobresp">
                  <Col lg={6} md={6} sm={12}>
                    <div className="awc-heading-two">
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

export default AddVacancies;
