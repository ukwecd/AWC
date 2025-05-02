import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import "../../../Directorate_Login/assets/css/ViewGrantWise.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Button, Col, Form, Row, Table } from "react-bootstrap";


const WorkerWithGrant = () => {
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
              <h1>View Grant-wise | Worker wise |District Bill Report</h1>
            </div>



            <div className="box-container awc-after-fillter">
              <div>
                <Form>

                  <Row>



                    <Col lg={12} md={12} sm={12} >

                      <Row className="awc-bills-box1">
                        <div className="awc-label-title">Bill Month:</div>
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

                        <Col lg={1} md={1} sm={1} className="biil-submit">
                          <Button className="aws-copy-Directorate-btn">Submit</Button>
                        </Col>

                        <div className="bill-data "><div><b>Month : </b>	March 2022-23</div>
                          <div><b>Bill Type :</b> Manday</div></div>
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
                <Col lg={9} md={9} sm={12}><h2>Project Wise Report :</h2></Col>
                <Col lg={3} md={3} sm={12} className="aws-top-btn"> </Col>




              </Row>


              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>

                  <thead className="workergrant-thead th">
                    <tr>
                      <th>District</th>
                      <th>GEN15|AWW</th>
                      <th>GEN15|AWH</th>
                      <th>GEN15|MINI</th>
                      <th>GEN15|Total</th>
                      <th>SCP30|AWW</th>
                      <th>SCP30|AWH</th>
                      <th>SCP30|MINI</th>
                      <th>SCP30|Total</th>
                      <th>ST31|AWW</th>
                      <th>ST31|AWH</th>
                      <th>ST31|MINI</th>
                      <th>ST31|Total</th>

                    </tr>
                  </thead>
                  <tbody>


                    <tr>

                      <td>Almora</td>
                      <td>971</td>
                      <td>959</td>
                      <td>593</td>
                      <td><b>2523</b></td>


                      <td>192</td>
                      <td>188</td>
                      <td>63</td>
                      <td><b>443</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>





                    </tr>


                    <tr>

                      <td>Bageshwar</td>
                      <td>408</td>
                      <td>404</td>
                      <td>187</td>
                      <td><b>999</b></td>


                      <td>139</td>
                      <td>136</td>
                      <td>78</td>
                      <td><b>353</b></td>


                      <td>1</td>
                      <td>1</td>
                      <td>0</td>
                      <td><b>2</b></td>





                    </tr>


                    <tr>

                      <td>Chamoli</td>
                      <td>608</td>
                      <td>600</td>
                      <td>315</td>
                      <td><b>1523</b></td>


                      <td>75</td>
                      <td>74</td>
                      <td>31</td>
                      <td><b>180</b></td>


                      <td>34</td>
                      <td>35</td>
                      <td>1</td>
                      <td><b>70</b></td>





                    </tr>


                    <tr>

                      <td>Champawat</td>
                      <td>353</td>
                      <td>347</td>
                      <td>245</td>
                      <td><b>945</b></td>


                      <td>32</td>
                      <td>31</td>
                      <td>17</td>
                      <td><b>80</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>





                    </tr>


                    <tr>

                      <td>Dehradun</td>
                      <td>1263</td>
                      <td>1266</td>
                      <td>102</td>
                      <td><b>2631</b></td>


                      <td>27</td>
                      <td>27</td>
                      <td>8</td>
                      <td><b>62</b></td>


                      <td>293</td>
                      <td>281</td>
                      <td>132</td>
                      <td><b>706</b></td>




                    </tr>


                    <tr>

                      <td>Haridwar</td>
                      <td>2508</td>
                      <td>2372</td>
                      <td>96</td>
                      <td><b>4976</b></td>


                      <td>314</td>
                      <td>317</td>
                      <td>4</td>
                      <td><b>635</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>




                    </tr>


                    <tr>

                      <td>Nainital</td>
                      <td>852</td>
                      <td>847</td>
                      <td>299</td>
                      <td><b>1998</b></td>


                      <td>146</td>
                      <td>145</td>
                      <td>79</td>
                      <td><b>370</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>

                    </tr>


                    <tr>

                      <td>PauriGarhwal</td>
                      <td>999</td>
                      <td>958</td>
                      <td>726</td>
                      <td><b>2683</b></td>


                      <td>50</td>
                      <td>50</td>
                      <td>29</td>
                      <td><b>129</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>




                    </tr>


                    <tr>

                      <td>Pithoragarh</td>
                      <td>467</td>
                      <td>453</td>
                      <td>425</td>
                      <td><b>1345</b></td>


                      <td>132</td>
                      <td>130</td>
                      <td>18</td>
                      <td><b>280</b></td>


                      <td>31</td>
                      <td>31</td>
                      <td>0</td>
                      <td><b>62</b></td>




                    </tr>


                    <tr>

                      <td>RudraPrayag</td>
                      <td>397</td>
                      <td>388</td>
                      <td>206</td>
                      <td><b>991</b></td>


                      <td>55</td>
                      <td>52</td>
                      <td>21</td>
                      <td><b>128</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>



                    </tr>


                    <tr>

                      <td>TehriGarhwal</td>
                      <td>1175</td>
                      <td>1151</td>
                      <td>668</td>
                      <td><b>2994</b></td>


                      <td>71</td>
                      <td>67</td>
                      <td>44</td>
                      <td><b>182</b></td>


                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td><b>0</b></td>



                    </tr>


                    <tr>

                      <td>UdamSinghNagar</td>
                      <td>1718</td>
                      <td>1622</td>
                      <td>165</td>
                      <td><b>3505</b></td>


                      <td>166</td>
                      <td>147</td>
                      <td>15</td>
                      <td><b>328</b></td>


                      <td>197</td>
                      <td>206</td>
                      <td>6</td>
                      <td><b>409</b></td>




                    </tr>


                    <tr>

                      <td>Uttarkashi</td>
                      <td>554</td>
                      <td>534</td>
                      <td>332</td>
                      <td><b>1420</b></td>


                      <td>78</td>
                      <td>75</td>
                      <td>41</td>
                      <td><b>194</b></td>


                      <td>3</td>
                      <td>3</td>
                      <td>0</td>
                      <td><b>6</b></td>





                    </tr>
                  </tbody>
                </Table>


              </div>

            </div >



            {/* <div className="awc-dpo-head">
<h1>Rajay Stree Shakti Tilu Rauteli Puraskar  2023-24: All List</h1>
</div> */}

            < div >
              <Footer />
            </div >
          </div >
        </div >
      </div >
    </>
  );
};

export default WorkerWithGrant;
