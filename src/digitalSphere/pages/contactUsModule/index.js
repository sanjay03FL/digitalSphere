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
      <div className={`fadeTop ${styles.contactSection}`}>
        <Container className={styles.contactContainer}>
          <div className={`d-flex flex-column ${styles.contactFirstHalf}`}>
            <h5>TALK TO A SPECIALIST</h5>
            <h2>Let's Talk Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismodac, finibus
              vitae dui rem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button className={`lightBtn`} onClick={() => navigate("/aboutUs")}>
              About Us
            </Button>
          </div>
          <div className={`d-flex flex-column ${styles.contactSecondHalf}`}>
            <span className="d-flex align-items-center">
              <img className={`${styles.phoneImg} me-3`} src={PhoneSvgIcon} width={25} height={25} alt="" />
              <span>+1-302-390-7520</span>
            </span>
            <span className="d-flex align-items-center">
              <img className={`${styles.mailImg} me-3`} src={MailSvgIcon} width={25} height={25} alt="" />
              <span>info@thedigitalsphere.us</span>
            </span>
            <span className="d-flex align-items-center">
              <img className={`${styles.locationImg} me-3`} src={LocationSvgIcon} width={25} height={25} alt="" />
              <span>Lakeland, FL, US</span>
            </span>
          </div>
        </Container>
      </div>
      <div className={styles.contactCallSection}>
        <Container className={styles.contactCallContainer}>
          <div className={`d-flex flex-column py-5`}>
            <h5>REQUEST A CALL</h5>
            <h2>We call you back</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismodac,
              <br /> finibus vitae dui rem ipsum dolor sit amet.
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
