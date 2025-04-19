import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import { IoMdCloseCircle } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa";
const HistoryFinancialYear = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        {/* Main Container */}

        <Button className="awc-btn-money text-primary" onClick={handleShow}>
          <span className="badge  rounded-pill text-success d-inline-block nd-btn-district-btnn nd-btn-district1">
            Almora
          </span>
        </Button>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="History-heading">
              History of budget Allotment to Almora
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
                  <tr>
                    <td>Almora</td>
                    <td>UK282</td>
                    <td>15</td>
                    <td>Pre school Kit | प्रीस्कूल किट</td>
                    <td>14-09-2023</td>
                    <td>0.00</td>
                    <td>+120000.00</td>
                    <td>120000.00</td>
                    <td>
                      <div className="dpo-p">
                        <Button className="awc-btn-money text-primary">
                          <span className="badge  rounded-pill text-success d-inline-block nd-btn-district-btnn nd-btn-district1">
                            <IoMdCloseCircle className="close-icon" />
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Almora</td>
                    <td>UK282</td>
                    <td>15</td>
                    <td>Pre school Kit | प्रीस्कूल किट</td>
                    <td>14-09-2023</td>
                    <td>0.00</td>
                    <td>-55000.00</td>
                    <td>55000.00</td>
                    <td>
                      <div className="dpo-p">
                        <Button className="awc-btn-money text-primary">
                          <span className="badge  rounded-pill text-success d-inline-block nd-btn-district-btnn nd-btn-district1">
                             <FaFilePdf className="awc-pdf-file"/>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
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
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default HistoryFinancialYear;
