import React from "react";
import { Table, Button } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";

import { Link } from "react-router-dom";

const ProjectOverview1 = () => {
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
              <h1> All Project Financial Report 2023-24 </h1>
            </div>
            <div className="box-container">
              <div className="awc-after-fillter ">
                <div className="awc-allot-heading">
                  <h2>Amount Allotment Details</h2>
                  <span className="awc-note-data">Note:</span>
                  <ol>
                    <li>To View passbook click on Project. </li>
                  </ol>
                </div>
                <div className="table-responsive-lg">
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
                        <th>Cooked_food</th>
                        <th>Preschool_kit</th>
                        <th>Saree_suit</th>
                        <th>Medicine_kit</th>
                        <th>Construction_of_awc</th>
                        <th>Saksham_awc</th>
                        <th>Contingency</th>
                        <th>THR</th>
                        <th>Manday</th>
                        <th>Cooked food</th>
                        <th>Construction AWC</th>
                        <th>AWC Rent</th>
                        <th>Ta</th>
                        <th>Medical</th>
                        <th>Petrol</th>
                        <th>Contingency</th>
                        <th>THR</th>
                        <th>Manday</th>
                        <th>Cooked_food</th>
                        <th>Construction_of_awc</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Almora</td>
                        <td>
                          <div className="dpo-p">
                            <Link to="/PassbookOverview">
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

export default ProjectOverview1;
