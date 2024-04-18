import React, { useState } from 'react';

const Popup = ({ onClose, onProceed }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => {
    onClose();
  };

  const handleProceed = () => {
    if (isChecked) {
      onProceed();
    } else {
      alert("Please read and accept the terms and conditions before proceeding.");
    }
  };

  return (
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
          <button onClick={handleProceed}>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
