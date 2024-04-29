import React from 'react'

export default function Beer({beer}) {
  return (
    <div>
        <li>
            <h3>{beer.title} - {beer.alchool}</h3>
            <p>{beer.description}</p>
        </li>
    </div>
  )
}
