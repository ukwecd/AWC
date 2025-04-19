import React from "react";
import { Table,Button } from "react-bootstrap";
import Footer from "../../../componets/footer/Footer";
import "../../../Finance_Login/assets/css/FinanceInnerDashBoard.css";
import FinanceDashBoard from "../FinanceDashBoard";
import "../../../Finance_Login/assets/css/ProjectDistrictWise.css";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const ProjectExpenditureReport = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  
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
              <h1>Project Expenditure Report 2024-25</h1>
            </div>
            <div className="box-container">
            <div class="awc-sub-heading">
                <h2><HiMiniArrowLongLeft className="go-back-arrow"
                    onClick={goBack}
                  />Expenditure Summary of Bhaisiyachana(project) 2024-25</h2>
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
                        <th>Project Name</th>
                        <th>Scheme</th>
                        <th>Grant </th>
                        <th>Component</th>
                        <th>Date</th>
                        <th>Expenditure Amount</th>
                        <th>Uploaded file</th>
                        <th>click to delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bhaisiyachana</td>
                        <td >UK282</td>
                        <td >30</td>
                        <td>Cooked Food| मानदेय</td>
                        <td>27-Jul-2024</td>
                        <td className="text-danger awc-bold">-115500.00	
                        </td>
                       <td>
                       <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money text-primary">
                              <span className="badge  rounded-pill text-success d-inline-block nd-btn-district-btnn nd-btn-district1">
                              <FaFilePdf className="awc-pdf-file" />
                              </span>
                            </Button>
                          </Link>
                        </div>
                       </td>
                       <td>
                       <div className="dpo-p">
                          <Link to="#">
                            {" "}
                            <Button className="awc-btn-money text-primary">
                              <span className="badge  rounded-pill text-dark-white d-inline-block nd-btn-district-btnn nd-btn-district1">
                              Delete This Expenditure
                              </span>
                            </Button>
                          </Link>
                        </div>
                       </td>
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

export default ProjectExpenditureReport;
