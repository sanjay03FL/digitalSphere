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
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Footer = () => {
  const navigate = useNavigate();

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 27.89632,
    lng: -81.84042,
  };
  //  sampleId= "AIzaSyCC-uuloWLLaVNjbQjd9Mghy5BLbmB5ngY"
  return (
    <React.Fragment>
      <div style={{ display: window.location.pathname !== "/contactUs" ? "none" : "initial" }}>
        <LoadScript googleMapsApiKey="AIzaSyBaNM8pSvmZMCnMCG9zpYwuGcTmm1Eprnc">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="footer">
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
                &nbsp;415 E suit 217 main st Bartow 33830, FL
              </p>
              <p className="d-flex align-items-center">
                <img src={MailSvgIcon} width={15} height={15} className="footerIconSvg me-1" alt="" />
                &nbsp;info@thedigitalsphere.us
              </p>
              <h5>Follow Us</h5>
              <span className="d-flex">
                <img src={FacebookSVGIcon} width={20} height={20} className="footerIconSvg me-4" alt="" />
                <img src={TwitterSvgIcon} width={20} height={20} className="footerIconSvg me-4" alt="" />
                <img src={LinkedinSVGIcon} width={20} height={20} className="footerIconSvg me-4" alt="" />

                <a
                  target="_blank"
                  rel="linkedIn"
                  href="https://www.linkedin.com/company/thedigitalsphere?trk=blended-typeahead"
                >
                  <img src={InstragramSvgIcon} width={20} height={20} className="footerIconSvg me-1" alt="" />
                </a>
              </span>
            </div>
          </div>
          <div className={styles.lastSectionFooter}>Copyright © 2023 | Powered by www.thedigitalsphere.us</div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
