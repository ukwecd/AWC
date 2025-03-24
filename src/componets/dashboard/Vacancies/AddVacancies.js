import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Row, Table, Form } from "react-bootstrap";
import "../../../assets/css/History.css";
import { MdError } from "react-icons/md";

const AddVacancies = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-table-heading">
              <h1>Dasoli PassBook 2024-25</h1>
            </div>
            <div className="box-container">
              <div className="awc-form-box">
                <Row>
                  <Col lg={3} md={3} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        District Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Almora"
                        disabled
                        className="awc-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={3} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        Project Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Havalbag[0983646]"
                        disabled
                        className="awc-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={3} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        Select sector for Recruitment
                      </Form.Label>
                      <Form.Select aria-label="Default awc-select-option">
                        <option>MaJOTI[01]</option>
                        <option>MANDAL[02]</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={3} md={3} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="awc-label">
                        Select AWC [Center Code]
                      </Form.Label>
                      <Form.Select aria-label="Default awc-select-option">
                        <option>MaJOTI[01]</option>
                        <option>MANDAL[02]</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <div className="awc-sector-submit">
                    <Button className="awc-sector-btn">Sector AWC</Button>
                  </div>
                </Row>
              </div>
              <Row className="mt-3">
                <div className="nd-staff-mobresp">
                  <Col lg={6} md={6} sm={6} className="nd-staff-print11">
                    <div class="search-container">
                      <form>
                        <input
                          class="search"
                          id="searchleft"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          class="button search-btn-sector "
                          for="searchleft"
                        >
                          <span class="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="nd-staff-print ">
                    <Button variant="warning" className="nd-btn-copy">
                      Copy
                    </Button>
                    <Button variant="warning" className="mx-2 nd-btn-excel">
                      Excel
                    </Button>
                    <Button variant="secondary" className="nd-btn-prt">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>

              <div>
                <div className="table-responsive-lg table-container-box">
                  <Table className="awc-sub-table">
                    <thead className="awc-thead">
                      <tr>
                        <th>S.No</th>
                        <th>Action</th>
                        <th>Sector Name</th>
                        <th>AWC Code</th>
                        <th>RV/Ward Name</th>
                        <th>AWC Type</th>
                        <th>Vacancy Name</th>
                        <th>Reserved Category</th>
                        <th>Remark</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </Table>
                  <div className="text-center awc-dna">
                    {" "}
                    <MdError /> Data Not Available
                  </div>
                </div>
              </div>
            </div>
            <div>{/* <Footer /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVacancies;
