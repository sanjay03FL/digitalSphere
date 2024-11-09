import React, { useState } from "react";
import CustomBreadcrumb from "../../components/layouts/breadcrumb";
import { Button, Container, Form } from "react-bootstrap";
import styles from "../contactUsModule/styles.module.css";
import { LocationSvgIcon, MailSvgIcon, PhoneSvgIcon, SuccessInfoGif } from "../../components/config";
import { useNavigate } from "react-router-dom";
import SimpleModal from "../../components/common/modal";

const ContactUsModule = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({});
  const [errorInfo, setErrorInfo] = useState({ name: false, email: false, message: false });
  const [submitInfo, setSubmitInfo] = useState(false);

  const handleInput = (key, value) => {
    setContactInfo({ ...contactInfo, [key]: value });
    setErrorInfo({ ...errorInfo, [key]: false });
  };

  const isValidEmail = (email) => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!contactInfo?.name) {
      setErrorInfo({ ...errorInfo, name: true });
      return;
    }
    if (!contactInfo?.email || (contactInfo?.email && !isValidEmail(contactInfo?.email))) {
      setErrorInfo({ ...errorInfo, email: true });
      return;
    }

    if (!contactInfo?.message) {
      setErrorInfo({ ...errorInfo, message: true });
      return;
    }
    setSubmitInfo(true);
  };

  const ModalBody = () => {
    return (
      <div className="m-2 d-flex flex-column align-items-center">
        <img src={SuccessInfoGif} width={150} alt="" />
        <h5 className={`modal-title`}>Request Sent Successfully!</h5>
        <Button
          className={`primaryBtn mt-4`}
          onClick={() => {
            setSubmitInfo(false);
            setContactInfo({});
          }}
        >
          close
        </Button>
      </div>
    );
  };
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
            <Form.Control
              type="text"
              className={styles.contactCallInputField}
              placeholder="* Full Name"
              maxLength={30}
              value={contactInfo?.name || ""}
              onChange={(e) => handleInput("name", e.target.value)}
            />
            {errorInfo?.name && <p className={`mt-1 mb-0 ${styles.formError}`}>Please Enter Full Name *</p>}
            <Form.Control
              type="mail"
              className={styles.contactCallInputField}
              placeholder="* Email Address"
              maxLength={30}
              value={contactInfo?.email || ""}
              onChange={(e) => handleInput("email", e.target.value)}
            />
            {errorInfo?.email && (
              <p className={`mt-1 mb-0 ${styles.formError}`}>{`Please Enter ${
                contactInfo?.email && !isValidEmail(contactInfo?.email) ? "Valid" : ""
              } Email Address *`}</p>
            )}

            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              maxLength={100}
              className={styles.contactCallInputField}
              placeholder="* Message"
              value={contactInfo?.message || ""}
              onChange={(e) => handleInput("message", e.target.value)}
            />
            {errorInfo?.message && <p className={`mt-1 mb-0 ${styles.formError}`}>Please Enter Message *</p>}

            <Button className={`lightBtn`} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Container>
      </div>
      <SimpleModal
        open={submitInfo}
        close={() => {
          setSubmitInfo(false);
          setContactInfo({});
        }}
        modalHeader={null}
        modalBody={ModalBody()}
        modalFooter={null}
        modalSize={"md"}
      />
    </React.Fragment>
  );
};

export default ContactUsModule;
