import React from 'react'
import { Link } from 'react-router-dom';

export default function DetailStudent({ student }) {
    return (
        <div>
                <img src={student.picture.large} alt={student.firstName} />
                <h3>{student.firstName} {student.lastName}</h3>
        </div>
    )
}
