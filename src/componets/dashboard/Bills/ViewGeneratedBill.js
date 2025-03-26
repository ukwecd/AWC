import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import "../../../assets/css/Received.css";
import { useNavigate } from "react-router-dom";
import DashBoard from "../DashBoard";
import Footer from "../../footer/Footer";

const ViewGeneratedBill = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main received-form">
            <div className="awc-table-heading">
              <h1>OTP Authentication</h1>
              <p>Verify with otp to View Application Recevied</p>
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
                        Project Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Havalbag"
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
                      <Form.Label className="awc-label">
                        CDPO Inchange
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Vinita Saxsena"
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
                      <Form.Label className="awc-label">
                        Upload Documents (PDF)
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="+91-9876543210"
                        className="awc-control"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <div className="awc-recevid-submit">
                    <Button className="awc-dashboard-btn">Send OTP</Button>
                    <Button
                      className="awc-sent-btn"
                      onClick={() => navigate("/InnerDashBoard")}
                    >
                      Go Back
                    </Button>
                  </div>
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

export default ViewGeneratedBill;
