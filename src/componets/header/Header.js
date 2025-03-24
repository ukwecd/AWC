import React from 'react';
import UKLOGO from "../../assets/images/uklogo.png"
import UKLogon from "../..//assets/images/wecdlogo.png";
import { LuLogOut } from "react-icons/lu";
import "../../assets/css/DashBoard.css";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";


function Header() {
    
  return (
    <div>
        <header className="user-awc-header">
        <div className="logosec">
         
          <Link to="#" className="logo-page">
            <img src={UKLogon} alt="logo" className="wced-logo" />
          </Link>
          <Link to="#" className="logo-page">
            <img src={UKLOGO} alt="logo" className="uk-logo" />
          </Link>


          <div className="awc-title">
            <span className="awc-subtitle">WECDPANE</span>
          </div>

        </div>

        <div className="message">
          <div className="awc-msg p-2">
            <i>
              <img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img" />
            </i>
            <span className="mx-2">CDPO login :</span>
            <span>Almora</span>
          </div>
          <div className="dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>
        

    </div>
  )
}

export default Header