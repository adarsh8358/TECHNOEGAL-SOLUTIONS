import React from "react";
import "./About.scss";
import "./Responsive.scss";
import Breadcrumb from "../../components/Breadcrumb";

const About = () => {
  return (
    <>


      <div className="about-page">

        {/* HERO */}
        <div className="about-hero">
          <div className="overlay">
            <h1>
              About <span>Us</span>
            </h1>
            <p>
              We help businesses grow with smart digital strategies and powerful web solutions.
            </p>
          </div>
        </div>

        <hr />
        <Breadcrumb />

        {/* INTRO WHITE SECTION */}
        <section className="about-intro">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p>
              Technoegal Solutions Pvt. Ltd. is a results-driven digital marketing and web development agency focused on delivering measurable growth, visibility, and long-term success for businesses.
            </p>
          </div>
        </section>

        <hr />

        {/* MAIN ABOUT (2 PART LIKE HOME) */}
        <section className="about-main">

          <div className="about-container">

            <div className="about-left">
              <h3>We Build Digital Growth</h3>
              <p>
                We specialize in SEO, PPC, social media marketing, and website development. Our team focuses on data-driven strategies that help businesses generate leads, increase conversions, and maximize ROI.
              </p>
              <button>Get Started</button>
            </div>

            <div className="about-right">
              <div className="about-image"></div>
              <p>
                We combine creativity with performance marketing to build strong online presence and scalable growth.
              </p>
            </div>

          </div>

        </section>

        <hr />


      </div>
    </>
  );
};

export default About;