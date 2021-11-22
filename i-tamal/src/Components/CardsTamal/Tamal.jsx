import React, { useState, useEffect } from "react"
import fetchItemsTamales from "../../Services/fetchItemsTamales";
import Card from "./Tamales";

const Tamales = () => {

  const [tamales, setTamales]= useState([]);
  
  useEffect(() => {
    setTamales(fetchItemsTamales) 
  }, []);


  return (
    <div>
      {tamales.map(tamal => {
        const { title, imgUrl, text, linkBtn } = tamal
        
        return (
          <Card 
            title={title} 
            imgUrl={imgUrl} 
            text={text} 
            linkBtn={linkBtn} 
          />
        )
      })}
    </div>
  )
}


export default Tamales
