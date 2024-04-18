import React from 'react';
import { NavLink } from "react-router-dom";

const Popup = ({ onClose }) => {

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Important Notice</h2>
        <p>Please take a moment to read our terms and conditions before proceeding.</p>
        <label>
          <input type="checkbox" />
          I have read and accept the terms and conditions.
        </label>
        <div className="popup-buttons">
          <NavLink to="/menu>
          <button>Close</button>
          </NavLink>
          <NavLink to="/terms>
          <button>Proceed</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Popup;
    
