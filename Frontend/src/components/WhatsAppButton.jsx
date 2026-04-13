import React from "react";
import './WhatsAppButton.scss';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918962820388?text=Hello%20Technoegal,%20I%20want%20to%20know%20more%20about%20your%20services."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;