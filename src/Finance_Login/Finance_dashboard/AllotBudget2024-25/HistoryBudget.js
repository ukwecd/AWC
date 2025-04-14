import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import FinanceDashBoard from "../FinanceDashBoard";
import { Link } from "react-router-dom";

import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
const HistoryBudget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        {/* Main Container */}

        <Button className="awc-btn-money" onClick={handleShow}>
          <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
            Almora
          </span>
        </Button>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="History-heading">
              History of budget 2024-25 allotment to Almora
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="table-responsive-lg table-container-box mt-1">
              <Table className="awc-sub-table" striped bordered hover>
                <thead className="finance-thead">
                  <tr>
                    <th>District Name</th>
                    <th>Scheme</th>
                    <th>Grant</th>
                    <th>Component</th>
                    <th>Date</th>
                    <th>Old Balance</th>
                    <th>Alloted/Spend Amount</th>
                    <th>New Balance </th>
                    <th>Uploaded File</th>
                  </tr>
                </thead>
                <tbody>
                    
                </tbody>
              </Table>
            </div>
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
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default HistoryBudget;
