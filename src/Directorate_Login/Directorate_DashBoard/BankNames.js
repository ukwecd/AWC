import React from "react";
// import { Col, Pagination, Row, Table, Button } from "react-bootstrap";

import "../../Directorate_Login/assets/css/DirectorateLeftNav.css";
import "../../Directorate_Login/assets/css/DirectorateDashBoard.css";
import DirectorateDashBoard from "./DirectorateDashBoard";
import Footer from "../../componets/footer/Footer";
import { Table } from "react-bootstrap";



const BankNames = () => {
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
              <h1>List of Bank Name</h1>
            </div>

            <div className="box-container">

              <div class="col-lg-12">
                <Table id="" className="table display">
                  <thead className="Direct-thead th">
                    <tr class="warning">
                      <th>S.no</th>
                      <th>Bank Name</th>


                    </tr>

                  </thead>
                  <tbody>

                    <tr class="">
                      <td>1</td>

                      <td>ALMORA DISTRICT CENTRAL CO-OP.BANK</td>

                    </tr>
                    <tr class="">
                      <td>2</td>

                      <td>ALMORA URBAN COOPERATIVE BANK LTD</td>

                    </tr>
                    <tr class="">
                      <td>3</td>

                      <td>AXIS BANK</td>

                    </tr>
                    <tr class="">
                      <td>4</td>

                      <td>Bandhan Bank</td>

                    </tr>
                    <tr class="">
                      <td>5</td>

                      <td>BANK OF BARODA</td>

                    </tr>
                    <tr class="">
                      <td>6</td>

                      <td>BANK OF INDIA</td>

                    </tr>
                    <tr class="">
                      <td>7</td>

                      <td>CANARA BANK</td>

                    </tr>
                    <tr class="">
                      <td>8</td>

                      <td>CENTRAL BANK OF INDIA</td>

                    </tr>
                    <tr class="">
                      <td>9</td>

                      <td>CHAMOLI DISTRICT CENTRAL CO-OP.BANK</td>

                    </tr>
                    <tr class="">
                      <td>10</td>

                      <td>DISTRICT CO OPERATIVE BANK LTD DEHRADUN</td>

                    </tr>
                    <tr class="">
                      <td>11</td>

                      <td>District Cooperative Bank Ltd.Chamoli</td>

                    </tr>
                    <tr class="">
                      <td>12</td>

                      <td>HDFC BANK LTD</td>

                    </tr>
                    <tr class="">
                      <td>13</td>

                      <td>IDBI BANK LTD</td>

                    </tr>
                    <tr class="">
                      <td>14</td>

                      <td>INDIAN BANK</td>

                    </tr>
                    <tr class="">
                      <td>15</td>

                      <td>INDIAN OVERSEAS BANK</td>

                    </tr>
                    <tr class="">
                      <td>16</td>

                      <td>Kashipur Urban Co-operative Bank Ltd.</td>

                    </tr>
                    <tr class="">
                      <td>17</td>

                      <td>NAINITAL DISTRICT CO OPERATIVE BANK LTD</td>

                    </tr>
                    <tr class="">
                      <td>18</td>

                      <td>PITHORAGARH ZILA SAHAKARI BANK LTD.</td>

                    </tr>
                    <tr class="">
                      <td>19</td>

                      <td>PUNJAB AND SIND BANK</td>

                    </tr>
                    <tr class="">
                      <td>20</td>

                      <td>PUNJAB NATIONAL BANK</td>

                    </tr>
                    <tr class="">
                      <td>21</td>

                      <td>STATE BANK OF INDIA</td>

                    </tr>
                    <tr class="">
                      <td>22</td>

                      <td>TEHRI GARHWAL ZILA SAHKARI BANK LTD.</td>

                    </tr>
                    <tr class="">
                      <td>23</td>

                      <td>THE NAINITAL BANK LIMITED</td>

                    </tr>
                    <tr class="">
                      <td>24</td>

                      <td>UCO BANK</td>

                    </tr>
                    <tr class="">
                      <td>25</td>

                      <td>UNION BANK OF INDIA</td>

                    </tr>
                    <tr class="">
                      <td>26</td>

                      <td>Uttarakhand Gramin Bank</td>

                    </tr>
                    <tr class="">
                      <td>27</td>

                      <td>UTTARAKHAND STATE CO-OPERATIVE BANK LTD</td>

                    </tr>
                    <tr class="">
                      <td>28</td>

                      <td>UTTARKASHI ZILA SAHKARI BANK LTD.</td>

                    </tr>
                    <tr class="">
                      <td>29</td>

                      <td>ZILA SAHKARI BANK LTD GARHWAL KOTDWAR</td>

                    </tr>
                    <tr class="">
                      <td>30</td>

                      <td>Zila Sehkari Bank Ltd. Haridwar</td>

                    </tr>
                  </tbody>
                </Table>
              </div>

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

export default BankNames;
