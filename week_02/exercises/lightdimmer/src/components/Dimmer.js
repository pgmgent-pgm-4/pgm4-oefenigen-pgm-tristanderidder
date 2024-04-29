import React from 'react'

export default function Dimmer({ dimPercentage, setdimPercentage }) {
    const handleChangeRange = (e) => {
        setdimPercentage(e.target.value)
    }
  return (
    <div>
        <input type='range' min="0" max="100" step="1" value={dimPercentage} onChange={handleChangeRange}/>
        <label htmlFor='dimmer'>Dimmer</label>
    </div>
  )
}
