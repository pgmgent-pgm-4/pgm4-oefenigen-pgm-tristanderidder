import React from 'react'
import { useState } from 'react'

export default function Switch() {
  const [showLights, setLights] = useState(document.body.style.backgroundColor = '#00');
  const handleClickShow = () => {
    setLights(document.body.style.backgroundColor = '#fff')
  };
  const handleClickHide = () => {
    setLights(document.body.style.backgroundColor = '#000')
  };
  return (
    <div>
      <button onClick={handleClickShow}>On</button>
      <button onClick={handleClickHide}>Off</button>
    </div>
  )
}
