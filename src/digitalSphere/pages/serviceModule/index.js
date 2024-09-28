import React, { useState } from "react";
import CustomBreadcrumb from "../../components/layouts/breadcrumb";
import styles from "../serviceModule/styles.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { staticData } from "../../utilities/staticData";
import { OnSiteImg, CheckSvgIcon, HardWareSoftwareImg, ManServiceLapGif, ServiceLogo } from "../../components/config";
import AOS from "aos";
import "aos/dist/aos.css";
import SimpleModal from "../../components/common/modal";
import { useNavigate } from "react-router-dom";
AOS.init({
  easing: "ease-out-back",
  duration: 3000,
  anchorPlacement: "top-bottom",
});
const ServiceModule = () => {
  const navigate = useNavigate();
  const [viewInfo, setViewInfo] = useState(false);
  const handleViewInfo = (info) => {
    setViewInfo({ status: true, details: info });
  };
  const ModalHeader = () => {
    return (
      <div>
        <h4 className={`modal-title ${styles.modalCustomTitle}`}>{viewInfo?.details?.name}</h4>
      </div>
    );
  };

  const ModalBody = () => {
    return (
      viewInfo?.status && (
        <React.Fragment>
          <Container className={styles.modalContainer}>
            <img src={viewInfo?.details?.img} className={styles.serviceImg} />
            <div className="d-flex flex-column" data-aos="fade-bottom">
              {/* <h3>{viewInfo?.details?.name}</h3> */}
              {Array.isArray(viewInfo?.details?.details) ? (
                viewInfo?.details?.details.map((v, i) => (
                  <div key={i} className={styles.serviceCardDetails}>
                    <span>{v?.title}</span>
                    <p>{v?.desc}</p>
                    <p className={styles.price}>Price : {v?.price}</p>
                  </div>
                ))
              ) : (
                <div className={styles.serviceCardDetails}>
                  <span>{viewInfo?.details?.name}</span>
                  <p>{viewInfo?.details?.details}</p>
                  <p className={styles.price}>Price : {viewInfo?.details?.price}</p>
                </div>
              )}
            </div>
          </Container>
          <div className={styles.modalFooter}>
            <Button className="primaryBtn me-4" onClick={() => navigate("/contactUs")}>
              Contact Us
            </Button>
            <Button className={`lightBtn`} onClick={() => setViewInfo(false)}>
              close
            </Button>
          </div>
        </React.Fragment>
      )
    );
  };

  const ModalFooter = () => {
    return (
      <Button className="primaryBtn" style={{ padding: "0.5rem 1rem" }}>
        close
      </Button>
    );
  };
  return (
    <React.Fragment>
      <CustomBreadcrumb />
      <div className={styles.serviceBody}>
        <h1 className={styles.headerTitle}>In Store</h1>
        <Container>
          {staticData?.servicesDetails?.map((v, i) => (
            <div className={`fadeTop ${styles.serviceRow}`} key={i}>
              <img src={v.img} className={styles.serviceImg} data-aos="fade-right" />
              <div className="d-flex flex-column" data-aos="fade-bottom">
                <h3>{v.name}</h3>
                <span>{v.details[0].title}</span>
                <p>{v.details[0].desc}</p>
                <p className={styles.price}>Price : {v.details[0].price}</p>
                <Button className={`lightBtn`} onClick={() => handleViewInfo(v)}>
                  View More
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </div>
      <div className={styles.onSiteSection}>
        <Container className={styles.container}>
          <img src={OnSiteImg} className={styles.onSiteImg} data-aos="fade-right" />
          <div data-aos="fade-bottom">
            <h5 className={styles.title}>On Site</h5>
            <h4 className="mb-4">Local Area Discount 0$ travel fee Within 5 miles</h4>
            <h4 style={{ marginBottom: "2rem" }}>DIAGNOSIS</h4>
            <div style={{ marginBottom: "1rem" }}>
              Priority Level Normal:One way - <span>100$/ hr + travel — Starting @ 50$</span>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              Priority Level (Urgent) (Emergency Calls Off time) - <span>180$/hr + travel — Starting @ 80$</span>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.internetSection}>
        <Container>
          {staticData?.internetServiceDetails?.map((v, i) => (
            <div className={`fadeTop ${styles.serviceRow}`} key={i}>
              <img src={v.img} className={styles.serviceImg} data-aos="fade-right" />
              <div className="d-flex flex-column" data-aos="fade-bottom">
                <h3>{v.name}</h3>
                <p>{v.details}</p>
                <p className={styles.price}>Price : {v.price}</p>
                <Button className={`lightBtn`} onClick={() => handleViewInfo(v)}>
                  View More
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </div>
      <div className={styles.annualSection}>
        <Container className={styles.container} data-aos="fade-down">
          <h3>AMC (Annual Maintenance Contract)</h3>
          <div className={styles.containerSection}>
            <div className={`mt-4 ${styles.row}`}>
              {staticData?.AnnualDetails.map((v, i) => (
                <React.Fragment key={i}>
                  {i !== 1 && (
                    <div className={`mb-4 ${styles.sectionCard}`}>
                      <span className="d-flex align-items-center mb-2">
                        <img className="me-1" src={CheckSvgIcon} />
                        <h5>{v.name}</h5>
                      </span>
                      <ul className="ms-2">
                        <li>
                          <p>{v.details}</p>
                        </li>
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className={`mt-4 ${styles.row}`}>
              {staticData?.AnnualDetails.map((v, i) => (
                <React.Fragment key={i}>
                  {i === 1 && (
                    <div className={styles.sectionCard}>
                      <span className="d-flex align-items-center mb-2">
                        <img className="me-1" src={CheckSvgIcon} />
                        <h5>{v.name}</h5>
                      </span>
                      <ul className="ms-2">
                        <li>
                          <p className="mb-2">{v.details}</p>
                          {v?.subPoints?.map((x, y) => (
                            <li className="mb-2" key={y}>
                              {x.type}&nbsp;:&nbsp;{x.text}&nbsp;-&nbsp;{x.price}
                            </li>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <Button className="primaryBtn" onClick={() => navigate("/contactUs")}>
              Contact Now
            </Button>
          </div>
        </Container>
      </div>
      <React.Fragment>
        <Row className={styles.sectionCommitment}>
          <Col md={6} sm={12} className={`p-0 ${styles.imgContainer}`}></Col>
          <Col md={6} sm={12} className={styles.textContainer}>
            <h5 className={styles.heading}>
              Why risk losing information or having downtime, when you can have us protecting your business?
            </h5>
            <p className={styles.title}>Unlimited Technical Support.</p>
            <p className={styles.points}>
              <ul>
                <li>We are available Monday through Friday from 7am to 7pm.</li>
                <li>A real expert here in Florida will answer the Phone.</li>
                <li>We provide priority response to your emergency.</li>
              </ul>
            </p>
            <p className={styles.keyPoints}>
              We cover : All your computers, servers and network (firewalls, switches, routers).
            </p>
          </Col>
        </Row>
        <Row className={styles.sectionCommitment}>
          <Col md={6} sm={12} className={styles.textContainer}>
            <h5 className={styles.heading}> Residential Customer means</h5>
            <p className={styles.title}>You will bring your computer to us.</p>
            <p className={styles.points}>
              <ul>
                <li>We do not do House Calls or Pick up/Drop off your computer.</li>
                <li>You need an appointment.</li>
              </ul>
            </p>
            <p className={styles.keyPoints}>
              As a residential customer, you’ll benefit from a fixed labour fee of just $100 per computer, rather than
              the hourly rate of $125 charged to businesses. Even if your computers are originally from a business,
              bringing them to us for repair will still only cost $100 per computer. Additionally, consider maximizing
              your savings by opting for our IT Support Contract. (on clicking should scroll to AMC section)
            </p>
          </Col>
          <Col md={6} sm={12} className={`p-0 ${styles.imgContainer}`}></Col>
        </Row>
      </React.Fragment>
      <div className={styles.onSiteSection}>
        <Container className={styles.container}>
          <img
            src={ManServiceLapGif}
            className={styles.onSiteImg}
            style={{ objectFit: "cover" }}
            data-aos="fade-right"
          />
          <div data-aos="fade-bottom">
            <h5 className={styles.title}>Network Services</h5>
            <p className="mb-4">
              We ensure that your business network is properly secured and connected. We specialize in implementing
              robust firewall solutions to safeguard your network infrastructure.
            </p>
            <h4 className="mb-4">We can install and manage any network device:</h4>
            <div style={{ marginBottom: "1rem" }}>
              <ul>
                {[
                  "Modem/Router",
                  "Firewall",
                  "Switches",
                  "Wi-Fi Antennas",
                  "Servers",
                  "Projectors",
                  "TV",
                  "Printers",
                  "CCTV",
                ].map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <React.Fragment>
        <Container>
          <div className={styles.repairSection}>
            <div className="d-flex align-items-center">
              <img src={ServiceLogo} />
              <div>
                <h3>Repair Price</h3>
                <ul>
                  <li>$100 Flat Fee Labor.</li>
                  <li>Parts not included.</li>
                  <li>5% fee on credit card or PayPal payments.</li>
                  <li>We also accept Zelle</li>
                  <li>Free Diagnostic.</li>
                  <li>No Fix = No Fee.</li>
                </ul>
              </div>
            </div>
            <div className={styles.contactBtn} data-aos="fade-down">
              <Button className="primaryBtn me-4">Call Us +1-302-390-7520</Button>
              <Button className={`lightBtn`} onClick={() => navigate("/contactUs")}>
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </React.Fragment>
      <SimpleModal
        open={viewInfo?.status || false}
        close={() => setViewInfo(false)}
        modalHeader={ModalHeader()}
        modalBody={ModalBody()}
        modalFooter={null}
      />
    </React.Fragment>
  );
};

export default ServiceModule;
