import React, { useState, useEffect } from "react"
import fetchItems from "../Services/fetchItems"
import Card from "./Card";



const Tamales = () => {

  const [tamales, setTamales]= useState([]);
  
  useEffect(() => {
    setTamales(fetchItems)
    
   
  }, [])


  return (


    <div >
    {tamales.map(tamal=>{
      const {title,imgUrl,text,linkBtn}= tamal
      return <Card title={title} imgUrl={imgUrl} text={text} linkBtn={linkBtn} />
      
    })}
    </div>
  )

  
}


export default Tamales
