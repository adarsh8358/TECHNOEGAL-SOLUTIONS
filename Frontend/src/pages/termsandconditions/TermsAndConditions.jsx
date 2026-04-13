import React from "react";
import "./TermsAndConditions.scss";
import "./Responsive.scss";
import Breadcrumb from "../../components/Breadcrumb";

const TermsAndConditions = () => {
  return (
    <>
      <Breadcrumb />

      <section className="terms-page">

        <h1>Terms & Conditions</h1>

        <p className="last-updated">Last Updated: 2026</p>

        <div className="terms-content">

          <h2>1. Introduction</h2>
          <p>
            Welcome to Technoegal Solutions Pvt. Ltd. By accessing or using our
            website and services, you agree to comply with and be bound by these
            Terms and Conditions.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide digital marketing, website development, and related services.
            All services are subject to agreed project scope, timelines, and payment terms.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You agree to provide accurate information and use our services only for
            lawful purposes. Any misuse of our services is strictly prohibited.
          </p>

          <h2>4. Payments & Refunds</h2>
          <p>
            Payments must be made as per agreed terms. Due to the nature of digital
            services, refunds are not guaranteed and depend on project stage and agreement.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, designs, and materials created by us remain our intellectual
            property unless otherwise agreed in writing.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            We are not liable for any direct or indirect damages arising from the use
            of our services or website.
          </p>

          <h2>7. Third-Party Tools</h2>
          <p>
            We may use third-party platforms such as Google, Meta, or analytics tools.
            We are not responsible for their policies or changes.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate services if terms are violated or payments
            are not fulfilled.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of our
            services means you accept the updated terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions regarding these terms, please contact us at:
            <br />
            Email: info@technoegal.com
          </p>

        </div>

      </section>
    </>
  );
};

export default TermsAndConditions;