import React, { useState } from "react";
import CardImage from "./CardImageTamal";
import CardTitle from "./CardTitle/CardTitle";
import CardBody from "./CardBodyTamal";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import CounterTamales from '../CounterTamales';
// import ShoppingCar from "./ShoppingCar";
// import styles from "./style/CarShopping.module.scss";


const Card = ({ title, imgUrl, text, linkBtn, oferta=false, precio=20 }) => {

  const cardStyle = {
    border: "1px solid gray",
    margin: "5px",
    padding: "15px",
    minWidth: "300px",
    width: "10%",
    display: "inline-block",


  };

  const [oaxaqueno, setOaxaqueno] = useState(false)

  const precioFinal = precio + (oaxaqueno ? 10 : 0)

  return (
    <div style={cardStyle} className="card" >
      <CardImage imgUrl={imgUrl} />
      <div className="card-body">
        <CardTitle title={title} oferta={oferta} />
        <CardBody text={text} />
        <hr></hr>
        <button onClick={()=>setOaxaqueno(false)}>Hoja de Maiz</button>
        <button onClick={()=>setOaxaqueno(true)}>Hoja de plátano</button>
        <p>${precioFinal}</p>
        <CounterTamales title={title}/>
        <PrimaryButton link={linkBtn} text="Comprar" />
        

      </div>
    </div>
  );
};

export default Card;
