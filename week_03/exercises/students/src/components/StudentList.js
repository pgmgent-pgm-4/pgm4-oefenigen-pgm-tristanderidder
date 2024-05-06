import React from 'react'
import Student from './Student';
import students from '../data/studentData';

export default function StudentList() {
    return (
        <div>
            <h2>Students</h2>
            {students.map((student) => (
                <Student student={student} key={student.id} />
            ))}
        </div>
    )
}
