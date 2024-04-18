import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Popup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => {
    onClose();
    setIsVisible(false); // Hide the popup
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleProceed = () => {
    if (!isChecked) {
      setIsVisible(false); // Hide the popup when checkbox is unchecked
    }
  };

  return (
    <>
      {isVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Important Notice</h2>
            <p>Please take a moment to read our terms and conditions before proceeding.</p>
            <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
              I have read and accept the terms and conditions.
            </label>
            <div className="popup-buttons">
              <button onClick={handleClose}>Close</button>
              <NavLink to="/terms">
                <button onClick={handleProceed}>Proceed</button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
    
