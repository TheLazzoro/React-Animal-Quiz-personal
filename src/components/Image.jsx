import React from "react";
import PropTypes from "prop-types";

const Image = ({ imageURL }) => {
  return (
    <div>
      <img id="imageToDisplay" className="image" src={imageURL} />
    </div>
  );
};

Image.propTypes = {};

export default Image;
