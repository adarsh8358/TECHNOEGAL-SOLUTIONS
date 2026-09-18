import React from "react";
import "./Contact.scss";
import "./Responsive.scss";
import Breadcrumb from "../../components/Breadcrumb";

const Contact = () => {
  return (
    <>


      <div className="contact-page">

        {/* HERO */}
        <div className="contact-hero">
          <div className="overlay">
            <h1>
              Contact <span>Us</span>
            </h1>
            <p>
              Let’s discuss how we can grow your business with powerful digital solutions.
            </p>
          </div>
        </div>

        <hr />
        <Breadcrumb />

        {/* INTRO */}
        <section className="contact-intro">
          <div className="intro-content">
            <h2>Get In Touch</h2>
            <p>
              Have a project in mind? Fill out the form or contact us directly — we’re here to help you grow.
            </p>
          </div>
        </section>

        <hr />

        <section className="contact-section">

          <h2 className="section-heading">
            Contact <span>Us</span>
          </h2>

          <div className="contact-container">

            {/* LEFT - INFO */}
            <div className="contact-info">

              <div className="info-box">
                <h3>📍 Location</h3>
                <a
                  href="https://www.google.com/maps?q=24, Maple High Street, Narmadapuram Road, Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maple High Street,<br />
                  Narmadapuram Road, Bhopal,<br /> Madhya Pradesh, India - 462026
                </a>
              </div>

              <div className="info-box">
                <h3>📞 Phone</h3>
                <a href="tel:+918962820388">
                  +91 8962820388
                </a>
              </div>

              <div className="info-box">
                <h3>📧 Email</h3>
                <a href="mailto:contact@technoegal.com">
                  contact@technoegal.com
                </a>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="contact-form">

              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Your Phone" />
                <textarea placeholder="Your Message" rows="4"></textarea>

                <button type="submit">Send Message</button>
              </form>

            </div>

          </div>

          {/* GOOGLE MAP */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.677600186757!2d77.45202607430697!3d23.181964110363214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e9131afdbd%3A0x33286b10ee89dc9c!2sMaple%20High%20Street!5e0!3m2!1sen!2sin!4v1789729232270!5m2!1sen!2sin"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Technoegal Solutions Location"
            ></iframe>
          </div>

        </section>

      </div>
    </>
  );
};

export default Contact;