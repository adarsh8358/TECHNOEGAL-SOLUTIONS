import React from "react";
import "./GoogleForm.scss";

const GoogleForm = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="form-popup">

      <div className="form-overlay" onClick={() => setOpen(false)}></div>

      <div className="form-container">
        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScQ7077GWJGJK9Gxzc85hdPk9mWL8kErz-Ufyk5YpAuorlrAw/viewform?embedded=true"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>

    </div>
  );
};

export default GoogleForm;