import "./Footer.scss";
import { Link } from "react-router-dom";
import SubLogo from "../assets/logo/SubLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <Link to='https://technoegal.com/'  className="logo">
            {/* TECHNO<span>EGAL</span> */}
            <img
              height={90}
              // width={230}
              src={SubLogo} alt="TECHNOEGAL" />
          </Link>

          <p>
            Grow your business with powerful digital marketing solutions.
            We help brands scale beyond limits.
          </p>

          <div className="socials">

            <a href="https://www.linkedin.com/in/technoegal-solutions-a20151403" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-fill"></i>
            </a>

            <a href="https://www.instagram.com/technoegal/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61576482046065" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-fill"></i>
            </a>

            <a href="https://x.com/technoegal" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-x-line"></i>
            </a>

          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Web Design</li>
            <li>SEO</li>
            <li>PPC</li>
            <li>SMM</li>
            <li>SMO</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <ul className="contact">

            <li>
              <i className="ri-map-pin-line"></i>
              <a
                href="https://www.google.com/maps?q=24, Maple High Street, Narmadapuram Road, Bhopal, Madhya Pradesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                24, 1st Floor, Maple High Street<br />
                Narmadapuram Road, Bhopal,<br />
                Madhya Pradesh, India - 462026
              </a>
            </li>

            <li>
              <i className="ri-phone-line"></i>
              <a href="tel:+918962820388">
                +91 8962820388
              </a>
            </li>

            <li>
              <i className="ri-mail-line"></i>
              <a href="mailto:contact@technoegal.com">
                contact@technoegal.com
              </a>
            </li>

            <li>
              <i className="ri-time-line"></i>
              <span>Mon-Sat: 10AM - 7PM</span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 TECHNOEGAL. All Rights Reserved.</p>
        <div>
          <span>Privacy Policy</span> | <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;