import React from "react";
import { Table, Button } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { Link } from "react-router-dom";

const FinanceProjectOverview = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <FinanceDashBoard />

          {/* Main Content */}

          <div className="main">
            <div className="awc-dpo-head">
              <h1> All Project Financial Report 2022-23 </h1>
            </div>
            <div className="box-container">
              <div className="awc-after-fillter ">
                <div className="awc-allot-heading">
                  <h2>Amount Allotment Details</h2>
                  <span className="awc-note-data">Note:</span>
                  <ol>
                    <li>To View passbook click on Project.. </li>
                  </ol>
                </div>
                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th rowspan="2">SNo.</th>
                        <th rowspan="2">District</th>
                        <th rowspan="2">Project</th>
                        <th colspan="13" className="text-center">
                          Grant 15
                        </th>
                        <th colspan="5" className="text-center">
                          Grant 15
                        </th>
                        <th colspan="9" className="text-center">
                          Grant 15
                        </th>
                        <th rowspan="2">Project Balance</th>
                      </tr>
                      <tr>
                        <th>AWC Rent</th>
                        <th>TA.</th>
                        <th>Medical</th>
                        <th>Petrol</th>
                        <th>Contingency</th>
                        <th>THR</th>
                        <th>Manday</th>
                        <th>Cooked Food</th>
                        <th>Preschool kit</th>
                        <th>Saree Suit</th>
                        <th>Medicine kit</th>
                        <th>Construction AWC</th>
                        <th>Saksham AWC</th>
                        <th>Contingency</th>
                        <th>THR</th>
                        <th>Manday</th>
                        <th>Cooked Food</th>
                        <th>Construction AWC</th>
                        <th>AWC Rent</th>
                        <th>TA.</th>
                        <th>Medical</th>
                        <th>Petrol</th>
                        <th>Contingency</th>
                        <th>THR</th>
                        <th>Manday</th>
                        <th>Cooked Food</th>
                        <th>Construction AWC</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Almora</td>
                        <td>
                          <div className="dpo-p">
                            <Link to="/ProjectPassbookFinancial202223">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-success d-inline-block nd-btn-district-btnn nd-btn-district1">
                                  Kalsi
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>
                        <td>13200.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>113725.00</td>
                        <td>0.00</td>
                        <td>420762.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td className="text-success text-bold">547687.00</td>
                      </tr>
                    </tbody>
                  </Table>
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

export default FinanceProjectOverview;
