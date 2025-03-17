import React from "react";
// import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
// import UKLogon from "../../assets/images/UKLogo.png";
import { Row, Col, Card, Button } from "react-bootstrap";

import DashBoard from "./DashBoard";


const InnerDashBoard = () => {
  
  return (
    <>
      <div>
        {/* Header */}
        {/* <header>
          <div className="logosec">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
              className="icn menuicn"
              id="menuicn"
              alt="menu-icon"
              onClick={toggleNav}
            />

            <Link to="#" className="logo-page">
              <img src={UKLogon} alt="logo" className="logo" />
            </Link>
            <div className="nd-title">
              <span className="nd-subtitle">
                उत्तराखंड सरकार | Gov.t of Uttarakhand{" "}
              </span>
              <span className="subtitle">
                महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड
              </span>
            </div>
          </div>

          <div className="message">
            <div className="nd-msg">
              <span>User:</span> Deepika
            </div>

            <div className="dp" alt="logout" title="Click to logout">
              <LuLogOut />
            </div>
          </div>
        </header> */}
     

        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
            

            <div className="box-container">
              helo
              
            </div>
            <div>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerDashBoard;
