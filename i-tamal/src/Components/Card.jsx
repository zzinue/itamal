// import React, { useState } from "react";
// import Atoles from "./Atoles";
import CardBody from "./Cards/CardBody";
import CardImage from "./Cards/CardImage";
import CardTitle from "./Cards/CardTitle";
import PrimaryButton from "./Buttons/PrimaryButton";

const Card = ({ title = "Sin Título", imgUrl, text, linkBtn }) => {

//   const [oaxaqueno, setOaxaqueno] = useState(false)


  return (
    <div className="card" style={{ width: "10rem" }}>
      <CardTitle title={title} />
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        {/* <button>Hoja de Maiz</button>
        <button>Hoja de plátano</button> */}
        <CardBody text={text} />
        <PrimaryButton link={linkBtn} text="Agregar" />
      </div>
    </div>
  );
};

export default Card;