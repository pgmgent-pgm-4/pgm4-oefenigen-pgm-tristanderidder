import React from 'react'
import './light.css'

export default function Light({dimPercentage}) {
  return (
    <div className='light' style={{ backgroundColor: `hsl(60, 100%, 50%, ${dimPercentage})`}}></div>
  )
}
