import React from "react";
import { Container } from "react-bootstrap";
import navMenuArray, { staticData } from "../../utilities/staticData";
import styles from "../layouts/style.module.css";
const CustomBreadcrumb = () => {
  const breadcrumbName = () => {
    let activeLink = window.location.pathname;
    let getBreadcrumbName = staticData?.navMenuArray?.find((v) => v.link === activeLink);
    return getBreadcrumbName?.name;
  };
  return (
    <div className={styles.breadcrumbBanner}>
      <Container className={styles.customContainer}>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className={styles.title}> {breadcrumbName()}</h1>
          <span className={styles.path}>{`Home > ${breadcrumbName()}`}</span>
        </div>
      </Container>
    </div>
  );
};

export default CustomBreadcrumb;
