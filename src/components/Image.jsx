import React from "react";
import PropTypes from "prop-types";

const Image = ({ image }) => {
  return (
    <div>
      <img src={image} />
    </div>
  );
};

Image.propTypes = {};

export default Image;
