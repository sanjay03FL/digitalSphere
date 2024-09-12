import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
// import required modules
import {
  CpuServicePng,
  MotherBoardServicePng,
  DataRecoveryServicePng,
  ScreenRepairServicePng,
  BusinessGuyJpg,
  PlanningGuysJpg,
  CheckSvgIcon,
} from "../../components/config";
import styles from "./styles.module.css";
import { Button, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  easing: "ease-out-back",
  duration: 3000,
  anchorPlacement: "top-bottom",
});
const HomeModule = () => {
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
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className={styles.mySwiperFirstSection}
        >
          <div
            slot="container-start"
            className={`${styles.parallaxBg} ${styles.swiperImg}`}
            style={{
              backgroundImage: `url(${MotherBoardServicePng})`,
            }}
            data-swiper-parallax="-23%"
          ></div>

          <SwiperSlide>
            <Container>
              <div className={styles.swiperTitle} data-swiper-parallax="-300">
                Your One-Stop Solution for all
              </div>
              <div className={styles.swiperSubtitle} data-swiper-parallax="-200">
                PC & Laptops worries.
              </div>
              <div className={styles.swiperText} data-swiper-parallax="-100">
                <p>
                  At TheDigitalSpehere, we’re dedicated to providing you with exceptional tech repair and support
                  services. With years of expertise in laptop and desktop repairs, screen replacements, data recovery,
                  and hardware supplies, we pride ourselves on delivering fast, reliable, and high-quality solutions.
                  Our team of certified technicians is passionate about technology and committed to solving even the
                  toughest challenges. Whether you need in-home service or remote support, we are here to ensure your
                  technology meets your lifestyle and business needs. Trust us to keep your equipment running smoothly
                  and securely...
                </p>
              </div>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <div className={styles.swiperTitle} data-swiper-parallax="-300">
                Your One-Stop Solution for all
              </div>
              <div className={styles.swiperSubtitle} data-swiper-parallax="-200">
                PC & Laptops worries.
              </div>
              <div className={styles.swiperText} data-swiper-parallax="-100">
                <p>
                  At TheDigitalSpehere, we’re dedicated to providing you with exceptional tech repair and support
                  services. With years of expertise in laptop and desktop repairs, screen replacements, data recovery,
                  and hardware supplies, we pride ourselves on delivering fast, reliable, and high-quality solutions.
                  Our team of certified technicians is passionate about technology and committed to solving even the
                  toughest challenges. Whether you need in-home service or remote support, we are here to ensure your
                  technology meets your lifestyle and business needs. Trust us to keep your equipment running smoothly
                  and securely...
                </p>
              </div>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <div className={styles.swiperTitle} data-swiper-parallax="-300">
                Your One-Stop Solution for all
              </div>
              <div className={styles.swiperSubtitle} data-swiper-parallax="-200">
                PC & Laptops worries.
              </div>
              <div className={styles.swiperText} data-swiper-parallax="-100">
                <p>
                  At TheDigitalSpehere, we’re dedicated to providing you with exceptional tech repair and support
                  services. With years of expertise in laptop and desktop repairs, screen replacements, data recovery,
                  and hardware supplies, we pride ourselves on delivering fast, reliable, and high-quality solutions.
                  Our team of certified technicians is passionate about technology and committed to solving even the
                  toughest challenges. Whether you need in-home service or remote support, we are here to ensure your
                  technology meets your lifestyle and business needs. Trust us to keep your equipment running smoothly
                  and securely...
                </p>
              </div>
            </Container>
          </SwiperSlide>
        </Swiper>
      </React.Fragment>
      <React.Fragment>
        {/* SECOND SECTION  */}
        <Container className="mt-4 mb-4">
          {/* <img className={`text-center ${styles.secondLayerImg}`} src={CpuServicePng} alt="CpuServicePng" /> */}

          <span className="text-center">
            <h1 className="mb-3">Get started with our services</h1>
            <p>
              DigitalSphere offers a wider array of PC and Laptop repair services, covering all the needs of the
              clients. Avail these amazing services in the most amazing prices and the top-notch quality by the experts
              of DigitalSphere.
            </p>
          </span>
          <div data-aos="zoom-in">
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
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
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
                        src={CpuServicePng}
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
                        src={DataRecoveryServicePng}
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
                        src={DataRecoveryServicePng}
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
                        src={ScreenRepairServicePng}
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
      </React.Fragment>
      <React.Fragment>
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
      </React.Fragment>
      <React.Fragment>
        <div className={styles.sectionFourth}>
          <div className={styles.imageBanner}>
            <Container>
              <h1 className={styles.title}>Reasons Why You Should Upgrade Your Computer</h1>
              <p className={styles.details}>
                Upgrade your computer systems for &nbsp;
                <span className={styles.keyPoints}>enhanced performance, improved security, and compatibility</span>
                &nbsp; with the latest software.
              </p>
              <p className={styles.details}>
                Modern hardware increases &nbsp;
                <span className={styles.keyPoints}>
                  reliability, energy efficiency, and supports advanced technologies like AI and VR.
                </span>
                &nbsp; Better user experiences, scalability, compliance with industry standards, and reduced long-term
                costs are additional benefits.
              </p>
              <p className={styles.details}>
                Investing in upgrades can significantly boost productivity and protect your business from future
                challenges.
              </p>
            </Container>
          </div>
          <div className={styles.curveImg}></div>
        </div>
      </React.Fragment>
      <React.Fragment>
        <div className={styles.sectionFiveth}>
          <h5 className="mb-3">Ready to Boost Your Business?</h5>
          <h3 className="mb-2">IS YOUR LAPTOP FEELING LAGGY IN FLORIDA? UNMASK TECH</h3>
          <h4 style={{ marginBottom: "2rem" }}>TROUBLES WITH DigitalSphere!</h4>
          <p style={{ marginBottom: "2rem" }}>UNVEILING YOUR LAPTOP’S MYSTERIES: COMMON ISSUES AND SOLUTIONS</p>
          <div className="d-flex justify-content-center pt-4 pb-4">
            <Button className="secondaryBtn me-4">Book A Meeting</Button>
            <Button className="primaryBtn">Download Now</Button>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default HomeModule;
