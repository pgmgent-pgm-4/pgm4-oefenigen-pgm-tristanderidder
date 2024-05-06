import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import students from '../data/studentData';
import DetailStudent from '../components/DetailStudent';

export default function Detail() {
  const { studentId } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const newStudent = students.filter((student) => student.id === studentId);
    setStudent(newStudent[0]);
  }, [students]);

  return (
    <div>
      {student && <DetailStudent student={student} />}
    </div>
  )
}
