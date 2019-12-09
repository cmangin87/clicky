import React from 'react';

const Image = ({ id, name, image, handleClickOnImage }) => {
  return (
    <img
      src={image}
      alt={name}
      className="img-fluid w-100 h-50"
      onClick={() => handleClickOnImage(id)}
    />
  );
};

export default Image;
