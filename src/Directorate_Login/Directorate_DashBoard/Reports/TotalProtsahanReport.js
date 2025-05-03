import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Pagination, Row, Table } from "react-bootstrap";


const TotalProtsahanReport = () => {
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
              <h1>View Total Protsahan Report December & January District Wise</h1>
            </div>





            <div className="awc-after-fillter mt-3">

              <Row className="d-flex justify-content-between">
                <Col lg={9} md={9} sm={12}><h2>Entry Log  :</h2></Col>





              </Row>
              <Row>
                <div className="awc-finance-mobresp">
                  <Col lg={6} md={6} sm={12} className="nd-staff-print11">
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
                  <Col lg={6} md={6} sm={12} className="nd-staff-print ">
                    <Button variant="secondary" className="aws-copy-Directorate-btn mx-3">
                      Copy
                    </Button>

                    <Button className="awc-btn-Directorate-exl">Excel</Button>
                    <Button variant="secondary" className="dpo-prnt-Directorate-btn ">
                      Print
                    </Button>
                  </Col>
                </div>
              </Row>

              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="Direct-thead th ">

                    <tr class="warning" role="row">
                      <th rowspan="1" colspan="1">S.no</th>
                      <th rowspan="1" colspan="1">District Name</th>
                      <th colspan="2" rowspan="1">December 2021-22</th>
                      <th colspan="2" rowspan="1">January 2021-22</th>
                      <th colspan="2" rowspan="1">Total</th></tr>
                    <tr >
                      <th ></th><th rowspan="1" colspan="1" ></th>
                      <th rowspan="1" colspan="1" >Worker</th>
                      <th rowspan="1" colspan="1" >Claim Amount</th>
                      <th rowspan="1" colspan="1" >Worker</th>
                      <th rowspan="1" colspan="1" >Claim Amount</th>
                      <th rowspan="1" colspan="1" >Total Worker</th>
                      <th rowspan="1" colspan="1" >Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  >
                      <td  >1</td>
                      <td>almora</td>
                      <td>2169</td>
                      <td>4330000</td>
                      <td>3004</td>
                      <td>5986000</td>
                      <td><b>5173</b></td>
                      <td><b>10316000</b></td>
                    </tr><tr  >
                      <td  >2</td>
                      <td>bageshwar</td>
                      <td>1381</td>
                      <td>2760000</td>
                      <td>1378</td>
                      <td>2752000</td>
                      <td><b>2759</b></td>
                      <td><b>5512000</b></td>
                    </tr><tr  >
                      <td  >3</td>
                      <td>chamoli</td>
                      <td>1789</td>
                      <td>3779562</td>
                      <td>1789</td>
                      <td>3578000</td>
                      <td><b>3578</b></td>
                      <td><b>7357562</b></td>
                    </tr><tr  >
                      <td  >4</td>
                      <td>champawat</td>
                      <td>1042</td>
                      <td>2084000</td>
                      <td>1042</td>
                      <td>2084000</td>
                      <td><b>2084</b></td>
                      <td><b>4168000</b></td>
                    </tr><tr  >
                      <td  >5</td>
                      <td>dehradun</td>
                      <td>3475</td>
                      <td>6962000</td>
                      <td>3468</td>
                      <td>6944000</td>
                      <td><b>6943</b></td>
                      <td><b>13906000</b></td>
                    </tr><tr  >
                      <td  >6</td>
                      <td>haridwar</td>
                      <td>4304</td>
                      <td>8459000</td>
                      <td>5714</td>
                      <td>11408000</td>
                      <td><b>10018</b></td>
                      <td><b>19867000</b></td>
                    </tr><tr  >
                      <td  >7</td>
                      <td>nanital</td>
                      <td>2427</td>
                      <td>4854000</td>
                      <td>2421</td>
                      <td>4838000</td>
                      <td><b>4848</b></td>
                      <td><b>9692000</b></td>
                    </tr><tr  >
                      <td  >8</td>
                      <td>pauri</td>
                      <td>2611</td>
                      <td>5210000</td>
                      <td>2879</td>
                      <td>5724000</td>
                      <td><b>5490</b></td>
                      <td><b>10934000</b></td>
                    </tr><tr  >
                      <td  >9</td>
                      <td>pithoragarh</td>
                      <td>1682</td>
                      <td>3358000</td>
                      <td>1715</td>
                      <td>3418000</td>
                      <td><b>3397</b></td>
                      <td><b>6776000</b></td>
                    </tr><tr  >
                      <td  >10</td>
                      <td>rudraprayag</td>
                      <td>1131</td>
                      <td>3864179</td>
                      <td>1131</td>
                      <td>2260000</td>
                      <td><b>2262</b></td>
                      <td><b>6124179</b></td>
                    </tr></tbody>
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

export default TotalProtsahanReport;
