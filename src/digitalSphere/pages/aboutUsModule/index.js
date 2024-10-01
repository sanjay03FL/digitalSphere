import React from "react";
import CustomBreadcrumb from "../../components/layouts/breadcrumb";
import { Container } from "react-bootstrap";
import { BusinessGuyJpg } from "../../components/config";
import styles from "../aboutUsModule/styles.module.css";
import { staticData } from "../../utilities/staticData";
const AboutUsModule = () => {
  return (
    <React.Fragment>
      <CustomBreadcrumb />
      <Container className={styles.aboutCompanyContainer}>
        <img src={BusinessGuyJpg} alt="" className={styles.companyImg} />
        <div>
          <p>
            Welcome to DigitalSphere, your premier destination for top-notch computer repair services in Florida. With a
            team of skilled technicians and cutting-edge technology, we are dedicated to providing efficient solutions
            for all your computer-related issues
          </p>
          <p>
            At DigitalSphere, customer satisfaction is our top priority. Whether it's a hardware malfunction or software
            glitch, you can trust us to deliver reliable and affordable repair services tailored to meet your needs.
          </p>
          <p>Contact us today and let us take care of all your Tech needs!</p>
        </div>
      </Container>
      <div>
        <Container className={styles.aboutTeamContainer}>
          <h5>MEET OUR TEAM</h5>
          <h2>Real Professionals</h2>
          <div className={styles.aboutTeamDetails}>
            {staticData?.teamDetails?.map((v, i) => (
              <div className={`${styles.aboutTeamCard}`} key={i}>
                <img src={v.img} className={styles.teamImg} alt="" />
                <h3>{v.name}</h3>
                <h5>{v.role}</h5>
                <p>{v.details}</p>
              </div>
            ))}
          </div>
          <p>
            Together, we’re committed to delivering top-tier IT services while fostering relationships built on trust,
            reliability, and a shared passion for technology. At DigitalSphere, we’re not just a company—we’re your
            partner in navigating the digital world.
          </p>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AboutUsModule;
