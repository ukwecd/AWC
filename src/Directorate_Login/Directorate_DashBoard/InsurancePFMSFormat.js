import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "./DirectorateDashBoard";
import Footer from "../../componets/footer/Footer";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";


const InsurancePFMSFormat = () => {
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
              <h1>Insurance Bill</h1>
            </div>



            <div className="box-container awc-after-fillter">
              <div>
                <Form>

                  <Row>



                    <Col lg={12} md={12} sm={12} >

                      <Row className="awc-bills-box1">
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className=" "
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">Choose Month</option>
                              <option value="april_manday_23">April 2023-24</option>

                              <option value="march_manday_23">March 2022-23</option>

                              <option value="february_manday_23">February 2022-23</option>

                              <option value="january_manday_23">January 2022-23</option>

                              <option value="october_manday">October 2021-22</option>

                              <option value="november_manday">November 2021-22</option>

                              <option value="december_manday">December 2021-22</option>

                              <option value="january_manday">January 2021-22</option>

                              <option value="february_manday">February 2021-22</option>

                              <option value="march_manday">March 2021-22</option>

                              <option value="march_april_2024">March &amp; April 2024-25</option>

                              <option value="april_manday_22">April 2022-23</option>

                              <option value="may_manday_22">May 2022-23</option>

                              <option value="june_manday_22">June 2022-23</option>

                              <option value="july_manday_22">July 2022-23</option>

                              <option value="august_manday_22">August 2022-23</option>

                              <option value="september_manday_22">September 2022-23</option>

                              <option value="october_manday_22">October2022-23</option>

                              <option value="november_manday_22">November2022-23</option>

                              <option value="october_pend_manday_21">October pending kendra mandey 2021-22</option>

                              <option value="november_pend_manday_21">November pending kendra mandey 2021-22</option>

                              <option value="december_pend_manday_21">December pending kendra mandey 2021-22</option>

                              <option value="december_manday_22">December 2022-23</option>

                              <option value="june_manday_23">June 2023-24</option>

                              <option value="may_manday_23">May 2023-24</option>

                              <option value="manday_before_nov_21">Manday Before Oct 2021</option>

                              <option value="july_manday_23">July 2023-24</option>

                              <option value="august_manday_23">August 2023-24</option>

                              <option value="sept_manday_23">September 2023-24</option>

                              <option value="oct_manday_23">October 2023-24</option>

                              <option value="nov_manday_23">November 2023-24</option>

                              <option value="dec_manday_23">December 2023-24</option>

                              <option value="jan_manday_23">January 2023-24</option>

                              <option value="feb_manday_23">February 2023-24</option>

                              <option value="may_manday_2024">May 2024-25</option>

                              <option value="may_manday_2024_pend">May 2024-25 Pending</option>

                              <option value="june_july_manday_2024">June &amp; July 2024-25</option>

                              <option value="aug_manday_2024">August 2024-25</option>

                              <option value="sept_manday_2024">September &amp; October 2024-25</option>

                              <option value="nov_manday_2024">November 2024-25</option>

                              <option value="dec_manday_2024">December 2024-25</option>

                              <option value="jan_manday_2024">January 2024-25</option>

                              <option value="feb_manday_2024">February 2024-25</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className=" "
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">Filter District Wise</option>
                              <option value="Almora,Almora">Almora</option>
                              <option value="Bageshwar,Bageshwar">Bageshwar</option>
                              <option value="Champawat,Champawat">Champawat</option>
                              <option value="Dehradun,Dehradun">Dehradun</option>
                              <option value="Haridwar,Haridwar">Haridwar</option>
                              <option value="Chamoli,Chamoli">Chamoli</option>
                              <option value="Pauri,Pauri Garhwal">Pauri</option>
                              <option value="Pithoragarh,Pithoragarh">Pithoragarh</option>
                              <option value="Rudraprayag,Rudra Prayag">Rudraprayag</option>
                              <option value="Nanital,Nainital">Nanital</option>
                              <option value="Tehri,Tehri Garhwal">Tehri</option>
                              <option value="Uttarkashi,Uttar kashi">Uttarkashi</option>
                              <option value="Usnagar,Udam Singh Nagar">Usnagar</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className=" "
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">Filter Grant Wise</option>

                              <option value="All">All</option>
                              <option value="GEN15">GEN15</option>
                              <option value="SCP30">SCP30</option>
                              <option value="ST31">ST31</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={2} md={2} sm={2} className="biil-submit text-start">
                          <Button className="aws-copy-Directorate-btn">Filter District</Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>

              <div>
                <Row className="mt-2">  <Col lg={12} md={12} sm={12} >
                  <Col lg={7} md={7} sm={12} >

                    <Row className="p-2">

                      <Col lg={3} md={3} sm={3} className="mb-2">
                        <Form.Group
                          className=" "
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            placeholder="0"
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={3} sm={3}>
                        <Form.Group
                          className=" "
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="text"
                            placeholder="1853"
                            disabled
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={1} md={1} sm={1} className="biil-submit">
                        <Button className="awc-btn-Directorate-exl">Table(1)</Button>
                      </Col>
                    </Row>
                  </Col></Col></Row>
              </div>
            </div>

            <div className="awc-after-fillter mt-3">

              <Row><h2>ALMORA Employee PMJJBY & PMSBY 2022-23 Insurance Bill list(0-1853)</h2>
                <p>Entries with Amount  0 will be hidden</p>

              </Row>
              <Row>
                <div className="awc-finance-mobresp">
                  <Col lg={6} md={6} sm={6} className="nd-staff-print11">
                    <div className="search-container">
                      <form>
                        <input
                          className="search"
                          id="searchleft1"
                          type="search"
                          name="q"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <label
                          className="button search-btn-Directorate"
                          for="searchleft1"
                        >
                          <span className="mglass">&#9906;</span>
                        </label>
                      </form>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6} className="nd-staff-print ">
                    <Button variant="secondary" className="aws-copy-Directorate-btn mx-3">
                      Copy
                    </Button>
                    <Button variant="secondary" className="dpo-prnt-Directorate-btn ">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>

              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="Direct-thead th">
                    <tr>
                      <th>Full Name in English</th>
                      <th>Full Name in Recognized Official Language</th>
                      <th>Gender</th>
                      <th>Address line 1</th>
                      <th>Address line 2</th>
                      <th>Address line 3</th>
                      <th>District</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Bank Name</th>
                      <th>IFSCCode</th>
                      <th>Account Number</th>
                      <th>Aadhaar Number</th>
                      <th>Pincode</th>
                      <th>Scheme Specific ID</th>
                      <th>Center Share Payment Amount</th>
                      <th>State Share Payment Amount</th>


                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><div className="dpo-p">Aanandi devi</div>
                      </td>
                      <td>Aanandi devi</td>
                      <td>F</td>
                      <td>	SHRIKOTNAHORI</td>
                      <td>	BASOT[ 01] [01]</td>
                      <td>	bhikiyasain</td>
                      <td>	Almora</td>
                      <td>		UTTARAKHAND</td>
                      <td>		INDIA</td>
                      <td>Uttarakhand Gramin Bank</td>
                      <td>SBIN0RRUTGB</td>
                      <td>76007749301</td>
                      <td></td>
                      <td>263680</td>
                      <td></td>
                      <td></td>
                      <td>	2900</td>
                    </tr>


                    <tr>
                      <td><div className="dpo-p">Aanandi devi</div>
                      </td>
                      <td>Aanandi devi</td>
                      <td>F</td>
                      <td>		BURANSHPANI</td>
                      <td>	SARAIKHET [02]</td>
                      <td>	syalde</td>
                      <td>	Almora</td>
                      <td>		UTTARAKHAND</td>
                      <td>		INDIA</td>
                      <td>ALMORA DISTRICT CENTRAL CO-OP.BANK</td>
                      <td>YESB0AZSB24</td>
                      <td>001634001000915</td>
                      <td></td>
                      <td>	263661</td>
                      <td></td>
                      <td></td>
                      <td>	2900</td>
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

export default InsurancePFMSFormat;
