import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut } from "react-icons/lu";
import "../../assets/css/DashBoard.css";
import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdCenterFocusWeak } from "react-icons/md";
// import { RiFileEditLine } from "react-icons/ri";
import { MdExpandLess } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { PiShieldCheckDuotone } from "react-icons/pi";
import { RiBillLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineElderlyWoman } from "react-icons/md";
import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";

import { MdOutlinePendingActions } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";

function DashBoard() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [expandedMenus, setExpandedItems] = useState({});

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  const toggleSubMenu = (index) => {
    setExpandedItems((prev) => ({
      [index]: !prev[index],
    }));
  };

  const navigationOptions = [
    { icon: <RxDashboard />, label: "DashBoard", path: "/InnerDashBoard" },
    {
      icon: <MdCenterFocusWeak />,
      label: "Aanganwadi Center Info",
      path: "/AWCInformation",
    },

    {
      icon: <FaUserTie />,
      label: "Manday Worker Info",
      path: "/Manday Worker Info",
      subRoutes: [
        {
          icon: <FaUsers />,
          label: "All Worker",
          path: "/AllWorker",
        },
        {
          icon: <MdOutlineElderlyWoman />,
          label: "Retired Worker",
          path: "/RetiredWorker",
        },
        {
          icon: <FaUserEdit />,
          label: "Pending Edit Request",
          path: "/PendingEditRequest",
        },
        {
          icon: <MdOutlinePendingActions />,
          label: "Pending Remove Request",
          path: "/PendingRemoveRequest",
        },
        {
          icon: <MdGroupAdd />,
          label: "Create Group",
          path: "/CreateGroup",
        },
      ],
    },
    {
      icon: <FaMoneyBill />,
      label: "Bills",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Generate Bill",
          path: "/GenerateBill",
        },
        {
          icon: <FaReceipt />,
          label: "View Generated Bill",
          path: "/ViewGeneratedBill",
        },
        {
          icon: <PiShieldCheckDuotone />,
          label: "Insurance Bill",
          path: "/InsuranceBill",
        },
        {
          icon: <RiBillLine />,
          label: "Insurance Bill View",
          path: "/InsuranceBillView",
        },
        {
          icon: <FaUserEdit />,
          label: "Request Delete Edit",
          path: "/RequestDelete",
        },
      ],
    },
    {
      icon: <FaPhoneAlt />,
      label: "Technical Help: 7668151041",
    },
  ];

  return (
    <>
      <header className="user-awc-header">
        <div className="logosec">
          <img
            src={MenuIcon}
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={toggleNav}
          />
          <Link to="#" className="logo-page">
            <img
              src={LogoDhanparwa}
              alt="logo"
              className="dhan-parwa-logo img-fluid"
            />
          </Link>
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

      <div className="cdpo-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
              <div className="nav-upper-options">
                <div className="awc-menu">
                  <div>
                    <FaAlignLeft className="icn menuicn" onClick={toggleNav} />
                  </div>
                  <div className="awc-user">CDPO login : Almora</div>
                  <div className="awc-log-icon-mob">
                    <LuLogOut className=" " title="Click to logout" />
                  </div>
                </div>
                {/* pdf link */}
                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      // ancore
                      <Link
                        to={option.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    ) : option.subRoutes ? (
                      <>
                        <div
                          className={`nav-option option${index + 1}`}
                          onClick={() => toggleSubMenu(option.label)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="nav-item">
                            <div className="awc-nav-items">
                              <span className="nav-icon">{option.icon}</span>
                              <span className="nav-label">{option.label}</span>
                              <span className="dropdown-arrow">
                                {expandedMenus[option.label] ? (
                                  <MdExpandLess />
                                ) : (
                                  <MdKeyboardArrowRight />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {expandedMenus[option.label] &&
                          option.subRoutes.map((subOption, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subOption.path}
                              className="nav-sub-option"
                            >
                              <div className="nav-item">
                                <div className="d-flex awc-sub-item">
                                  <span className="nav-icon">
                                    {subOption.icon}
                                  </span>
                                  <span className="nav-label">
                                    {subOption.label}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </>
                    ) : (
                      <Link
                        to={option.path}
                        className={`nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
