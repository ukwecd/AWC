import React from "react";
import DashBoard from "../DashBoard";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";
import Footer from "../../footer/Footer";


const AllWorker = () => {
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
              <h1>HavaBag Current Balance 2024-25</h1>
            </div>
            <div className="box-container">
              <Row>
                <div className="nd-staff-mobresp">
                  <Col lg={12} md={12} sm={12}>
                    <div className="awc-text">
                      <h2>
                        पूर्व में हटाई गई आंगनबाड़ी कार्यकर्ती को जोड़ने के लिए
                        तकनीकी विभाग से संपर्क करें{" "}
                      </h2>
                    </div>
                  </Col>
                

                  {/* <Col lg={6} md={6} sm={12} className="nd-staff-print">
                    <div className="awc-view-btn">
                      <Button variant="primary" className="awc-btn-add">
                        Add New Worker Request
                      </Button>
                      <Button variant="primary" className="awc-btn-remove">
                        Remove Worker Request
                      </Button>
                    </div>
                  </Col> */}
                </div>
              </Row>
              <Row className="mt-3">
                <div className="awc-staff-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
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
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                  <Button variant="primary" className="awc-btn-add">
                        Add New Request
                      </Button>
                      <Button variant="primary" className="awc-btn-remove">
                        Remove Request
                      </Button>
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
              <div className="table-responsive-lg table-container-box mt-3">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="awc-thead">
                   
                    <tr>
                      <th>S.No</th>
                      <th>Edit</th>
                      <th>Aadhar No</th>
                      <th>Group Title</th>
                      <th>Grant Code</th>
                      <th>
                        Worker Name
                      
                      </th>
                      <th>Worker DOB</th>
                      <th>Worker Mobile No</th>
                      <th>Worker Type</th>
                      <th>District</th>
                      <th>Project</th>
                      <th>AWC Name</th>
                      <th>AWC Code</th>
                      <th>Center Manday</th>
                     <th>State Manday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>-</td>

                      <td>
                      246475680948
                      </td>
                      <td>
                        
                      </td>
                      <td>
                      SCP30
                      </td>
                      <td>hansi arya</td>
                      <td>25-Jul-1979</td>
                      <td>9528944835</td>
                      <td>AWW</td>
                      <td>almora</td>
                      <td>havalbag</td>
                      <td>SHIDHPUR</td>
                      <td>5064060138</td>
                      <td>₹4500</td>
                      <td>₹4800</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <div className="tech-staff-perviose">
                    <div>Showing 1 to 10 of 105 entries</div>
                  </div>{" "}
                </Col>
                <Col lg={6} md={6} sm={12} className="awc-pading-next">
                  {" "}
                  <div className="tech-staff-table">
                    {" "}
                    <Pagination className="awc-paging">
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                     
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </div>{" "}
                </Col>
              </Row>

            </div>
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWorker;
