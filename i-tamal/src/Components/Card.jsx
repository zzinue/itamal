import React, { useState } from "react";
import CardImage from "./Card/CardImage";
import CardTitle from "./Card/CardTitle/CardTitle";
import CardBody from "./Card/CardBody";
import PrimaryButton from "./Buttons/PrimaryButton/PrimaryButton";
import ShoppingCar from "./ShoppingCar";
import styles from "./style/CarShopping.module.scss";


const Card = ({ title = "Sin Título", imgUrl, text, linkBtn, oferta=false, precio=20 }) => {

  const cardStyle = {
    border: "1px solid gray",
    margin: "5px",
    padding: "15px",
    minWidth: "300px",
    width: "20%",
    display: "inline-block",


  };

  const [oaxaqueno, setOaxaqueno] = useState(false)

  const precioFinal = precio + (oaxaqueno ? 10 : 0)

  return (
    <div style={cardStyle} className="card" >
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} oferta={oferta} />
        <p>{precioFinal}</p>
        <button onClick={()=>setOaxaqueno(false)}>Hoja de Maiz</button>
        <button onClick={()=>setOaxaqueno(true)}>Hoja de plátano</button>
        <CardBody text={text} />
        <PrimaryButton link={linkBtn} text="Comprar" />
      </div>
    </div>
  );
};

export default Card;
