import React from "react";
import { Table } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { Link } from "react-router-dom";
import History202223 from "./History202223";

const FinanceDistrictOverview = () => {
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
              <h1> All District Financial Report 2022-23 </h1>
            </div>
            <div className="box-container">
              <div className="awc-after-fillter ">
                <div className="awc-allot-heading">
                  <h2>Amount Allotment Details</h2>
                  <span className="awc-note-data">Note:</span>
                  <ol>
                    <li>To View Passbook Click on District</li>
                  </ol>
                </div>
                <div className="table-responsive-lg mt-2">
                  <Table className="awc-sub-table" striped bordered hover>
                    <thead className="finance-thead">
                      <tr>
                        <th rowspan="2">SNo.</th>
                        <th rowspan="2">District</th>
                        <th colspan="6" className="text-center">
                          Grant 15
                        </th>
                      </tr>
                      <tr>
                        <th>TA.</th>
                        <th>Medical</th>
                        <th>Petrol/ Oil/ Lubricant/ Maintainence etc | गाड़ियों के संचालन अनुरक्षण एवं इंधन आदि की खरीद</th>
                        <th>Saree Suit | साड़ी सूट</th>
                        <th>Pre school Kit | प्रीस्कूल किट</th>
                        <th>Medicine Kit | मेडिसिन किट</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="dpo-p">
                            <Link to="#">
                              {" "}   
                              <History202223 />
                            </Link>
                          </div>
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>39791.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
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

export default FinanceDistrictOverview;
