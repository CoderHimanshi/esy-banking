import React from 'react'
import {NavLink} from 'react-router-dom'


const Error = () => {
    return (
        <>
        <div className="notfound">
            <h3>Page Not Found</h3>
            <h1>404</h1>
            <h2>We are sorry, Page not found </h2>
            <NavLink className="navbar-brand" to="/">Back To HomePage</NavLink>
        </div>
        </>
    )
}

export default Error