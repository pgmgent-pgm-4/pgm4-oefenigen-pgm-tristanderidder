import React, { useState } from 'react'
import Logins from '../components/Logins'

export default function Login() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  })
  return (
    <div>
      <Logins newUser={newUser} setNewUser={setNewUser} />
    </div>
  )
}
