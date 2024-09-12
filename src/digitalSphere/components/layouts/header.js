import React from "react";
import { Container } from "react-bootstrap";
import { MailSvgIcon, PhoneSvgIcon, SphereSvgIcon } from "../config";

const Header = () => {
  return (
    <React.Fragment>
      <div className="top-header">
        <Container className="d-flex justify-content-between">
          <div className="me-5">
            <img className="top-header-phone" src={PhoneSvgIcon} width={25} height={25} alt="contact" />
            &nbsp; +1-302-390-7520
          </div>

          <div>
            <img className="top-header-mail" src={MailSvgIcon} width={25} height={25} alt="mail" />
            &nbsp; info@thedigitalsphere.us
          </div>
        </Container>
      </div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light top-footer">
        <Container>
          <div className="d-flex align-items-center">
            <img className="top-footer-sphere me-1" src={SphereSvgIcon} width={60} height={60} alt="sphere" />
            &nbsp; <span className="top-footer-title">DigitalSphere</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-menu collapse navbar-collapse" id="navbarTogglerDemo02">
            <span className="nav-menu-item nav-active">Home</span>
            <span className="nav-menu-item nav-inActive">About Us</span>
            <span className="nav-menu-item nav-inActive">Service</span>
            <span className="nav-menu-item nav-inActive">Blog</span>
            <span className="me-0 nav-menu-item nav-inActive">Contact Us</span>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Header;
