import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut} from "react-icons/lu";
import React, { useState } from "react";
import "../../Puruskar_Login/assets/css/PurskarLeftNav.css";
import { FaAlignLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdExpandLess, MdOutlineCheckCircle } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";
import { RiSlideshowLine } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { BiSelectMultiple } from "react-icons/bi";

function PuruskarDashBoard() {
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
    {
      icon: <RxDashboard />,
      label: "DashBoard",
      path: "/PuruskarInnerDashBoard",
    },

    {
      icon: <FaAward />,
      label: "Ang. Karyakarti Award",
      path: "/AllEntry202425",
      subRoutes: [
        {
          icon: <RiSlideshowLine />,
          label: "All Entry (2024-25)",
          path: "/AllEntry202425",
        },
        {
          icon: <BiSelectMultiple />,
          label: "Selected Candidate (2024-25)",
          path: "/SelectedCandidate202425",
        },
        {
            icon: <RiSlideshowLine />,
            label: "All Entry (2023-24)",
            path: "/AllEntry202324",
          },
          {
            icon: <MdOutlineCheckCircle />,
            label: "Approved Entry (2023-24)",
            path: "/ApprovedEntry202324",
          },
          {
            icon: <RiSlideshowLine />,
            label: "All Entry (2022-23)",
            path: "/AllEntry202223",
          },
          {
            icon: <MdOutlineCheckCircle />,
            label: "Approved Entry (2022-23)",
            path: "/ApprovedEntry202223",
          },
       
      ],
    },
    {
      icon: <GiTrophyCup />,
      label: "Telu Roteli Award",
      subRoutes: [
        {
          icon: <RiSlideshowLine />,
          label: "All Entry (2024-25)",
          path: "/TeluAllEntry202425",
        },
        {
          icon: <BiSelectMultiple />,
          label: "Selected Candidate (2024-25)",
          path: "/TeluSelectedCandidate202425",
        },
        {
            icon: <RiSlideshowLine />,
            label: "All Entry (2023-24)",
            path: "/TeluAllEntry202324",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Selected Candidate (2023-24)",
            path: "/TeluSelectedCandidate202324",
          },
          {
            icon: <RiSlideshowLine />,
            label: "All Entry (2022-23)",
            path: "/TeluAllEntry202223",
          },
          {
            icon: <BiSelectMultiple />,
            label: "Selected Candidate(2022-23)",
            path: "/TeluSelectedCandidate202223",
          },
      ],
    },


     {
          icon: <IoIosCall />,
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
                      <img src={LogoDhanparwa} alt="logo" className="dhan-parwa-logo img-fluid" />
                    </Link>
          <Link to="#" className="logo-page">
            <img src={UKLogon} alt="logo" className="wced-logo" />
          </Link>
          <Link to="#" className="logo-page">
            <img src={UKLOGO} alt="logo" className="uk-logo" />
          </Link>

          <div className="awc-title">
            <span className="awc-subtitle">WECD Admin Panel</span>
          </div>
        </div>

        <div className="message">
          <div className="awc-msg p-2">
            <i>
              <img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img" />
            </i>
            <span className="mx-2">Finance login :</span>
            <span>Almora</span>
          </div>
          <div className="finance-dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="finance-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="finance-nav">
              <div className="nav-upper-options">
                <div className="dpo-menu">
                  <div>
                    <FaAlignLeft className="icn dpo-menuicn" onClick={toggleNav} />
                  </div>
                  <div className="dpo-user">Finance login : Almora</div>
                  <div className="finance-log-icon-mob">
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
                        className={`finance-nav-option option${index + 1}`}
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
                          className={`finance-nav-option option${index + 1}`}
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
                              className="finance-sub-option"
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
                        className={`finance-nav-option option${index + 1}`}
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

export default PuruskarDashBoard;
