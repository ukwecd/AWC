import UKLOGO from "../../assets/images/uklogo.png";
import UKLogon from "../..//assets/images/wecdlogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut } from "react-icons/lu";
import React, { useState } from "react";
import "../../DPO_Login/assets/css/DPOLeftNav.css";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
// import { MdCenterFocusWeak } from "react-icons/md";
// import { RiFileEditLine } from "react-icons/ri";
import { MdExpandLess } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { BiRupee } from "react-icons/bi";
import { TbReceiptRupee } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
// import { FaPhoneAlt } from "react-icons/fa";
import { MdPlaylistRemove } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";

function DPODashBoard() {
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
      path: "/DPOInnerDashBoard",
    },

    {
      icon: <FaUserTie />,
      label: "Manday Worker",
      path: "/Manday Worker Info",
      subRoutes: [
        {
          icon: <IoIosList />,
          label: "All Worker List(edit)",
          path: "/AllWorkerList",
        },
        {
          icon: <IoPersonAdd />,
          label: "Worker Add Request",
          path: "/WorkerAddRequest",
        },
        {
          icon: <FaUserEdit />,
          label: "Worker Edit Request",
          path: "/WorkerEditRequest",
        },
        {
          icon: <MdPlaylistRemove />,
          label: "Worker Remove Request",
          path: "/WorkerRemoveRequest",
        },
      ],
    },
    {
      icon: <TbReceiptRupee />,
      label: "Forward Bills",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Manday Bills",
          path: "/MandayBills",
        },
        {
          icon: <FaReceipt />,
          label: "Protsahan Bills",
          path: "/ProtsahanBills",
        },
      ],
    },

    {
      icon: <AiOutlineFundView />,
      label: "View Bills",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "View Manday Bills",
          path: "/ViewMandayBills",
        },
        {
          icon: <FaReceipt />,
          label: "ViewProtsahanBills",
          path: "/ViewProtsahanBills",
        },
      ],
    },

    {
      icon: <FaAward />,
      label: "Puruskar Application",
      subRoutes: [
        {
          icon: <MdOutlineReceiptLong />,
          label: "Anganwadi Karyakarti",
          path: "/AnganwadiKaryakarti",
        },
        {
          icon: <FaReceipt />,
          label: "Teli Rauteli Puruskar",
          path: "/TeluRoteliPuruskar",
        },
      ],
    },
    {
      icon: <PiUsersFourFill />,
      label: "AWW/AWH Vacancies",
      path: "/AWWAWHVacancie",
    },
    {
      icon: <BiRupee />,
      label: "Finance",
      subRoutes: [
        {
          icon: <IoIosList />,
          label: "State Scheme Surr. Report",
          path: "/FinanceSchemeReport",
        },
        {
          icon: <FiFileText />,
          label: "Project 2023-24",
          path: "/Project202324",
        },
        {
          icon: <LuFileText />,
          label: "District 2023-24",
          path: "/District202324",
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
            <span className="mx-2">DPO login :</span>
            <span>Almora</span>
          </div>
          <div className="dpo-dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="awc-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="dpo-nav">
              <div className="nav-upper-options">
                <div className="dpo-menu">
                  <div>
                    <FaAlignLeft
                      className="icn dpo-menuicn"
                      onClick={toggleNav}
                    />
                  </div>
                  <div className="dpo-user">DPO login : Almora</div>
                  <div className="dpo-log-icon-mob">
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
                        className={`dpo-nav-option option${index + 1}`}
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
                          className={`dpo-nav-option option${index + 1}`}
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
                              className="dpo-sub-option"
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
                        className={`dpo-nav-option option${index + 1}`}
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

export default DPODashBoard;
