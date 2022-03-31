import React from "react";
import PropTypes from "prop-types";

const AnimalButton = ({ animal, index, onClick }) => {
  return (
    <button id={"btn"+index} onClick={() => onClick(index)} className="buttonAnimal fontGlobal">
      {animal.name}
    </button>
  );
};

AnimalButton.propTypes = {
  animal: PropTypes.object,
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default AnimalButton;
