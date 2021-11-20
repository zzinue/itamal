import React, { useState, useEffect }from 'react'
import fetchItemsAtole from '../Services/fetchItems'
import Card from './Card';

const Atoles = () => {

  const [atoles, setAtoles]= useState([]);
  
  useEffect(() => {
    setAtoles(fetchItemsAtole)

  }, [])

  return (
    <div>
    {atoles.map(atole=>{
      const {title,imgUrl,text,linkBtn}= atole
      return <Card 
              title={title} 
              imgUrl={imgUrl} 
              text={text} 
              linkBtn={linkBtn} 
            />
      })}
    </div>
  )
}

export default Atoles
