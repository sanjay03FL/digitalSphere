import React from "react";
import { Container } from "react-bootstrap";
import styles from "../layouts/style.module.css";
import {
  FacebookSVGIcon,
  InstragramSvgIcon,
  LinkedinSVGIcon,
  LocationSvgIcon,
  MailSvgIcon,
  TwitterSvgIcon,
} from "../config";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer mt-4">
      <Container>
        <div className={styles.sectionFooter}>
          <div className={`${styles.sectionCol1}`}>
            {/* <img className="top-footer-sphere" src={SphereSvgIcon} width={30} height={30} alt="" /> */}
            <h5>Our Story</h5>
            <p>
              At TheDigitalSpehere, we’re dedicated to providing you with exceptional tech repair and support
              services...
            </p>
          </div>
          <div className={styles.sectionCol}>
            <h5>Our Company</h5>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/aboutUs")}>About Us</p>
            <p onClick={() => navigate("/service")}> Service</p>
            <p onClick={() => navigate("/blog")}>Blog</p>
            <p onClick={() => navigate("/contactUs")}>Contact</p>
          </div>
          <div className={styles.sectionCol}>
            <h5>Resources</h5>
            <p>Why We Write</p>
            <p>Our Story</p>
            <p>How we started</p>
            <p>Our Experience</p>
          </div>
          <div className={styles.sectionCol}>
            <h5>Contact Us</h5>
            <p className="d-flex align-items-center">
              <img src={LocationSvgIcon} width={15} height={15} className="footerIconSvg me-1" alt="" />
              &nbsp;Lakeland, FL, US
            </p>
            <p className="d-flex align-items-center">
              <img src={MailSvgIcon} width={15} height={15} className="footerIconSvg me-1" alt="" />
              &nbsp;info@thedigitalsphere.us
            </p>
            <h5>Follow Us</h5>
            <p className="d-flex">
              <img src={FacebookSVGIcon} width={20} height={20} className="footerIconSvg me-4" alt="" />
              <img src={TwitterSvgIcon} width={20} height={20} className="footerIconSvg me-4" alt="" />
              <img src={LinkedinSVGIcon} width={20} height={20} className="footerIconSvg me-4" alt="" />
              <img src={InstragramSvgIcon} width={20} height={20} className="footerIconSvg me-1" alt="" />{" "}
            </p>
          </div>
        </div>
        <div className={styles.lastSectionFooter}>Copyright © 2023 | Powered by www.thedigitalsphere.us</div>
      </Container>
    </div>
  );
};

export default Footer;
