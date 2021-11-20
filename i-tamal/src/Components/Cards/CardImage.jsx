import React from "react";

const CardImage = ({imgUrl}) => {

  return (
    <img
      src={imgUrl}
      className="card-img-top"
      alt="atole"
    />
  );
};

export default CardImage;