import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../../assets/css/LoginBanner.css";
import {FaUserShield, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function LoginBanner() {
  return (
    <div>
      <Row>
        <Col lg={6} md={6} sm={12}>
          pdf
        </Col>
        <Col lg={6} md={6} sm={12}>
         
        <Nav className="awc-nav">
            <ul className="d-flex float-end gap-5 awc-ul" type="none">
              <li>Official Website</li>
              <li>Login(Admin) </li>
              <li>Contact Us</li>
            </ul>
          </Nav>
        </Col>
      </Row>
    </div>
  );
}

export default LoginBanner;
