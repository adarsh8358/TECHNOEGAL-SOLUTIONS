import "./PrivacyPolicy.scss";
import "./Responsive.scss";
import Breadcrumb from "../../components/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb />

      <section className="policy-page">

        <h1>Privacy Policy</h1>

        <p className="last-updated">Last Updated: 2026</p>

        <div className="policy-content">

          <h2>1. Introduction</h2>
          <p>
            Technoegal Solutions Pvt. Ltd. is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address,
            phone number, and any details you provide through our contact forms.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information to provide services, improve our website,
            communicate with you, and deliver relevant marketing content.
          </p>

          <h2>4. Cookies & Tracking</h2>
          <p>
            Our website may use cookies and analytics tools to understand user behavior
            and enhance your browsing experience.
          </p>

          <h2>5. Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal data
            from unauthorized access, alteration, or disclosure.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We may use third-party tools such as Google Analytics and advertising platforms
            to improve our services and marketing efforts.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your personal data.
            You can contact us for any privacy-related concerns.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: info@technoegal.com
          </p>

        </div>

      </section>
    </>
  );
};

export default PrivacyPolicy;