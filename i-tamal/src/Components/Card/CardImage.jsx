import React from "react";

const CardImage = ({imgUrl}) => {
  return (
    <img width="200px"
      src={imgUrl}
      className="card-img-top"
      alt="tamal"
    />
  );
};

export default CardImage;
