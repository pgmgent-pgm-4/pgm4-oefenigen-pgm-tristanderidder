import React, { useState } from 'react'
import Light from './Light'
import Dimmer from './Dimmer'


export default function DimmedLight() {
    const [dimPercentage, setdimPercentage] = useState(100);

  return (
    <div>
        <Light dimPercentage={dimPercentage}/>
          <Dimmer 
            dimPercentage={dimPercentage}
            setdimPercentage={setdimPercentage}
          />
    </div>
  )
}
