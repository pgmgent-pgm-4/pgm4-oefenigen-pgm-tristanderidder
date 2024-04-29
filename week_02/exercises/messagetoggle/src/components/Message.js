import React, { useState } from 'react'
import Button from '@mui/material/Button';

export default function Message() {
    const [showMessage, setMessage] = useState(false);
    const handleClickShow = () => {
        setMessage(true)
    };
    const handleClickHide = () => {
        setMessage(false)
    };
  return (
    <>
      
        <Button onClick={handleClickShow}>Show</Button>
        <Button onClick={handleClickHide}>Hide</Button>
        <div>{showMessage && <p>Message</p>}</div>
    </>
  )
}
