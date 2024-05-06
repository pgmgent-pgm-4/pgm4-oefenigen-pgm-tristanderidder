import React from 'react'
import { Link } from 'react-router-dom';

export default function Student({ student }) {
  return (
    <div>
      <Link to={`/detail/${student.id}`} key={student.id}>
        <img src={student.picture.medium} alt={student.firstName} />
        <h3>{student.firstName} {student.lastName}</h3>
      </Link>
    </div>
  )
}
