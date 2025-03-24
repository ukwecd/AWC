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
import { GrDocumentSound } from "react-icons/gr";
import { TiDocument } from "react-icons/ti";
import { RiFileHistoryLine } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import { VscVmActive } from "react-icons/vsc";
import { GoChecklist } from "react-icons/go";
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
      label: "Finance Schemes",
      path: "/Finance",
      subRoutes: [
        {
          icon: <TiDocument />,
          label: "State Scheme Surr. Report",
          path: "/StateSchemeReport",
        },
        {
          icon: <FaChalkboardTeacher />,
          label: "Balance/Expenditure",
          path: "/BalanceExpenditure",
        },
        {
          icon: <RiFileHistoryLine />,
          label: "History",
          path: "/History",
        },
      ],
    },
    {
      icon: <FaUserGroup />,
      label: "AWW/AWH Vacancies",
      subRoutes: [
        {
          icon: <RiFileEditLine />,
          label: "Add Vacancies",
          path: "/AddVacancies",
        },
        {
          icon: <VscVmActive />,
          label: "Active Vacanciess",
          path: "/ActiveVacancies",
        },
        {
          icon: <GoChecklist />,
          label: "Received Forms",
          path: "/ReceivedForms",
        },
      ],
    },
    {
      icon: <GrDocumentSound />,
      label: "दिशा निर्देश",
      path: "/GuideLine",
      download: "/दिशा निर्देश पत्र.pdf",
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
