import React from 'react'
import { Col } from "react-bootstrap";
import "../../assets/css/Footer.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>

      <div >

        <Col className='awc-footer-main '>
          <p>© 2025 WECDUK . All Rights Reserved  <br /> <Link to="/https://www.brainrock.in/" target="_blank">Designed By Brainrock</Link></p>

        </Col>

      </div>

    </>
  )
}

export default Footer