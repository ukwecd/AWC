import React from "react";
import { Table, Button } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { Link } from "react-router-dom";

const AllotDistrictSummary = () => {
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
              <h1>All District Expenditure Summary 2024-25</h1>
            </div>
            <div className="box-container">
              <div class="awc-display-sub">
                <h1>Amount Expenditure Details Financial Year 2024-25</h1>
              </div>
              <div className="awc-after-fillter mt-3">
                {/* <div className="awc-dpo-alert">
                        <p>
                          Click on the form ID to view Detailed Profile or
                          Approve and Disapprove
                        </p>
                      </div> */}

                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th>SNo.</th>
                        <th>No. of Entry (Click here to View/Delete)</th>
                        <th>District</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="text-danger awc-bold">
                          No. Entries to View/ Delete
                        </td>
                        <td>Almora</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="text-primary awc-bold">
                          <div className="dpo-p">
                            <Link to="/DistrictCurrentBalance">
                              {" "}
                              <Button className="awc-btn-money text-primary">
                                <span className="badge  rounded-pill text-primary d-inline-block nd-btn-district-btnn nd-btn-district1">
                                  1 Entries Found
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </td>

                        <td>Bageshwar</td>
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

export default AllotDistrictSummary;
