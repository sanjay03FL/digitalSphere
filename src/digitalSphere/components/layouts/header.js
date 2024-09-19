import React from "react";
import { Container } from "react-bootstrap";
import { MailSvgIcon, PhoneSvgIcon, SphereSvgIcon } from "../config";
import styles from "../layouts/style.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <div className={`top-header ${styles.headerTop}`}>
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
      <nav className={`navbar sticky-top navbar-expand-lg navbar-light ${styles.headerBottom}`}>
        <Container>
          <div className="d-flex align-items-center">
            <img className="top-footer-sphere me-1" src={SphereSvgIcon} width={60} height={60} alt="sphere" />
            &nbsp; <span className={styles.headerBottomTitle}>DIGITALSPHERE</span>
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
          <div className={`nav-menu collapse navbar-collapse ${styles.navMenu}`} id="navbarTogglerDemo02">
            <span className={`nav-menu-item ${styles.navItem} ${styles.navActiveItem}`}>Home</span>
            <span className={`nav-menu-item ${styles.navItem} ${styles.navInActiveItem}`}>About Us</span>
            <span className={`nav-menu-item ${styles.navItem} ${styles.navInActiveItem}`}>Service</span>
            <span className={`nav-menu-item ${styles.navItem} ${styles.navInActiveItem}`}>Blog</span>
            <span className={`nav-menu-item ${styles.navItem} ${styles.navInActiveItem} me-0`}>Contact Us</span>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Header;
