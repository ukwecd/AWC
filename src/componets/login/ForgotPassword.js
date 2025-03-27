import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "../../assets/css/ForGotPassword.css";
function ForgotPassword() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p onClick={handleShow}>पासवर्ड भूल गए है ?</p>
      
      <Modal show={show} onHide={handleClose} size="md">
        <Form>
        <Modal.Header closeButton>
          <Modal.Title className="awc-modal-title">
            पासवर्ड भूल जाने की स्थिति में पासवर्ड रीसेट फॉर्म
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="awc-modal-body">
          <Form.Group className="mb-3 nd-label-input" controlId="exampleForm.ControlInput1">
            <Form.Label className="awc-modal-label"> पंजीकृत मोबाइल नंबर दर्ज करें।</Form.Label>
            <Form.Control
              type="number"
              placeholder=" पंजीकृत मोबाइल नंबर दर्ज करें।" 
              required className="awc-forgot-input"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="nd-registration">
         <Link to="/OTPPage"> <Button variant="secondary" className="awc-primary-btn">
            जानकारी दर्ज करे
          </Button></Link>
        </Modal.Footer>
        </Form>
      </Modal>
      
    </>
  );
}

export default ForgotPassword;
