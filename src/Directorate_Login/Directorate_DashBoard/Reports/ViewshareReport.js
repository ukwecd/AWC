import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import "../../../Directorate_Login/assets/css/ViewshareReport.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";


const ViewshareReport = () => {
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
              <h1>View GRANT-WISE CENTER/STATE SHARE Report</h1>
            </div>



            <div className="box-container awc-after-fillter">
              <div>
                <Form>

                  <Row>



                    <Col lg={12} md={12} sm={12} >

                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">Bill of:</div>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className=" "
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">Choose Month and Bill type</option>
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
                              <option value="" selected="" disabled="">District</option>
                              <option value="Almora">Almora</option>
                              <option value="Bageshwar">Bageshwar</option>
                              <option value="Champawat">Champawat</option>
                              <option value="Dehradun">Dehradun</option>
                              <option value="Haridwar">Haridwar</option>
                              <option value="Chamoli">Chamoli</option>
                              <option value="Pauri">Pauri</option>
                              <option value="Pithoragarh">Pithoragarh</option>
                              <option value="Rudraprayag">Rudraprayag</option>
                              <option value="Nanital">Nanital</option>
                              <option value="Tehri">Tehri</option>
                              <option value="Uttarkashi">Uttarkashi</option>
                              <option value="Usnagar">Usnagar</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={1} md={1} sm={1} className="biil-submit">
                          <Button className="aws-copy-Directorate-btn">Submit</Button>
                        </Col>

                        <div className="bill-data "><div><b>Month : </b>	April 2023-24</div>
                          <div><b>Choosen District :</b> 	Almora</div></div>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>

              <div>

              </div>
            </div>

            <div className="awc-after-fillter mt-3">

              <Row className="d-flex justify-content-between">
                <Col lg={9} md={9} sm={12}><h2>District Wise Report  :</h2></Col>
                <Col lg={3} md={3} sm={12} className="aws-top-btn"> </Col>




              </Row>


              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>

                  <thead className="ViewshareReport-thead th ">
                    <tr>
                      <th>District</th>
                      <th>	GEN15 | Total</th>
                      <th>	GEN15 | Entry</th>
                      <th>	GEN15 | Center Share</th>
                      <th>GEN15 | State Share</th>
                      <th>SCP30 | Total</th>
                      <th>SCP30 | Entry</th>
                      <th>SCP30 | Center Share</th>
                      <th>SCP30 | State Share</th>
                      <th>ST31 | Total</th>
                      <th>ST31 | Entry</th>
                      <th>ST31 | Center Share</th>
                      <th>ST31 | State Share</th>
                      <th>Total Employee</th>
                      <th>Total Entry</th>


                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td class="">Almora</td>
                      <td >2581</td>
                      <td >	2526</td>
                      <td ><b><i class="fa fa-inr"></i>8624601</b></td>
                      <td ><b><i class="fa fa-inr"></i>8912600</b></td>
                      <td >		453</td>
                      <td >		437</td>
                      <td ><b><i class="fa fa-inr"></i>1486728</b></td>
                      <td ><b><i class="fa fa-inr"></i>1585850</b></td>
                      <td >0</td>
                      <td >0</td>
                      <td ><b><i class="fa fa-inr"></i>0</b></td>
                      <td ><b><i class="fa fa-inr"></i>0</b></td>
                      <td >3034</td>
                      <td >	2963</td>


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
            </div >



            {/* <div className="awc-dpo-head">
<h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
</div> */}

            < div >
              <Footer />
            </div >
          </div >
        </div>
      </div>
    </>
  );
};

export default ViewshareReport;
