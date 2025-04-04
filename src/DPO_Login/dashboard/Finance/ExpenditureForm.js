import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCurrencyRupee } from "react-icons/bs";

function ExpenditureForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="awc-btn-money" onClick={handleShow}>
        <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
          <BsCurrencyRupee className="awc-dpo-add-icon" /> 0
        </span>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="awc-buget-heading">
            Expenduture Buget to Almora 2023-24
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="box-container">
            <div class="awc-table-head">
              {/* <h1>1. Budget Surrender Form 2023-24</h1> */}
              <Form>
                <Row>
                  {/* <div className="awc-dpo-label-title">District Name :</div> */}
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        District Name
                      </Form.Label>
                      <Form.Control type="text" placeholder="almora" disabled />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Scheme
                      </Form.Label>
                      <Form.Control type="text" placeholder="UK282" disabled />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Grant
                      </Form.Label>
                      <Form.Control type="text" placeholder="15" disabled />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Chooce Component
                      </Form.Label>
                      <Form.Control type="text" placeholder="TA" disabled />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Expendture Date
                      </Form.Label>
                      <Form.Control type="date" placeholder="TA" disabled />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Letter No
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label className="awc-dpo-label-title">
                        Upload Document <span className="note-text">
                        (pdf):
                      </span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        size="sm"
                        className="awc-control  form-control custom-file-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={8} md={8} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Amount | Current Balance ( 0 )
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the Amount you Spend (in RS)"
                        disabled
                      />
                      <span className="note-text">
                        Note: This Amount will be Deducted from Current Balance
                      </span>
                    </Form.Group>
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="awc-dpo-label-title">
                        Remark
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="awc-buget-cls-btn mx-3">
          <Button className="awc-dop-primary-btn m-right" onClick={handleClose}>
            Submit
          </Button>

          <Button
            variant="secondary"
            onClick={handleClose}
            className="awc-buget-sub-btn"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpenditureForm;
