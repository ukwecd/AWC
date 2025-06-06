import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import "../../../Directorate_Login/assets/css/ViewCustomReport.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Form, Pagination, Row, Table } from "react-bootstrap";


const ViewCustomReport = () => {
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
              <h1>View Custom Bill Report</h1>
            </div>



            <div className="box-container awc-after-fillter">
              <div>
                <Form>

                  <Row>



                    <Col lg={12} md={12} sm={12} >

                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">View Custom Bill Report:</div>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className=" "
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">Choose Month and Bill type</option>
                              <option value="pmjjby_24_25">PMJJBY &amp; PMSBY 2024-25(Insurance)</option>
                              <option value="pmjjby_23_24">PMJJBY &amp; PMSBY 2023-24(Insurance)</option>
                              <option value="feb_manday_2024">February 2024-25(Manday)</option>
                              <option value="jan_manday_2024">January 2024-25(Manday)</option>
                              <option value="dec_manday_2024">December 2024-25(Manday)</option>
                              <option value="nov_manday_2024">November 2024-25(Manday)</option>
                              <option value="sept_manday_2024">September &amp; October 2024-25(Manday)</option>
                              <option value="aug_manday_2024">August 2024-25(Manday)</option>
                              <option value="june_july_manday_2024">June &amp; July 2024-25(Manday)</option>
                              <option value="may_manday_2024_pend">May 2024-25 Pending(Manday)</option>
                              <option value="may_manday_2024">May 2024-25(Manday)</option>
                              <option value="march_april_2024">March &amp; April 2024-25(Manday)</option>
                              <option value="feb_manday_23">February 2023-24(Manday)</option>
                              <option value="jan_manday_23">January 2023-24(Manday)</option>
                              <option value="pmjjby_22_23">PMJJBY &amp; PMSBY 2022-23(Insurance)</option>
                              <option value="dec_manday_23">December 2023-24(Manday)</option>
                              <option value="nov_manday_23">November 2023-24(Manday)</option>
                              <option value="oct_manday_23">October 2023-24(Manday)</option>
                              <option value="sept_manday_23">September 2023-24(Manday)</option>
                              <option value="august_manday_23">August 2023-24(Manday)</option>
                              <option value="july_manday_23">July 2023-24(Manday)</option>
                              <option value="manday_before_nov_21">Manday Before Oct 2021(Manday)</option>
                              <option value="june_manday_23">June 2023-24(Manday)</option>
                              <option value="pend_2122_protsahan">Pending Protsahan 2021-22(Protsahan)</option>
                              <option value="may_manday_23">May 2023-24(Manday)</option>
                              <option value="april_manday_23">April 2023-24(Manday)</option>
                              <option value="march_manday_23">March 2022-23(Manday)</option>
                              <option value="february_manday_23">February 2022-23(Manday)</option>
                              <option value="january_manday_23">January 2022-23(Manday)</option>
                              <option value="december_manday_22">December 2022-23(Manday)</option>
                              <option value="december_pend_manday_21">December pending kendra mandey 2021-22(Manday)</option>
                              <option value="november_pend_manday_21">November pending kendra mandey 2021-22(Manday)</option>
                              <option value="october_pend_manday_21">October pending kendra mandey 2021-22(Manday)</option>
                              <option value="november_manday_22">November2022-23(Manday)</option>
                              <option value="october_manday_22">October2022-23(Manday)</option>
                              <option value="september_manday_22">September 2022-23(Manday)</option>
                              <option value="august_manday_22">August 2022-23(Manday)</option>
                              <option value="july_manday_22">July 2022-23(Manday)</option>
                              <option value="june_manday_22">June 2022-23(Manday)</option>
                              <option value="may_manday_22">May 2022-23(Manday)</option>
                              <option value="april_manday_22">April 2022-23(Manday)</option>
                              <option value="january_protsahan">January 2021-22(Protsahan)</option>
                              <option value="december_protsahan">December 2021-22(Protsahan)</option>
                              <option value="march_manday">March 2021-22(Manday)</option>
                              <option value="february_manday">February 2021-22(Manday)</option>
                              <option value="january_manday">January 2021-22(Manday)</option>
                              <option value="december_manday">December 2021-22(Manday)</option>
                              <option value="november_manday">November 2021-22(Manday)</option>
                              <option value="october_manday">October 2021-22(Manday)</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={3} md={3} sm={3}>
                          <Form.Group
                            className=" "
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Select className="mb-2">
                              <option value="" selected="" disabled="">District or Project Wise</option>
                              <option value="District">District Wise</option>
                              <option value="Project">Project Wise</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={1} md={1} sm={1} className="biil-submit">
                          <Button className="aws-copy-Directorate-btn">Submit</Button>
                        </Col>

                        <div className="bill-data "><div><b>Month : </b>	PMJJBY & PMSBY 2024-25</div>
                          <div><b>Bill Type :</b> Insurance</div></div>
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

                  <thead className="ViewCustomReport-thead th ">
                    <tr>
                      <th>District</th>
                      <th>	AWW | Total</th>
                      <th>	AWW | Entry</th>
                      <th>	AWH | Total</th>
                      <th>AWH | Entry</th>
                      <th>MINI | Total</th>
                      <th>MINI | Entry</th>
                      <th>Total Employee</th>
                      <th>Total Entry</th>
                      <th>CDPO</th>
                      <th>DPO</th>
                      <th>Approved</th>


                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td class="">Almora</td>
                      <td >1779</td>
                      <td >	477</td>
                      <td >1081</td>
                      <td >220</td>
                      <td >	0</td>
                      <td >	0</td>
                      <td >	2860</td>
                      <td >	697</td>
                      <td >697</td>
                      <td>0</td>
                      <td></td>


                    </tr>
                    <tr>
                      <td>Bageshwar</td>
                      <td>	797</td>
                      <td>	0</td>
                      <td>	510</td>
                      <td>	0</td>
                      <td>	0</td>
                      <td>	0</td>
                      <td>	1307</td>
                      <td>	0</td>
                      <td>	0</td>
                      <td>	0</td>
                      <td></td>

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

export default ViewCustomReport;
