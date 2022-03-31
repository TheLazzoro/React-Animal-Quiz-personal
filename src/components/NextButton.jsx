import React from "react";
import PropTypes from "prop-types";

const NextButton = ({ onNext }) => {
  return (
    <button id="btnNext" style={{display: "none"}} onClick={onNext} className="buttonNext fontGlobal">
      Next Animal
    </button>
  );
};

NextButton.propTypes = {
    onNext: PropTypes.func.isRequired,
};

export default NextButton;
