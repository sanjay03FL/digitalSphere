import React, { useState } from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
// import required modules
import {
  MotherBoardServicePng,
  ScreenRepairServicePng,
  VirusRecovery,
  ChipBanner,
  BlackyBanner,
  HardDiskRecovery,
  LaptopUsingImg,
  HardwareImg,
} from "../../components/config";
import styles from "./styles.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { staticData } from "../../utilities/staticData";
import { useNavigate } from "react-router-dom";
AOS.init({
  easing: "ease-out-back",
  duration: 3000,
  anchorPlacement: "top-bottom",
});
const HomeModule = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // Update active index state
  };

  // Get today's date
  const getPastWeekDate = (type, count) => {
    const today = new Date();
    const lastWeekDate = new Date(today);
    lastWeekDate.setDate(today.getDate() - (7 - count));
    const day = `0${lastWeekDate.getDate()}`.slice(-2); // Ensures two digits
    const month = lastWeekDate.toLocaleString("en-US", { month: "short" }).toUpperCase();
    // const formattedLastWeek = `${day} ${month}`;
    return type === "DATE" ? day : month;
  };

  return (
    <React.Fragment>
      {/* <img src={MotherBoardServicePng} className={styles.sliderImage} /> */}
      <React.Fragment>
        {/* FIRST SECTION  */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          // parallax={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          onSlideChange={handleSlideChange}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className={styles.mySwiperFirstSection}
        >
          <SwiperSlide className="h-100">
            <div className={`${styles.swiperImgTop} ${styles.img1}`} style={{ backgroundImage: `url(${ChipBanner})` }}>
              <Container className={styles.swiperContainer}>
                <div className={`${styles.swiperTitle} ${activeIndex === 0 ? "fadeRight" : ""}`}>
                  Your One-Stop Solution
                </div>
                <div className={`${styles.swiperTitle} ${activeIndex === 0 ? "fadeRight" : ""}`}>
                  for all PC & Laptops
                </div>
                <div className={`${styles.swiperText} ${activeIndex === 0 ? "fadeRight" : ""}`}>
                  <p>
                    Get your laptops and PCs repaired and fixed from The Digital Sphere. From laptop and PC repairing to
                    Virus removal services and Screen repairing.
                  </p>
                </div>
                <Button
                  className={`primaryBtn mt-4 ${activeIndex === 0 ? "fadeTop" : ""}`}
                  onClick={() => navigate("/contactUs")}
                >
                  CONTACT US
                </Button>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.swiperImgTop} ${styles.img2}`}
              style={{ backgroundImage: `url(${BlackyBanner} )` }}
            >
              <Container className={styles.swiperContainer}>
                <div className={`${styles.swiperTitle} ${activeIndex === 1 ? "fadeLeft" : ""}`}>Your Technology</div>
                <div className={`${styles.swiperTitle} ${activeIndex === 1 ? "fadeLeft" : ""}`}>Our Priority</div>
                <div className={`${styles.swiperText} ${activeIndex === 1 ? "fadeLeft" : ""}`}>
                  <p>
                    We ensure your tech runs smoothly, whether it’s repairs, upgrades, or maintenance, we’re here to
                    keep you connected and focused on what matters.
                  </p>
                </div>
                <Button
                  className={`lightBtn mt-4 ${activeIndex === 1 ? "fadeTop" : ""}`}
                  onClick={() => navigate("/contactUs")}
                >
                  CONTACT US
                </Button>
              </Container>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="h-100">
            <div
              className={`${styles.swiperImgTop} ${styles.img2}`}
              style={{ backgroundImage: `url(${ServiceCpuBanner})` }}
            >
              <Container className={styles.swiperContainer}>
                <div className={`${styles.swiperTitle} ${activeIndex === 0 ? "fadeRight" : ""}`}>
                  Your One-Stop Solution
                </div>
                <div className={`${styles.swiperTitle} ${activeIndex === 0 ? "fadeRight" : ""}`}>
                  for all PC & Laptops
                </div>
                <div className={`${styles.swiperText} ${activeIndex === 0 ? "fadeRight" : ""}`}>
                  <p>
                    Get your laptops and PCs repaired and fixed from The Digital Sphere. From laptop and PC repairing to
                    Virus removal services and Screen repairing.
                  </p>
                </div>
                <Button
                  className={`primaryBtn mt-4 ${activeIndex === 0 ? "fadeTop" : ""}`}
                  onClick={() => navigate("/contactUs")}
                >
                  CONTACT US
                </Button>
              </Container>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </React.Fragment>

      <React.Fragment>
        {/* SECOND SECTION  */}
        <div className={styles.sectionTwo}>
          <Container className={styles.container}>
            {/* <img className={`text-center ${styles.secondLayerImg}`} src={CpuServicePng} alt="CpuServicePng" /> */}
            <span className="text-center">
              <h1 className="mb-3">Get started with our services</h1>
              <p>
                DigitalSphere offers a wider array of PC and Laptop repair services, covering all the needs of the
                clients. Avail these amazing services in the most amazing prices and the top-notch quality by the
                experts of DigitalSphere.
              </p>
            </span>
            <div style={{ marginTop: "2rem" }}>
              {/* <div data-aos="fade-up" data-aos-duration="3000"></div> */}
              <h1 className="text-center">What we do</h1>
              <React.Fragment>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    // 640: {
                    //   slidesPerView: 2,
                    //   spaceBetween: 20,
                    // },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1400: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                  loop={true}
                  modules={[Autoplay]}
                  className="mySwiperSecond swiper responsive-swiper rounded gallery-light pb-4"
                  style={{ marginTop: "1rem" }}
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="serviceSwiperSlide">
                      <div className="card square rounded-0">
                        <img
                          className={`gallery-img img-fluid mx-auto ${styles.servicesSwiperImg}`}
                          src={LaptopUsingImg}
                          alt=""
                        />
                        <div className={styles.boxContent}>
                          <p className="text-center mb-0">Laptop Repair</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="serviceSwiperSlide">
                      <div className="card square rounded-0">
                        <img
                          className={`gallery-img img-fluid mx-auto ${styles.servicesSwiperImg}`}
                          src={MotherBoardServicePng}
                          alt=""
                        />
                        <div className={styles.boxContent}>
                          <p className="text-center mb-0">Motherboard Repair</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="serviceSwiperSlide">
                      <div className="card square rounded-0">
                        <img
                          className={`gallery-img img-fluid mx-auto ${styles.servicesSwiperImg}`}
                          src={HardDiskRecovery}
                          alt=""
                        />
                        <div className={styles.boxContent}>
                          <p className="text-center mb-0">Data Recovery</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="serviceSwiperSlide">
                      <div className="card square rounded-0">
                        <img
                          className={`gallery-img img-fluid mx-auto ${styles.servicesSwiperImg}`}
                          src={ScreenRepairServicePng}
                          alt=""
                        />
                        <div className={styles.boxContent}>
                          <p className="text-center mb-0">Screen Repair</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="serviceSwiperSlide">
                      <div className="card square rounded-0">
                        <img
                          className={`gallery-img img-fluid mx-auto ${styles.servicesSwiperImg}`}
                          src={HardwareImg}
                          alt=""
                        />
                        <div className={styles.boxContent}>
                          <p className="text-center mb-0">Hardware / Software Upgrades</p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="serviceSwiperSlide">
                      <div className="card square rounded-0">
                        <img
                          className={`gallery-img img-fluid mx-auto ${styles.servicesSwiperImg}`}
                          src={VirusRecovery}
                          alt=""
                        />

                        <div className={styles.boxContent}>
                          <p className="text-center mb-0">Virus and Malware Removal</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="swiper-pagination swiper-pagination-dark"></div>
                </Swiper>
              </React.Fragment>
            </div>
          </Container>
        </div>
      </React.Fragment>

      <React.Fragment>
        <div className={styles.sectionFourth}>
          <div className={styles.imageBanner}>
            <Container className={styles.container}>
              <h5 className={styles.title}>Reasons Why You Should Upgrade Your Computer</h5>
              <p className={styles.details}>
                Upgrade your computer systems for enhanced performance, improved security, and compatibility with the
                latest software.
              </p>
              <p className={styles.details}>
                Modern hardware increases reliability, energy efficiency, and supports advanced technologies like AI and
                VR. Better user experiences, scalability, compliance with industry standards, and reduced long-term
                costs are additional benefits.
              </p>
              <Button className={`lightBtn mt-4 `} data-aos="fade-down" onClick={() => navigate("/contactUs")}>
                Contact Now
              </Button>
            </Container>
          </div>
        </div>
      </React.Fragment>

      <React.Fragment>
        <Row className={styles.sectionCommitment}>
          <Col md={6} sm={12} className={`p-0 ${styles.imgContainer}`}></Col>
          <Col md={6} sm={12} className={styles.textContainer}>
            <h3 className={styles.heading}>Over 10 Years of Experience</h3>
            <p className={styles.points}>
              With more than a decade of experience in the computer repair industry, DigitalSphere has become a trusted
              name in delivering reliable, high-quality service. Our team of certified professionals brings a wealth of
              knowledge and technical expertise to every repair job...
            </p>
            <Button className={`lightBtn mt-4 `} data-aos="fade-down" onClick={() => navigate("/aboutUs")}>
              Read More
            </Button>
          </Col>
        </Row>
        <Row className={styles.sectionCommitment}>
          <Col md={6} sm={12} className={styles.textContainer}>
            <h3 className={styles.heading}> 99% Customer Satisfaction Rate</h3>
            <p className={styles.points}>
              Customer satisfaction is at the core of what we do at DigitalSphere. With a 95% customer satisfaction
              rate, our clients consistently express their appreciation for the quality and care we put into each
              service...
            </p>
            <Button className={`lightBtn mt-4 }`} data-aos="fade-down" onClick={() => navigate("/aboutUs")}>
              Read More
            </Button>
          </Col>
          <Col md={6} sm={12} className={`p-0 ${styles.imgContainer}`}></Col>
        </Row>
      </React.Fragment>
      {/* <React.Fragment>
        <div className={styles.sectionThird}>
          <Container>
            <h2 className="mb-4">Our Commitment to You</h2>
            <div className={styles.section} data-aos="fade-right">
              <img src={BusinessGuyJpg} className={`me-4 ${styles.sectionThirdImg}`} alt="" />
              <div className="d-flex flex-column">
                <span>
                  <h5 className={`d-flex align-items-center ${styles.title}`}>
                    <img src={CheckSvgIcon} width={18} className="me-1" alt="" />
                    Over 10 Years of Experience:
                  </h5>
                  <p>
                    With more than a decade of experience in the computer repair industry, DigitalSphere has become a
                    trusted name in delivering reliable, high-quality service. Our team of certified professionals
                    brings a wealth of knowledge and technical expertise to every repair job. Whether you're facing a
                    hardware failure, software issue, or network problem, our skilled technicians have seen and solved
                    it all. This depth of experience ensures that your devices are in capable hands, leading to
                    efficient, accurate, and lasting repairs.
                  </p>
                </span>
                <span>
                  <h5 className={`d-flex align-items-center ${styles.title}`}>
                    <img src={CheckSvgIcon} width={18} className="me-1" alt="" />
                    95% Customer Satisfaction Rate:
                  </h5>
                  <p>
                    Customer satisfaction is at the core of what we do at DigitalSphere. With a 95% customer
                    satisfaction rate, our clients consistently express their appreciation for the quality and care we
                    put into each service. Our commitment to clear communication, transparent processes, and delivering
                    on promises ensures that customers not only trust us but also return whenever they need assistance.
                    From individuals to businesses, we are dedicated to building long-term relationships based on trust
                    and excellence.
                  </p>
                </span>
              </div>
            </div>
            <div className={styles.section} data-aos="fade-left">
              <div className="d-flex flex-column">
                <span>
                  <h5 className={`d-flex align-items-center ${styles.title}`}>
                    <img src={CheckSvgIcon} width={18} className="me-1" alt="" />
                    Quick Turnaround Time:
                  </h5>
                  <p>
                    We understand how critical computers are in both personal and professional lives. That's why
                    DigitalSphere prioritizes speed without sacrificing quality. Our streamlined processes and in-depth
                    expertise allow us to diagnose issues quickly and implement solutions efficiently. Whether you're a
                    business that can't afford extended downtime or an individual who needs your personal device back in
                    working order fast, we guarantee a quick turnaround that minimizes inconvenience while maintaining
                    our high standards of service.{" "}
                  </p>
                </span>
                <span>
                  <h5 className={`d-flex align-items-center ${styles.title}`}>
                    <img src={CheckSvgIcon} width={18} className="me-1" alt="" />
                    Affordable Pricing:
                  </h5>
                  <p>
                    At DigitalSphere, we believe that everyone deserves access to top-tier computer repair services
                    without breaking the bank. We offer competitive and transparent pricing, ensuring that our customers
                    receive exceptional value for their money. Our services are priced affordably, allowing you to get
                    expert solutions without the worry of hidden fees or inflated costs. We strive to provide both
                    quality and affordability, making us the go-to choice for customers who need repairs done right at a
                    price they can afford.
                  </p>
                </span>
              </div>
              <img src={PlanningGuysJpg} className={`ms-4 ${styles.sectionThirdImg}`} alt="" />
            </div>

            <h5 className={`text-center ${styles.title}`} data-aos="zoom-in">
              DigitalSphere stands out by combining years of experience, outstanding customer satisfaction, rapid
              service, and affordable pricing. When you choose us, you’re not just getting a repair—you’re investing in
              a long-term partnership with a trusted expert in the field.
            </h5>
            <div className="d-flex justify-content-center pt-4 pb-4">
              <Button className="secondaryBtn me-4">Continue Reading</Button>
              <Button className="primaryBtn">Contact Now</Button>
            </div>
          </Container>
        </div> 
      </React.Fragment> */}
      <React.Fragment>
        <div className={styles.sectionFiveth}>
          <h5 className={styles.title}>Ready to Boost Your Business?</h5>
          <h4 className="mb-2">Is your laptop feeling laggy</h4>
          <h4 style={{ marginBottom: "2rem" }}>unmask Tech Troubles with DigitalSphere!</h4>
          <p style={{ marginBottom: "2rem" }}>Unveiling your laptop’s mysteries: common issues and solutions</p>
          <div className={`pt-4 pb-4 ${styles.btn}`} data-aos="fade-down">
            <Button className={`lightBtn`} onClick={() => navigate("/contactUs")}>
              Book A Meeting
            </Button>
            {/* <Button className="primaryBtn">Download Now</Button> */}
          </div>
        </div>
        {/* <div className={`${styles.curveImg} ${styles.curveImgBottom}`}></div> */}
      </React.Fragment>

      <React.Fragment>
        <div className={styles.sectionSixth}>
          <Container className={`mb-2 ${styles.containerSixth}`}>
            <h5 className={styles.title} data-aos="fade-right">
              Latest Blogs
            </h5>
            <Row>
              {staticData?.blogArray?.map((v, i) => (
                <Col md={4} sm={12} className={styles.blogContainer} data-aos="fade-up" key={i}>
                  <p className={styles.date}>
                    <p>{getPastWeekDate("DATE", staticData?.blogArray.length - i)}</p>
                    <span>{getPastWeekDate("MONTH", staticData?.blogArray.length - i)}</span>
                  </p>
                  <h4 className={styles.blogTitle}>{v.name}</h4>
                  <p className={styles.blogPoints}>{v.description}</p>
                  <p className={styles.viewMore} onClick={() => navigate("/blog")}>
                    View More
                  </p>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default HomeModule;
