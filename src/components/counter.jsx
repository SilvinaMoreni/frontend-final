import React from 'react'
import React, { useState } from 'react';

const counter = () => {
  const [counter, setCounter] = useState(0)
    
  const comprar = ()=>{
      if(counter!=stock){
          setCounter(counter+1)
      }
      
  }
  const noComprar = ()=>{
      if(counter!=0){
          setCounter(counter-1)
      }
  }

return (
  <>
      {
          counter ===0
          ?
          <button onClick={comprar}>Comprar</button>
          :
          <div>
              <button onClick={noComprar}>-</button>
              <span> {counter}</span>
              <button onClick={comprar}>+</button>
          </div>

      }
      
  </>

)
}


export default counter