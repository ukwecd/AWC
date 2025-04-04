import { useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function Medical() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="awc-btn-money" onClick={handleShow}>
        <span className="badge  rounded-pill text-dark-white d-inline-block awc-view-file nd-btn-district1">
           Medical
        </span>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="awc-buget-heading"> History of budget allotment to Almora ( medical15 )  FIN/2023-24</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="awc-buget-subheading">
                <h2>UK282 | 15 | Medical</h2>
            </div>
        <div className="table-responsive-lg table-container-box mt-1">
                <Table className="dpo-sub-table" striped bordered hover>
                  <thead className="dpo-thead">
                    <tr>
                      <th>District Name</th>
                      <th>Date</th>
                      <th>Old Balance</th>
                     <th>Alloted/Spend Amount</th>
                      <th>New Balance</th>
                      <th>Uploaded file</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Almora</td>
                      <td>salt[0506042]</td>
                      <td>Jalkhan[03]</td>
                      <td>Jipha</td>
                      <td>Jipha</td>
                    
                    </tr>
                  </tbody>
                </Table>
              </div>

        </Modal.Body>
        <Modal.Footer className="awc-buget-cls-btn">
          <Button variant="secondary" onClick={handleClose} className="awc-buget-sub-btn">
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Medical;
