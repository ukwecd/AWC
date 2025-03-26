import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Form, Accordion, Table } from "react-bootstrap";
import "../../../assets/css/History.css";
import "../../../assets/css/CreateGroup.css";
import Footer from "../../footer/Footer";

const InsuranceBillView = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dashboard-title">
              <div>
                <h1>Generate Bill</h1>
                <p>
                  समस्त डीपीओ/ सीडीपीओ कृपया अवगत कराना है माह February 2025 में
                  कार्यरत आंगनवाड़ी कार्यकर्ती/सहायिकाओं की केन्द्र/राज्य मानदेय
                  धनराशि की मांग नियमानुसार मानदेय पोर्टल पर तैयार कर आज ही
                  प्रमाण पत्र निदेशालय को प्रेषित किया जाना है। अतः उक्त कार्य
                  को प्राथमिकता देते हुए आज ही मानदेय धनराशि की मांग प्रेषित
                  करें। इसमें किसी भी प्रकार की लापरवाही क्षम्य नहीं होगी। आज्ञा
                  से , निर्देशक महोदय
                </p>
              </div>
            </div>
            <div className="awc-table-heading">
              <h1>Dasoli PassBook 2024-25</h1>
            </div>
            <div className="box-container">
              <div>
                <Form>

                  <Row>

                    <Col lg={7} md={7} sm={12} >

                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">For Bill Type | Manday :</div>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Manday"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Type</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Distribution </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Button className="create-submit-btn">Submit</Button>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={5} md={5} sm={12} >

                      <Row className="awc-bills-box">
                        <div className="awc-label-title">For Bill Type | Protsahan :</div>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Manday"
                              disabled
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Distribution </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Button className="create-submit-btn">Submit</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div className="awc-table-heading">
              <h1>Added Groups with Employee</h1>
            </div>
            <div className="awc-after-fillter">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    HAVA-AWW001 | Newly Promoted ( 73 workers in this group)
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive-lg">
                      <Table className="awc-sub-table" striped bordered hover>
                        <thead className="awc-thead">
                          <tr>
                            <th>S.No</th>
                            <th>Group Title</th>
                            <th>Worker Name</th>
                            <th>Worker Type</th>
                            <th>AWC Name</th>
                            <th>AWC Code</th>
                            <th>Account No.</th>
                            <th>IFSC Code</th>
                            <th>Bank Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>HAVA-AWW001</td>
                            <td>meena devi</td>
                            <td>AWW</td>
                            <td>BHEH</td>
                            <td>5064060407</td>
                            <td>000134001100331</td>
                            <td>YESB0AZSB02</td>
                            <td>ALMORA DISTRICT CENTRAL CO-OP.BANK</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>Old Data</Accordion.Header>
                  <Accordion.Body>
                    <div className="table-responsive-lg">
                      <Table className="awc-sub-table" striped bordered hover>
                        <thead className="awc-thead">
                          <tr>
                            <th>S.No</th>
                            <th>Old Information Description</th>
                            <th>Worker Name</th>
                            <th colSpan="2" className="text-center">
                              Worker Mobile No
                            </th>
                            <th>Worker Type</th>
                            <th>Acount No.</th>
                            <th>IFSC Code</th>
                            <th>Bank name</th>
                            <th>AWC name</th>
                            <th>AWC Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>HAVA-AWW001</td>
                            <td>meena devi</td>
                            <td>AWW</td>
                            <td>BHEH</td>
                            <td>5064060407</td>
                            <td>000134001100331</td>
                            <td>YESB0AZSB02</td>
                            <td>ALMORA DISTRICT CENTRAL CO-OP.BANK</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceBillView;
