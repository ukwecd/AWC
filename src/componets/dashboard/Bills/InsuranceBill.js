import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Form, Accordion, Table } from "react-bootstrap";
import "../../../assets/css/History.css";
import "../../../assets/css/CreateGroup.css";
import Footer from "../../footer/Footer";

const InsuranceBill = () => {
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
                <h1>Generate Worker/Helper Insurance Bill</h1>
                <p>
                समस्त डीपीओ/ सीडीपीओ कृपया अवगत कराना है माह February 2025 में कार्यरत आंगनवाड़ी कार्यकर्ती/सहायिकाओं की केन्द्र/राज्य मानदेय धनराशि की मांग नियमानुसार मानदेय पोर्टल पर तैयार कर आज ही प्रमाण पत्र निदेशालय को प्रेषित किया जाना है। अतः उक्त कार्य को प्राथमिकता देते हुए आज ही मानदेय धनराशि की मांग प्रेषित करें। इसमें किसी भी प्रकार की लापरवाही क्षम्य नहीं होगी। आज्ञा से , निर्देशक महोदय
                </p>
              </div>
            </div>
           
            <div className="box-container mt-3">
              <div>
                <Form>

                  <Row>

                    <Col lg={12} md={12} sm={12} >

                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">For Bill Type | Insurance :</div>
                        <Col lg={2} md={2} sm={2}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Insurance"
                              disabled
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Insurance year</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option>Choose Worker Type</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={2} md={2} sm={2}>
                          <Button className="create-submit-btn">Submit</Button>
                        </Col>
                      </Row>
                    </Col>

                    
                  </Row>
                </Form>
              </div>
            </div>
            <div className="awc-table-heading">
              <h1>Generate Worker/Helper Insurance Bill</h1>
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

export default InsuranceBill;
