import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Table, Form, Pagination } from "react-bootstrap";
import "../../../assets/css/CreateGroup.css";
import "../../../assets/css/History.css";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../../footer/Footer";
const RequestDelete = () => {
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
              <h1>All Anganwadi Center List</h1>
            </div>
            <div className="box-container">
              <div className="awc-form-box">
                <Row>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        Choose Bill for deletion/updation request
                      </Form.Label>
                      <Form.Select className="mb-2">
                        <option>Choose Month </option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        Instructions for bill deletion/updation request
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="बिल हटने अपडेट निर्देशन"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        Reason for bill deletion/updation request
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="बिल हटाने अपडेट करने के कारण"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">आपका नाम</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="यहाँ अपना नाम लिखें"
                        className="awc-control"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">आपका पद</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" अपना पदनाम यहाँ लिखें"
                        className="awc-control"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        आपका मोबाइल नंबर
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" अपना मोबाइल नंबर यहाँ लिखें"
                        className="awc-control"
                        disabled
                      />
                      <span className="awc-request-span">
                        आप इस नंबर पर सत्यापन के लिए कॉल प्राप्त हो सकती हैं
                        इसलिए कृपया उचित नंबर सबमिट करें
                      </span>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">परियोजना :-</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" अपना मोबाइल नंबर यहाँ लिखें"
                        value="Havalbag"
                        disabled
                        className="awc-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">जनपद</Form.Label>
                      <Form.Control
                        type="text"
                        value="Almora"
                        disabled
                        className="awc-control"
                      />
                    </Form.Group>
                  </Col>
                  <div className="awc-recevid-submit">
                    <Button className="awc-dashboard-btn">
                      अपना अनुरोध सबमिट करे
                    </Button>
                  </div>
                </Row>
              </div>
            </div>
            <div className="awc-table-heading">
              <h1>Added Groups with Employee</h1>
            </div>
            <div className="box-container-table">

              <div className="awc-mt">
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-sub-table">
                    <thead className="awc-thead">
                      <tr>
                        <th>S.No</th>
                        <th>Bill Title</th>
                        <th>Instruction</th>
                        <th>Reason</th>
                        <th>Name</th>
                        <th>Project</th>
                        <th>District</th>
                        <th>Status</th>
                        <th>Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>May 2024-25 Pending</td>
                        <td> To add AWW Worker which got removed. </td>
                        <td>Account No.- 000134001100323\r\n\r\n</td>
                        <td>Ayush Dobal(Junior Assistant) </td>
                        <td>Havalbag</td>
                        <td>Almora</td>

                        <td>
                          <div className="td-p">
                            <Button
                              variant="info "
                              className="awc-surrend-btn"
                            >
                              <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-district nd-btn-district1">
                                Done{" "}
                                <FaCheckCircle className="awc-update-icon" />
                              </span>
                            </Button>
                          </div>
                        </td>
                        <td>Worker added on request </td>
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

export default RequestDelete;
