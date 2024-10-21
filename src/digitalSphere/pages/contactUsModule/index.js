import React from "react";
import CustomBreadcrumb from "../../components/layouts/breadcrumb";
import { Button, Container, Form } from "react-bootstrap";
import styles from "../contactUsModule/styles.module.css";
import { LocationSvgIcon, MailSvgIcon, PhoneSvgIcon } from "../../components/config";
import { useNavigate } from "react-router-dom";

const ContactUsModule = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CustomBreadcrumb />
      <div style={{ overflow: "hidden" }}>
        <div className={`fadeTop ${styles.contactSection}`}>
          <Container className={styles.contactContainer}>
            <div className={`d-flex flex-column ${styles.contactFirstHalf}`}>
              <h5>TALK TO A SPECIALIST</h5>
              <h2>Let's Talk Business</h2>
              <p>
                Have a computer issue? Our experts are here to diagnose and repair your devices. Connect with us and get
                the right solution fast!
              </p>
              <Button className={`lightBtn`} onClick={() => navigate("/aboutUs")}>
                About Us
              </Button>
            </div>
            <div className={`d-flex flex-column ${styles.contactSecondHalf}`}>
              <span className="d-flex align-items-center">
                <img className={`${styles.phoneImg} me-3`} src={PhoneSvgIcon} alt="" />
                <span>+1-302-390-7520</span>
              </span>
              <span className="d-flex align-items-center">
                <img className={`${styles.mailImg} me-3`} src={MailSvgIcon} alt="" />
                <span>info@thedigitalsphere.us</span>
              </span>
              <span className="d-flex align-items-center">
                <img className={`${styles.locationImg} me-3`} src={LocationSvgIcon} alt="" />
                <span>415 E suit 217 main st Bartow 33830, FL</span>
              </span>
            </div>
          </Container>
        </div>
      </div>
      <div className={styles.contactCallSection}>
        <Container className={styles.contactCallContainer}>
          <div className={`d-flex flex-column py-5`}>
            <h5>REQUEST A CALL</h5>
            <h2>We call you back</h2>
            <p>
              Request a callback, and one of our IT specialists will contact you shortly to help with your computer
              repair or service needs.
            </p>
            <Form.Control type="text" className={styles.contactCallInputField} placeholder="* Full Name" />
            <Form.Control type="mail" className={styles.contactCallInputField} placeholder="* Email Address" />
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              className={styles.contactCallInputField}
              placeholder="* Message"
            />
            <Button className={`lightBtn`}>Submit</Button>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactUsModule;
