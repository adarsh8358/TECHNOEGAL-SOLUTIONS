import React from "react";
import "./Services.scss";
import "./Responsive.scss";
import Breadcrumb from "../../components/Breadcrumb";

const Services = () => {
  return (
    <>

      <div className="service-page">

        {/* HERO SECTION */}
        <div className="service-hero">
          <div className="overlay">
            <h1>
              Our <span>Services</span>
            </h1>
            <p>
              We provide result-driven digital marketing and web solutions to grow your business and maximize ROI.
            </p>
          </div>
        </div>

        <hr />
        <Breadcrumb />

        <section className="service-intro">
          <div className="intro-content">
            <h2>Digital Solutions That Drive Growth</h2>
            <p>
              At Technoegal Solutions Pvt. Ltd., we combine strategy, creativity, and technology to deliver impactful digital marketing and web solutions that help your business scale faster and smarter.
            </p>
          </div>
        </section>

        {/* SERVICES LIST */}
        <hr />

        <section className="service-section">

          <h2 className="section-heading">
            Our <span>Services</span>
          </h2>

          <div className="service-container">

            <div className="service-card">
              <h3>SEO</h3>
              <p>Boost your website ranking and drive organic traffic with advanced SEO strategies.</p>
            </div>

            <div className="service-card">
              <h3>PPC Advertising</h3>
              <p>Run high-converting ad campaigns on Google & social platforms for instant results.</p>
            </div>

            <div className="service-card">
              <h3>Social Media Marketing</h3>
              <p>Build your brand presence and engage your audience across all social platforms.</p>
            </div>

            <div className="service-card">
              <h3>Social Media Optimization</h3>
              <p>Optimize your profiles and content for better reach, trust, and engagement.</p>
            </div>

            <div className="service-card">
              <h3>Website Design & Development</h3>
              <p>Create modern, responsive, and high-converting websites tailored to your business.</p>
            </div>

            <div className="service-card">
              <h3>Performance Marketing</h3>
              <p>Data-driven campaigns focused on leads, conversions, and maximum ROI.</p>
            </div>

            <div className="service-card">
              <h3>Email Marketing</h3>
              <p>Targeted email campaigns to nurture leads and increase customer retention.</p>
            </div>

            <div className="service-card">
              <h3>WhatsApp Marketing</h3>
              <p>
                Reach your customers directly with targeted WhatsApp campaigns, bulk messaging, and automated engagement to boost conversions.
              </p>
            </div>

            <div className="service-card">
              <h3>Logo Design</h3>
              <p>
                Create a unique and professional logo that represents your brand identity and leaves a lasting impression on your audience.
              </p>
            </div>

          </div>

        </section>

        <hr />

        <section className="industry-section">

          <h2 className="section-heading">
            Industries We <span>Serve</span>
          </h2>

          <div className="industry-container">

            <div className="industry-card">
              <div className="industry-img education"></div>
              <h3>Education</h3>
              <p>Coaching institutes, schools, and online education platforms.</p>
            </div>

            <div className="industry-card">
              <div className="industry-img healthcare"></div>
              <h3>Healthcare</h3>
              <p>Clinics, hospitals, and medical service providers.</p>
            </div>

            <div className="industry-card">
              <div className="industry-img realestate"></div>
              <h3>Real Estate</h3>
              <p>Builders, property dealers, and real estate agencies.</p>
            </div>

            <div className="industry-card">
              <div className="industry-img ecommerce"></div>
              <h3>E-commerce</h3>
              <p>Online stores and product-based businesses.</p>
            </div>

            <div className="industry-card">
              <div className="industry-img local"></div>
              <h3>Local Businesses</h3>
              <p>Shops, services, and local service providers.</p>
            </div>

            <div className="industry-card">
              <div className="industry-img startup"></div>
              <h3>Startups</h3>
              <p>New businesses looking for rapid growth and branding.</p>
            </div>

          </div>

        </section>

        <hr />

        <section className="why-section">
          <h2 className="section-heading">Why Choose Us</h2>

          <div className="why-container">
            <div className="why-card">
              <h3>Result Driven</h3>
              <p>We focus on real growth with measurable results and ROI.</p>
            </div>

            <div className="why-card">
              <h3>Expert Team</h3>
              <p>Experienced professionals delivering top-quality digital solutions.</p>
            </div>

            <div className="why-card">
              <h3>Custom Strategy</h3>
              <p>Every business is unique, so we create tailored strategies.</p>
            </div>

            <div className="why-card">
              <h3>Transparency</h3>
              <p>Clear reporting and honest communication at every step.</p>
            </div>
          </div>
        </section>

        <hr />

        {/* MISSION VISION VALUES */}
        <section className="mvv-section">
          <h2 className="section-heading">Mission, Vision & Core Values</h2>

          <div className="mvv-container">

            <div className="mvv-box">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative digital marketing and web
                solutions that drive growth, visibility, and long-term success.
              </p>
            </div>

            <div className="mvv-box">
              <h3>Our Vision</h3>
              <p>
                To become a leading digital agency recognized for creativity,
                performance, and delivering exceptional results globally.
              </p>
            </div>

            <div className="mvv-box">
              <h3>Core Values</h3>
              <p>
                Integrity, innovation, customer focus, and commitment to excellence
                are at the heart of everything we do.
              </p>
            </div>

          </div>
        </section>

        <hr />

        <section className="faq-section">

          <h2 className="section-heading">
            Frequently Asked <span>Questions</span>
          </h2>

          <div className="faq-container">

            <div className="faq-item">
              <h3>1. How will your marketing actually grow my business?</h3>
              <p>
                We focus on real business outcomes, not vanity metrics. Our strategies are designed to increase qualified leads, conversions, and overall ROI. Everything we do is data-driven and aligned with your business goals.
              </p>
            </div>

            <div className="faq-item">
              <h3>2. Which platforms do you specialize in?</h3>
              <p>
                We work across high-performing platforms including Google (Search, Display & YouTube Ads), Meta (Facebook & Instagram), SEO for organic growth, and LinkedIn for B2B marketing. We choose platforms based on where your audience converts best.
              </p>
            </div>

            <div className="faq-item">
              <h3>3. Can you guarantee results?</h3>
              <p>
                No genuine agency guarantees exact results. However, we guarantee transparent reporting, continuous optimization, and proven strategies to deliver consistent and scalable growth.
              </p>
            </div>

            <div className="faq-item">
              <h3>4. How soon can I expect leads or sales?</h3>
              <p>
                Paid Ads: 6-15 days for initial leads.
                SEO: 4-6 months for sustainable growth.
                Social Media: 3-8 weeks for engagement and visibility.
                We combine short-term wins with long-term strategies.
              </p>
            </div>

            <div className="faq-item">
              <h3>5. Why should I choose your agency over others?</h3>
              <p>
                We focus on ROI, not just reach. You get personalized strategies, clear communication, and performance-based execution. We work closely with businesses to ensure real, measurable growth.
              </p>
            </div>

            <div className="faq-item">
              <h3>6. How do you measure success in marketing campaigns?</h3>
              <p>
                We track key performance indicators such as website traffic, leads, conversions, ROI, and engagement. You’ll receive regular reports with actionable insights and progress updates.
              </p>
            </div>

          </div>

          <div className="faq-cta">
            <p>Still have questions? Let's discuss your business goals.</p>
            <button>Contact Us</button>
          </div>

        </section>

      </div>
    </>
  );
};

export default Services;