import React from "react";
import { Button, Col,  Row,  Form } from "react-bootstrap";
import "../../../DPO_Login/assets/css/AllWorkerList.css";
import { FaAngleLeft } from "react-icons/fa6";
import DPODashBoard from "../DPODashBoard";
import Footer from "../../../componets/footer/Footer";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../../DPO_Login/assets/css/WorkerAccounts.css";

const WorkerAccountDetails = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DPODashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1>Worker Account Details</h1>
            </div>
            <div className="box-container">
              <Row>
                <div class="awc-table-head">
                  <h1> <FaAngleLeft className="go-back-arrow" onClick={goBack} />Edit Worker Account Details</h1>
                </div>
                <div className="awc-dpo-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
                    <div className="search-container">
                      <form>
                        <input
                          className="search"
                          id="searchleft"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          className="button search-btn-dpo "
                          for="searchleft"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button className="awc-btn-copy">Copy</Button>

                    <Button variant="secondary" className="awc-dpo-btn-prt">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>
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
                            Worker Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Shama Parbeen"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Worker DOB
                            <span className="awc-allready">
                              <p>&nbsp;(Already chosen)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="date"
                            placeholder="0000-00-00"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            <span className="awc-allready">
                              <p>&nbsp;(Change to New)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="date"
                            placeholder="0000-00-00"
                           
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Worker Aadhar Card No.
                            {/* <span className="awc-allready"><p>&nbsp;(Already chosen)</p></span> */}
                          </Form.Label>

                          <Form.Control
                            type="number"
                            placeholder="9864xxxxxx"
                            
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Worker Mobile No.(if Known)
                            {/* <span className="awc-allready"><p>&nbsp;(Already chosen)</p></span> */}
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="6364xxxxxx"
                           
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Group Name
                            <span className="awc-allready">
                              <p>&nbsp;(Already chosen)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="TADI-AWW002"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            <span className="awc-allready">
                              <p>&nbsp;(Change to New)</p>
                            </span>
                          </Form.Label>

                          <Form.Select aria-label="Default select example">
                            <option>Select Group Name</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Worker Type
                            <span className="awc-allready">
                              <p>&nbsp;(Already chosen)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="AWW"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            <span className="awc-allready">
                              <p>&nbsp;(Change to New)</p>
                            </span>
                          </Form.Label>

                          <Form.Select aria-label="Default select example">
                            <option>Select Worker Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Manday Amount
                            <span className="awc-allready">
                              <p>&nbsp;(Center Manday)</p>
                            </span>
                          </Form.Label>

                          <Form.Control type="text" placeholder="0"  />
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            <span className="awc-allready">
                              <p>&nbsp;(State Manday)</p>
                            </span>
                          </Form.Label>

                          <Form.Control type="text" placeholder="0"/>
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Account Number
                          </Form.Label>

                          <Form.Control
                            type="number"
                            placeholder="3112xxxxx"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            IFSC Code
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="SBIN005672"
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            Bank Details
                            <span className="awc-allready">
                              <p>&nbsp;(Already chosen)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="State Bank Of India"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            <span className="awc-allready">
                              <p>&nbsp;(Change to New)</p>
                            </span>
                          </Form.Label>

                          <Form.Select aria-label="Default select example">
                            <option>Select Bank Name</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                           District Name
                            
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="Almora"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                           Project Name
                            
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="Tadikhet"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                            AWC Details
                            <span className="awc-allready">
                              <p>&nbsp;(Already chosen)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="5064654587"
                            disabled
                          />
                           </Form.Group>
                           </Col>
                          <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                          
                            <span className="awc-allready">
                              <p>&nbsp;(Already chosen)</p>
                            </span>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="MalRoad"
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={4} md={4} sm={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label className="awc-dpo-label-title">
                          
                            <span className="awc-allready">
                              <p>&nbsp;(Change to New)</p>
                            </span>
                          </Form.Label>

                          <Form.Select aria-label="Default select example">
                            <option>Select Center Name</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button
                        variant="secondary"
                        className="dpo-back-btn mx-4"
                        onClick={goBack}
                      >
                        Go Back
                      </Button>
                      <Button className="awc-dop-primary-btn m-right">
                         <FaUserEdit className="awc-dpo-add-icon" /> Account Details
                      </Button>
                    </div>
                  </Form>
                </div>
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

export default WorkerAccountDetails;
