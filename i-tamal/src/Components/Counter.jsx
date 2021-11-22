import React, { useState } from "react"
import Card from './Card';


const CounterTamales = ({title}) => {

    const [valueTamales, setValueTamales]=useState(0)



    const handleMinusTamales=()=> setValueTamales (valueTamales-1)
    const handleAddTamales=()=> setValueTamales (valueTamales+1)
    const handleResetTamales= ()=> setValueTamales(0)


     const colorLabelTamal= valueTamales <1 ? 'red': valueTamales<=3 ? 'orange':'green'
    const labelTamal= valueTamales<1 ? 0: valueTamales
    const equalToDisabled= labelTamal===0
    
    return (
        <div>
            <div>
                <h2>
                    {title}
                </h2>
            </div>
           <button disabled={equalToDisabled} onClick={handleMinusTamales}>-</button>
            <span style={{color:colorLabelTamal}}>{labelTamal}</span>
           <button onClick={handleAddTamales}>+</button>
           <div>
               <button onClick={handleResetTamales}>Reset</button>

           </div>
        
        </div>
    )
}

export default CounterTamales
