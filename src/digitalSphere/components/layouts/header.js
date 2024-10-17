import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { MailSvgIcon, PhoneSvgIcon, SphereSvgIcon } from "../config";
import styles from "../layouts/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import navMenuArray, { staticData } from "../../utilities/staticData";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = (link) => {
    setIsOpen(false); // Close the navbar
    navigate(link);
    // Manually collapse the navbar using Bootstrap's JavaScript API
    const navbarCollapse = document.getElementById("navbarTogglerDemo02");
    if (navbarCollapse.classList.contains("show")) {
      const collapseInstance = new window.bootstrap.Collapse(navbarCollapse);
      collapseInstance.hide();
    }
  };
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
            aria-expanded={isOpen}
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`nav-menu collapse navbar-collapse ${styles.navMenu}`} id="navbarTogglerDemo02">
            {staticData?.navMenuArray?.map((v, i) => (
              <span
                key={i}
                to={v.link}
                className={`nav-menu-item ${styles.navItem} ${
                  window.location.pathname === v.link ? styles.navActiveItem : styles.navInActiveItem
                } ${i === 4 && "me-0"}`}
                onClick={() => closeNavbar(v.link)}
              >
                {v.name}
              </span>
            ))}
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Header;
