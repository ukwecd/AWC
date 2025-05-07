import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "./DirectorateDashBoard";
import Footer from "../../componets/footer/Footer";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";


const SendMandaySMS = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DirectorateDashBoard />

          {/* Main Content */}

          <div className="main">

            <div className="awc-dpo-head">
              <h1>Generate Manday SMS Excel</h1>
            </div>
            <div className="awc-after-fillter mt-2">
              <Row> <h2>SMS Excel for</h2></Row>

              <Form>

                <Row>

                  <Col lg={12} md={12} sm={12} >

                    <Row className="awc-bills-box1">
                      <Col lg={3} md={3} sm={3}>
                        <Form.Group

                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Select className="mb-2">
                            <option value="" selected="" disabled="">Choose Month</option>
                            <option value="pmjjby_24_25">PMJJBY &amp; PMSBY 2024-25</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={4} md={4} sm={4}>
                        <Form.Group

                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Select className="mb-2">
                            <option value="" selected="" disabled="">Choose district</option>
                            <option value="Almora">Almora</option>
                            <option value="Bageshwar">Bageshwar</option>
                            <option value="Champawat">Champawat</option>
                            <option value="Dehradun">Dehradun</option>
                            <option value="Haridwar">Haridwar</option>
                            <option value="Chamoli">Chamoli</option>
                            <option value="Pauri Garhwal">Pauri Garhwal</option>
                            <option value="Pithoragarh">Pithoragarh</option>
                            <option value="Rudra Prayag">Rudra Prayag</option>
                            <option value="Nainital">Nainital</option>
                            <option value="Tehri Garhwal">Tehri Garhwal</option>
                            <option value="Uttar kashi">Uttar kashi</option>
                            <option value="Udam Singh Nagar">Udam Singh Nagar</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={1} md={1} sm={1} className="biil-submit">
                        <Button className="aws-copy-Directorate-btn">Submit</Button>
                      </Col>
                      <Col lg={2} md={2} sm={2} className="mb-2 text-start"> <Button className="awc-btn-Directorate-exl">View SMS send Log</Button></Col>
                    </Row>
                  </Col>


                </Row>
              </Form>
            </div>
            <div className="awc-after-fillter mt-3">
              <Row> <h2>PMJJBY & PMSBY 2024-25(SMS EXCEL)</h2></Row>
              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="Direct-thead th">
                    <tr>
                      <th>SNo.</th>
                      <th>District</th>
                      <th>Project </th>
                      <th>No. of Worker</th>
                      <th>	AWW</th>
                      <th>	AWH</th>
                      <th>	MINI</th>
                      <th>Send SMS</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>

                      <td><div className="dpo-p"> 1 </div>
                      </td>

                      <td>	Almora</td>
                      <td>	bhaisiyachana</td>
                      <td>	1</td>
                      <td>	1</td>
                      <td>	0</td>
                      <td>	0</td>
                      <td><Button className="note-btn">SEND SMS Notification</Button></td>



                    </tr>

                    <tr>

                      <td><div className="dpo-p"> 1 </div>
                      </td>

                      <td>	Almora</td>
                      <td>	bhaisiyachana</td>
                      <td>	192</td>
                      <td>	134</td>
                      <td>	58</td>
                      <td>	0</td>
                      <td><Button className="aww-btn mb-2">AWW</Button> <Button className="awh-btn mb-2">AWH</Button> <Button className="mini-btn mb-2">MINI</Button></td>



                    </tr>

                  </tbody>
                </Table>


              </div>
              <Row className="awc-m-t">
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
                    <Pagination className="Directorate-paging">
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


            {/* <div className="awc-dpo-head">
  <h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
</div> */}

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMandaySMS;
