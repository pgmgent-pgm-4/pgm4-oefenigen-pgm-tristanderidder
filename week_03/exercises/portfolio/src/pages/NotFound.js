import React from 'react'
import { Route, useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError();
  return (
    <div>Page not found - {error.status}</div>
  )
}
