import React from "react";

const CardImage = ({imgUrl}) => {
  return (
    <img 
      width="300px"
      height="180px"
      src={imgUrl}
      alt="tamal"
    />
  );
};

export default CardImage;
