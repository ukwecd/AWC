import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, Row } from "react-bootstrap";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
const AllotingBudget = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        {/* Main Container */}

        <Button className="awc-btn-money" onClick={handleShow}>
          <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
            00
          </span>
        </Button>

        <Modal show={show} onHide={handleClose} size="lg">
          <Form>
            <Modal.Header closeButton>
              <Modal.Title className="History-heading">
                Alloting budget to Almora District 2024-25
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-t-0px">

              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Row>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="finace-label">
                          District Name :
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Almora"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="finace-label">
                          Scheme :
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="UK182"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="finace-label">
                          Grant :
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="15"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="finace-label">
                          Choose Component :
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="TA"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="finace-label">
                          Letter No. :
                        </Form.Label>
                        <Form.Control
                          type="number"

                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="finace-label">
                          Allotment Date :
                        </Form.Label>
                        <Form.Control type="date"></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label className="awc-dpo-label-title">
                          Amount | {" "}
                          <span className="note-text">
                            {" "}
                            &nbsp; Current Balance ( 0.00 )
                          </span>

                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter the Amount you want to allot (in RS)"></Form.Control>
                        <span className="finance-pdf">
                          Note: This Amount will to Added to Current Balance
                        </span>
                      </Form.Group>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="awc-dpo-label-title">
                          Remark:
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Please Enter your Remark"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="awc-close-primary-btn"
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={handleClose}
                className="awc-dop-primary-btn"
              >
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default AllotingBudget;
