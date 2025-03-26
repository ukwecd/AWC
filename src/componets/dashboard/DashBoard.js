import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { MdCurrencyRupee } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import "../../assets/css/DashBoard.css";
import React, { useState } from "react";
import { FaAlignLeft, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdCenterFocusWeak } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { TiDocument } from "react-icons/ti";
import { RiFileHistoryLine } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import { VscVmActive } from "react-icons/vsc";
import { MdExpandLess } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

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
      icon: <MdCurrencyRupee />,
      label: "Manday Worker Info",
      path: "/Manday Worker Info",
      subRoutes: [
        {
          icon: <TiDocument />,
          label: "All Worker",
          path: "/AllWorker",
        },
        {
          icon: <TiDocument />,
          label: "Retired Worker",
          path: "/RetiredWorker",
        },
        {
          icon: <TiDocument />,
          label: "Pending Edit Request",
          path: "/PendingEditRequest",
        },
        {
          icon: <FaChalkboardTeacher />,
          label: "Pending Remove Request",
          path: "/PendingRemoveRequest",
        },
        {
          icon: <RiFileHistoryLine />,
          label: "Create Group",
          path: "/CreateGroup",
        },
      ],
    },
    {
      icon: <FaUserGroup />,
      label: "Bills",
      subRoutes: [
        {
          icon: <RiFileEditLine />,
          label: "Generate Bill",
          path: "/GenerateBill",
        },
        {
          icon: <VscVmActive />,
          label: "View Generated Bill",
          path: "/ViewGeneratedBill",
        },
        {
          icon: <VscVmActive />,
          label: "Insurance Bill",
          path: "/InsuranceBill",
        },
        {
          icon: <VscVmActive />,
          label: "Insurance Bill View",
          path: "/InsuranceBillView",
        },
        {
          icon: <RiFileEditLine />,
          label: "Request Delete Edit",
          path: "/RequestDelete",
        },
       
       
      ],
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

      <div>
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
                      <a
                        href={option.download}
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
                      </a>
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
