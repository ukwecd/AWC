import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import "../../../Directorate_Login/assets/css/MonthwiseReport.css";
import DirectorateDashBoard from "../DirectorateDashBoard";
import Footer from "../../../componets/footer/Footer";
import { Col, Pagination, Row, Table } from "react-bootstrap";

const MonthwiseReport = () => {
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
              <h1>View Month Wise + Grant Wise Bill Report</h1>
            </div>





            <div className="awc-after-fillter mt-3">


              <div className="table-responsive-lg mt-2">
                <Table className="awc-sub-table" striped bordered hover>
                  <thead className="MonthwiseReport th ">
                    <tr>
                      <th  >Month Name</th>
                      <th  >GEN15 | Center Manday</th>
                      <th  >GEN15 | State Manday</th>
                      <th  >SCP30 | Center Manday</th>
                      <th  >SCP30 | State Manday</th>
                      <th >ST31 | Center Manday</th>
                      <th >ST31 | State Manday</th>
                      <th  >Center Manday Total</th>
                      <th  >State Manday Total</th>
                      <th  >Center+State Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  >April 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96853273</td>
                      <td  ><i class="fa fa-inr"></i>103071035</td>
                      <td  ><i class="fa fa-inr"></i>11330421</td>
                      <td  ><i class="fa fa-inr"></i>12151672</td>
                      <td  ><i class="fa fa-inr"></i>4272713</td>
                      <td  ><i class="fa fa-inr"></i>4614310</td>
                      <td  ><i class="fa fa-inr"></i>112456407</td>
                      <td  ><i class="fa fa-inr"></i>119837017</td>
                      <td  ><i class="fa fa-inr"></i>232293424</td>
                    </tr>
                    <tr>
                      <td  >March 2022-23</td>
                      <td  ><i class="fa fa-inr"></i>97232313</td>
                      <td  ><i class="fa fa-inr"></i>103531876</td>
                      <td  ><i class="fa fa-inr"></i>11456796</td>
                      <td  ><i class="fa fa-inr"></i>12291099</td>
                      <td  ><i class="fa fa-inr"></i>4262660</td>
                      <td  ><i class="fa fa-inr"></i>4608496</td>
                      <td  ><i class="fa fa-inr"></i>112951769</td>
                      <td  ><i class="fa fa-inr"></i>120431471</td>
                      <td  ><i class="fa fa-inr"></i>233383240</td>
                    </tr>
                    <tr>
                      <td  >March &amp; April 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>197804052</td>
                      <td  ><i class="fa fa-inr"></i>216776579</td>
                      <td  ><i class="fa fa-inr"></i>23030840</td>
                      <td  ><i class="fa fa-inr"></i>25322829</td>
                      <td  ><i class="fa fa-inr"></i>8614366</td>
                      <td  ><i class="fa fa-inr"></i>9524233</td>
                      <td  ><i class="fa fa-inr"></i>229449258</td>
                      <td  ><i class="fa fa-inr"></i>251623641</td>
                      <td  ><i class="fa fa-inr"></i>481072899</td>
                    </tr>
                    <tr>
                      <td  >Pending Protsahan 2021-22</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                    </tr>
                    <tr>
                      <td  >June 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>97128028</td>
                      <td  ><i class="fa fa-inr"></i>103182120</td>
                      <td  ><i class="fa fa-inr"></i>11385416</td>
                      <td  ><i class="fa fa-inr"></i>12194549</td>
                      <td  ><i class="fa fa-inr"></i>4280588</td>
                      <td  ><i class="fa fa-inr"></i>4619230</td>
                      <td  ><i class="fa fa-inr"></i>112794032</td>
                      <td  ><i class="fa fa-inr"></i>119995899</td>
                      <td  ><i class="fa fa-inr"></i>232789931</td>
                    </tr>
                    <tr>
                      <td  >May 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>97144590</td>
                      <td  ><i class="fa fa-inr"></i>103238653</td>
                      <td  ><i class="fa fa-inr"></i>11417930</td>
                      <td  ><i class="fa fa-inr"></i>12234388</td>
                      <td  ><i class="fa fa-inr"></i>4274067</td>
                      <td  ><i class="fa fa-inr"></i>4612129</td>
                      <td  ><i class="fa fa-inr"></i>112836587</td>
                      <td  ><i class="fa fa-inr"></i>120085170</td>
                      <td  ><i class="fa fa-inr"></i>232921757</td>
                    </tr>
                    <tr>
                      <td  >Manday Before Oct 2021</td>
                      <td  ><i class="fa fa-inr"></i>25201539</td>
                      <td  ><i class="fa fa-inr"></i>6501230</td>
                      <td  ><i class="fa fa-inr"></i>5972481</td>
                      <td  ><i class="fa fa-inr"></i>817155</td>
                      <td  ><i class="fa fa-inr"></i>101377</td>
                      <td  ><i class="fa fa-inr"></i>45063</td>
                      <td  ><i class="fa fa-inr"></i>31275397</td>
                      <td  ><i class="fa fa-inr"></i>7363448</td>
                      <td  ><i class="fa fa-inr"></i>38638845</td>
                    </tr>
                    <tr>
                      <td  >July 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>97175944</td>
                      <td  ><i class="fa fa-inr"></i>103210789</td>
                      <td  ><i class="fa fa-inr"></i>11361114</td>
                      <td  ><i class="fa fa-inr"></i>12164787</td>
                      <td  ><i class="fa fa-inr"></i>4279388</td>
                      <td  ><i class="fa fa-inr"></i>4618450</td>
                      <td  ><i class="fa fa-inr"></i>112816446</td>
                      <td  ><i class="fa fa-inr"></i>119994026</td>
                      <td  ><i class="fa fa-inr"></i>232810472</td>
                    </tr>
                    <tr>
                      <td  >August 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96883213</td>
                      <td  ><i class="fa fa-inr"></i>102906803</td>
                      <td  ><i class="fa fa-inr"></i>11258775</td>
                      <td  ><i class="fa fa-inr"></i>12057387</td>
                      <td  ><i class="fa fa-inr"></i>4267629</td>
                      <td  ><i class="fa fa-inr"></i>4605225</td>
                      <td  ><i class="fa fa-inr"></i>112409617</td>
                      <td  ><i class="fa fa-inr"></i>119569415</td>
                      <td  ><i class="fa fa-inr"></i>231979032</td>
                    </tr>
                    <tr>
                      <td  >September 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96828212</td>
                      <td  ><i class="fa fa-inr"></i>102776176</td>
                      <td  ><i class="fa fa-inr"></i>11345374</td>
                      <td  ><i class="fa fa-inr"></i>12141022</td>
                      <td  ><i class="fa fa-inr"></i>4251382</td>
                      <td  ><i class="fa fa-inr"></i>4591493</td>
                      <td  ><i class="fa fa-inr"></i>112424968</td>
                      <td  ><i class="fa fa-inr"></i>119508691</td>
                      <td  ><i class="fa fa-inr"></i>231933659</td>
                    </tr>
                    <tr>
                      <td  >October 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96616930</td>
                      <td  ><i class="fa fa-inr"></i>102584686</td>
                      <td  ><i class="fa fa-inr"></i>11335701</td>
                      <td  ><i class="fa fa-inr"></i>12131368</td>
                      <td  ><i class="fa fa-inr"></i>4246068</td>
                      <td  ><i class="fa fa-inr"></i>4585278</td>
                      <td  ><i class="fa fa-inr"></i>112198699</td>
                      <td  ><i class="fa fa-inr"></i>119301332</td>
                      <td  ><i class="fa fa-inr"></i>231500031</td>
                    </tr>
                    <tr>
                      <td  >November 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96788938</td>
                      <td  ><i class="fa fa-inr"></i>102770604</td>
                      <td  ><i class="fa fa-inr"></i>11231052</td>
                      <td  ><i class="fa fa-inr"></i>12011265</td>
                      <td  ><i class="fa fa-inr"></i>4226973</td>
                      <td  ><i class="fa fa-inr"></i>4563540</td>
                      <td  ><i class="fa fa-inr"></i>112246963</td>
                      <td  ><i class="fa fa-inr"></i>119345409</td>
                      <td  ><i class="fa fa-inr"></i>231592372</td>
                    </tr>
                    <tr>
                      <td  >December 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96159346</td>
                      <td  ><i class="fa fa-inr"></i>102117034</td>
                      <td  ><i class="fa fa-inr"></i>11312234</td>
                      <td  ><i class="fa fa-inr"></i>12107927</td>
                      <td  ><i class="fa fa-inr"></i>4224795</td>
                      <td  ><i class="fa fa-inr"></i>4560662</td>
                      <td  ><i class="fa fa-inr"></i>111696375</td>
                      <td  ><i class="fa fa-inr"></i>118785623</td>
                      <td  ><i class="fa fa-inr"></i>230481998</td>
                    </tr>
                    <tr>
                      <td  >PMJJBY &amp; PMSBY 2022-23</td>
                      <td  ><i class="fa fa-inr"></i>3957960</td>
                      <td  ><i class="fa fa-inr"></i>539409</td>
                      <td  ><i class="fa fa-inr"></i>526840</td>
                      <td  ><i class="fa fa-inr"></i>60559</td>
                      <td  ><i class="fa fa-inr"></i>23518</td>
                      <td  ><i class="fa fa-inr"></i>2638</td>
                      <td  ><i class="fa fa-inr"></i>4508318</td>
                      <td  ><i class="fa fa-inr"></i>602606</td>
                      <td  ><i class="fa fa-inr"></i>5110924</td>
                    </tr>
                    <tr>
                      <td  >January 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96061041</td>
                      <td  ><i class="fa fa-inr"></i>101982480</td>
                      <td  ><i class="fa fa-inr"></i>11222722</td>
                      <td  ><i class="fa fa-inr"></i>12006559</td>
                      <td  ><i class="fa fa-inr"></i>4227429</td>
                      <td  ><i class="fa fa-inr"></i>4564784</td>
                      <td  ><i class="fa fa-inr"></i>111511192</td>
                      <td  ><i class="fa fa-inr"></i>118553823</td>
                      <td  ><i class="fa fa-inr"></i>230065015</td>
                    </tr>
                    <tr>
                      <td  >February 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>96077800</td>
                      <td  ><i class="fa fa-inr"></i>101990523</td>
                      <td  ><i class="fa fa-inr"></i>11229030</td>
                      <td  ><i class="fa fa-inr"></i>12008605</td>
                      <td  ><i class="fa fa-inr"></i>4213863</td>
                      <td  ><i class="fa fa-inr"></i>4549421</td>
                      <td  ><i class="fa fa-inr"></i>111520693</td>
                      <td  ><i class="fa fa-inr"></i>118548549</td>
                      <td  ><i class="fa fa-inr"></i>230069242</td>
                    </tr>
                    <tr>
                      <td  >May 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>78824540</td>
                      <td  ><i class="fa fa-inr"></i>87083132</td>
                      <td  ><i class="fa fa-inr"></i>9341317</td>
                      <td  ><i class="fa fa-inr"></i>10337162</td>
                      <td  ><i class="fa fa-inr"></i>4275771</td>
                      <td  ><i class="fa fa-inr"></i>4741256</td>
                      <td  ><i class="fa fa-inr"></i>92441628</td>
                      <td  ><i class="fa fa-inr"></i>102161550</td>
                      <td  ><i class="fa fa-inr"></i>194603178</td>
                    </tr>
                    <tr>
                      <td  >May 2024-25 Pending</td>
                      <td  ><i class="fa fa-inr"></i>3316843</td>
                      <td  ><i class="fa fa-inr"></i>3665920</td>
                      <td  ><i class="fa fa-inr"></i>501532</td>
                      <td  ><i class="fa fa-inr"></i>560128</td>
                      <td  ><i class="fa fa-inr"></i>89991</td>
                      <td  ><i class="fa fa-inr"></i>103809</td>
                      <td  ><i class="fa fa-inr"></i>3908366</td>
                      <td  ><i class="fa fa-inr"></i>4329857</td>
                      <td  ><i class="fa fa-inr"></i>8238223</td>
                    </tr>
                    <tr>
                      <td  >June &amp; July 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>199446042</td>
                      <td  ><i class="fa fa-inr"></i>220297076</td>
                      <td  ><i class="fa fa-inr"></i>23240838</td>
                      <td  ><i class="fa fa-inr"></i>25732690</td>
                      <td  ><i class="fa fa-inr"></i>8669952</td>
                      <td  ><i class="fa fa-inr"></i>9619010</td>
                      <td  ><i class="fa fa-inr"></i>231356832</td>
                      <td  ><i class="fa fa-inr"></i>255648776</td>
                      <td  ><i class="fa fa-inr"></i>487005608</td>
                    </tr>
                    <tr>
                      <td  >August 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>99850597</td>
                      <td  ><i class="fa fa-inr"></i>110125693</td>
                      <td  ><i class="fa fa-inr"></i>11650092</td>
                      <td  ><i class="fa fa-inr"></i>12882538</td>
                      <td  ><i class="fa fa-inr"></i>4316364</td>
                      <td  ><i class="fa fa-inr"></i>4796044</td>
                      <td  ><i class="fa fa-inr"></i>115817053</td>
                      <td  ><i class="fa fa-inr"></i>127804275</td>
                      <td  ><i class="fa fa-inr"></i>243621328</td>
                    </tr>
                    <tr>
                      <td  >September &amp; October 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>198973235</td>
                      <td  ><i class="fa fa-inr"></i>219531385</td>
                      <td  ><i class="fa fa-inr"></i>23170472</td>
                      <td  ><i class="fa fa-inr"></i>25638178</td>
                      <td  ><i class="fa fa-inr"></i>8612329</td>
                      <td  ><i class="fa fa-inr"></i>9549516</td>
                      <td  ><i class="fa fa-inr"></i>230756036</td>
                      <td  ><i class="fa fa-inr"></i>254719079</td>
                      <td  ><i class="fa fa-inr"></i>485475115</td>
                    </tr>
                    <tr>
                      <td  >November 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>99297588</td>
                      <td  ><i class="fa fa-inr"></i>109512405</td>
                      <td  ><i class="fa fa-inr"></i>11585828</td>
                      <td  ><i class="fa fa-inr"></i>12811633</td>
                      <td  ><i class="fa fa-inr"></i>4295227</td>
                      <td  ><i class="fa fa-inr"></i>4765640</td>
                      <td  ><i class="fa fa-inr"></i>115178643</td>
                      <td  ><i class="fa fa-inr"></i>127089678</td>
                      <td  ><i class="fa fa-inr"></i>242268321</td>
                    </tr>
                    <tr>
                      <td  >December 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>99018859</td>
                      <td  ><i class="fa fa-inr"></i>109190921</td>
                      <td  ><i class="fa fa-inr"></i>11513092</td>
                      <td  ><i class="fa fa-inr"></i>12733511</td>
                      <td  ><i class="fa fa-inr"></i>4289632</td>
                      <td  ><i class="fa fa-inr"></i>4758951</td>
                      <td  ><i class="fa fa-inr"></i>114821583</td>
                      <td  ><i class="fa fa-inr"></i>126683383</td>
                      <td  ><i class="fa fa-inr"></i>241504966</td>
                    </tr>
                    <tr>
                      <td  >January 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>99112654</td>
                      <td  ><i class="fa fa-inr"></i>109274487</td>
                      <td  ><i class="fa fa-inr"></i>11520063</td>
                      <td  ><i class="fa fa-inr"></i>12738625</td>
                      <td  ><i class="fa fa-inr"></i>4281833</td>
                      <td  ><i class="fa fa-inr"></i>4750716</td>
                      <td  ><i class="fa fa-inr"></i>114914550</td>
                      <td  ><i class="fa fa-inr"></i>126763828</td>
                      <td  ><i class="fa fa-inr"></i>241678378</td>
                    </tr>
                    <tr>
                      <td  >February 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>99477985</td>
                      <td  ><i class="fa fa-inr"></i>109637200</td>
                      <td  ><i class="fa fa-inr"></i>11503554</td>
                      <td  ><i class="fa fa-inr"></i>12718872</td>
                      <td  ><i class="fa fa-inr"></i>4273420</td>
                      <td  ><i class="fa fa-inr"></i>4740371</td>
                      <td  ><i class="fa fa-inr"></i>115254959</td>
                      <td  ><i class="fa fa-inr"></i>127096443</td>
                      <td  ><i class="fa fa-inr"></i>242351402</td>
                    </tr>
                    <tr>
                      <td  >PMJJBY &amp; PMSBY 2023-24</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                    </tr>
                    <tr>
                      <td  >PMJJBY &amp; PMSBY 2024-25</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                      <td  ><i class="fa fa-inr"></i>0</td>
                    </tr>
                    <tr className="month-total"  >
                      <td>Month Total</td>
                      <td  ><i class="fa fa-inr"></i>2535498216</td>
                      <td  ><i class="fa fa-inr"></i>2535498216</td>
                      <td  ><i class="fa fa-inr"></i>279443514</td>
                      <td  ><i class="fa fa-inr"></i>297854508</td>
                      <td  ><i class="fa fa-inr"></i>102871335</td>
                      <td  ><i class="fa fa-inr"></i>112490265</td>
                      <td  ><i class="fa fa-inr"></i>2747546371</td>
                      <td  ><i class="fa fa-inr"></i>2945842989</td>
                      <td  ><i class="fa fa-inr"></i>5693389360</td>
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

export default MonthwiseReport;
