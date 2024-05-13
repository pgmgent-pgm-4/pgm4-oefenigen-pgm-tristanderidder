import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div>
            <h1>User Auth</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
