import React, { useState, useEffect } from 'react'
import StudentSearchForm from './StudentSearchForm'
import StudentList from './StudentList'

export default function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const searchStudents = students.filter((student) => {
      student.firstName.toLowerCase().includes(search.toLowerCase()) || student.lastName.toLowerCase().includes(search.toLowerCase());
    });
    setStudents(students);
  }, [students]);
  return (
    <div>
      <StudentSearchForm
        students={students}
        setStudents={setStudents}
        search={search}
        setSearch={setSearch}
      />
      <StudentList />
    </div>
  )
}
