import React from 'react'
import Contacts from '../Contacts'
import { NavLink, Link, Routes, Route } from 'react-router-dom'
function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}

export default Home