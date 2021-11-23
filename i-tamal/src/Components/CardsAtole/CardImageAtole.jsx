import React from "react";

const CardImage = ({ imgUrl }) => {
  return (
    <img 
      width="300px"
      height="180px"
      src={imgUrl}
      alt="atole"
    />
  );
};

export default CardImage;