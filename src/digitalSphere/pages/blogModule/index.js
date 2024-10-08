import React, { useEffect, useState } from "react";
import CustomBreadcrumb from "../../components/layouts/breadcrumb";
import { Button, Container } from "react-bootstrap";
import styles from "../blogModule/styles.module.css";
import { staticData } from "../../utilities/staticData";
import StaySafeOnlineBlog from "./blogs/staySafeOnline";
import SpeedUpSlowPcBlog from "./blogs/speedUpSlowPc";
import MalvestisingBlog from "./blogs/malvestising";
import { BackSVGIcon } from "../../components/config";
const BlogModule = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const handleCloseBlog = () => {
    setSelectedBlog(null);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selectedBlog]);

  return (
    <React.Fragment>
      <CustomBreadcrumb />
      <Container className="mt-4 mb-4 fadeTop">
        {!selectedBlog && (
          <React.Fragment>
            <div className={styles.blogSection}>
              <h3>About The Blog</h3>
              <p>
                This blog is your go-to resource for staying informed and proactive in the digital world. Covering
                essential topics like online safety, computer optimization, and protection from digital threats, our aim
                is to provide practical advice and solutions. Whether you’re looking to secure your online presence,
                boost your computer’s performance, or understand the risks of malicious advertising (malvertising), we
                break down complex issues into easy-to-follow steps. Stay updated with actionable tips and empower
                yourself to navigate the digital landscape with confidence and speed.
              </p>
            </div>
          </React.Fragment>
        )}
        {selectedBlog && (
          <p className={styles.backBtn} onClick={handleCloseBlog}>
            <img src={BackSVGIcon} className="me-1" width={15} height={15} alt="" />
            BACK TO BLOGS
          </p>
        )}
        <React.Fragment>
          {selectedBlog ? (
            <React.Fragment>
              {selectedBlog === 1 ? (
                <StaySafeOnlineBlog selectedBlogId={selectedBlog} />
              ) : selectedBlog === 2 ? (
                <SpeedUpSlowPcBlog selectedBlogId={selectedBlog} />
              ) : selectedBlog === 3 ? (
                <MalvestisingBlog selectedBlogId={selectedBlog} />
              ) : null}
            </React.Fragment>
          ) : (
            <div className={styles.blogContainer}>
              <div className={styles.blogLeft}>
                {staticData?.blogArray?.map((v, i) => (
                  <div className={styles.blogContents}>
                    <img src={v.img} alt="" />
                    <h3>{v.name}</h3>
                    <h5>{v.title}</h5>
                    <p>{v.description}</p>
                    <Button className={`lightBtn`} onClick={() => setSelectedBlog(v.id)}>
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
              <div className={styles.blogRight}>
                <div className={styles.recentCard}>
                  <h5>Recent Posts</h5>
                  {staticData?.blogArray?.map((v, i) => (
                    <div>
                      <span>{v.name}</span>
                      <ul>
                        <li>{v.title}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      </Container>
    </React.Fragment>
  );
};

export default BlogModule;
