import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "../../assets/css/ForGotPassword.css";
function AWCRegistration() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <p onClick={handleShow}>नए आवेदक/उपयोगकर्त अभी पंजीकरण करें</p>

      <Modal show={show} onHide={handleClose} size="md">
        <Form>
          <Modal.Header closeButton>
            <Modal.Title className="awc-modal-title">
              पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज करें।
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="awc-modal-body">
            <Form.Group
              className="mb-3 awc-label-input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="awc-modal-label">
                पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज
                करें।
              </Form.Label>
              <Form.Control
                type="number"
                placeholder=" पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज करें।"
                required
                className="awc-forgot-input"
              />
            </Form.Group>
            <div className="mb-3 nd-label-input">
              <label
                className=" awc-modal-label form-label"
                for="exampleForm.ControlTextarea1"
              >
                अपने जिले का नाम चुनें
              </label>
              <select
                aria-label="Default select example"
                className="awc-label-input form-select"
                id="exampleForm.ControlTextarea1"
              >
                <option value="">Choose District Name</option>
                <option value="Almora">Almora</option>
                <option value="Bageshwar">Bageshwar</option>
                <option value="Chamoli">Chamoli</option>
                <option value="Champawat">Champawat</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Haridwar">Haridwar</option>
                <option value="Nanital">Nanital</option>
                <option value="Pauri Garhwal">Pauri Garhwal</option>
                <option value="Pithoragarh">Pithoragarh</option>
                <option value="Rudraprayag">Rudraprayag</option>
                <option value="Tehri Garhwal">Tehri Garhwal</option>
                <option value="Usnagar">Usnagar</option>
                <option value="Uttarkashi">Uttarkashi</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer className="nd-registration">
            <Link to="/CreatePassword">
              {" "}
              <Button variant="secondary" className="awc-primary-btn">
                जानकारी दर्ज करे
              </Button>
            </Link>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AWCRegistration;
